import { ArrowRight, Check } from "lucide-react";
import { images } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const points = [
  "Calm, spa-like studios designed to ease anxiety",
  "All specialists under one roof — no referrals",
  "Transparent pricing with flexible payment plans",
];

export function About() {
  return (
    <Section id="about" className="py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image collage */}
        <Reveal className="order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-ink/5 shadow-card">
              <img
                src={images.aboutInterior}
                alt="Bright, modern interior of the Lumina Dental Studio treatment area"
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-3 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-lift sm:block sm:w-52">
              <img
                src={images.aboutCare}
                alt="A dentist gently speaking with a relaxed patient"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Stat badge */}
            <div className="absolute -left-3 bottom-6 rounded-2xl bg-brand-600 px-5 py-4 text-white shadow-lift sm:-left-6">
              <p className="font-display text-2xl font-semibold leading-none">18+</p>
              <p className="mt-1 text-xs text-white/80">years of care</p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-2">
          <SectionHeading
            align="left"
            eyebrow="About the studio"
            title="Dentistry designed around how you actually feel."
            subtitle="Since 2007, Lumina Dental Studio has reimagined the dental visit — trading clinical stress for warmth, clarity and craft. Every detail, from the noise-cancelling headphones to our 3D smile previews, exists for one reason: your comfort."
          />

          <div className="mt-8 space-y-3.5">
            {points.map((p, i) => (
              <Reveal key={p} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[0.97rem] leading-relaxed text-ink/75">
                    {p}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#team" variant="primary">
              Meet the team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#why" variant="outline">
              Why patients choose us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
