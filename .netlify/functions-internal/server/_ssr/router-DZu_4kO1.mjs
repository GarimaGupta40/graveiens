import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Linkedin, E as Mail, L as Facebook, T as MapPin, X as ArrowUpRight, _ as Phone, i as Twitter, t as X, u as Send, w as Menu } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DZu_4kO1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BMT15g15.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var navItems = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/solutions",
		label: "Solutions"
	},
	{
		to: "/industries",
		label: "Industries"
	},
	{
		to: "/careers",
		label: "Careers"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteNavbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 w-full transition-all duration-300", scrolled ? "border-b border-hairline/70 bg-background/70 backdrop-blur-xl" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-white shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-bold",
							children: "G"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-bold tracking-tight text-ink",
						children: ["Grav", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "Eiens"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink",
						activeProps: { className: "text-ink" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-glow",
						children: ["Get in Touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden rounded-md p-2 text-ink",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-hairline bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4",
				children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-accent hover:text-ink",
					activeProps: { className: "bg-accent text-ink" },
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white",
					children: ["Get in Touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-hairline bg-ink text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-bold",
									children: "G"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-bold tracking-tight text-white",
								children: "GravEiens"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-white/70",
							children: "Educational outsourcing and digital learning solutions for publishers, institutions, EdTech companies and enterprises worldwide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex gap-3",
							children: [
								{
									Icon: Linkedin,
									href: "#"
								},
								{
									Icon: Twitter,
									href: "#"
								},
								{
									Icon: Facebook,
									href: "#"
								}
							].map(({ Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white",
								"aria-label": "social",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, i))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Company",
							items: [
								{
									label: "About",
									to: "/about"
								},
								{
									label: "Careers",
									to: "/careers"
								},
								{
									label: "Contact",
									to: "/contact"
								}
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Explore",
							items: [{
								label: "Solutions",
								to: "/solutions"
							}, {
								label: "Industries",
								to: "/industries"
							}]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-sm font-semibold uppercase tracking-wider text-white/50",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 text-accent-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "info@graveiens.com" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 text-accent-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 000 000 0000" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-accent-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"GravEiens HQ · 4th Floor, Innovation Park",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Sector 62, Noida 201309, India"
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-accent-teal/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/60",
										children: "Additional presence · London · Singapore · New York"
									})]
								})
							]
						})] })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" GravEiens. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-6 gap-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-white/60 transition-colors hover:text-white",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-white/60 transition-colors hover:text-white",
							children: "Terms & Conditions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-1 text-white/70 hover:text-white",
							children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
						})
					]
				})]
			})]
		})
	});
}
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			if (email) setSent(true);
		},
		className: "mt-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs font-semibold uppercase tracking-wider text-white/50",
			children: "Newsletter"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] p-1 pl-4 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "email",
				required: true,
				value: email,
				onChange: (e) => setEmail(e.target.value),
				placeholder: "you@company.com",
				className: "w-full flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-accent-teal hover:text-white",
				children: [sent ? "Subscribed" : "Subscribe", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" })]
			})]
		})]
	});
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "font-display text-sm font-semibold uppercase tracking-wider text-white/50",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-3 text-sm text-white/75",
		children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: it.to,
			className: "transition-colors hover:text-white",
			children: it.label
		}) }, it.label))
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "GravEiens — Educational Outsourcing & Digital Learning Solutions" },
			{
				name: "description",
				content: "GravEiens partners with publishers, institutions, EdTech companies and enterprises to deliver educational content, eLearning, multimedia, assessments and localization at global scale."
			},
			{
				name: "author",
				content: "GravEiens"
			},
			{
				property: "og:title",
				content: "GravEiens — Educational Outsourcing & Digital Learning Solutions"
			},
			{
				property: "og:description",
				content: "GravEiens partners with publishers, institutions, EdTech companies and enterprises to deliver educational content, eLearning, multimedia, assessments and localization at global scale."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "GravEiens — Educational Outsourcing & Digital Learning Solutions"
			},
			{
				name: "twitter:description",
				content: "GravEiens partners with publishers, institutions, EdTech companies and enterprises to deliver educational content, eLearning, multimedia, assessments and localization at global scale."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.jpg",
				type: "image/jpeg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./solutions-EfBh7qwQ.mjs");
var Route$5 = createFileRoute("/solutions")({
	head: () => ({ meta: [
		{ title: "Services — GravEiens" },
		{
			name: "description",
			content: "Educational content, eLearning, multimedia, assessments, localization, accessibility and more from GravEiens."
		},
		{
			property: "og:title",
			content: "Services — GravEiens"
		},
		{
			property: "og:description",
			content: "Comprehensive educational outsourcing and digital learning services."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./industries-DEEKrU6c.mjs");
var Route$4 = createFileRoute("/industries")({
	head: () => ({ meta: [
		{ title: "Industries — GravEiens" },
		{
			name: "description",
			content: "GravEiens serves publishers, K-12 schools, universities, EdTech companies, corporate learning teams and government organizations."
		},
		{
			property: "og:title",
			content: "Industries — GravEiens"
		},
		{
			property: "og:description",
			content: "Sectors GravEiens serves worldwide."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-qyRg3bQt.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — GravEiens" },
		{
			name: "description",
			content: "Contact GravEiens to discuss educational content, eLearning, multimedia and digital learning projects."
		},
		{
			property: "og:title",
			content: "Contact — GravEiens"
		},
		{
			property: "og:description",
			content: "Start a conversation with GravEiens."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./careers-B184W_pG.mjs");
var Route$2 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: "Careers — GravEiens" },
		{
			name: "description",
			content: "Join GravEiens and help shape the future of education."
		},
		{
			property: "og:title",
			content: "Careers — GravEiens"
		},
		{
			property: "og:description",
			content: "Open roles at GravEiens."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-DKRrKczO.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — GravEiens" },
		{
			name: "description",
			content: "GravEiens is an educational outsourcing and digital learning solutions company partnering with organizations worldwide."
		},
		{
			property: "og:title",
			content: "About Us — GravEiens"
		},
		{
			property: "og:description",
			content: "Our story, mission and values."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DVbsRuk7.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "GravEiens — Educational Outsourcing & Digital Learning Solutions" },
		{
			name: "description",
			content: "GravEiens partners with publishers, institutions, EdTech companies and enterprises to deliver educational content, eLearning, multimedia, assessments and localization at global scale."
		},
		{
			property: "og:title",
			content: "GravEiens — Educational Outsourcing & Digital Learning Solutions"
		},
		{
			property: "og:description",
			content: "GravEiens partners with publishers, institutions, EdTech companies and enterprises to deliver educational content, eLearning, multimedia, assessments and localization at global scale."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SolutionsRoute = Route$5.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$6
});
var IndustriesRoute = Route$4.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var CareersRoute = Route$2.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute,
	CareersRoute,
	ContactRoute,
	IndustriesRoute,
	SolutionsRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
