'use client';

import React from 'react';
import { clientsData } from '@/data/clientsData';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ClientEntry = (typeof clientsData)[number];

const MarqueeRow = ({
  content,
  direction = 'left',
  speed = 40,
}: {
  content: ClientEntry[];
  direction?: 'left' | 'right';
  speed?: number;
}) => (
  <div className="flex overflow-hidden relative w-full">
    {/* Gradient masks — theme-aware */}
    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

    <motion.div
      className="flex gap-20 py-4 items-center pr-20 whitespace-nowrap"
      initial={{ x: direction === 'left' ? 0 : '-50%' }}
      animate={{ x: direction === 'left' ? '-50%' : 0 }}
      transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
    >
      {content.map((client, index) => (
        <div
          key={`${client.id}-${index}-${direction}`}
          className="flex items-center gap-3 flex-shrink-0"
        >
          {client.logo && (
            <div className="relative h-9 w-9 shrink-0">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
          )}
          <span className="text-lg md:text-xl font-black uppercase tracking-tight text-foreground/80">
            {client.name}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

export default function ClientRibbon() {
  const mid = Math.ceil(clientsData.length / 2);
  const row1 = [...clientsData.slice(0, mid), ...clientsData.slice(0, mid), ...clientsData.slice(0, mid), ...clientsData.slice(0, mid)];
  const row2 = [...clientsData.slice(mid), ...clientsData.slice(mid), ...clientsData.slice(mid), ...clientsData.slice(mid)];

  return (
    <div className="relative w-full overflow-hidden py-16 flex flex-col gap-4">
      <div className="relative -rotate-1 scale-[1.04] border-y border-border bg-background shadow-sm z-10">
        <MarqueeRow content={row1} direction="left" speed={45} />
      </div>
      <div className="relative rotate-1 scale-[1.04] border-y border-border bg-background shadow-sm z-0">
        <MarqueeRow content={row2} direction="right" speed={50} />
      </div>
    </div>
  );
}
