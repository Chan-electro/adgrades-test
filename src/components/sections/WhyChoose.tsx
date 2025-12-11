'use client';

import { whyChooseUsData } from '@/data/homeData';
import { motion } from 'framer-motion';

export default function WhyChoose() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">{whyChooseUsData.title}</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
                        {whyChooseUsData.subtitle}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {whyChooseUsData.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {whyChooseUsData.features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100/50 flex items-center justify-center text-xl">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
