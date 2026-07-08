import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Section, n as Eyebrow, r as FadeUp } from "./primitives-COf-Libl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as MapPin, V as Clock, X as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-B184W_pG.js
var import_jsx_runtime = require_jsx_runtime();
var roles = [
	{
		title: "Instructional Designer",
		team: "Content",
		type: "Full-time",
		loc: "Remote"
	},
	{
		title: "Senior 2D Animator",
		team: "Multimedia",
		type: "Full-time",
		loc: "Hybrid"
	},
	{
		title: "Frontend Engineer",
		team: "Technology",
		type: "Full-time",
		loc: "Remote"
	},
	{
		title: "Assessment Specialist",
		team: "Assessments",
		type: "Full-time",
		loc: "Remote"
	},
	{
		title: "Localization Project Manager",
		team: "Localization",
		type: "Full-time",
		loc: "Hybrid"
	},
	{
		title: "Accessibility Specialist",
		team: "Content",
		type: "Full-time",
		loc: "Remote"
	}
];
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Careers" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl",
					children: ["Build a career that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "changes how the world learns"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed text-ink-muted",
					children: "We're a global team of educators, designers, technologists and storytellers. If you care about craft and impact, we'd love to meet you."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-2xl border border-hairline bg-white",
			children: roles.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
				delay: i * .03,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "group flex items-center justify-between gap-4 border-b border-hairline px-6 py-6 last:border-b-0 hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold text-ink",
						children: r.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.team }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
									" ",
									r.type
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
									" ",
									r.loc
								]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-full border border-hairline text-ink-muted transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
					})]
				})
			}, r.title))
		})
	})] });
}
//#endregion
export { CareersPage as component };
