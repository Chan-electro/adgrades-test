import type { Metadata } from 'next';
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import TrustedPartners from "@/components/sections/TrustedPartners";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: 'AdGrades — Transform Your Digital Presence',
  description:
    'AdGrades is a creative digital marketing agency helping startups and businesses build powerful strategies that drive growth, engagement, and measurable results.',
  openGraph: {
    title: 'AdGrades — Transform Your Digital Presence',
    description:
      'Creative marketing agency helping startups become the next big name through data-driven ads and stunning web design.',
    url: 'https://adgrades.in',
  },
};

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
