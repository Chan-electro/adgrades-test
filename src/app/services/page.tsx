'use client';
import { services } from '@/data/servicesData';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(services.map(s => s.category)))];

    const filteredServices = filter === "All" ? services : services.filter(s => s.category === filter);

    const formatCategory = (cat: string) => {
        return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-gray-50 py-24 px-6 text-center">
                <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">Premium Services</span>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-black mb-6">Elevate Your Digital Presence</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    From concept to launch, we deliver exceptional digital solutions that drive growth, enhance user experience, and transform your business.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link href="/contact" className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-blue-primary transition-colors">Start Your Project</Link>
                    <Link href="/portfolio" className="px-8 py-3 bg-white border border-gray-200 text-black rounded-full font-semibold hover:border-black transition-colors">View Our Work</Link>
                </div>
            </div>

            {/* Filter */}
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all text-sm md:text-base ${filter === cat
                                ? 'bg-black text-white'
                                : 'bg-white border border-gray-200 text-gray-600 hover:border-black hover:text-black'
                                }`}
                        >
                            {cat === "All" ? "All" : formatCategory(cat)}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredServices.map((service) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={service.id}
                                className="group p-8 rounded-3xl border border-gray-100 hover:border-blue-primary/30 hover:shadow-xl hover:shadow-blue-primary/5 bg-white transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="mb-4 text-xs font-bold text-blue-primary uppercase tracking-wider">{formatCategory(service.category)}</div>
                                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-blue-primary transition-colors leading-tight">{service.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{service.shortDescription}</p>

                                <div className="mt-6 border-t border-gray-100 pt-6">
                                    <h4 className="font-bold text-black mb-3 text-sm">Key Features:</h4>
                                    <ul className="mb-6 space-y-2">
                                        {service.features.slice(0, 4).map((f, i) => (
                                            <li key={i} className="text-sm text-gray-500 flex items-start leading-snug">
                                                <span className="text-blue-primary mr-2 mt-0.5">•</span> {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                                        <div className="text-sm font-bold text-gray-900">
                                            {typeof service.pricing === 'object' ? (service.pricing as any).basic || 'Custom Pricing' : 'Custom Pricing'}
                                        </div>
                                        <Link href={`/services/${service.id}`} className="text-sm font-bold text-blue-primary hover:text-black transition-colors flex items-center">
                                            View Plans & Pricing <span className="ml-1">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {
                    filteredServices.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No services found in this category.
                        </div>
                    )
                }
            </div >
        </div >
    );
}
