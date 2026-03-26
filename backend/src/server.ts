import cors from "cors";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = Number(process.env.CONTACT_PORT || 8787);
const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const allowedOrigins = (process.env.CONTACT_ALLOWED_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const fromEmail =
  process.env.CONTACT_FROM_EMAIL || "AnisConsult <onboarding@resend.dev>";
const toEmail = process.env.CONTACT_TO_EMAIL || "anis.contactme@gmail.com";

type ContactPayload = {
  email?: string;
  subject?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : true,
    methods: ["POST", "OPTIONS"],
  })
);
app.use(express.json({ limit: "64kb" }));

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validatePayload(payload: ContactPayload) {
  const email = payload.email?.trim() || "";
  const subject = payload.subject?.trim() || "";
  const message = payload.message?.trim() || "";

  if (!EMAIL_REGEX.test(email)) {
    return { ok: false as const, error: "EMAIL_INVALID" };
  }

  if (subject.length < 2 || subject.length > 160) {
    return { ok: false as const, error: "SUBJECT_INVALID" };
  }

  if (message.length < 10 || message.length > 5000) {
    return { ok: false as const, error: "MESSAGE_INVALID" };
  }

  return {
    ok: true as const,
    value: { email, subject, message },
  };
}

app.post("/api/contact", async (request: Request, response: Response) => {
  const validation = validatePayload(request.body as ContactPayload);

  if (!validation.ok) {
    return response.status(400).json({
      ok: false,
      error: validation.error,
    });
  }

  if (!resend) {
    return response.status(500).json({
      ok: false,
      error: "RESEND_NOT_CONFIGURED",
    });
  }

  const { email, subject, message } = validation.value;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; color: #0b1020; line-height: 1.6;">
          <p><strong>Email</strong><br />${escapeHtml(email)}</p>
          <p><strong>Subject</strong><br />${escapeHtml(subject)}</p>
          <p><strong>Message</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return response.status(502).json({
        ok: false,
        error: "EMAIL_SEND_FAILED",
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return response.status(500).json({
      ok: false,
      error: "CONTACT_ROUTE_FAILED",
    });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://127.0.0.1:${port}`);
});
