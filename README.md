# 🦷 Lumina Dental Studio — Dental Clinic Website

> A premium, responsive dental-clinic website designed to combine a polished healthcare brand experience with clear service discovery, patient-focused information, and appointment-oriented interactions.

## 🌐 Project

**Repository:** https://github.com/harshitdev-wq/dentist-clinic-website

## 📖 Overview

**Lumina Dental Studio** is a production-style dental clinic website built as a modern marketing and patient-information experience.

The project goes beyond a simple landing page by bringing together clinic information, services, dentist profiles, before/after content, emergency-care information, testimonials, insurance and financing information, FAQs, appointment booking, contact information, and conversion-focused calls to action.

The interface is designed around a premium healthcare aesthetic with responsive layouts, accessible interaction patterns, and subtle motion.

## ✨ Highlights

- 🏥 Premium dental-clinic visual identity
- 📱 Responsive layouts designed for mobile through large desktop screens
- 🦷 Detailed dental services presentation
- 👨‍⚕️ Dentist/team profiles
- 🖼️ Interactive before/after smile comparison
- 🚨 Emergency-care section
- 💬 Patient testimonial experience
- 💳 Insurance and financing information
- ❓ FAQ accordion
- 📅 Appointment booking interface with client-side validation and feedback states
- 📧 Newsletter signup interface
- 📍 Contact and location section with map presentation
- 📞 Floating call and WhatsApp actions
- ⬆️ Back-to-top interaction
- 🧭 Sticky navigation with scroll-based active section highlighting
- 🎞️ Scroll-reveal and micro-interactions
- ♿ Accessibility-conscious navigation, focus states, semantic structure, and ARIA attributes
- 🔎 SEO-oriented metadata, structured data, sitemap, and robots configuration

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI development |
| **Vite** | Development and production build tooling |
| **TypeScript** | Type-safe application development |
| **Tailwind CSS v4** | Responsive styling and design system |
| **Framer Motion** | Animations and motion interactions |
| **Lucide React** | UI icons |
| **Pexels** | Demo imagery via remote URLs |

## 🧩 Architecture

The application is organized into reusable UI sections rather than treating the website as one large component.

```text
src/
├── components/
│   ├── layout/       # Navbar, Footer, FloatingActions
│   ├── sections/     # Individual website sections
│   └── ui/           # Reusable UI primitives
├── data/
│   └── site.ts       # Centralised site content and imagery
├── hooks/
│   └── useScroll.ts  # Scroll state and scroll-spy logic
├── App.tsx           # Page composition
└── index.css         # Theme, Tailwind configuration and utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/harshitdev-wq/dentist-clinic-website.git
cd dentist-clinic-website
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 🎨 Customisation

The project is structured to make rebranding straightforward.

Website copy, services, team information, testimonials, FAQs, contact details, and imagery can be managed centrally through the site's data layer.

For visual customisation, the project's design tokens and theme values can be adjusted in the main stylesheet.

This makes the architecture suitable for adapting the demo to a different dental clinic or similar healthcare business without rebuilding the entire interface from scratch.

## ♿ Accessibility & SEO

The project includes several accessibility and discoverability considerations, including:

- Semantic HTML structure
- Keyboard-friendly navigation
- Visible focus states
- ARIA attributes for interactive controls
- Skip-link navigation
- Dentist structured data / JSON-LD
- Open Graph metadata
- Twitter card metadata
- `robots.txt`
- `sitemap.xml`

## 📝 Production Notes

This repository represents a **production-style frontend/demo**, not a complete clinical management system.

Appointment and newsletter interactions currently provide client-side form handling and validation. A real clinic deployment would require connecting these flows to a secure backend, CRM, email service, booking platform, or scheduling system.

The demo imagery is sourced remotely from Pexels. For a real client deployment, replace demo imagery with properly licensed clinic photography and production assets.

## 🎯 Project Goals

- Build a premium healthcare website suitable for a real dental-clinic brand
- Create a reusable component architecture with React and TypeScript
- Demonstrate responsive and accessible frontend development
- Combine informational content with conversion-focused interactions
- Practise animation, state handling, form UX, and scroll-based navigation
- Keep the project easy to customise for a real client

## 👨‍💻 Author

**Harshit**

GitHub: https://github.com/harshitdev-wq

---

⭐ Built as a portfolio project demonstrating modern frontend development for a healthcare business.
