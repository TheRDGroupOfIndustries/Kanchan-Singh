import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Service } from "@/components/Service";
import { Portfolio } from "@/components/Portfolio";
import { Achievement } from "@/components/Achievement";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white block tracking-[normal] leading-6 font-inter">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Achievement />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
