import { motion } from "motion/react";
import {
  BookOpen,
  BarChart3,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Network,
  Play,
  FileText,
} from "lucide-react";

/**
 * HeroBackdrop
 * ------------
 * Cinematic animated background for the hero. Rendered as real, English-only
 * educational-technology UI (LMS dashboards, analytics, knowledge graph,
 * assessments, AI-authoring), so nothing is ever unreadable, foreign or
 * generic stock footage. Motion is slow, elegant and continuous.
 */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Base charcoal fallback */}
      <div className="absolute inset-0 bg-charcoal" />

      {/* Cinematic looping background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Subtle mesh tint over video */}
      <div className="absolute inset-0 bg-mesh opacity-40 mix-blend-screen" />

      {/* Faint animated grid */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 60% 50%, black 40%, transparent 85%)",
        }}
      />

      {/* Soft brand glows */}
      <div className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.45),transparent_70%)] animate-fade-pulse" />
      <div className="absolute -bottom-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(20,184,166,0.28),transparent_70%)] animate-fade-pulse" />

      {/* Floating particles */}
      <Particles />

      {/* Floating panels — right side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-[6%] top-[14%] hidden w-[340px] lg:block"
      >
        <div className="animate-drift-slow">
          <AnalyticsPanel />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.45 }}
        className="absolute right-[22%] bottom-[10%] hidden w-[300px] xl:block"
      >
        <div className="animate-drift-slower">
          <AssessmentPanel />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute right-[3%] bottom-[6%] hidden w-[280px] lg:block"
      >
        <div className="animate-drift-slow">
          <AICoursePanel />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.9 }}
        className="absolute right-[26%] top-[6%] hidden w-[220px] xl:block"
      >
        <div className="animate-drift-slower">
          <KnowledgeGraphPanel />
        </div>
      </motion.div>

      {/* Soft dark gradient overlay — ensures heading + CTAs stay readable on the light video */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,24,39,0.72) 0%, rgba(17,24,39,0.55) 50%, rgba(17,24,39,0.7) 100%)",
        }}
      />
      {/* Left-side gradient so headline stays crisp */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,15,30,0.85)_0%,rgba(10,15,30,0.55)_45%,rgba(10,15,30,0.15)_78%,transparent_100%)]" />
      {/* Soft headline halo */}
      <div className="absolute left-[8%] top-[38%] hidden h-[420px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.35),transparent_70%)] blur-2xl lg:block" />
      {/* Bottom vignette into page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

/* ---------- particles ---------- */

const PARTICLES = Array.from({ length: 22 }, (_, i) => {
  // deterministic pseudo-random so SSR + client match
  const r = (n: number) => ((Math.sin(i * 9.13 + n) + 1) / 2);
  return {
    left: `${r(1) * 100}%`,
    top: `${r(2) * 100}%`,
    size: 2 + r(3) * 4,
    delay: r(4) * 8,
    duration: 10 + r(5) * 12,
    opacity: 0.25 + r(6) * 0.45,
  };
});

function Particles() {
  return (
    <div className="absolute inset-0">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-drift-slow"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(37,99,235,0.35)",
          }}
        />
      ))}
    </div>
  );
}

/* ---------- panels (all English) ---------- */

function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}

function PanelHead({
  icon: Icon,
  title,
  meta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  meta?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-white/90">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
          {title}
        </span>
      </div>
      {meta && (
        <span className="text-[10px] font-medium text-white/50">{meta}</span>
      )}
    </div>
  );
}

