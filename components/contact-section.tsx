"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { track } from "@/lib/track";

type ContactFormState = {
  name: string;
  email: string;
  activity: string;
  workflowProblem: string;
  toolsUsed: string;
  message: string;
};

const INITIAL_STATE: ContactFormState = {
  name: "",
  email: "",
  activity: "",
  workflowProblem: "",
  toolsUsed: "",
  message: "",
};

const ERROR_MESSAGES: Record<string, string> = {
  EMAIL_INVALID: "Invalid email.",
  NAME_INVALID: "Invalid name.",
  ACTIVITY_INVALID: "Invalid company or activity.",
  WORKFLOW_INVALID: "Describe the workflow problem in a little more detail.",
  TOOLS_INVALID: "Describe the tools currently used.",
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
    const name = form.name.trim();
    const activity = form.activity.trim();
    const workflowProblem = form.workflowProblem.trim();
    const toolsUsed = form.toolsUsed.trim();
    const message = form.message.trim();

    if (!name || !email || !activity || !workflowProblem || !toolsUsed || !message) {
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
          name,
          email,
          activity,
          workflowProblem,
          toolsUsed,
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
          Contact
        </h2>
        <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
          Reach out if your operations rely on scattered tools, manual follow-up or unclear ownership.
        </p>
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
          AnisConsult helps service businesses structure clearer workflows, internal tools and reporting systems.
        </p>
        <p className="mt-4 text-sm leading-6 text-muted">
          Tell me what workflow is currently hard to run, what tools you use, and what keeps breaking.
        </p>
      </div>

      <div className="premium-card p-6 sm:p-8">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={updateField("name")}
              className="field-input"
            />
          </div>

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
            <label className="text-sm font-medium text-ink" htmlFor="contact-activity">
              Company / activity
            </label>
            <input
              id="contact-activity"
              type="text"
              placeholder="Serviced residence, logistics operator, agency, clinic..."
              value={form.activity}
              onChange={updateField("activity")}
              className="field-input"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink" htmlFor="contact-workflow">
              Current workflow problem
            </label>
            <textarea
              id="contact-workflow"
              rows={4}
              placeholder="Example: guest issue follow-up, invoice chasing, mission tracking, weekly reporting..."
              value={form.workflowProblem}
              onChange={updateField("workflowProblem")}
              className="field-input resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink" htmlFor="contact-tools">
              Tools currently used
            </label>
            <textarea
              id="contact-tools"
              rows={3}
              placeholder="Example: Excel, WhatsApp, email, PMS, Notion, Airtable, accounting tool..."
              value={form.toolsUsed}
              onChange={updateField("toolsUsed")}
              className="field-input resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="What outcome would make the workflow easier to run?"
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
              {isLoading ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
