import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/utils/cn";

export function Services() {
  return (
    <Section id="services" className="bg-sand/60 py-20 sm:py-28">
      <SectionHeading
        eyebrow="What we do"
        title="Complete care, beautifully delivered"
        subtitle="Preventive, cosmetic and restorative dentistry — all performed by specialists, all under one calm, modern roof."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <article
              className={cn(
                "group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1",
                s.accent
                  ? "border-brand-700 bg-brand-700 text-white shadow-lift"
                  : "border-ink/8 bg-white shadow-soft hover:shadow-card",
              )}
            >
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl",
                  s.accent
                    ? "bg-white/15 text-white"
                    : "bg-brand-50 text-brand-700",
                )}
              >
                <s.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>

              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p
                className={cn(
                  "mt-2.5 text-sm leading-relaxed",
                  s.accent ? "text-white/80" : "text-ink/65",
                )}
              >
                {s.blurb}
              </p>

              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "h-4 w-4 shrink-0",
                        s.accent ? "text-brand-200" : "text-brand-500",
                      )}
                      strokeWidth={2.5}
                    />
                    <span className={s.accent ? "text-white/85" : "text-ink/70"}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#appointment"
                className={cn(
                  "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
                  s.accent
                    ? "text-white"
                    : "text-brand-700 hover:text-brand-800",
                )}
              >
                Book this service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
