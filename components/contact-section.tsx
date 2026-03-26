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
  EMAIL_INVALID: "Email invalide.",
  SUBJECT_INVALID: "Sujet invalide.",
  MESSAGE_INVALID: "Message invalide.",
  RESEND_NOT_CONFIGURED: "Le formulaire n’est pas encore configuré.",
  EMAIL_SEND_FAILED: "L’envoi a échoué.",
  CONTACT_ROUTE_FAILED: "L’envoi a échoué.",
  REQUEST_FAILED: "Impossible d’envoyer le message.",
};

function getErrorMessage(error: string) {
  return ERROR_MESSAGES[error] || "Impossible d’envoyer le message.";
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
      setError("Tous les champs sont requis.");
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
      setSuccess("Message envoyé.");
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
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tighter2 text-ink sm:text-4xl">
          Travaillons ensemble
        </h2>
        <p className="mt-6 text-base leading-8 text-muted">
          Décris le contexte, le sujet et le besoin directement ici.
        </p>
      </div>

      <div className="rounded-[24px] border border-line bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_30px_rgba(15,23,42,0.04)] sm:p-8">
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
              Sujet
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
              {isLoading ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