function AnalyticsPanel() {
  const bars = [0.42, 0.66, 0.55, 0.82, 0.61, 0.9, 0.72];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <PanelShell>
      <PanelHead icon={BarChart3} title="Learning Analytics" meta="Last 7 days" />
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-2xl font-bold text-white">92.4%</span>
        <span className="text-[11px] font-medium text-emerald-300">+6.1%</span>
        <span className="ml-auto text-[10px] uppercase tracking-widest text-white/40">
          Completion
        </span>
      </div>
      <div className="mt-4 flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className="w-full origin-bottom rounded-t bg-gradient-to-t from-[#2563EB] to-[#14B8A6] animate-bar-grow"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 0.15}s` }}
            />
            <span className="text-[9px] text-white/40">{labels[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
        {[
          { k: "Learners", v: "12,480" },
          { k: "Courses", v: "184" },
          { k: "Avg. score", v: "87%" },
        ].map((m) => (
          <div key={m.k} className="rounded-md border border-white/10 bg-white/[0.04] p-2">
            <div className="text-white/50">{m.k}</div>
            <div className="mt-0.5 text-sm font-semibold text-white">{m.v}</div>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}

function AssessmentPanel() {
  const items = [
    { label: "Item 01 · Reading Comprehension", ok: true },
    { label: "Item 02 · Algebraic Reasoning", ok: true },
    { label: "Item 03 · Scientific Inquiry", ok: false },
    { label: "Item 04 · Data Interpretation", ok: true },
  ];
  return (
    <PanelShell>
      <PanelHead icon={CheckCircle2} title="Assessment Review" meta="24 items" />
      <div className="mt-3 space-y-2">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5"
          >
            <span className="truncate text-[11px] text-white/80">{it.label}</span>
            <span
              className={`ml-2 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] font-bold ${
                it.ok ? "bg-emerald-400/20 text-emerald-300" : "bg-amber-400/20 text-amber-300"
              }`}
            >
              {it.ok ? "✓" : "!"}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6]" />
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[10px] text-white/50">
        <span>Reviewed 17 / 24</span>
        <span>Difficulty · Adaptive</span>
      </div>
    </PanelShell>
  );
}

function AICoursePanel() {
  return (
    <PanelShell>
      <PanelHead icon={Sparkles} title="AI Course Author" meta="Draft" />
      <div className="mt-3 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-2">
        <FileText className="h-3.5 w-3.5 text-white/70" />
        <span className="truncate text-[11px] text-white/80">
          Module 3 · Introduction to Photosynthesis
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-[95%] rounded bg-white/15" />
        <div className="h-1.5 w-[82%] rounded bg-white/12" />
        <div className="h-1.5 w-[74%] rounded bg-white/10" />
        <div className="h-1.5 w-[58%] rounded bg-white/10" />
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1.5">
        <Sparkles className="h-3 w-3 text-emerald-300" />
        <span className="text-[10px] text-emerald-100">
          Generated 8 learning objectives
        </span>
      </div>
    </PanelShell>
  );
}

function KnowledgeGraphPanel() {
  return (
    <PanelShell>
      <PanelHead icon={Network} title="Knowledge Graph" />
      <svg viewBox="0 0 220 130" className="mt-2 h-28 w-full">
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {[
          ["30,90", "90,40"],
          ["90,40", "160,70"],
          ["160,70", "195,25"],
          ["90,40", "115,105"],
          ["115,105", "160,70"],
          ["30,90", "115,105"],
        ].map(([a, b], i) => {
          const [x1, y1] = a.split(",").map(Number);
          const [x2, y2] = b.split(",").map(Number);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#edge)"
              strokeWidth="1"
              strokeDasharray="260"
              className="animate-line-sweep"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          );
        })}
        {[
          [30, 90, "Algebra"],
          [90, 40, "Functions"],
          [160, 70, "Calculus"],
          [195, 25, "Limits"],
          [115, 105, "Geometry"],
        ].map(([x, y, label], i) => (
          <g key={i}>
            <circle cx={x as number} cy={y as number} r={4} fill="#fff" />
            <circle cx={x as number} cy={y as number} r={8} fill="#2563EB" fillOpacity="0.2" />
            <text
              x={(x as number) + 8}
              y={(y as number) + 3}
              className="fill-white/70"
              style={{ fontSize: 7 }}
            >
              {label as string}
            </text>
          </g>
        ))}
      </svg>
    </PanelShell>
  );
}

/* Not used externally, but kept for future scenes */
export const HeroPanelIcons = { BookOpen, GraduationCap, Play };