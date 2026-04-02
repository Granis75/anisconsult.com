"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { track } from "@/lib/track";

type ContactFormState = {
  email: string;
  subject: string;
  message: string;
};

const INITIAL_STATE: ContactFormState = {
  email: "",
  subject: "",
  message: "",
};

const ERROR_MESSAGES: Record<string, string> = {
  EMAIL_INVALID: "Invalid email.",
  SUBJECT_INVALID: "Invalid subject.",
  MESSAGE_INVALID: "Invalid message.",
  RESEND_NOT_CONFIGURED: "The form is not configured yet.",
  EMAIL_SEND_FAILED: "Sending failed.",
  CONTACT_ROUTE_FAILED: "Sending failed.",
  REQUEST_FAILED: "Unable to send the message.",
};

function getErrorMessage(error: string) {
  return ERROR_MESSAGES[error] || "Unable to send the message.";
}

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const updateField =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!email || !subject || !message) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        throw new Error(payload?.error || "REQUEST_FAILED");
      }

      track("contact_form_submit", {
        location: "contact_section",
      });

      setForm(INITIAL_STATE);
      setSuccess("Message sent.");
    } catch (submitError) {
      setError(
        getErrorMessage(
          submitError instanceof Error ? submitError.message : "REQUEST_FAILED"
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.85rem]">
          Bring the workflow that needs structure.
        </h2>
        <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
          If operations, CRM, invoicing or payment follow-up feel fragmented,
          send a short note. I will reply with a practical next step.
        </p>

        <div className="mt-8 grid gap-3">
          {[
            "Workflow structure is unclear.",
            "Billing sits too far from execution.",
            "Visibility still depends on manual tracking.",
          ].map((item) => (
            <div key={item} className="border-t border-black/8 pt-3.5">
              <p className="text-sm leading-7 text-ink/76">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="premium-card p-6 sm:p-8">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-ink" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={updateField("email")}
              className="field-input"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink" htmlFor="contact-subject">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              value={form.subject}
              onChange={updateField("subject")}
              className="field-input"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={7}
              value={form.message}
              onChange={updateField("message")}
              className="field-input resize-none"
            />
          </div>

          {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}
          {success ? (
            <p className="text-sm font-medium text-emerald-600">{success}</p>
          ) : null}

          <div className="pt-2">
            <button type="submit" disabled={isLoading} className="premium-cta w-full sm:w-auto">
              {isLoading ? "Sending..." : "Start the conversation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
