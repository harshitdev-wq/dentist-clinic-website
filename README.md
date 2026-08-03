# Lumina Dental Studio

A premium, fully responsive marketing website for a modern dental clinic — built
with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion** and
**Lucide React**.

## ✨ Highlights

- **Award-agency feel** — editorial typography (Fraunces + Plus Jakarta Sans),
  refined teal / cream / gold palette, generous spacing, soft shadows.
- **15 fully-designed sections** — hero, trust bar, about, services, why-choose-us,
  before/after smile gallery (draggable slider), meet the dentists, emergency care,
  testimonials, insurance & financing, FAQ accordion, appointment booking,
  contact + map, closing CTA and footer.
- **Accessible & SEO-ready** — semantic HTML, keyboard-friendly nav & dropdowns,
  focus-visible states, ARIA on the form/slider, skip link, `Dentist` JSON-LD,
  Open Graph + Twitter cards, `robots.txt` & `sitemap.xml`.
- **Interactions** — scroll-reveal animations, sticky glass navbar with
  scroll-spy active highlighting, hover/focus dropdowns, animated mobile drawer,
  floating Call / WhatsApp / back-to-top buttons.
- **Working forms** — appointment booking + newsletter with client-side
  validation, error & success states.
- **Responsive** — tested mental breakpoints from 320px up to 1920px.

## 🛠 Tech & Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build (outputs a single dist/index.html)
npm run preview  # preview the production build
```

## 🎨 Customising

All copy, services, team, testimonials, FAQ and contact details live in
**`src/data/site.ts`** — edit that single file to rebrand the whole site.
Design tokens (colours, fonts, shadows) live at the top of
**`src/index.css`** inside the `@theme` block.

> Imagery is sourced from Pexels via URL — swap the values in `src/data/site.ts`
> (`images`) for your own photography at any time.

## 📁 Structure

```
src/
├─ App.tsx                 # page composition
├─ index.css              # Tailwind v4 theme + utilities
├─ data/site.ts           # all content & imagery (single source of truth)
├─ hooks/useScroll.ts     # scroll-spy + scrolled state
└─ components/
   ├─ layout/             # Navbar, Footer, FloatingActions
   ├─ sections/           # one file per page section
   └─ ui/                 # Reusable primitives (Button, Section, Reveal…)
```

---

© Lumina Dental Studio. Crafted as a production-ready demo.
