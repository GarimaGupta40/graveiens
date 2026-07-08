import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, School, University, Rocket, Briefcase, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, Eyebrow, FadeUp } from "@/components/site/primitives";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — GravEiens" },
      { name: "description", content: "GravEiens serves publishers, K-12 schools, universities, EdTech companies, corporate learning teams and government organizations." },
      { property: "og:title", content: "Industries — GravEiens" },
      { property: "og:description", content: "Sectors GravEiens serves worldwide." },
    ],
  }),
  component: IndustriesPage,
});

const items = [
  { icon: Building2, title: "Educational Publishers", desc: "Print-to-digital transformation, content operations and rich media integrations.", features: ["Digital Workflows", "Asset Management", "E-Book Creation"], color: "from-blue-500/20" },
  { icon: School, title: "K-12 Schools", desc: "K-12 curriculum, teacher resources and student-facing learning experiences.", features: ["Interactive Curriculum", "Teacher Tools", "Student Assessments"], color: "from-emerald-500/20" },
  { icon: University, title: "Universities & Higher Ed", desc: "Courseware design, program development and digital student journeys.", features: ["Custom Courseware", "Student Portals", "LMS Integration"], color: "from-purple-500/20" },
  { icon: Rocket, title: "EdTech Companies", desc: "Product content, R&D partnerships and go-to-market learning assets.", features: ["Rapid Prototyping", "Scalable Content", "API Integrations"], color: "from-rose-500/20" },
  { icon: Briefcase, title: "Corporate Learning", desc: "Onboarding, compliance, leadership and skill development programs.", features: ["Compliance Modules", "Leadership Training", "Microlearning"], color: "from-amber-500/20" },
  { icon: Landmark, title: "Government Organizations", desc: "Public education initiatives, skill missions and large-scale rollouts.", features: ["Public Initiatives", "Skill Missions", "Accessibility & WCAG"], color: "from-cyan-500/20" },
];

function IndustriesPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        {/* Decorative Background */}
        <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-brand/20 to-transparent blur-[120px] opacity-70" />
        
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <Eyebrow className="mx-auto">Industries We Serve</Eyebrow>
            <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl lg:text-8xl">
              Empowering the <br className="hidden sm:block" />
              <span className="text-gradient-brand">education ecosystem</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              We work with the organizations that shape how the world learns — from global
              publishers to public education programs.
            </p>
          </FadeUp>
        </div>
      </Section>

      <Section className="pb-32 pt-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((it, i) => (
            <FadeUp key={it.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-hairline bg-surface/50 p-8 sm:p-12 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:bg-white/80">
                {/* Dynamic colored ambient glow */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${it.color} via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
                
                <div className="flex items-start justify-between">
                  <span className="relative grid h-20 w-20 place-items-center rounded-3xl bg-white shadow-sm ring-1 ring-hairline transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-white text-brand group-hover:ring-brand group-hover:shadow-brand/20 group-hover:shadow-2xl">
                    <it.icon className="h-8 w-8 transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  <ArrowRight className="h-6 w-6 text-ink/20 transition-all duration-500 group-hover:-rotate-45 group-hover:text-brand group-hover:scale-125" />
                </div>
                
                <div className="mt-12">
                  <h3 className="font-display text-3xl font-bold tracking-tight text-ink">{it.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">{it.desc}</p>
                </div>
                
                <div className="mt-10 border-t border-hairline/50 pt-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {it.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium text-ink/80 transition-colors duration-300 group-hover:text-ink">
                        <CheckCircle2 className="h-5 w-5 text-brand/60 transition-colors duration-300 group-hover:text-brand" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section className="pb-32 pt-10">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[3rem] bg-ink px-6 py-24 text-center sm:px-16">
            <div className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
            <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[100px]" />
            
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-4xl font-bold text-white sm:text-6xl">Not sure where you fit?</h2>
              <p className="mt-6 text-xl text-white/70">
                We tailor engagements to your unique context, organizational goals, and delivery model. Let's discuss your vision.
              </p>
              <div className="mt-12 flex justify-center">
                <Link to="/contact" className="inline-flex h-14 items-center gap-3 rounded-full bg-brand px-10 text-base font-bold text-white transition-all hover:scale-105 hover:bg-brand/90 hover:shadow-xl hover:shadow-brand/30">
                  Talk to our experts <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
