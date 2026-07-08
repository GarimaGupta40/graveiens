import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow, FadeUp } from "@/components/site/primitives";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GravEiens" },
      { name: "description", content: "Contact GravEiens to discuss educational content, eLearning, multimedia and digital learning projects." },
      { property: "og:title", content: "Contact — GravEiens" },
      { property: "og:description", content: "Start a conversation with GravEiens." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Let's start a <span className="text-gradient-brand">conversation</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Share a few details and we'll get back within one business day.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { Icon: Mail, label: "Email", value: "info@graveiens.com" },
              { Icon: Phone, label: "Phone", value: "+91 000 000 0000" },
              { Icon: MapPin, label: "Global", value: "Serving clients worldwide" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-hairline bg-white p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-ink-muted">{label}</div>
                  <div className="text-sm font-semibold text-ink">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <FadeUp>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-hairline bg-white p-8 shadow-card"
          >
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-brand">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="font-display text-2xl font-bold text-ink">Thanks — we'll be in touch</h3>
                <p className="text-sm text-ink-muted">Our team will respond within one business day.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <Field label="Full name" name="name" placeholder="Jane Cooper" required />
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                <Field label="Company" name="company" placeholder="Acme Publishing" />
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    What can we help with?
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                    placeholder="Tell us about your project…"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-glow"
                >
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            )}
          </form>
        </FadeUp>
      </div>
    </Section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}
