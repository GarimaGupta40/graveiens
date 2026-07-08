import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ClipboardCheck,
  MonitorPlay,
  Film,
  Mic2,
  Globe2,
  Languages,
  Accessibility,
  GraduationCap,
  Sparkles,
  Users,
  ShieldCheck,
  Cpu,
  Layers,
  Handshake,
  Code2,
  Building2,
  School,
  University,
  Rocket,
  Briefcase,
  Landmark,
  Search,
  Compass,
  Palette,
  BadgeCheck,
  Truck,
  Star,
  Plus,
  Minus,
  Play,
  
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-illustration.png";
import { Section, SectionHeader, Eyebrow, FadeUp, Counter } from "@/components/site/primitives";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "GravEiens — Educational Outsourcing & Digital Learning Solutions",
      },
      {
        name: "description",
        content:
          "GravEiens partners with publishers, institutions, EdTech companies and enterprises to deliver educational content, eLearning, multimedia, assessments and localization at global scale.",
      },
      {
        property: "og:title",
        content: "GravEiens — Educational Outsourcing & Digital Learning Solutions",
      },
      {
        property: "og:description",
        content:
          "GravEiens partners with publishers, institutions, EdTech companies and enterprises to deliver educational content, eLearning, multimedia, assessments and localization at global scale.",
      },
    ],
  }),
  component: HomePage,
});

/* ---------- data ---------- */

const services = [
  { icon: BookOpen, title: "Educational Content Development", desc: "Curriculum-aligned learning content across K-12, higher ed and corporate." },
  { icon: ClipboardCheck, title: "Assessment Development", desc: "Item writing, psychometrics and adaptive assessments at scale." },
  { icon: MonitorPlay, title: "eLearning Solutions", desc: "SCORM, xAPI and interactive courseware for LMS deployment." },
  { icon: Film, title: "2D & 3D Animation", desc: "Explainers, character animation and immersive learning visuals." },
  { icon: Mic2, title: "Audio & Video Production", desc: "Studio-grade lectures, podcasts and multimedia storytelling." },
  { icon: Globe2, title: "Website Development", desc: "Educational portals, LMS integrations and product experiences." },
  { icon: Languages, title: "Localization & Translation", desc: "Multi-language adaptation across 40+ locales with cultural nuance." },
  { icon: Accessibility, title: "Accessibility & Alt Text", desc: "WCAG-compliant remediation, alt text and inclusive design." },
  { icon: GraduationCap, title: "Online Tutoring Support", desc: "Backend academic support, subject specialists and mentoring." },
  { icon: Sparkles, title: "Skill Development", desc: "Job-ready programs, workforce training and micro-credentials." },
];

const whyChoose = [
  { icon: Users, title: "Experienced Subject Matter Experts", desc: "A curated bench of educators, designers and technologists." },
  { icon: Layers, title: "End-to-End Educational Solutions", desc: "From concept to LMS delivery — one accountable partner." },
  { icon: ShieldCheck, title: "High Quality Assurance", desc: "Multi-stage QA with editorial, pedagogical and technical review." },
  { icon: Cpu, title: "Innovative Technology", desc: "AI-assisted authoring, xAPI analytics and modern web stacks." },
  { icon: Rocket, title: "Scalable Project Delivery", desc: "Elastic teams that scale from pilots to enterprise programs." },
  { icon: Handshake, title: "Client-Centric Collaboration", desc: "Transparent workflows, agile sprints and shared success metrics." },
];

const process = [
  { icon: Search, title: "Discover", desc: "Understand learners, goals and constraints." },
  { icon: Compass, title: "Plan", desc: "Blueprint the solution, scope and roadmap." },
  { icon: Palette, title: "Design & Develop", desc: "Craft content, media and experiences." },
  { icon: BadgeCheck, title: "Quality Review", desc: "Editorial, pedagogical and technical QA." },
  { icon: Truck, title: "Deliver & Support", desc: "Ship, integrate and iterate over time." },
];

const industries = [
  { icon: Building2, title: "Educational Publishers", desc: "Print-to-digital transformation and content ops." },
  { icon: School, title: "Schools", desc: "K-12 curriculum, resources and teacher enablement." },
  { icon: University, title: "Universities", desc: "Courseware, program design and student experiences." },
  { icon: Rocket, title: "EdTech Companies", desc: "Product content, R&D and go-to-market assets." },
  { icon: Briefcase, title: "Corporate Learning", desc: "Onboarding, compliance and leadership programs." },
  { icon: Landmark, title: "Government Organizations", desc: "Public education initiatives and skill missions." },
];

