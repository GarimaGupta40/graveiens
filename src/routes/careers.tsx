import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, FadeUp } from "@/components/site/primitives";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";

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
      <Section className="pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Build a career that <span className="text-gradient-brand">changes how the world learns</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            We're a global team of educators, designers, technologists and storytellers. If you
            care about craft and impact, we'd love to meet you.
          </p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="overflow-hidden rounded-2xl border border-hairline bg-white">
          {roles.map((r, i) => (
            <FadeUp key={r.title} delay={i * 0.03}>
              <Link
                to="/contact"
                className="group flex items-center justify-between gap-4 border-b border-hairline px-6 py-6 last:border-b-0 hover:bg-surface"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{r.title}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
                    <span>{r.team}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {r.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {r.loc}</span>
                  </div>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ink-muted transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  );
}
