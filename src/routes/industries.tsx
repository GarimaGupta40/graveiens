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

const showcaseSections = [
  {
    title: "Formal Education & Publishing",
    desc: "We partner with traditional educational institutions and publishers to accelerate their digital transformation. Our solutions enhance the classroom experience and scale curriculum delivery.",
    image: "/industry_showcase_1_1783501633213.png",
    industries: [
      { icon: Building2, title: "Educational Publishers", desc: "Print-to-digital transformation, content operations and rich media integrations.", features: ["Digital Workflows", "Asset Management", "E-Book Creation"], color: "text-blue-500" },
      { icon: School, title: "K-12 Schools", desc: "K-12 curriculum, teacher resources and student-facing learning experiences.", features: ["Interactive Curriculum", "Teacher Tools", "Student Assessments"], color: "text-emerald-500" },
      { icon: University, title: "Universities & Higher Ed", desc: "Courseware design, program development and digital student journeys.", features: ["Custom Courseware", "Student Portals", "LMS Integration"], color: "text-purple-500" },
    ],
    reverse: false
  },
  {
    title: "Enterprise, EdTech & Public Sector",
    desc: "From rapid prototyping for EdTech startups to massive scale rollouts for government initiatives, we build learning experiences that drive workforce readiness and public impact.",
    image: "/industry_showcase_2_1783501643913.png",
    industries: [
      { icon: Rocket, title: "EdTech Companies", desc: "Product content, R&D partnerships and go-to-market learning assets.", features: ["Rapid Prototyping", "Scalable Content", "API Integrations"], color: "text-rose-500" },
      { icon: Briefcase, title: "Corporate Learning", desc: "Onboarding, compliance, leadership and skill development programs.", features: ["Compliance Modules", "Leadership Training", "Microlearning"], color: "text-amber-500" },
      { icon: Landmark, title: "Government Organizations", desc: "Public education initiatives, skill missions and large-scale rollouts.", features: ["Public Initiatives", "Skill Missions", "Accessibility & WCAG"], color: "text-cyan-500" },
    ],
    reverse: true
  }
];

function IndustriesPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-charcoal pt-32 pb-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
        <div className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.45),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-4xl text-center z-10">
          <FadeUp>
            <Eyebrow className="mx-auto text-white/80 border-white/20">Industries We Serve</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Empowering the <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#5EEAD4] bg-clip-text text-transparent">education ecosystem</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              We work with the organizations that shape how the world learns — from global
              publishers to public education programs.
            </p>
          </FadeUp>
        </div>
      </Section>

      <Section className="pb-32 pt-10">
        <div className="flex flex-col gap-32">
          {showcaseSections.map((section) => (
            <div key={section.title} className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <FadeUp className={section.reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline/50 shadow-elegant group">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
              
              <FadeUp delay={0.1} className={section.reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                  {section.desc}
                </p>
                <div className="mt-10 flex flex-col gap-8">
                  {section.industries.map((ind) => (
                    <div key={ind.title} className="group relative flex gap-6 rounded-2xl border border-transparent p-4 transition-all hover:border-hairline hover:bg-white hover:shadow-sm">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface-alt shadow-sm border border-hairline transition-colors group-hover:bg-white">
                        <ind.icon className={`h-6 w-6 ${ind.color}`} />
                      </span>
                      <div>
                        <h4 className="font-display text-xl font-semibold text-ink">{ind.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{ind.desc}</p>
                        <ul className="mt-4 flex flex-wrap gap-4">
                          {ind.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs font-medium text-ink/70">
                              <CheckCircle2 className={`h-3.5 w-3.5 ${ind.color}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
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