const testimonials = [
  {
    quote:
      "GravEiens has been an extension of our editorial team. They deliver at a scale and quality most vendors can't match.",
    name: "Priya Menon",
    role: "Director of Content",
    org: "Global Education Publisher",
  },
  {
    quote:
      "Their multimedia team took our courses to another level. Learner engagement metrics jumped within a quarter.",
    name: "Daniel Okafor",
    role: "Head of Product",
    org: "EdTech Scale-up",
  },
  {
    quote:
      "From accessibility remediation to localization, GravEiens is the partner we recommend to peers across the sector.",
    name: "Sara Lindqvist",
    role: "VP Learning",
    org: "Fortune 500 Enterprise",
  },
];

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We work with educational publishers, K-12 and higher education institutions, EdTech companies, corporate learning teams and government organizations across the globe.",
  },
  {
    q: "Can you create customized educational content?",
    a: "Yes. Every engagement is tailored to your curriculum, learner profile, brand and delivery platform — from bespoke authoring to full white-label content programs.",
  },
  {
    q: "Do you provide multimedia production?",
    a: "We produce 2D/3D animation, live-action video, studio audio, motion graphics and interactive media — end-to-end from script to final master.",
  },
  {
    q: "Can GravEiens handle large-scale educational projects?",
    a: "Absolutely. Our delivery model is built for scale, with elastic teams, robust QA and program-management rigor for multi-year engagements.",
  },
  {
    q: "How can we get started?",
    a: "Reach out via our contact form or book a consultation. We'll scope the opportunity, share a tailored proposal and align on a delivery plan.",
  },
];

const clientLogos = [
  "Pearson", "McGraw Hill", "Cambridge", "Oxford", "Cengage", "Wiley",
  "Britannica", "Coursera", "Byju's", "edX", "Kaplan", "Scholastic",
];

/* ---------- page ---------- */

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhoWeAre />
      <Impact />
      <WhatWeDo />
      <WhyChoose />
      <Process />
      <Industries />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Cinematic edtech backdrop — real English UI, no stock footage */}
      <div className="absolute inset-0 -z-10">
        <HeroBackdrop />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 lg:px-8 lg:pb-36 lg:pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              Educational Outsourcing · Since 2014
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-[68px]"
          >
            Empowering Education Through{" "}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent">
              Innovative Digital Learning
            </span>{" "}
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85"
          >
            GravEiens partners with publishers, educational institutions, EdTech companies, and
            enterprises to create high-quality digital learning services that deliver measurable
            educational impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-brand hover:text-white hover:shadow-glow"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/60 hover:bg-white/20"
            >
              <Play className="h-4 w-4" />
              Book a Consultation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/75"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-cyan-300" /> ISO-aligned QA
            </span>
            <span className="flex items-center gap-1.5">
              <Accessibility className="h-4 w-4 text-cyan-300" /> WCAG 2.1 AA
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="h-4 w-4 text-cyan-300" /> Delivered in 40+ languages
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

/* ---------- trusted by ---------- */

const trustedOrganizations = [
  "Vedantu",
  "WASSERX",
  "BYJU'S",
  "Chegg",
  "Doubtnut",
  "Embibe",
  "Gautam Public Sr. Sec. School",
  "McGraw Hill",
  "Laxmi Publications",
  "Unacademy",
];

