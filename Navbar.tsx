import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { clinic, navItems } from "@/data/site";
import { useScrolled, useScrollSpy } from "@/hooks/useScroll";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "why",
  "gallery",
  "team",
  "testimonials",
  "emergency",
  "faq",
  "appointment",
  "contact",
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Navbar() {
  const scrolled = useScrolled(16);
  const active = useScrollSpy(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const tone: "light" | "dark" = scrolled || mobileOpen ? "dark" : "light";
  const linkText =
    tone === "light" ? "text-white/85 hover:text-white" : "text-ink/70 hover:text-ink";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-ink/5 bg-cream/85 shadow-soft backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 md:px-10 lg:px-16"
        >
          <a
            href="#home"
            aria-label={`${clinic.name} — home`}
            className="shrink-0"
          >
            <Logo tone={tone === "light" ? "light" : "dark"} />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              const hasChildren = !!item.children?.length;
              return (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      linkText,
                      isActive &&
                        (tone === "light" ? "text-white" : "text-brand-700"),
                    )}
                  >
                    {item.label}
                    {hasChildren ? (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180",
                          tone === "light" ? "text-white/70" : "text-ink/40",
                        )}
                        strokeWidth={2.5}
                      />
                    ) : null}
                    {isActive ? (
                      <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gold" />
                    ) : null}
                  </a>

                  {hasChildren ? (
                    <div
                      role="menu"
                      className="invisible absolute left-0 top-full z-50 min-w-[220px] origin-top translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    >
                      <div className="animate-dropdown rounded-2xl border border-ink/5 bg-white/95 p-2 shadow-card backdrop-blur-xl">
                        {item.children!.map((c) => (
                          <a
                            key={c.href + c.label}
                            href={c.href}
                            role="menuitem"
                            className="block rounded-xl px-3.5 py-2.5 text-sm text-ink/70 transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={clinic.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 lg:inline-flex"
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
              {clinic.phone}
            </a>
            <Button
              href="#appointment"
              variant={tone === "light" ? "light" : "primary"}
              size="sm"
              className="hidden md:inline-flex"
            >
              Book appointment
            </Button>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white/60 backdrop-blur transition-colors hover:bg-white lg:hidden"
            >
              <span className="relative h-5 w-5">
                <Menu
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-300",
                    tone === "light" ? "text-white" : "text-ink",
                    mobileOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-300",
                    tone === "light" ? "text-white" : "text-ink",
                    mobileOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-0 z-40 bg-ink/30 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="absolute inset-x-3 top-[68px] z-50 origin-top lg:hidden"
            >
              <div className="max-h-[78vh] overflow-y-auto rounded-3xl border border-ink/10 bg-[#fbf7ef]/95 p-5 shadow-lift backdrop-blur-xl no-scrollbar">
                <ul className="flex flex-col">
                  {navItems.map((item) => (
                    <li key={item.label} className="border-b border-ink/5 last:border-0">
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-3 text-base font-semibold text-ink"
                      >
                        {item.label}
                        {item.children?.length ? (
                          <ChevronDown className="h-4 w-4 text-ink/40" />
                        ) : null}
                      </a>
                      {item.children?.length ? (
                        <ul className="pb-3 pl-4">
                          {item.children.map((c) => (
                            <li key={c.href + c.label}>
                              <a
                                href={c.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg py-2 text-sm text-ink/60 hover:text-brand-700"
                              >
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-col gap-3 border-t border-ink/10 pt-5">
                  <Button
                    href={clinic.phoneHref}
                    variant="outline"
                    size="md"
                    className="w-full"
                  >
                    <Phone className="h-4 w-4" /> {clinic.phone}
                  </Button>
                  <Button
                    href="#appointment"
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
