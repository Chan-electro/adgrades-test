'use client';

import React from 'react';
import { partnerLogos } from '@/data/partnerLogos';
import { motion } from 'framer-motion';

const VerticalLogoCarousel = () => {
    // Split logos into 3 columns for desktop, 2 for tablet, 1 for mobile
    // We'll use CSS grid to handle the layout and duplicate the data to create the columns
    const column1 = partnerLogos.slice(0, Math.ceil(partnerLogos.length / 3));
    const column2 = partnerLogos.slice(Math.ceil(partnerLogos.length / 3), Math.ceil(partnerLogos.length * 2 / 3));
    const column3 = partnerLogos.slice(Math.ceil(partnerLogos.length * 2 / 3));

    // For tablet (2 columns), we redistribute
    const tabletCol1 = partnerLogos.slice(0, Math.ceil(partnerLogos.length / 2));
    const tabletCol2 = partnerLogos.slice(Math.ceil(partnerLogos.length / 2));

    // Common column component
    const LogoColumn = ({ logos, duration = 20, className = "" }: { logos: typeof partnerLogos, duration?: number, className?: string }) => {
        return (
            <div className={`flex flex-col gap-8 overflow-hidden h-full relative ${className}`}>
                <motion.div
                    className="flex flex-col gap-8 pb-8"
                    animate={{ y: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        duration: duration,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {/* Duplicate implementation for infinite scroll */}
                    {[...logos, ...logos].map((logo, idx) => (
                        <div key={`${logo.name}-${idx}`} className="flex items-center justify-center p-4 min-h-[80px] group transition-all duration-300">
                            <div className="text-gray-300 group-hover:text-blue-primary transition-colors duration-300 transform group-hover:scale-110">
                                <logo.Logo className="text-4xl md:text-5xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        );
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-white/0">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-4 h-full">
                {/* Desktop Layout (3 Columns) */}
                <div className="hidden lg:grid grid-cols-3 gap-8 h-full">
                    <LogoColumn logos={column1} duration={40} />
                    <LogoColumn logos={column2} duration={50} className="mt-12" /> {/* Staggered start */}
                    <LogoColumn logos={column3} duration={45} />
                </div>

                {/* Tablet Layout (2 Columns) */}
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 h-full">
                    <LogoColumn logos={tabletCol1} duration={40} />
                    <LogoColumn logos={tabletCol2} duration={50} className="mt-12" />
                </div>

                {/* Mobile Layout (1 Column) */}
                <div className="grid md:hidden grid-cols-1 gap-8 h-full">
                    <LogoColumn logos={partnerLogos} duration={35} />
                </div>
            </div>
        </div>
    );
};

export default VerticalLogoCarousel;
