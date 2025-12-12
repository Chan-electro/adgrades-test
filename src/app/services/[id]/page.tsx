'use client';
import { use } from 'react';
import { services } from '@/data/servicesData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const service = services.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-6">
                <Link
                    href="/services"
                    className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                </Link>

                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block p-3 bg-blue-50 rounded-2xl mb-6">
                        <service.icon className="w-8 h-8 text-blue-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {service.fullDescription}
                    </p>
                </div>

                {/* Packages Section */}
                {service.packages && service.packages.length > 0 ? (
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {service.packages.map((pkg, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={pkg.id}
                                    className={`relative p-8 rounded-3xl border flex flex-col ${pkg.id === 'premium'
                                        ? 'border-blue-primary shadow-xl scale-105 bg-white z-10'
                                        : 'border-gray-200 bg-gray-50'
                                        }`}
                                >
                                    {pkg.id === 'premium' && (
                                        <div className="absolute top-0 right-0 bg-blue-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-black mb-2">{pkg.title}</h3>
                                        <p className="text-gray-500 text-sm min-h-[40px]">{pkg.description}</p>
                                    </div>

                                    <div className="mb-8">
                                        <span className="text-3xl font-bold text-black">{pkg.price}</span>
                                    </div>

                                    <div className="space-y-4 mb-8 flex-grow">
                                        {pkg.includes.map((feature, i) => (
                                            <div key={i} className="flex items-start">
                                                <Check className="w-5 h-5 text-blue-primary mt-0.5 mr-3 flex-shrink-0" />
                                                <span className="text-gray-600 text-sm leading-snug">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/contact?service=${service.id}&package=${pkg.id}`}
                                        className={`nav-button-primary w-full justify-center ${pkg.id === 'premium' ? '' : 'bg-gray-50 text-black hover:bg-gray-200'
                                            }`}
                                    >
                                        Select Plan
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center p-12 bg-gray-50 rounded-3xl mb-12">
                        <h3 className="text-xl font-bold mb-4">Custom Solutions Available</h3>
                        <p className="text-gray-600 mb-6">Contact us for a tailored quote based on your specific needs.</p>
                        <Link href="/contact" className="nav-button-primary">Get a Quote</Link>
                    </div>
                )}

                {/* Process Section */}
                <div className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-2xl relative">
                                <div className="text-4xl font-bold text-blue-primary/10 mb-4 absolute top-4 right-4">{idx + 1}</div>
                                <h3 className="font-bold text-lg mb-2 relative z-10">{step.step}</h3>
                                <p className="text-sm text-gray-600 relative z-10">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies/Tools Section */}
                {service.technologies && service.technologies.length > 0 && (
                    <div className="text-center mb-20">
                        <h2 className="text-2xl font-bold mb-8">Tools & Technologies</h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {service.technologies.map((tech, idx) => (
                                <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
