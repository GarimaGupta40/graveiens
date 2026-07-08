import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as Section, n as Eyebrow, r as FadeUp } from "./primitives-COf-Libl.mjs";
import { E as Mail, T as MapPin, U as CircleCheck, _ as Phone, u as Send } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-qyRg3bQt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-5 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl",
				children: ["Let's start a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-brand",
					children: "conversation"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg leading-relaxed text-ink-muted",
				children: "Share a few details and we'll get back within one business day."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-5",
				children: [
					{
						Icon: Mail,
						label: "Email",
						value: "info@graveiens.com"
					},
					{
						Icon: Phone,
						label: "Phone",
						value: "+91 000 000 0000"
					},
					{
						Icon: MapPin,
						label: "Global",
						value: "Serving clients worldwide"
					}
				].map(({ Icon, label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4 rounded-2xl border border-hairline bg-white p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-ink-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold text-ink",
						children: value
					})] })]
				}, label))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				setSent(true);
			},
			className: "rounded-3xl border border-hairline bg-white p-8 shadow-card",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 place-items-center rounded-full bg-accent text-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-bold text-ink",
						children: "Thanks — we'll be in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-muted",
						children: "Our team will respond within one business day."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						name: "name",
						placeholder: "Jane Cooper",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Work email",
						name: "email",
						type: "email",
						placeholder: "jane@company.com",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Company",
						name: "company",
						placeholder: "Acme Publishing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-muted",
						children: "What can we help with?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						rows: 5,
						className: "w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10",
						placeholder: "Tell us about your project…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-glow",
						children: ["Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
					})
				]
			})
		}) })]
	}) });
}
function Field({ label, name, type = "text", placeholder, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-muted",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		placeholder,
		required,
		className: "w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
	})] });
}
//#endregion
export { ContactPage as component };
