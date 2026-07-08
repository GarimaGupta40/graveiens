import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader, Eyebrow, FadeUp, Counter } from "@/components/site/primitives";
import {
  Target,
  Compass,
  HeartHandshake,
  ArrowRight,
  Globe2,
  Sparkles,
  Users,
  Award,
  Rocket,
  ShieldCheck,
  Layers,
  Lightbulb,
  Building2,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — GravEiens" },
      { name: "description", content: "GravEiens is an educational outsourcing and digital learning solutions company partnering with organizations worldwide." },
      { property: "og:title", content: "About Us — GravEiens" },
      { property: "og:description", content: "Our story, mission and values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-800 pt-32 pb-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
        <div className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.45),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 right-[-8%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(20,184,166,0.28),transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 85%)",
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              About GravEiens
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Building the future of learning,{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#5EEAD4] bg-clip-text text-transparent">
                together
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              GravEiens is an educational outsourcing and digital learning solutions
              company. We partner with publishers, schools, universities, EdTech
              companies, enterprises and governments to deliver world-class learning
              experiences at scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-glow hover:bg-white/90"
              >
                Partner with us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.1]"
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* Hero side card cluster */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4">
              {[
                { icon: Users, k: "Learners", v: "12M+" },
                { icon: Globe2, k: "Countries", v: "40+" },
                { icon: Layers, k: "Projects", v: "200+" },
                { icon: Award, k: "Awards", v: "18" },
              ].map((s, i) => (
                <FadeUp key={s.k} delay={i * 0.06}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <div className="mt-4 font-display text-3xl font-bold">{s.v}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-white/60">
                      {s.k}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY - VISUAL STORYTELLING (Image Left) */}
      <Section className="py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <FadeUp delay={0.1} className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-hairline/50 group">
              <img 
                src="/about_story_1783501565417.png" 
                alt="Growth and Evolution Timeline" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none" />
            </div>
          </FadeUp>
          <FadeUp className="order-1 lg:order-2">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              A decade of crafting learning that <span className="text-gradient-brand">actually works</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
              <p>
                Founded on the belief that great learning is a design problem, GravEiens
                started as a small team of educators, engineers and designers building
                digital textbooks for a handful of publishers.
              </p>
              <p>
                Ten years later, we're a global partner to some of the most respected
                publishers, universities and enterprises — with 200+ shipped programs,
                400,000+ learning assets and a reputation for quality that scales.
              </p>
              <p>
                We measure our success by learner outcomes, not deliverables. Every
                storyboard, every asset, every line of code is built with the person on
                the other side of the screen in mind.
              </p>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* MISSION / VISION / VALUES - VISUAL STORYTELLING (Image Right) */}
      <section className="relative bg-surface-alt py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <FadeUp className="order-1">
              <Eyebrow>What drives us</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Purpose that shapes every <span className="text-gradient-brand">decision</span>
              </h2>
              <div className="mt-10 grid gap-8">
                {[
                  {
                    icon: Target,
                    title: "Our Mission",
                    desc: "Empower organizations to create measurable learning outcomes through content, technology and craft.",
                  },
                  {
                    icon: Compass,
                    title: "Our Vision",
                    desc: "A world where every learner has access to high-quality, engaging and inclusive educational experiences.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Our Values",
                    desc: "Craft, collaboration, integrity, learner-first thinking and relentless quality.",
                  },
                ].map((v, i) => (
                  <div key={v.title} className="flex gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-card text-brand border border-hairline">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-ink-muted">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.1} className="order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-hairline/50 group">
                <img 
                  src="/about_mission_1783501574784.png" 
                  alt="Mission and Goals" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-accent-teal/10 to-transparent pointer-events-none" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHY GRAVEIENS - Minimal Layout */}
      <Section className="py-24">
        <SectionHeader
          eyebrow="Why GravEiens"
          title={<>An enterprise partner built for <span className="text-gradient-brand">scale and craft</span></>}
          description="We combine the discipline of a global services firm with the design sensibility of a boutique studio."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Sparkles, title: "AI-augmented workflows", desc: "Our proprietary pipeline blends AI acceleration with human editorial rigor." },
            { icon: ShieldCheck, title: "Enterprise-grade quality", desc: "ISO-aligned processes, WCAG 2.2 AA accessibility, and rigorous QA at every stage." },
            { icon: Rocket, title: "Speed at scale", desc: "Global delivery teams shipping thousands of learning assets on tight timelines." },
            { icon: Layers, title: "End-to-end capability", desc: "From learning strategy to authoring, animation, LMS deployment and analytics." },
            { icon: Lightbulb, title: "Learning science first", desc: "Every design decision is grounded in evidence-based pedagogy." },
            { icon: Globe2, title: "Truly global", desc: "Localization, cultural nuance and delivery across 40+ countries and 25+ languages." },
          ].map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-hover">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-blue text-brand transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* BY THE NUMBERS */}
      <section className="bg-ink py-24 text-white">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              By the numbers
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A decade of measurable impact
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: 200, s: "+", l: "Projects" },
            { v: 400000, s: "+", l: "Services Delivered" },
            { v: 20000, s: "+", l: "Videos" },
            { v: 10, s: "+", l: "Years" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="font-display text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/60">{s.l}</div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE - VISUAL STORYTELLING (Image Left) */}
      <Section className="bg-surface-blue py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <FadeUp delay={0.1} className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-hairline/50 group">
              <img 
                src="/about_global_1783501584487.png" 
                alt="Global Presence Network" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none" />
            </div>
          </FadeUp>
          <FadeUp className="order-1 lg:order-2">
            <Eyebrow>Global presence</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Delivering across <span className="text-gradient-brand">four continents</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Regional teams and studios that combine local craft with global delivery discipline.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { region: "North America", city: "New York · Toronto", role: "Client partnerships" },
                { region: "Europe", city: "London · Amsterdam", role: "Design & strategy" },
                { region: "Asia Pacific", city: "Bengaluru · Singapore", role: "Production HQ" },
                { region: "Middle East", city: "Dubai · Riyadh", role: "Government programs" },
              ].map((o, i) => (
                <div key={o.region} className="h-full rounded-2xl border border-hairline bg-white p-5 transition-all duration-300 hover:shadow-hover">
                  <div className="flex items-center gap-2 text-brand">
                    <MapPin className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest">
                      {o.region}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-ink-muted" />
                    <div className="font-display text-sm font-semibold text-ink">
                      {o.city}
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-ink-muted">{o.role}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-cta-soft p-12 text-center shadow-elegant lg:p-16">
          <div className="absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.25),transparent_70%)]" />
          <div className="relative">
            <Eyebrow>Ready to start</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Let's build something <span className="text-gradient-brand">meaningful</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              Tell us about your learners, your goals and your timelines. We'll bring
              the strategy, the craft and the team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-brand"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-brand/30"
              >
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
