import { gallery, images } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfter } from "@/components/ui/BeforeAfter";

export function Gallery() {
  return (
    <Section id="gallery" className="bg-sand/60 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Smile gallery"
        title="Real results, real confidence"
        subtitle="Drag the slider to preview a whitening transformation, then explore smiles crafted right here at Lumina."
      />

      {/* Featured before / after */}
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <BeforeAfter
          image={images.gallery[2]}
          alt="A patient's smile"
          beforeLabel="Before"
          afterLabel="After whitening"
        />
      </Reveal>

      {/* Transformation grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <Reveal key={item.treatment} delay={(i % 3) * 0.07}>
            <a
              href="#appointment"
              className="group relative block overflow-hidden rounded-2xl border border-ink/8 shadow-soft"
            >
              <img
                src={item.img}
                alt={`${item.treatment} result from Lumina Dental Studio`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent opacity-90"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-white backdrop-blur">
                  {item.category}
                </span>
                <p className="mt-2 text-base font-semibold text-white">
                  {item.treatment}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
