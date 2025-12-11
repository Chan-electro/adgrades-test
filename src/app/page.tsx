import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import TrustedPartners from "@/components/sections/TrustedPartners";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <TrustedPartners />
      <ServicesPreview />
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
