import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Section, n as Eyebrow, r as FadeUp } from "./primitives-COf-Libl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Building2, K as Briefcase, U as CircleCheck, Z as ArrowRight, f as School, j as Landmark, p as Rocket, r as University } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-DEEKrU6c.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: Building2,
		title: "Educational Publishers",
		desc: "Print-to-digital transformation, content operations and rich media integrations.",
		features: ["Digital Workflows", "Asset Management"]
	},
	{
		icon: School,
		title: "Schools",
		desc: "K-12 curriculum, teacher resources and student-facing learning experiences.",
		features: ["Interactive Curriculum", "Teacher Tools"]
	},
	{
		icon: University,
		title: "Universities",
		desc: "Courseware design, program development and digital student journeys.",
		features: ["Custom Courseware", "Student Portals"]
	},
	{
		icon: Rocket,
		title: "EdTech Companies",
		desc: "Product content, R&D partnerships and go-to-market learning assets.",
		features: ["Rapid Prototyping", "Scalable Content"]
	},
	{
		icon: Briefcase,
		title: "Corporate Learning",
		desc: "Onboarding, compliance, leadership and skill development programs.",
		features: ["Compliance Modules", "Leadership Training"]
	},
	{
		icon: Landmark,
		title: "Government Organizations",
		desc: "Public education initiatives, skill missions and large-scale rollouts.",
		features: ["Public Initiatives", "Skill Missions"]
	}
];
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "relative overflow-hidden pb-10 pt-24 sm:pt-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand/5 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeUp, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Industries" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl",
						children: [
							"Partnering across the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "education ecosystem"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl",
						children: "We work with the organizations that shape how the world learns — from global publishers to public education programs."
					})
				] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-brand/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-hairline group-hover:bg-brand group-hover:text-white transition-colors duration-300 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "relative mt-8 font-display text-xl font-semibold text-ink",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mt-3 flex-grow text-base leading-relaxed text-ink-muted",
								children: it.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "relative mt-6 space-y-2",
								children: it.features.map((feature, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-sm text-ink-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-brand/70" }), feature]
								}, idx))
							})
						]
					})
				}, it.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-20 text-center text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-brand/30 blur-[100px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[100px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl font-bold sm:text-5xl",
								children: "Not sure where you fit?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg text-white/70",
								children: "We tailor engagements to your unique context, organizational goals, and delivery model."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition-all hover:scale-105 hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/25",
								children: ["Talk to our experts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})
				]
			}) })
		})
	] });
}
//#endregion
export { IndustriesPage as component };
