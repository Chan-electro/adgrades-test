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
  title: 'AdGrades — Best Digital Marketing Agency in Bangalore | 300%+ Growth',
  description:
    'AdGrades is a top-rated digital marketing agency in Bangalore delivering 300%+ brand growth through Google Ads, Meta Ads, SEO, social media marketing, and lead generation for startups and businesses.',
  alternates: {
    canonical: 'https://adgrades.in',
  },
  openGraph: {
    title: 'AdGrades — Best Digital Marketing Agency in Bangalore',
    description:
      'Top digital marketing agency helping startups achieve 300%+ growth through performance marketing, SEO, and creative brand design.',
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
