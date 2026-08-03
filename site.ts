import {
  Activity,
  Anchor,
  Baby,
  ShieldCheck,
  Sparkles,
  Siren,
  Stethoscope,
  Sun,
  Syringe,
  Smile,
  Clock,
  HeartPulse,
  Microscope,
  BadgeCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */
export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; children?: NavLink[] };

/* ------------------------------------------------------------------ */
/* Clinic                                                             */
/* ------------------------------------------------------------------ */
export const clinic = {
  name: "Lumina Dental Studio",
  shortName: "Lumina",
  tagline: "Modern dentistry, beautifully done.",
  phone: "(415) 555-0192",
  phoneHref: "tel:+14155550192",
  whatsapp: "14155550192",
  email: "hello@luminadental.com",
  address: {
    line1: "248 Bayview Terrace, Suite 200",
    city: "San Francisco",
    region: "CA",
    postalCode: "94110",
    country: "US",
  },
  mapQuery: "248 Bayview Terrace, San Francisco, CA 94110",
  mapsEmbed:
    "https://www.google.com/maps?q=248+Bayview+Terrace,+San+Francisco,+CA+94110&output=embed",
};

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */
export const navItems: NavGroup[] = [
  {
    label: "Clinic",
    href: "#about",
    children: [
      { label: "About the studio", href: "#about" },
      { label: "Meet the dentists", href: "#team" },
      { label: "Why choose us", href: "#why" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "General & family care", href: "#services" },
      { label: "Cosmetic dentistry", href: "#services" },
      { label: "Invisalign & orthodontics", href: "#services" },
      { label: "Dental implants", href: "#services" },
      { label: "Emergency care", href: "#emergency" },
    ],
  },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Imagery (Pexels — replace with your own assets anytime)            */
/* ------------------------------------------------------------------ */
const px = (path: string, w: number, h: number) =>
  `https://images.pexels.com/photos/${path}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const images = {
  heroWarm: px("3884101/pexels-photo-3884101.jpeg", 1100, 1320),
  aboutInterior: px("5355920/pexels-photo-5355920.jpeg", 1100, 980),
  aboutCare: px("3884103/pexels-photo-3884103.jpeg", 760, 900),
  whyCare: px("4562895/pexels-photo-4562895.jpeg", 1200, 920),
  gallery: [
    px("3762402/pexels-photo-3762402.jpeg", 800, 640),
    px("3762453/pexels-photo-3762453.jpeg", 800, 640),
    px("3762400/pexels-photo-3762400.jpeg", 800, 640),
    px("41208/fun-cold-elegance-face-41208.jpeg", 800, 640),
    px("65665/smile-mouth-teeth-laugh-65665.jpeg", 800, 640),
  ],
  dentists: [
    px("37458046/pexels-photo-37458046.jpeg", 800, 1000),
    px("5355860/pexels-photo-5355860.jpeg", 800, 1000),
    px("31043311/pexels-photo-31043311.jpeg", 800, 1000),
  ],
  avatars: [
    px("6497114/pexels-photo-6497114.jpeg", 200, 200),
    px("30701542/pexels-photo-30701542.jpeg", 200, 200),
    px("804009/pexels-photo-804009.jpeg", 200, 200),
    px("37272329/pexels-photo-37272329.png", 200, 200),
    px("14950779/pexels-photo-14950779.jpeg", 200, 200),
    px("6102841/pexels-photo-6102841.jpeg", 200, 200),
  ],
};

/* ------------------------------------------------------------------ */
/* Stats                                                              */
/* ------------------------------------------------------------------ */
export const stats = [
  { value: "18+", label: "Years of care" },
  { value: "25k+", label: "Happy patients" },
  { value: "4.9★", label: "Average rating" },
  { value: "12", label: "Specialists on site" },
];

/* ------------------------------------------------------------------ */
/* Services                                                           */
/* ------------------------------------------------------------------ */
export type Service = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  points: string[];
  accent: boolean;
};

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: "General & Family Care",
    blurb:
      "Routine exams, gentle cleanings and preventive care that keep every smile in the family healthy for life.",
    points: ["Checkups & cleanings", "Fillings & sealants", "Gum care"],
    accent: false,
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    blurb:
      "Veneers, bonding and complete smile makeovers designed around your facial harmony and natural aesthetics.",
    points: ["Porcelain veneers", "Composite bonding", "Smile design"],
    accent: true,
  },
  {
    icon: Smile,
    title: "Invisalign & Orthodontics",
    blurb:
      "Discreet clear aligners and modern braces that straighten teeth comfortably, with 3D treatment previews.",
    points: ["Clear aligners", "Teen orthodontics", "Retention"],
    accent: false,
  },
  {
    icon: Anchor,
    title: "Dental Implants",
    blurb:
      "Permanent, natural-looking tooth replacement using guided implant surgery for precise, lasting results.",
    points: ["Single & multiple", "All-on-4®", "Bone grafting"],
    accent: false,
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    blurb:
      "In-office and take-home whitening that lifts stains safely and delivers a visibly brighter smile.",
    points: ["In-office power whitening", "Custom take-home kits", "Enamel-safe"],
    accent: false,
  },
  {
    icon: Siren,
    title: "Emergency Dentistry",
    blurb:
      "Same-day relief for toothaches, broken teeth and accidents — because dental pain never waits.",
    points: ["Same-day appointments", "Walk-in friendly", "After-hours line"],
    accent: false,
  },
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                      */
/* ------------------------------------------------------------------ */
export const features: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: HeartPulse,
    title: "Gentle, anxiety-free",
    blurb:
      "Sedation options, a calm pace and comfort amenities that make every visit feel easy.",
  },
  {
    icon: Microscope,
    title: "Advanced technology",
    blurb:
      "Digital scanners, 3D imaging and intraoral cameras for precise, comfortable diagnostics.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    blurb:
      "Clear quotes upfront, flexible payment plans and a team that files your insurance for you.",
  },
  {
    icon: Clock,
    title: "Same-day emergencies",
    blurb:
      "Reserved daily slots and an after-hours line so you're never left waiting in pain.",
  },
  {
    icon: BadgeCheck,
    title: "Board-certified team",
    blurb:
      "A multidisciplinary team of 12 specialists under one roof — no referrals required.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime prevention",
    blurb:
      "A prevention-first philosophy and personalized plans that protect your smile for decades.",
  },
];

/* ------------------------------------------------------------------ */
/* Smile gallery                                                      */
/* ------------------------------------------------------------------ */
export const gallery: { img: string; treatment: string; category: string }[] =
  [
    { img: images.gallery[0], treatment: "Veneers & whitening", category: "Cosmetic" },
    { img: images.gallery[1], treatment: "Smile makeover", category: "Cosmetic" },
    { img: images.gallery[2], treatment: "Professional whitening", category: "Whitening" },
    { img: images.gallery[3], treatment: "Invisalign aligners", category: "Orthodontics" },
    { img: images.gallery[4], treatment: "Full restoration", category: "Restorative" },
  ];

/* ------------------------------------------------------------------ */
/* Dentists                                                           */
/* ------------------------------------------------------------------ */
export const dentists: {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  img: string;
  focus: string[];
}[] = [
  {
    name: "Dr. Aaron Whitfield",
    role: "Founder & Lead Cosmetic Dentist",
    credentials: "DDS, FAGD — 18 yrs",
    bio: "Aaron founded Lumina to blend fine-art aesthetics with evidence-based care. He has placed over 4,000 veneers and is known for painless, detail-obsessed smile design.",
    img: images.dentists[0],
    focus: ["Smile design", "Veneers", "Full-mouth restoration"],
  },
  {
    name: "Dr. Sofia Marchetti",
    role: "Orthodontist",
    credentials: "DMD, MS Ortho — Diamond+ Provider",
    bio: "Sofia is a top 1% Invisalign provider who plans every case in 3D. She loves helping teens and adults gain confidence through discreet, comfortable alignment.",
    img: images.dentists[1],
    focus: ["Invisalign", "Early orthodontics", "Airway-focused care"],
  },
  {
    name: "Dr. Priya Nair",
    role: "Periodontist & Implant Surgeon",
    credentials: "BDS, MS Perio — 14 yrs",
    bio: "Priya specializes in gentle gum therapy and guided implant surgery. Her calm, methodical approach makes even complex procedures feel effortless.",
    img: images.dentists[2],
    focus: ["Implants", "Gum grafting", "All-on-4®"],
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                       */
/* ------------------------------------------------------------------ */
export const testimonials: {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}[] = [
  {
    name: "Maya Bennett",
    role: "Veneers patient",
    quote:
      "I dreaded the dentist for years. Lumina completely changed that — the veneers look completely natural and there wasn't a single moment of pain.",
    rating: 5,
    avatar: images.avatars[0],
  },
  {
    name: "Daniel Okafor",
    role: "Invisalign patient",
    quote:
      "Sofia walked me through a 3D preview before we even started. Ten months later my teeth are perfectly straight. Worth every minute.",
    rating: 5,
    avatar: images.avatars[1],
  },
  {
    name: "Grace Lin",
    role: "Family care",
    quote:
      "Our whole family comes here now. The kids actually look forward to checkups, and booking is effortless. Genuinely the best dental experience we've had.",
    rating: 5,
    avatar: images.avatars[3],
  },
  {
    name: "Marcus Reed",
    role: "Implant patient",
    quote:
      "I knocked out a tooth on a Friday. They saw me the same day and Dr. Nair placed an implant I can't even tell from my real teeth.",
    rating: 5,
    avatar: images.avatars[2],
  },
  {
    name: "Amira Haddad",
    role: "Whitening patient",
    quote:
      "Professional, warm and never pushy. My smile is three shades brighter and the team filed my insurance without me lifting a finger.",
    rating: 5,
    avatar: images.avatars[4],
  },
  {
    name: "Theo Alvarez",
    role: "Emergency patient",
    quote:
      "I'm an anxious patient and they were so patient with me. The sedation option made a root canal genuinely easy. Highly recommend.",
    rating: 5,
    avatar: images.avatars[5],
  },
];

/* ------------------------------------------------------------------ */
/* Insurance                                                          */
/* ------------------------------------------------------------------ */
export const insurance = [
  "Delta Dental",
  "Cigna",
  "MetLife",
  "Aetna",
  "Guardian",
  "UnitedHealthcare",
  "Humana",
  "Blue Cross Blue Shield",
];

/* ------------------------------------------------------------------ */
/* Emergency reasons                                                  */
/* ------------------------------------------------------------------ */
export const emergencies: { title: string; blurb: string }[] = [
  { title: "Severe toothache", blurb: "Throbbing pain that won't settle." },
  { title: "Broken or chipped tooth", blurb: "Cracked, fractured or lost restorations." },
  { title: "Knocked-out tooth", blurb: "Keep it moist — call us immediately." },
  { title: "Lost filling or crown", blurb: "Exposed teeth can be saved quickly." },
  { title: "Swelling or abscess", blurb: "Infection that needs prompt relief." },
  { title: "Dental trauma", blurb: "Sports, falls or accidents to the mouth." },
];

/* ------------------------------------------------------------------ */
/* Hours                                                              */
/* ------------------------------------------------------------------ */
export const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed (emergency on-call)" },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                               */
/* ------------------------------------------------------------------ */
export const faqs: { q: string; a: string }[] = [
  {
    q: "Do you accept my dental insurance?",
    a: "We're in-network with most major providers, including Delta Dental, Cigna, MetLife, Aetna and Guardian. Even out-of-network, our team verifies your benefits and files claims on your behalf so you pay less out of pocket.",
  },
  {
    q: "Are you accepting new patients?",
    a: "Yes — we warmly welcome new patients of all ages. Your first visit includes a comprehensive exam, digital X-rays and a personalized care plan, often on the same day as your cleaning.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Absolutely. We offer interest-free financing for 12 months on qualifying treatment, transparent upfront quotes, and a dedicated coordinator to build a plan that fits your budget.",
  },
  {
    q: "What counts as a dental emergency?",
    a: "Severe toothaches, broken or knocked-out teeth, lost crowns or fillings, swelling and oral trauma all qualify. Call us right away — we reserve same-day slots and have an after-hours line for urgent care.",
  },
  {
    q: "Is professional teeth whitening safe?",
    a: "Yes. Our enamel-safe whitening is supervised by dental professionals and customized to your sensitivity. Whether in-office or take-home, it's far more effective and safer than over-the-counter kits.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "For most patients, a checkup and cleaning every six months keeps problems small and affordable. We'll recommend a personalized recall interval based on your oral health and risk factors.",
  },
  {
    q: "Do you treat children?",
    a: "We love seeing the whole family. Our pediatric-friendly team makes visits fun and stress-free for little ones, building healthy habits that last a lifetime.",
  },
  {
    q: "I have dental anxiety — can you help?",
    a: "You're not alone. We offer nitrous oxide and oral sedation, comfort amenities like blankets and noise-cancelling headphones, and a famously gentle, judgment-free team.",
  },
];

/* Re-export a couple of icons used directly by appointment form, etc. */
export const formIcons = { Syringe, Activity, Baby };
