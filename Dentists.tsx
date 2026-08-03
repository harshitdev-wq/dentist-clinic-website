import { CalendarCheck } from "lucide-react";
import { dentists } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Dentists() {
  return (
    <Section id="team" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Meet the team"
        title="Specialists who genuinely care"
        subtitle="A multidisciplinary team of board-certified clinicians — friendly, meticulous and relentlessly gentle."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dentists.map((d, i) => (
          <Reveal key={d.name} delay={(i % 3) * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="relative overflow-hidden">
                <img
                  src={d.img}
                  alt={`Portrait of ${d.name}, ${d.role} at Lumina Dental Studio`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {d.name}
                  </h3>
                  <p className="text-sm text-white/80">{d.role}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {d.credentials}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {d.bio}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {d.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#appointment"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book with {d.name.split(" ")[1]}
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <p className="text-sm text-ink/60">
          Plus a warm, highly-trained team of hygienists and coordinators.
        </p>
        <div className="mt-5">
          <Button href="#appointment" variant="primary">
            Book your appointment
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
