'use client';

import { heroData } from '@/data/homeData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroVisual from '@/components/ui/HeroVisual';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    const hero = heroData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                <motion.div
                    className="max-w-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 text-xs font-bold tracking-wider uppercase bg-white shadow-sm">
                            <Sparkles className="w-3 h-3 text-orange-500" />
                            CREATIVE MARKETING AGENCY
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6 text-black"
                        variants={itemVariants}
                    >
                        Transform Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Presence</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-lg font-medium"
                        variants={itemVariants}
                    >
                        {hero.description}
                    </motion.p>

                    <motion.div className="flex flex-col sm:flex-row gap-4 mb-12" variants={itemVariants}>
                        <Link
                            href="/contact"
                            className="group px-8 py-4 bg-[#0a0a0a] text-white rounded-xl font-bold flex items-center justify-center hover:bg-blue-primary transition-all duration-300 shadow-xl hover:shadow-blue-primary/20 text-lg"
                        >
                            {hero.primaryCTA}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white text-black border border-gray-200 rounded-xl font-bold flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:border-gray-300 text-lg"
                        >
                            {hero.secondaryCTA}
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm font-semibold text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                            </div>
                            Data-Driven Strategies
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                            </div>
                            Creative Excellence
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                            </div>
                            Measurable Results
                        </div>
                    </motion.div>
                </motion.div>

                <div className="hidden lg:block relative w-full -mr-20">
                    <HeroVisual />
                </div>
            </div>
        </section>
    );
}
