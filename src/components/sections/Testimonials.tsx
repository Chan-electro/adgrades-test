'use client';

import { testimonialData } from '@/data/homeData';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const { testimonials } = testimonialData;

    return (
        <section className="py-32 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">{testimonialData.subtitle}</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black max-w-xl">
                    {testimonialData.title}
                </h2>
            </div>

            {/* Horizontal scroll container with snap */}
            <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 md:mx-0 md:pl-0">
                {/* Spacer for container alignment on mobile */}
                <div className="w-1 md:hidden shrink-0" />

                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-shrink-0 w-[85vw] md:w-[450px] p-10 bg-white rounded-3xl border border-gray-100 hover:border-blue-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 snap-start flex flex-col justify-between"
                    >
                        <div>
                            <div className="mb-6 flex space-x-1">
                                {[...Array(t.rating || 5)].map((_, j) => (
                                    <svg key={j} className="w-5 h-5 text-blue-primary fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-800 font-medium italic mb-8 leading-relaxed text-lg">"{t.content}"</p>
                        </div>
                        <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                            {t.avatar ? (
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-primary font-bold">
                                    {t.initials || t.name[0]}
                                </div>
                            )}
                            <div>
                                <h4 className="font-bold text-black text-lg">{t.name}</h4>
                                <p className="text-sm text-gray-500 font-medium">{t.role}{t.company ? `, ${t.company}` : ''}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
                <div className="w-1 md:hidden shrink-0" />
            </div>
        </section>
    );
}
