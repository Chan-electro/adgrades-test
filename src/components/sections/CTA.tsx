import { ctaData } from '@/data/homeData';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-32 bg-white text-black text-center border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                    {ctaData.title} <span className="text-blue-primary block mt-2 text-3xl md:text-5xl">{ctaData.subtitle}</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-normal">
                    {ctaData.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/contact"
                        className="group px-10 py-5 bg-blue-primary text-white text-lg font-bold rounded-full hover:bg-black transition-all duration-300 shadow-xl shadow-blue-primary/30 hover:shadow-black/30 flex items-center justify-center"
                    >
                        {ctaData.primaryCTA}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="https://calendly.com/chandanbkrishna077/adgrades"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-5 border border-gray-200 text-black text-lg font-bold rounded-full hover:border-black hover:bg-gray-50 transition-all duration-300"
                    >
                        {ctaData.secondaryCTA}
                    </a>
                </div>
            </div>
        </section>
    );
}
