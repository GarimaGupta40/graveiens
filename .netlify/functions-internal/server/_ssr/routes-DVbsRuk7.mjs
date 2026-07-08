import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as SectionHeader, i as Section, n as Eyebrow, r as FadeUp, t as Counter } from "./primitives-COf-Libl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Languages, B as Compass, C as MicVocal, F as Film, G as Building2, H as ClipboardCheck, I as FileText, J as BadgeCheck, K as Briefcase, N as Handshake, P as GraduationCap, Q as Accessibility, R as Earth, S as Minus, U as CircleCheck, W as ChartColumn, X as ArrowUpRight, Z as ArrowRight, a as Truck, c as Sparkles, d as Search, f as School, g as Play, h as Plus, j as Landmark, k as Layers, l as ShieldCheck, m as Quote, n as Users, p as Rocket, q as BookOpen, r as University, s as Star, v as Palette, x as MonitorPlay, y as Network, z as Cpu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DVbsRuk7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_illustration_default = "/assets/hero-illustration-Dtjh3H31.png";
/**
* HeroBackdrop
* ------------
* Cinematic animated background for the hero. Rendered as real, English-only
* educational-technology UI (LMS dashboards, analytics, knowledge graph,
* assessments, AI-authoring), so nothing is ever unreadable, foreign or
* generic stock footage. Motion is slow, elegant and continuous.
*/
function HeroBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-charcoal" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 h-full w-full object-cover",
				src: "/hero-bg.mp4",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-mesh opacity-40 mix-blend-screen" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.10]",
				style: {
					backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
					backgroundSize: "56px 56px",
					maskImage: "radial-gradient(ellipse 70% 60% at 60% 50%, black 40%, transparent 85%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.45),transparent_70%)] animate-fade-pulse" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(20,184,166,0.28),transparent_70%)] animate-fade-pulse" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: 1.2,
					delay: .2
				},
				className: "absolute right-[6%] top-[14%] hidden w-[340px] lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-drift-slow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsPanel, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 40
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: 1.2,
					delay: .45
				},
				className: "absolute right-[22%] bottom-[10%] hidden w-[300px] xl:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-drift-slower",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentPanel, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: 1.2,
					delay: .7
				},
				className: "absolute right-[3%] bottom-[6%] hidden w-[280px] lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-drift-slow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AICoursePanel, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: 1.4,
					delay: .9
				},
				className: "absolute right-[26%] top-[6%] hidden w-[220px] xl:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-drift-slower",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeGraphPanel, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(17,24,39,0.72) 0%, rgba(17,24,39,0.55) 50%, rgba(17,24,39,0.7) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(100deg,rgba(10,15,30,0.85)_0%,rgba(10,15,30,0.55)_45%,rgba(10,15,30,0.15)_78%,transparent_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[8%] top-[38%] hidden h-[420px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.35),transparent_70%)] blur-2xl lg:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" })
		]
	});
}
var PARTICLES = Array.from({ length: 22 }, (_, i) => {
	const r = (n) => (Math.sin(i * 9.13 + n) + 1) / 2;
	return {
		left: `${r(1) * 100}%`,
		top: `${r(2) * 100}%`,
		size: 2 + r(3) * 4,
		delay: r(4) * 8,
		duration: 10 + r(5) * 12,
		opacity: .25 + r(6) * .45
	};
});
function Particles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0",
		children: PARTICLES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute rounded-full bg-white animate-drift-slow",
			style: {
				left: p.left,
				top: p.top,
				width: p.size,
				height: p.size,
				opacity: p.opacity,
				animationDelay: `${p.delay}s`,
				animationDuration: `${p.duration}s`,
				boxShadow: "0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(37,99,235,0.35)"
			}
		}, i))
	});
}
function PanelShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative",
			children
		})]
	});
}
function PanelHead({ icon: Icon, title, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-7 w-7 place-items-center rounded-md bg-white/10 text-white/90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80",
				children: title
			})]
		}), meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] font-medium text-white/50",
			children: meta
		})]
	});
}
function AnalyticsPanel() {
	const bars = [
		.42,
		.66,
		.55,
		.82,
		.61,
		.9,
		.72
	];
	const labels = [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			icon: ChartColumn,
			title: "Learning Analytics",
			meta: "Last 7 days"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-baseline gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-bold text-white",
					children: "92.4%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-medium text-emerald-300",
					children: "+6.1%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto text-[10px] uppercase tracking-widest text-white/40",
					children: "Completion"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex h-24 items-end gap-2",
			children: bars.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full origin-bottom rounded-t bg-gradient-to-t from-[#2563EB] to-[#14B8A6] animate-bar-grow",
					style: {
						height: `${h * 100}%`,
						animationDelay: `${i * .15}s`
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] text-white/40",
					children: labels[i]
				})]
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid grid-cols-3 gap-2 text-[10px]",
			children: [
				{
					k: "Learners",
					v: "12,480"
				},
				{
					k: "Courses",
					v: "184"
				},
				{
					k: "Avg. score",
					v: "87%"
				}
			].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-white/10 bg-white/[0.04] p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-white/50",
					children: m.k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 text-sm font-semibold text-white",
					children: m.v
				})]
			}, m.k))
		})
	] });
}
function AssessmentPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			icon: CircleCheck,
			title: "Assessment Review",
			meta: "24 items"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-2",
			children: [
				{
					label: "Item 01 · Reading Comprehension",
					ok: true
				},
				{
					label: "Item 02 · Algebraic Reasoning",
					ok: true
				},
				{
					label: "Item 03 · Scientific Inquiry",
					ok: false
				},
				{
					label: "Item 04 · Data Interpretation",
					ok: true
				}
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-[11px] text-white/80",
					children: it.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `ml-2 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] font-bold ${it.ok ? "bg-emerald-400/20 text-emerald-300" : "bg-amber-400/20 text-amber-300"}`,
					children: it.ok ? "✓" : "!"
				})]
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 h-1.5 overflow-hidden rounded-full bg-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-[68%] rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6]" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1.5 flex items-center justify-between text-[10px] text-white/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reviewed 17 / 24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Difficulty · Adaptive" })]
		})
	] });
}
function AICoursePanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			icon: Sparkles,
			title: "AI Course Author",
			meta: "Draft"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5 text-white/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-[11px] text-white/80",
				children: "Module 3 · Introduction to Photosynthesis"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 space-y-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-[95%] rounded bg-white/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-[82%] rounded bg-white/12" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-[74%] rounded bg-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-[58%] rounded bg-white/10" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-emerald-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] text-emerald-100",
				children: "Generated 8 learning objectives"
			})]
		})
	] });
}
function KnowledgeGraphPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
		icon: Network,
		title: "Knowledge Graph"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 130",
		className: "mt-2 h-28 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "edge",
				x1: "0",
				x2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#2563EB",
					stopOpacity: "0.9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#14B8A6",
					stopOpacity: "0.9"
				})]
			}) }),
			[
				["30,90", "90,40"],
				["90,40", "160,70"],
				["160,70", "195,25"],
				["90,40", "115,105"],
				["115,105", "160,70"],
				["30,90", "115,105"]
			].map(([a, b], i) => {
				const [x1, y1] = a.split(",").map(Number);
				const [x2, y2] = b.split(",").map(Number);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1,
					y1,
					x2,
					y2,
					stroke: "url(#edge)",
					strokeWidth: "1",
					strokeDasharray: "260",
					className: "animate-line-sweep",
					style: { animationDelay: `${i * .4}s` }
				}, i);
			}),
			[
				[
					30,
					90,
					"Algebra"
				],
				[
					90,
					40,
					"Functions"
				],
				[
					160,
					70,
					"Calculus"
				],
				[
					195,
					25,
					"Limits"
				],
				[
					115,
					105,
					"Geometry"
				]
			].map(([x, y, label], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: x,
					cy: y,
					r: 4,
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: x,
					cy: y,
					r: 8,
					fill: "#2563EB",
					fillOpacity: "0.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: x + 8,
					y: y + 3,
					className: "fill-white/70",
					style: { fontSize: 7 },
					children: label
				})
			] }, i))
		]
	})] });
}
var services = [
	{
		icon: BookOpen,
		title: "Educational Content Development",
		desc: "Curriculum-aligned learning content across K-12, higher ed and corporate."
	},
	{
		icon: ClipboardCheck,
		title: "Assessment Development",
		desc: "Item writing, psychometrics and adaptive assessments at scale."
	},
	{
		icon: MonitorPlay,
		title: "eLearning Solutions",
		desc: "SCORM, xAPI and interactive courseware for LMS deployment."
	},
	{
		icon: Film,
		title: "2D & 3D Animation",
		desc: "Explainers, character animation and immersive learning visuals."
	},
	{
		icon: MicVocal,
		title: "Audio & Video Production",
		desc: "Studio-grade lectures, podcasts and multimedia storytelling."
	},
	{
		icon: Earth,
		title: "Website Development",
		desc: "Educational portals, LMS integrations and product experiences."
	},
	{
		icon: Languages,
		title: "Localization & Translation",
		desc: "Multi-language adaptation across 40+ locales with cultural nuance."
	},
	{
		icon: Accessibility,
		title: "Accessibility & Alt Text",
		desc: "WCAG-compliant remediation, alt text and inclusive design."
	},
	{
		icon: GraduationCap,
		title: "Online Tutoring Support",
		desc: "Backend academic support, subject specialists and mentoring."
	},
	{
		icon: Sparkles,
		title: "Skill Development",
		desc: "Job-ready programs, workforce training and micro-credentials."
	}
];
var whyChoose = [
	{
		icon: Users,
		title: "Experienced Subject Matter Experts",
		desc: "A curated bench of educators, designers and technologists."
	},
	{
		icon: Layers,
		title: "End-to-End Educational Solutions",
		desc: "From concept to LMS delivery — one accountable partner."
	},
	{
		icon: ShieldCheck,
		title: "High Quality Assurance",
		desc: "Multi-stage QA with editorial, pedagogical and technical review."
	},
	{
		icon: Cpu,
		title: "Innovative Technology",
		desc: "AI-assisted authoring, xAPI analytics and modern web stacks."
	},
	{
		icon: Rocket,
		title: "Scalable Project Delivery",
		desc: "Elastic teams that scale from pilots to enterprise programs."
	},
	{
		icon: Handshake,
		title: "Client-Centric Collaboration",
		desc: "Transparent workflows, agile sprints and shared success metrics."
	}
];
var process = [
	{
		icon: Search,
		title: "Discover",
		desc: "Understand learners, goals and constraints."
	},
	{
		icon: Compass,
		title: "Plan",
		desc: "Blueprint the solution, scope and roadmap."
	},
	{
		icon: Palette,
		title: "Design & Develop",
		desc: "Craft content, media and experiences."
	},
	{
		icon: BadgeCheck,
		title: "Quality Review",
		desc: "Editorial, pedagogical and technical QA."
	},
	{
		icon: Truck,
		title: "Deliver & Support",
		desc: "Ship, integrate and iterate over time."
	}
];
var industries = [
	{
		icon: Building2,
		title: "Educational Publishers",
		desc: "Print-to-digital transformation and content ops."
	},
	{
		icon: School,
		title: "Schools",
		desc: "K-12 curriculum, resources and teacher enablement."
	},
	{
		icon: University,
		title: "Universities",
		desc: "Courseware, program design and student experiences."
	},
	{
		icon: Rocket,
		title: "EdTech Companies",
		desc: "Product content, R&D and go-to-market assets."
	},
	{
		icon: Briefcase,
		title: "Corporate Learning",
		desc: "Onboarding, compliance and leadership programs."
	},
	{
		icon: Landmark,
		title: "Government Organizations",
		desc: "Public education initiatives and skill missions."
	}
];
var testimonials = [
	{
		quote: "GravEiens has been an extension of our editorial team. They deliver at a scale and quality most vendors can't match.",
		name: "Priya Menon",
		role: "Director of Content",
		org: "Global Education Publisher"
	},
	{
		quote: "Their multimedia team took our courses to another level. Learner engagement metrics jumped within a quarter.",
		name: "Daniel Okafor",
		role: "Head of Product",
		org: "EdTech Scale-up"
	},
	{
		quote: "From accessibility remediation to localization, GravEiens is the partner we recommend to peers across the sector.",
		name: "Sara Lindqvist",
		role: "VP Learning",
		org: "Fortune 500 Enterprise"
	}
];
var faqs = [
	{
		q: "What industries do you serve?",
		a: "We work with educational publishers, K-12 and higher education institutions, EdTech companies, corporate learning teams and government organizations across the globe."
	},
	{
		q: "Can you create customized educational content?",
		a: "Yes. Every engagement is tailored to your curriculum, learner profile, brand and delivery platform — from bespoke authoring to full white-label content programs."
	},
	{
		q: "Do you provide multimedia production?",
		a: "We produce 2D/3D animation, live-action video, studio audio, motion graphics and interactive media — end-to-end from script to final master."
	},
	{
		q: "Can GravEiens handle large-scale educational projects?",
		a: "Absolutely. Our delivery model is built for scale, with elastic teams, robust QA and program-management rigor for multi-year engagements."
	},
	{
		q: "How can we get started?",
		a: "Reach out via our contact form or book a consultation. We'll scope the opportunity, share a tailored proposal and align on a delivery plan."
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoWeAre, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBackdrop, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-5 pb-24 pt-20 lg:px-8 lg:pb-36 lg:pt-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .5 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-brand" }), "Educational Outsourcing · Since 2014"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .05
							},
							className: "mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-[68px]",
							children: [
								"Empowering Education Through",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent",
									children: "Innovative Digital Learning"
								}),
								" ",
								"Solutions"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .15
							},
							className: "mt-7 max-w-2xl text-lg leading-relaxed text-white/85",
							children: "GravEiens partners with publishers, educational institutions, EdTech companies, and enterprises to create high-quality digital learning solutions that deliver measurable educational impact."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .25
							},
							className: "mt-9 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions",
								className: "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-brand hover:text-white hover:shadow-glow",
								children: ["Explore Solutions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/60 hover:bg-white/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), "Book a Consultation"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .6,
								delay: .4
							},
							className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-cyan-300" }), " ISO-aligned QA"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accessibility, { className: "h-4 w-4 text-cyan-300" }), " WCAG 2.1 AA"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4 text-cyan-300" }), " Delivered in 40+ languages"]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" })
		]
	});
}
function WhoWeAre() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-14 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Who We Are" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 max-w-xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl",
						children: [
							"A trusted partner in",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand",
								children: "digital learning"
							}),
							" at global scale."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-ink-muted",
						children: "GravEiens is an educational outsourcing and digital learning solutions company. We work alongside publishers, universities, EdTech companies, corporate learning teams and government organizations to design, develop and deliver learning experiences that create measurable impact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: [
							{
								icon: BookOpen,
								label: "Publishers & Institutions"
							},
							{
								icon: Rocket,
								label: "EdTech Innovators"
							},
							{
								icon: Briefcase,
								label: "Corporate Learning"
							},
							{
								icon: Landmark,
								label: "Government Programs"
							}
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl border border-hairline bg-white p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-lg bg-accent text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-ink",
								children: p.label
							})]
						}, p.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-glow",
							children: ["About GravEiens", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[32px] bg-gradient-brand opacity-10 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-3xl border border-hairline bg-white p-8 shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [
								{
									icon: Users,
									k: "Global team",
									v: "Educators, designers & engineers"
								},
								{
									icon: ShieldCheck,
									k: "Quality first",
									v: "Multi-stage editorial QA"
								},
								{
									icon: Cpu,
									k: "Modern tech",
									v: "AI-assisted authoring & xAPI"
								},
								{
									icon: Languages,
									k: "40+ languages",
									v: "Culturally adapted content"
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-hairline bg-surface p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 font-display text-sm font-semibold text-ink",
										children: c.k
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-xs leading-relaxed text-ink-muted",
										children: c.v
									})
								]
							}, c.k))
						})
					})]
				})
			})]
		})
	});
}
function WhatWeDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "services",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "What We Do",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Comprehensive Educational Solutions Under One Roof" }),
				description: "We combine educational expertise, creative design, technology and innovation to help organizations develop engaging learning experiences that educate, inspire and deliver measurable results."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 grid items-center gap-10 rounded-3xl border border-hairline bg-gradient-to-br from-surface via-white to-accent/40 p-6 shadow-card lg:grid-cols-12 lg:gap-14 lg:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Featured Solution" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl",
							children: [
								"A connected ecosystem for",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand",
									children: "modern learning"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-ink-muted",
							children: "From content authoring and multimedia to assessments, localization and LMS delivery — every capability plugs into one accountable delivery model, purpose-built for publishers, EdTech and enterprise learning teams."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: [
								{
									icon: Sparkles,
									label: "AI-assisted authoring workflows"
								},
								{
									icon: Layers,
									label: "Content + tech under one roof"
								},
								{
									icon: Earth,
									label: "40+ languages, culturally adapted"
								},
								{
									icon: ShieldCheck,
									label: "Multi-stage editorial & tech QA"
								}
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-xl border border-hairline bg-white/80 p-3.5 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-lg bg-accent text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-ink",
									children: h.label
								})]
							}, h.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions",
								className: "group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-glow",
								children: ["Explore all solutions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[36px] bg-gradient-brand opacity-15 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[28px] border border-hairline bg-white shadow-elegant",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_illustration_default,
								alt: "GravEiens digital learning ecosystem — content, multimedia, assessments and AI-enabled workflows",
								width: 1280,
								height: 1280,
								loading: "lazy",
								className: "h-auto w-full"
							})
						})]
					})
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-accent text-brand transition-colors group-hover:bg-gradient-brand group-hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-semibold text-ink",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-muted",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions",
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand",
								children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					})
				}, s.title))
			})
		]
	});
}
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "bg-surface-alt",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Why GravEiens",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Why Leading Organizations Choose GravEiens" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: whyChoose.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
				delay: i * .04,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold text-ink",
							children: f.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm leading-relaxed text-ink-muted",
							children: f.desc
						})] })
					]
				})
			}, f.title))
		})]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
		eyebrow: "Our Process",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Our Proven Process" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-hairline to-transparent lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-5",
			children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-card ring-1 ring-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5 text-brand" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-4 text-xs font-semibold uppercase tracking-widest text-brand",
							children: ["Step 0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-lg font-semibold text-ink",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm leading-relaxed text-ink-muted",
							children: p.desc
						})
					]
				})
			}, p.title))
		})]
	})] });
}
function Impact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-charcoal py-24 text-white lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.35),transparent_60%),radial-gradient(45%_60%_at_100%_100%,rgba(20,184,166,0.2),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_50%,transparent_90%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our Impact" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl",
						children: "Creating Measurable Educational Impact"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5",
					children: [
						{
							value: 200,
							suffix: "+",
							label: "Projects Delivered"
						},
						{
							value: 4e5,
							suffix: "+",
							label: "Educational Solutions"
						},
						{
							value: 2e4,
							suffix: "+",
							label: "Animated Learning Videos"
						},
						{
							value: 10,
							suffix: "+",
							label: "Years of Excellence"
						},
						{
							value: 40,
							suffix: "+",
							label: "Languages Supported"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.35),transparent_70%)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative font-display text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: s.value,
										suffix: s.suffix
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60",
									children: s.label
								})
							]
						})
					}, s.label))
				})]
			})
		]
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "bg-surface-blue",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Industries",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Industries We Empower" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: industries.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/industries",
					className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-7 w-7" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-semibold text-ink",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-ink-muted",
								children: it.desc
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand",
							children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						})
					]
				})
			}, it.title))
		})]
	});
}
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	const t = testimonials[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
		eyebrow: "Testimonials",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "What Our Clients Say" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-hairline bg-white p-10 shadow-elegant lg:p-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
				className: "absolute right-8 top-8 h-24 w-24 text-brand/10",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex gap-1 text-brand",
				children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "relative mt-6 font-display text-2xl leading-snug text-ink sm:text-3xl",
				children: [
					"\"",
					t.quote,
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8 flex items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-brand font-display text-sm font-bold text-white shadow-glow ring-2 ring-white",
						children: t.name.split(" ").map((n) => n[0]).join("")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold text-ink",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-ink-muted",
						children: [
							t.role,
							" · ",
							t.org
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: testimonials.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI(k),
						"aria-label": `Testimonial ${k + 1}`,
						className: `h-2 rounded-full transition-all ${i === k ? "w-8 bg-ink" : "w-2 bg-hairline hover:bg-ink-muted/40"}`
					}, k))
				})]
			})
		]
	}) })] });
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "FAQ",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Frequently Asked Questions" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-white",
			children: faqs.map((f, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(isOpen ? null : i),
					className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base font-semibold text-ink",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-hairline text-ink-muted",
						children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: false,
					animate: {
						height: isOpen ? "auto" : 0,
						opacity: isOpen ? 1 : 0
					},
					transition: {
						duration: .3,
						ease: "easeOut"
					},
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-6 pb-6 text-sm leading-relaxed text-ink-muted",
						children: f.a
					})
				})] }, f.q);
			})
		})]
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl border border-brand/15 bg-cta-soft px-6 py-16 sm:px-14 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(50%_60%_at_10%_0%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(60%_70%_at_100%_100%,rgba(20,184,166,0.14),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(37,99,235,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_85%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Let's collaborate" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl",
						children: "Let's Build Exceptional Learning Experiences Together"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-ink-muted sm:text-lg",
						children: "Whether you're developing educational content, digital learning platforms, multimedia assets or complete learning solutions, GravEiens is ready to help you transform your vision into reality."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-9 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-glow",
							children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						})
					})
				]
			})
		]
	}) }) });
}
//#endregion
export { HomePage as component };