function TrustedBy() {
  return (
    <section className="overflow-hidden border-b border-hairline bg-surface py-12">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8 mb-10">
        <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-muted">
          Trusted by Leading Educational Organizations
        </h3>
      </div>
      <div className="group relative flex w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 z-10 w-24 h-full bg-gradient-to-r from-surface to-transparent pointer-events-none" />
        
        {/* Marquee container */}
        <div className="flex w-max min-w-full shrink-0 animate-marquee items-center gap-6 group-hover:[animation-play-state:paused]">
          {[...trustedOrganizations, ...trustedOrganizations].map((org, i) => (
            <div
              key={i}
              className="flex h-14 shrink-0 items-center justify-center rounded-full border border-hairline bg-white px-8 font-display text-sm font-semibold text-ink-muted shadow-sm transition-all duration-300 hover:border-brand/30 hover:text-ink hover:shadow-md"
            >
              {org}
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 z-10 w-24 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

/* ---------- who we are ---------- */

function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <FadeUp>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            A global partner for <span className="text-gradient-brand">digital learning</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            For over a decade, we have been the quiet engine behind some of the most
            successful educational products in the world. Our teams blend pedagogical
            expertise, creative design, and technical engineering to build learning
            experiences that scale.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Users,
                title: "Expert Teams",
                desc: "SMEs, instructional designers, and engineers working as one.",
              },
              {
                icon: Code2,
                title: "Scale & Quality",
                desc: "ISO-aligned processes delivering thousands of assets on time.",
              },
            ].map((f) => (
              <div key={f.title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface-blue text-brand">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold text-ink">{f.title}</h4>
                  <p className="mt-1 text-sm text-ink-muted">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="group inline-flex items-center gap-1.5 font-semibold text-brand transition-colors hover:text-brand-2"
            >
              Learn our story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeUp>

        {/* Premium Illustration */}
        <FadeUp delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-hairline/50 shadow-elegant group">
            <img 
              src="/home_who_we_are_1783501544131.png" 
              alt="Digital Learning Ecosystem" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none" />
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

/* ---------- what we do ---------- */

function WhatWeDo() {
  return (
    <Section id="services" className="bg-surface-alt/50">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <FadeUp className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-hairline/50 shadow-elegant group">
            <img 
              src="/home_solutions_preview_1783501554207.png" 
              alt="Comprehensive Digital Services" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-accent-teal/10 to-transparent pointer-events-none" />
          </div>
        </FadeUp>
        
        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="What We Do"
            title={<>Comprehensive Educational Services Under One Roof</>}
            description="We combine educational expertise, creative design, technology and innovation to help organizations develop engaging learning experiences that educate, inspire and deliver measurable results."
          />

          <div className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Educational Content", desc: "K-12 & Higher Ed curriculum" },
                { title: "Assessments", desc: "Item banks & psychometrics" },
                { title: "eLearning", desc: "SCORM, HTML5 & Courseware" },
                { title: "Multimedia", desc: "Animation, Audio & Video" },
                { title: "Technology", desc: "Web & LMS Integrations" },
                { title: "Localization", desc: "40+ languages supported" },
              ].map((item, idx) => (
                <FadeUp key={item.title} delay={idx * 0.05}>
                  <div className="rounded-2xl border border-hairline bg-white p-5 shadow-sm transition-all hover:border-brand/30 hover:shadow-hover">
                    <h4 className="font-display text-base font-semibold text-ink">{item.title}</h4>
                    <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/solutions"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-glow"
              >
                Explore all services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- why choose ---------- */

function WhyChoose() {
  return (
    <Section className="bg-surface-alt">
      <SectionHeader
        eyebrow="Why GravEiens"
        title={<>Why Leading Organizations Choose GravEiens</>}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((f, i) => (
          <FadeUp key={f.title} delay={i * 0.04}>
            <div className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-hover">
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

/* ---------- process ---------- */

function Process() {
  return (
    <Section>
      <SectionHeader eyebrow="Our Process" title={<>Our Proven Process</>} />
      <div className="relative">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-hairline to-transparent lg:block" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.08}>
              <div className="relative flex flex-col items-start">
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-card ring-1 ring-hairline">
                  <p.icon className="h-5 w-5 text-brand" />
                </div>
                <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand">
                  Step 0{i + 1}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- impact ---------- */

function Impact() {
  const stats = [
    { value: 200, suffix: "+", label: "Projects Delivered" },
    { value: 400000, suffix: "+", label: "Educational Services" },
    { value: 20000, suffix: "+", label: "Animated Learning Videos" },
    { value: 10, suffix: "+", label: "Years of Excellence" },
    { value: 40, suffix: "+", label: "Languages Supported" },
  ];
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.35),transparent_60%),radial-gradient(45%_60%_at_100%_100%,rgba(20,184,166,0.2),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_50%,transparent_90%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Our Impact</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Creating Measurable Educational Impact
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.35),transparent_70%)]" />
                <div className="relative font-display text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="relative mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  {s.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- industries ---------- */

function Industries() {
  return (
    <Section className="bg-surface-blue">
      <SectionHeader eyebrow="Industries" title={<>Industries We Empower</>} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((it, i) => (
          <FadeUp key={it.title} delay={i * 0.05}>
            <Link
              to="/industries"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-hover"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <it.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{it.desc}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

/* ---------- testimonials ---------- */

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <Section>
      <SectionHeader eyebrow="Testimonials" title={<>What Our Clients Say</>} />
      <FadeUp>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-hairline bg-white p-10 shadow-elegant lg:p-14">
          <Quote className="absolute right-8 top-8 h-24 w-24 text-brand/10" strokeWidth={1.5} />
          <div className="relative flex gap-1 text-brand">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="relative mt-6 font-display text-2xl leading-snug text-ink sm:text-3xl">
            "{t.quote}"
          </p>
          <div className="relative mt-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand font-display text-sm font-bold text-white shadow-glow ring-2 ring-white">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-ink-muted">
                  {t.role} · {t.org}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Testimonial ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === k ? "w-8 bg-ink" : "w-2 bg-hairline hover:bg-ink-muted/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

/* ---------- faq ---------- */

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-surface">
      <SectionHeader eyebrow="FAQ" title={<>Frequently Asked Questions</>} />
      <div className="mx-auto max-w-3xl divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-white">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-ink">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-hairline text-ink-muted">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted">{f.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- final cta ---------- */

function FinalCTA() {
  return (
    <Section>
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl border border-brand/15 bg-cta-soft px-6 py-16 sm:px-14 lg:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(50%_60%_at_10%_0%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(60%_70%_at_100%_100%,rgba(20,184,166,0.14),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(37,99,235,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_85%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <Eyebrow>Let's collaborate</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Let's Build Exceptional Learning Experiences Together
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Whether you're developing educational content, digital learning platforms,
              multimedia assets or complete learning solutions, GravEiens is ready to help you
              transform your vision into reality.
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-glow"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
