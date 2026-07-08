import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader, Eyebrow, FadeUp } from "@/components/site/primitives";
import { ArrowUpRight, MapPin, Clock, Users, Zap, Heart, Globe2 } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — GravEiens" },
      { name: "description", content: "Join GravEiens and help shape the future of education." },
      { property: "og:title", content: "Careers — GravEiens" },
      { property: "og:description", content: "Open roles at GravEiens." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Instructional Designer", team: "Content", type: "Full-time", loc: "Remote" },
  { title: "Senior 2D Animator", team: "Multimedia", type: "Full-time", loc: "Hybrid" },
  { title: "Frontend Engineer", team: "Technology", type: "Full-time", loc: "Remote" },
  { title: "Assessment Specialist", team: "Assessments", type: "Full-time", loc: "Remote" },
  { title: "Localization Project Manager", team: "Localization", type: "Full-time", loc: "Hybrid" },
  { title: "Accessibility Specialist", team: "Content", type: "Full-time", loc: "Remote" },
];

function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-slate-800 pt-32 pb-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
        <div className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.45),transparent_70%)]" />
        
        <div className="relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center z-10">
          <FadeUp>
            <Eyebrow className="text-white/80 border-white/20">Careers</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Build a career that <span className="bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#5EEAD4] bg-clip-text text-transparent">changes how the world learns</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              We're a global team of educators, designers, technologists and storytellers. If you
              care about craft and impact, we'd love to meet you.
            </p>
            <div className="mt-8">
              <a href="#open-roles" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-glow hover:bg-brand hover:text-white transition-colors">
                View open roles
              </a>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.1} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline/50 shadow-elegant group">
              <img 
                src="/career_hero.png" 
                alt="GravEiens Team Collaboration" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-brand/5 to-transparent pointer-events-none" />
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* Life at GravEiens */}
      <Section className="bg-surface-alt py-24">
        <SectionHeader 
          eyebrow="Life at GravEiens" 
          title={<>Culture built on <span className="text-gradient-brand">craft & care</span></>} 
          description="We do serious work without taking ourselves too seriously. Our culture is designed to help you do the best work of your career."
        />
        
        <div className="mt-16 grid gap-16 lg:gap-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <div className="relative overflow-hidden rounded-[2rem] border border-hairline/50 shadow-elegant group">
                <img 
                  src="/career_culture_1.png" 
                  alt="Creative Workspace" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm text-brand border border-hairline">
                  <Zap className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold text-ink">Creative autonomy</h3>
              </div>
              <p className="mt-4 text-lg text-ink-muted leading-relaxed">
                We hire smart people and get out of their way. Whether you're designing curriculum, animating complex concepts, or writing code, you'll have the space and tools to innovate.
              </p>
            </FadeUp>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeUp delay={0.1} className="order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm text-brand border border-hairline">
                  <Globe2 className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold text-ink">Global collaboration</h3>
              </div>
              <p className="mt-4 text-lg text-ink-muted leading-relaxed">
                Work with diverse teams across four continents. We're remote-friendly but fiercely collaborative, using the best asynchronous tools to keep everyone connected and aligned.
              </p>
            </FadeUp>
            <FadeUp className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem] border border-hairline/50 shadow-elegant group">
                <img 
                  src="/career_culture_2.png" 
                  alt="Global Remote Collaboration" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, title: "Health & Wellness", desc: "Comprehensive coverage and wellness stipends." },
            { icon: Users, title: "Inclusive Culture", desc: "A workplace where everyone belongs and thrives." },
            { icon: Zap, title: "Learning Budget", desc: "Annual stipend for your own educational growth." },
            { icon: Clock, title: "Flexible Work", desc: "Focus on outcomes, not hours spent at a desk." },
          ].map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-hairline bg-white p-6 hover:shadow-sm transition-all hover:border-brand/30">
                <f.icon className="h-6 w-6 text-brand" />
                <h4 className="mt-4 font-display text-base font-semibold text-ink">{f.title}</h4>
                <p className="mt-2 text-sm text-ink-muted">{f.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* Open Roles */}
      <Section id="open-roles" className="py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader 
            eyebrow="Open Roles" 
            title={<>Come build with us</>} 
            description="Don't see your perfect role? Send your resume to careers@graveiens.com"
          />
          
          <div className="mt-16 grid gap-20">
            {/* Creative & Content */}
            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <FadeUp>
                <div className="sticky top-24 relative overflow-hidden rounded-[2rem] border border-hairline/50 shadow-elegant group">
                  <img 
                    src="/career_roles_creative.png" 
                    alt="Creative Roles" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink mb-6">Creative & Content</h3>
                <div className="overflow-hidden rounded-3xl border border-hairline bg-white shadow-sm">
                  {roles.filter(r => ["Content", "Multimedia", "Localization"].includes(r.team)).map((r, i) => (
                    <FadeUp key={r.title} delay={i * 0.03}>
                      <Link
                        to="/contact"
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline px-6 sm:px-8 py-6 last:border-b-0 hover:bg-surface-alt transition-colors"
                      >
                        <div>
                          <h4 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">{r.title}</h4>
                          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-ink-muted">
                            <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {r.team}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {r.type}</span>
                            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {r.loc}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 self-start sm:self-auto">
                          <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ink-muted transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology & Engineering */}
            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <FadeUp className="order-1 lg:order-1">
                <div className="sticky top-24 relative overflow-hidden rounded-[2rem] border border-hairline/50 shadow-elegant group">
                  <img 
                    src="/career_roles_tech.png" 
                    alt="Technology Roles" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
              <div className="order-2 lg:order-2">
                <h3 className="font-display text-2xl font-bold text-ink mb-6">Technology & Engineering</h3>
                <div className="overflow-hidden rounded-3xl border border-hairline bg-white shadow-sm">
                  {roles.filter(r => ["Technology", "Assessments"].includes(r.team)).map((r, i) => (
                    <FadeUp key={r.title} delay={i * 0.03}>
                      <Link
                        to="/contact"
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline px-6 sm:px-8 py-6 last:border-b-0 hover:bg-surface-alt transition-colors"
                      >
                        <div>
                          <h4 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">{r.title}</h4>
                          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-ink-muted">
                            <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {r.team}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {r.type}</span>
                            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {r.loc}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 self-start sm:self-auto">
                          <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ink-muted transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
