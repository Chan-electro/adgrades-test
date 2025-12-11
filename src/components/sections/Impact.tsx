'use client';

import { heroData } from '@/data/homeData';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Impact() {
    const { stats } = heroData;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center px-4"
                        >
                            <h3 className="text-4xl md:text-6xl font-bold text-blue-primary mb-2 tracking-tight">
                                {item.number}{item.suffix}
                            </h3>
                            <p className="text-gray-600 font-medium uppercase tracking-wider text-xs md:text-sm">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
