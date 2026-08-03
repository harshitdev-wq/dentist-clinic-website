import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { Dentists } from "@/components/sections/Dentists";
import { Emergency } from "@/components/sections/Emergency";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insurance } from "@/components/sections/Insurance";
import { Faq } from "@/components/sections/Faq";
import { Appointment } from "@/components/sections/Appointment";
import { Contact } from "@/components/sections/Contact";
import { Cta } from "@/components/sections/Cta";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Dentists />
        <Emergency />
        <Testimonials />
        <Insurance />
        <Faq />
        <Appointment />
        <Contact />
        <Cta />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
