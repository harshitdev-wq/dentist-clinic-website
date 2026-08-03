import { Phone, Clock, ArrowRight } from "lucide-react";
import { clinic, emergencies } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Emergency() {
  return (
    <Section
      id="emergency"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-red-500/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-500/15 blur-[120px]"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-red-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
              Emergency dental care
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
              In pain right now? We'll see you{" "}
              <span className="text-gold-soft">today.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-white/70 text-pretty">
              Dental emergencies don't wait — and neither do we. We reserve
              same-day appointments every weekday and operate an after-hours line
              so you're never left suffering. Call us and we'll guide you through
              the next steps immediately.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={clinic.phoneHref} variant="light" size="lg">
                <Phone className="h-[1.05rem] w-[1.05rem]" />
                {clinic.phone}
              </Button>
              <Button href="#appointment" variant="glass" size="lg">
                Request same-day visit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-7 flex items-center gap-2.5 text-sm text-white/70">
              <Clock className="h-4 w-4 text-brand-300" />
              <span>Average callback time: under 15 minutes</span>
            </div>
          </Reveal>
        </div>

        {/* Right — reasons grid */}
        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {emergencies.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <h3 className="text-sm font-semibold text-white">
                    {e.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-white/60">{e.blurb}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
