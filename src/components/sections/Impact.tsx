'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { heroData } from '@/data/homeData';

export default function Impact() {
  const { stats } = heroData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="!py-16 md:!py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="text-center px-4 py-4"
            >
              <p className="font-mono text-4xl md:text-5xl font-black text-brand tabular-nums">
                {stat.number}{stat.suffix}
              </p>
              <p className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
