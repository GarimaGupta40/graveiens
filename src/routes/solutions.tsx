import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, MonitorPlay, Film, Mic2, Globe2, Languages, Accessibility, GraduationCap, Sparkles, MoveRight } from "lucide-react";
import { Section, Eyebrow, FadeUp } from "@/components/site/primitives";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — GravEiens" },
      { name: "description", content: "Educational content, eLearning, multimedia, assessments, localization, accessibility and more from GravEiens." },
      { property: "og:title", content: "Solutions — GravEiens" },
      { property: "og:description", content: "Comprehensive educational outsourcing and digital learning services." },
    ],
  }),
  component: SolutionsPage,
});

const services = [
  { icon: BookOpen, title: "Educational Content Development", desc: "Curriculum-aligned learning content across K-12, higher education and corporate training. We build comprehensive learning paths that engage and inspire.", span: "col-span-1 md:col-span-2 lg:col-span-2" },
  { icon: ClipboardCheck, title: "Assessment Development", desc: "Item authoring, psychometrics, item banks and adaptive assessments at scale.", span: "col-span-1" },
  { icon: MonitorPlay, title: "eLearning Solutions", desc: "SCORM, xAPI and HTML5 courseware built for modern LMS environments.", span: "col-span-1" },
  { icon: Film, title: "2D & 3D Animation", desc: "Explainers, character animation and immersive learning visuals.", span: "col-span-1 md:col-span-2 lg:col-span-1" },
  { icon: Mic2, title: "Audio & Video Production", desc: "Studio-grade lectures, podcasts and multimedia storytelling.", span: "col-span-1" },
  { icon: Globe2, title: "Website Development", desc: "Educational portals, LMS integrations and product experiences.", span: "col-span-1 md:col-span-2 lg:col-span-2" },
  { icon: Languages, title: "Localization & Translation", desc: "Multi-language adaptation across 40+ locales with cultural nuance.", span: "col-span-1" },
  { icon: Accessibility, title: "Accessibility & Alt Text", desc: "WCAG-compliant remediation, alt text and inclusive design.", span: "col-span-1" },
  { icon: GraduationCap, title: "Online Tutoring Support", desc: "Backend academic support, subject specialists and mentoring.", span: "col-span-1" },
  { icon: Sparkles, title: "Skill Development", desc: "Job-ready programs, workforce training and micro-credentials.", span: "col-span-1 md:col-span-3 lg:col-span-4" },
];

function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
        <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-brand/20 to-transparent blur-[120px] opacity-70" />
        
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <Eyebrow className="mx-auto">Our Solutions</Eyebrow>
            <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl lg:text-8xl">
              Next-generation <br className="hidden sm:block" />
              <span className="text-gradient-brand">learning experiences</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              From strategy and content to multimedia, technology and delivery — GravEiens
              provides every capability educational organizations need under one roof.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* Bento Grid Section */}
      <Section className="pb-24 pt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.05} className={s.span}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-hairline bg-surface/50 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] hover:bg-white/80">
                {/* Background ambient glow on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div>
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-hairline transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:ring-brand">
                    <s.icon className="h-7 w-7 text-brand transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">{s.desc}</p>
                </div>
                
                <div className="mt-10 flex items-center text-sm font-bold text-brand transition-all duration-300">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Learn more</span>
                    <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">Learn more</span>
                  </span>
                  <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-32 pt-10">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[3rem] bg-ink px-6 py-24 text-center sm:px-16">
            <div className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
            <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[100px]" />
            
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">Ready to scope your project?</h2>
              <p className="mt-6 text-xl text-white/70">
                Tell us what you're building. Our solutions architects will respond within 24 hours with a customized approach.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="inline-flex h-14 items-center gap-3 rounded-full bg-brand px-10 text-base font-bold text-white transition-all hover:scale-105 hover:bg-brand/90 hover:shadow-xl hover:shadow-brand/30">
                  Get in Touch <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/about" className="inline-flex h-14 items-center gap-3 rounded-full bg-white/10 px-10 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                  Learn about us
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
