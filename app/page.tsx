import About from "@/components/About";
import Classes from "@/components/Classes";
import CTABig from "@/components/CTABig";
import CTAsmall from "@/components/CTAsmall";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <CTAsmall />
      <Classes />
      <Pricing />
      <Testimonials />
      <CTABig />
    </>
  );
}
