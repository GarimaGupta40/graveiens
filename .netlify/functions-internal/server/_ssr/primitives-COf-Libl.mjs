import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useMotionValue, n as useSpring, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-COf-Libl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Section({ id, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative py-24 lg:py-32", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 rounded-full border border-hairline bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-brand" }), children]
	});
}
function SectionHeader({ eyebrow, title, description, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mb-14 flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left"),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .6,
					ease: "easeOut"
				},
				className: "max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .6,
					delay: .08,
					ease: "easeOut"
				},
				className: "max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg",
				children: description
			})
		]
	});
}
function FadeUp({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .55,
			delay,
			ease: "easeOut"
		},
		className,
		children
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const mv = useMotionValue(0);
	const rounded = useTransform(useSpring(mv, {
		duration: 1600,
		bounce: 0
	}), (v) => to >= 1e3 ? `${Math.round(v / 1e3)}K` : `${Math.round(v)}`);
	(0, import_react.useEffect)(() => {
		if (inView) mv.set(to);
	}, [
		inView,
		to,
		mv
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, { children: rounded }), suffix]
	});
}
//#endregion
export { SectionHeader as a, Section as i, Eyebrow as n, FadeUp as r, Counter as t };
