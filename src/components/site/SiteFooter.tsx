import { Link } from "@tanstack/react-router";
import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { useState } from "react";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white">
                <span className="font-display text-base font-bold">G</span>
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                GravEiens
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Educational outsourcing and digital learning solutions for publishers,
              institutions, EdTech companies and enterprises worldwide.
            </p>

            <Newsletter />

            <div className="mt-8 flex gap-3">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <FooterCol
              title="Company"
              items={[
                { label: "About", to: "/about" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ]}
            />
            <FooterCol
              title="Explore"
              items={[
                { label: "Services", to: "/solutions" },
                { label: "Industries", to: "/industries" },
              ]}
            />
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                Contact
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 text-accent-teal" />
                  <span>info@graveiens.com</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 text-accent-teal" />
                  <span>+91 000 000 0000</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent-teal" />
                  <span>
                    GravEiens HQ · 4th Floor, Innovation Park
                    <br />
                    Sector 62, Noida 201309, India
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent-teal/70" />
                  <span className="text-white/60">
                    Additional presence · London · Singapore · New York
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GravEiens. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-white/70 hover:text-white"
            >
              Start a project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setSent(true);
      }}
      className="mt-7"
    >
      <label className="text-xs font-semibold uppercase tracking-wider text-white/50">
        Newsletter
      </label>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] p-1 pl-4 backdrop-blur">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-accent-teal hover:text-white"
        >
          {sent ? "Subscribed" : "Subscribe"}
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </form>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm text-white/75">
        {items.map((it) => (
          <li key={it.label}>
            <Link to={it.to} className="transition-colors hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
