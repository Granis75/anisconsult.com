import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 120;
const MAX_SUBJECT_LENGTH = 160;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 10_000;

const recentSubmissions = new Map<string, number>();

type ContactPayload = {
  company?: unknown;
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function getStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(key: string, now: number) {
  for (const [entryKey, timestamp] of recentSubmissions) {
    if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
      recentSubmissions.delete(entryKey);
    }
  }

  const previousSubmission = recentSubmissions.get(key);

  if (previousSubmission && now - previousSubmission < RATE_LIMIT_WINDOW_MS) {
    return true;
  }

  recentSubmissions.set(key, now);
  return false;
}

function validatePayload(payload: ContactPayload) {
  const company = getStringValue(payload.company);
  const name = getStringValue(payload.name);
  const email = getStringValue(payload.email);
  const subject = getStringValue(payload.subject);
  const message = getStringValue(payload.message);

  if (company) {
    return {
      ok: true as const,
      spam: true as const,
      value: { company, name, email, subject, message },
    };
  }

  if (name.length > MAX_NAME_LENGTH) {
    return { ok: false as const, error: "NAME_INVALID" };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { ok: false as const, error: "EMAIL_INVALID" };
  }

  if (subject.length < 2 || subject.length > MAX_SUBJECT_LENGTH) {
    return { ok: false as const, error: "SUBJECT_INVALID" };
  }

  if (
    message.length < MIN_MESSAGE_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { ok: false as const, error: "MESSAGE_INVALID" };
  }

  return {
    ok: true as const,
    spam: false as const,
    value: { company, name, email, subject, message },
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch (error) {
    console.error("Contact route: invalid JSON payload", error);

    return NextResponse.json(
      { ok: false, error: "REQUEST_FAILED" },
      { status: 400 }
    );
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: validation.error },
      { status: 400 }
    );
  }

  if (validation.spam) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();

  if (!resendApiKey || !fromEmail || !toEmail) {
    console.error("Contact route: missing Resend configuration");

    return NextResponse.json(
      { ok: false, error: "RESEND_NOT_CONFIGURED" },
      { status: 500 }
    );
  }

  const { name, email, subject, message } = validation.value;
  const rateLimitKey = `${getClientIp(request)}:${email.toLowerCase()}`;

  if (isRateLimited(rateLimitKey, Date.now())) {
    return NextResponse.json(
      { ok: false, error: "RATE_LIMITED" },
      { status: 429 }
    );
  }

  const resend = new Resend(resendApiKey);
  const html = `
    <div style="font-family: Inter, Arial, sans-serif; color: #0b1020; line-height: 1.6;">
      ${name ? `<p><strong>Name</strong><br />${escapeHtml(name)}</p>` : ""}
      <p><strong>Email</strong><br />${escapeHtml(email)}</p>
      <p><strong>Subject</strong><br />${escapeHtml(subject)}</p>
      <p><strong>Message</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const text = [
    name ? `Name: ${name}` : "",
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text,
      html,
    });

    if (error) {
      console.error("Contact route: Resend send failed", error);

      return NextResponse.json(
        { ok: false, error: "EMAIL_SEND_FAILED" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route: unexpected send error", error);

    return NextResponse.json(
      { ok: false, error: "CONTACT_ROUTE_FAILED" },
      { status: 500 }
    );
  }
}
