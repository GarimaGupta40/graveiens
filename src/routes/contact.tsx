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
    <>
      {/* Contact Hero Section */}
      <Section className="relative overflow-hidden bg-charcoal pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.45),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Let's start a <span className="bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#5EEAD4] bg-clip-text text-transparent">conversation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Share a few details about your project, and our educational architects will get back to you within one business day.
          </p>
        </div>
      </Section>

      {/* Contact Content */}
      <Section className="py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <FadeUp>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline/50 shadow-elegant group mb-10 hidden lg:block">
              <img 
                src="/about_global_1783501584487.png" 
                alt="Global Network" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none" />
            </div>
            <div className="space-y-4">
              {[
                { Icon: Mail, label: "Email", value: "info@graveiens.com" },
                { Icon: Phone, label: "Phone", value: "+91 000 000 0000" },
                { Icon: MapPin, label: "Global", value: "Serving clients worldwide" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-5 rounded-2xl border border-hairline bg-surface-alt p-5 transition-all hover:border-brand/30 hover:bg-white hover:shadow-hover">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-muted">{label}</div>
                    <div className="mt-1 font-display text-base font-semibold text-ink">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-hairline bg-white p-8 shadow-card lg:p-12"
            >
              {sent ? (
                <div className="flex flex-col items-center gap-3 py-16 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-brand">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold text-ink">Thanks — we'll be in touch!</h3>
                  <p className="mt-2 text-base text-ink-muted">Our team will review your inquiry and respond within one business day.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-ink mb-2">Send us a message</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="First name" name="firstName" placeholder="Jane" required />
                    <Field label="Last name" name="lastName" placeholder="Cooper" required />
                  </div>
                  <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                  <Field label="Company" name="company" placeholder="Acme Publishing" />
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                      What can we help with?
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-xl border border-hairline bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-bold text-white transition-all hover:scale-[1.02] hover:bg-brand/90 hover:shadow-xl hover:shadow-brand/30"
                  >
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              )}
            </form>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-hairline bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}
