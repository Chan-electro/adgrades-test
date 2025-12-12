'use client';

import { servicesData } from '@/data/homeData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ServicesPreview() {

    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">{servicesData.title}</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
                            {servicesData.subtitle}
                        </h2>
                    </div>
                    <Link href="/services" className="hidden md:flex items-center text-black font-semibold hover:text-blue-primary transition-colors group">
                        View All Services <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 md:p-10 rounded-3xl border border-gray-100 hover:border-blue-primary/30 bg-white hover:shadow-2xl hover:shadow-blue-primary/5 transition-all duration-300 relative overflow-hidden flex flex-col items-start"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-500 ease-out">
                                <ArrowUpRight className="text-blue-primary w-6 h-6" />
                            </div>

                            <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300 origin-left">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                            <Link href="/contact" className="mt-auto text-sm font-bold text-black border-b-2 border-transparent group-hover:border-blue-primary transition-all">
                                Explore Service
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link href="/services" className="inline-flex items-center text-black font-semibold hover:text-blue-primary transition-colors group">
                        View All Services <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
