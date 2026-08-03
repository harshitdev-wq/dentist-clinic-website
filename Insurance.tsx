import { FileCheck, ShieldCheck, Wallet } from "lucide-react";
import { insurance } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const perks = [
  {
    icon: ShieldCheck,
    title: "In-network with 30+ plans",
    blurb: "Including all the providers below — and many more.",
  },
  {
    icon: FileCheck,
    title: "We file claims for you",
    blurb: "Our team verifies benefits and handles the paperwork end-to-end.",
  },
  {
    icon: Wallet,
    title: "0% financing available",
    blurb: "Interest-free plans for 12 months through CareCredit®.",
  },
];

export function Insurance() {
  return (
    <Section id="insurance" className="bg-sand/60 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Insurance & financing"
        title="Quality care that fits your budget"
        subtitle="Maximize your benefits and minimize the paperwork. We make paying for your smile refreshingly simple."
      />

      <Reveal className="mx-auto mt-10 max-w-4xl">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {insurance.map((name) => (
            <span
              key={name}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/70 shadow-soft"
            >
              {name}
            </span>
          ))}
          <span className="rounded-full border border-dashed border-brand-300 px-4 py-2 text-sm font-semibold text-brand-700">
            + many more
          </span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {perks.map((perk, i) => (
          <Reveal key={perk.title} delay={i * 0.08}>
            <div className="flex h-full flex-col items-start rounded-2xl border border-ink/8 bg-white p-6 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <perk.icon className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {perk.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {perk.blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-ink/65">
          Not sure if you're covered? We'll check your benefits for free.
        </p>
        <div className="mt-4">
          <Button href="#appointment" variant="primary">
            Verify my insurance
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
