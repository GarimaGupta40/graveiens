import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, School, University, Rocket, Briefcase, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader, Eyebrow, FadeUp } from "@/components/site/primitives";

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
  { icon: Building2, title: "Educational Publishers", desc: "Print-to-digital transformation, content operations and rich media integrations.", features: ["Digital Workflows", "Asset Management"] },
  { icon: School, title: "Schools", desc: "K-12 curriculum, teacher resources and student-facing learning experiences.", features: ["Interactive Curriculum", "Teacher Tools"] },
  { icon: University, title: "Universities", desc: "Courseware design, program development and digital student journeys.", features: ["Custom Courseware", "Student Portals"] },
  { icon: Rocket, title: "EdTech Companies", desc: "Product content, R&D partnerships and go-to-market learning assets.", features: ["Rapid Prototyping", "Scalable Content"] },
  { icon: Briefcase, title: "Corporate Learning", desc: "Onboarding, compliance, leadership and skill development programs.", features: ["Compliance Modules", "Leadership Training"] },
  { icon: Landmark, title: "Government Organizations", desc: "Public education initiatives, skill missions and large-scale rollouts.", features: ["Public Initiatives", "Skill Missions"] },
];

function IndustriesPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-10 pt-24 sm:pt-32">
        {/* Decorative Background */}
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand/5 blur-[120px]" />
        
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <Eyebrow>Industries</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Partnering across the <br className="hidden sm:block" />
              <span className="text-gradient-brand">education ecosystem</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              We work with the organizations that shape how the world learns — from global
              publishers to public education programs.
            </p>
          </FadeUp>
        </div>
      </Section>

      <Section className="pt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FadeUp key={it.title} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-hairline group-hover:bg-brand group-hover:text-white transition-colors duration-300 text-brand">
                  <it.icon className="h-6 w-6" />
                </span>
                
                <h3 className="relative mt-8 font-display text-xl font-semibold text-ink">{it.title}</h3>
                <p className="relative mt-3 flex-grow text-base leading-relaxed text-ink-muted">{it.desc}</p>
                
                <ul className="relative mt-6 space-y-2">
                  {it.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-ink-muted">
                      <CheckCircle2 className="h-4 w-4 text-brand/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section className="pt-24">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-20 text-center text-white">
            <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-brand/30 blur-[100px]" />
            <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[100px]" />
            
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Not sure where you fit?</h2>
              <p className="mt-5 text-lg text-white/70">
                We tailor engagements to your unique context, organizational goals, and delivery model.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition-all hover:scale-105 hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/25">
                Talk to our experts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
