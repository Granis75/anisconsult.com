"use client";

import { useEffect, useState, type FormEvent } from "react";
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

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setError("");
    setSuccess("");
  };

  const openModal = () => {
    track("contact_modal_open", {
      location: "contact_section",
    });
    setIsOpen(true);
  };

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
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
        location: "contact_modal",
      });
      setForm(INITIAL_STATE);
      setSuccess("Message envoyé.");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Impossible d’envoyer le message."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button type="button" onClick={openModal} className="premium-cta">
        Contact
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            aria-label="Fermer"
            className="absolute inset-0 bg-[rgba(11,16,32,0.28)] backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative z-[81] w-full max-w-2xl rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[0_20px_80px_rgba(11,16,32,0.14)] sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Contact
              </p>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-[var(--line)] px-3 py-2 text-sm font-medium text-muted transition hover:border-slate-300 hover:text-ink"
              >
                Fermer
              </button>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-ink" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  className="field-input"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-ink" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="field-input"
                  value={form.subject}
                  onChange={(event) => updateField("subject", event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-ink" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  className="field-input resize-none"
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                />
              </div>

              {error ? (
                <p className="text-sm font-medium text-rose-600">{error}</p>
              ) : null}

              {success ? (
                <p className="text-sm font-medium text-emerald-600">{success}</p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" disabled={isLoading} className="premium-cta">
                  {isLoading ? "Envoi..." : "Envoyer"}
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="premium-cta-outline"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
