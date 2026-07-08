import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, MonitorPlay, Film, Mic2, Globe2, Languages, Accessibility, GraduationCap, Sparkles, MoveRight } from "lucide-react";
import { Section, Eyebrow, FadeUp } from "@/components/site/primitives";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Services — GravEiens" },
      { name: "description", content: "Educational content, eLearning, multimedia, assessments, localization, accessibility and more from GravEiens." },
      { property: "og:title", content: "Services — GravEiens" },
      { property: "og:description", content: "Comprehensive educational outsourcing and digital learning services." },
    ],
  }),
  component: SolutionsPage,
});

const serviceCategories = [
  {
    title: "Content & Curriculum",
    desc: "From foundational K-12 learning materials to complex adaptive assessments, we build educational content that engages learners and measures outcomes.",
    image: "/solutions_content_1783501603022.png",
    services: [
      { icon: BookOpen, title: "Educational Content Development", desc: "Curriculum-aligned learning paths across K-12, higher ed and corporate training." },
      { icon: ClipboardCheck, title: "Assessment Development", desc: "Item authoring, psychometrics, item banks and adaptive assessments at scale." }
    ]
  },
  {
    title: "Multimedia & Interactive",
    desc: "Bring learning to life with immersive digital experiences, high-fidelity animations, and interactive eLearning courseware.",
    image: "/solutions_multimedia_1783501611492.png",
    services: [
      { icon: MonitorPlay, title: "eLearning Solutions", desc: "SCORM, xAPI and HTML5 interactive courseware built for modern LMS environments." },
      { icon: Film, title: "2D & 3D Animation", desc: "Explainers, character animation and immersive learning visuals." },
      { icon: Mic2, title: "Audio & Video Production", desc: "Studio-grade lectures, podcasts and multimedia storytelling." }
    ],
    reverse: true
  },
  {
    title: "Technology & Delivery",
    desc: "Scale your educational products globally with robust portals, seamless localizations, and WCAG-compliant accessible designs.",
    image: "/solutions_tech_1783501623079.png",
    services: [
      { icon: Globe2, title: "Website & Portal Development", desc: "Educational platforms, seamless LMS integrations and robust product experiences." },
      { icon: Languages, title: "Localization & Translation", desc: "Multi-language adaptation across 40+ locales with cultural nuance." },
      { icon: Accessibility, title: "Accessibility & Alt Text", desc: "WCAG 2.2 AA compliant remediation, detailed alt text and inclusive design." },
      { icon: GraduationCap, title: "Support & Mentoring", desc: "Online tutoring, skill development programs, and backend academic support." }
    ]
  }
];

function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-charcoal pt-32 pb-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
        <div className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.45),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-4xl text-center z-10">
          <FadeUp>
            <Eyebrow className="mx-auto text-white/80 border-white/20">Our Services</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              End-to-End <span className="bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#5EEAD4] bg-clip-text text-transparent">Educational Delivery</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              From foundational curriculum design to immersive 3D animation and global localization, 
              we build digital learning products that scale.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* Visual Service Categories */}
      <Section className="pb-24 pt-10">
        <div className="flex flex-col gap-32">
          {serviceCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className={`grid gap-14 lg:grid-cols-2 lg:items-center ${category.reverse ? '' : ''}`}
            >
              <FadeUp className={category.reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline/50 shadow-elegant group">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
              
              <FadeUp delay={0.1} className={category.reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {category.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                  {category.desc}
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {category.services.map((s, i) => (
                    <div key={s.title} className="group">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-alt shadow-sm border border-hairline text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <h4 className="mt-5 font-display text-base font-semibold text-ink">{s.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-2"
                  >
                    Discuss your needs
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeUp>
            </div>
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
                Tell us what you're building. Our services architects will respond within 24 hours with a customized approach.
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
