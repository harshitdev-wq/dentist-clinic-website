import { useState, type FormEvent, type ReactElement } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { cn } from "@/utils/cn";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Cosmetic dentistry", href: "#services" },
      { label: "Invisalign", href: "#services" },
      { label: "Dental implants", href: "#services" },
      { label: "Teeth whitening", href: "#services" },
      { label: "Emergency care", href: "#emergency" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "About the studio", href: "#about" },
      { label: "Meet the dentists", href: "#team" },
      { label: "Why choose us", href: "#why" },
      { label: "Smile gallery", href: "#gallery" },
      { label: "Patient reviews", href: "#testimonials" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Book appointment", href: "#appointment" },
      { label: "Insurance accepted", href: "#contact" },
      { label: "FAQs", href: "#faq" },
      { label: "Contact us", href: "#contact" },
    ],
  },
];

type IconCmp = (props: { className?: string }) => ReactElement;

const socials: { icon: IconCmp; label: string; href: string }[] = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: XIcon, label: "Twitter", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(valid ? "success" : "error");
    if (valid) setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-white/60">
              {clinic.name} is a modern dental studio in {clinic.address.city},{" "}
              {clinic.address.region} — blending gentle, evidence-based care
              with a calm, design-led experience.
            </p>

            <form onSubmit={submit} className="mt-7 max-w-sm" noValidate>
              <label
                htmlFor="newsletter"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50"
              >
                Smile newsletter
              </label>
              <div className="mt-2.5 flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="you@email.com"
                  aria-invalid={status === "error"}
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:bg-white/10 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
                >
                  Join
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p
                aria-live="polite"
                className={cn(
                  "mt-2 min-h-[1.1rem] text-xs",
                  status === "success" && "text-brand-300",
                  status === "error" && "text-red-300",
                  status === "idle" && "text-white/40",
                )}
              >
                {status === "success"
                  ? "You're on the list — welcome to Lumina! 🦷"
                  : status === "error"
                    ? "Please enter a valid email address."
                    : "Oral-care tips & offers. No spam, unsubscribe anytime."}
              </p>
            </form>

            <div className="mt-7 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-brand-500 hover:text-white"
                >
                  <s.icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                Visit the studio
              </h3>
              <ul className="mt-4 grid gap-3 text-sm text-white/65 sm:grid-cols-2">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span>
                    {clinic.address.line1}
                    <br />
                    {clinic.address.city}, {clinic.address.region}{" "}
                    {clinic.address.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-brand-300" />
                  <a href={clinic.phoneHref} className="hover:text-white">
                    {clinic.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-brand-300" />
                  <a href={`mailto:${clinic.email}`} className="hover:text-white">
                    {clinic.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span>
                    Mon–Fri 8am–6pm
                    <br />
                    Sat 9am–2pm
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/50">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
            <span className="hidden text-white/30 sm:inline">·</span>
            <span>Crafted in {clinic.address.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
