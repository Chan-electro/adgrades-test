'use client';

import { testimonialData } from '@/data/homeData';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const { testimonials } = testimonialData;

    return (
        <section className="py-20 md:py-32 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 md:mb-16">
                <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">{testimonialData.subtitle}</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black max-w-xl leading-tight">
                    {testimonialData.title}
                </h2>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative w-full overflow-hidden">
                <div className="flex w-max gap-6 animate-scroll hover:[animation-play-state:paused]">
                    {/* Double the testimonials to create seamless loop */}
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[85vw] md:w-[450px] p-6 md:p-10 bg-white rounded-2xl md:rounded-3xl border border-gray-100/80 hover:border-blue-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-auto"
                        >
                            <div className="flex-1">
                                <div className="mb-4 md:mb-6 flex space-x-1">
                                    {[...Array(t.rating || 5)].map((_, j) => (
                                        <svg key={j} className="w-4 h-4 md:w-5 md:h-5 text-blue-primary fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-800 font-medium italic mb-6 md:mb-8 leading-relaxed text-base md:text-lg line-clamp-6">"{t.content}"</p>
                            </div>
                            <div className="border-t border-gray-100 pt-4 md:pt-6 flex items-center gap-3 md:gap-4 mt-auto">
                                {t.avatar ? (
                                    <img src={t.avatar} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shrink-0" />
                                ) : (
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-primary font-bold shrink-0 text-sm md:text-base">
                                        {t.initials || t.name[0]}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-black text-base md:text-lg leading-tight">{t.name}</h4>
                                    <p className="text-xs md:text-sm text-gray-500 font-medium line-clamp-1">{t.role}{t.company ? `, ${t.company}` : ''}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
