import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, MonitorPlay, Film, Mic2, Globe2, Languages, Accessibility, GraduationCap, Sparkles, MoveRight } from "lucide-react";
import { Section, SectionHeader, Eyebrow, FadeUp } from "@/components/site/primitives";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Services — GravEiens" },
      { name: "description", content: "Educational content, eLearning, multimedia, assessments, localization, accessibility and more from GravEiens." },
      { property: "og:title", content: "Services — GravEiens" },
      { property: "og:description", content: "Comprehensive educational outsourcing and digital learning services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: BookOpen, title: "Educational Content Development", desc: "Curriculum-aligned learning content across K-12, higher education and corporate training." },
  { icon: ClipboardCheck, title: "Assessment Development", desc: "Item authoring, psychometrics, item banks and adaptive assessments at scale." },
  { icon: MonitorPlay, title: "eLearning Solutions", desc: "SCORM, xAPI and HTML5 courseware built for modern LMS environments." },
  { icon: Film, title: "2D & 3D Animation", desc: "Explainers, character animation and immersive learning visuals." },
  { icon: Mic2, title: "Audio & Video Production", desc: "Studio-grade lectures, podcasts and multimedia storytelling." },
  { icon: Globe2, title: "Website Development", desc: "Educational portals, LMS integrations and product experiences." },
  { icon: Languages, title: "Localization & Translation", desc: "Multi-language adaptation across 40+ locales with cultural nuance." },
  { icon: Accessibility, title: "Accessibility & Alt Text", desc: "WCAG-compliant remediation, alt text and inclusive design." },
  { icon: GraduationCap, title: "Online Tutoring Support", desc: "Backend academic support, subject specialists and mentoring." },
  { icon: Sparkles, title: "Skill Development", desc: "Job-ready programs, workforce training and micro-credentials." },
];

function ServicesPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-10 pt-24 sm:pt-32">
        <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-[-20%] rounded-full bg-accent/30 blur-[120px]" />
        
        <div className="max-w-3xl">
          <FadeUp>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              End-to-end <br />
              <span className="text-gradient-brand">educational solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              From strategy and content to multimedia, technology and delivery — GravEiens
              provides every capability educational organizations need under one roof.
            </p>
          </FadeUp>
        </div>
      </Section>

      <Section className="pt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.03}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-hairline bg-white/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-white">
                <div>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white ring-1 ring-accent">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-8 font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{s.desc}</p>
                </div>
                
                <div className="mt-8 flex items-center text-sm font-semibold text-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Learn more</span>
                  <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section className="pt-24">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-surface px-8 py-20 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">Ready to scope your project?</h2>
              <p className="mt-5 text-lg text-ink-muted">
                Tell us what you're building. Our solutions architects will respond within 24 hours with a customized approach.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-brand hover:shadow-lg hover:shadow-brand/25">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
