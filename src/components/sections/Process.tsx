'use client';

import { processData } from '@/data/homeData';
import { motion } from 'framer-motion';

export default function Process() {

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-20 max-w-2xl">
                    <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">{processData.subtitle}</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                        {processData.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {processData.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group "
                        >
                            {/* Connector Line for larger screens */}
                            {index !== processData.steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-16 w-[calc(100%+2rem)] h-[2px] bg-gray-100 -z-10" />
                            )}

                            <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 text-blue-primary font-bold text-xl flex items-center justify-center mb-8 group-hover:border-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                {step.step}
                            </div>

                            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-blue-primary transition-colors">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
