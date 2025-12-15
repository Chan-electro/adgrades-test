'use client';

import React from 'react';
import { clientsData } from '@/data/clientsData';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClientRibbon = () => {
    // Split data into two rows
    const firstRow = clientsData.slice(0, Math.ceil(clientsData.length / 2));
    const secondRow = clientsData.slice(Math.ceil(clientsData.length / 2));

    // Duplicate content for infinite loop
    const row1Content = [...firstRow, ...firstRow, ...firstRow, ...firstRow, ...firstRow, ...firstRow];
    const row2Content = [...secondRow, ...secondRow, ...secondRow, ...secondRow, ...secondRow, ...secondRow];

    const MarqueeRow = ({ content, direction = 'left', speed = 40 }: { content: typeof clientsData, direction?: 'left' | 'right', speed?: number }) => (
        <div className="flex overflow-hidden relative w-full">
            {/* Gradient Masks for smooth fade */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
                className="flex gap-24 py-5 items-center pr-24 whitespace-nowrap"
                initial={{ x: direction === 'left' ? 0 : "-50%" }}
                animate={{ x: direction === 'left' ? "-50%" : 0 }}
                transition={{
                    repeat: Infinity,
                    duration: speed,
                    ease: "linear",
                }}
            >
                {content.map((client, index) => (
                    <div
                        key={`${client.id}-${index}-${direction}`}
                        className="flex items-center gap-4 flex-shrink-0 group cursor-default"
                    >
                        {/* Logo Container - Always Color */}
                        <div className="relative h-10 w-10 md:h-12 md:w-12 transition-all duration-300">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        {/* Client Name - Always Black, Bold, Caps */}
                        <span className="text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                            {client.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <div className="relative w-full overflow-hidden py-20 bg-white flex flex-col gap-3">

            {/* Ribbon 1 - Rotated Slightly Left */}
            <div className="relative -rotate-2 scale-[1.05] border-y-2 border-blue-primary bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] z-10">
                <MarqueeRow content={row1Content} direction="left" speed={45} />
            </div>

            {/* Ribbon 2 - Rotated Slightly Right (Crossed look) or Parallel offset */}
            <div className="relative rotate-1 scale-[1.05] border-y-2 border-blue-primary bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] z-0">
                <MarqueeRow content={row2Content} direction="right" speed={50} />
            </div>

        </div>
    );
};

export default ClientRibbon;
