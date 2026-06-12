'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Users, number: 25, suffix: '+', label: 'Happy Clients' },
  { icon: TrendingUp, number: 15, suffix: '', label: 'Team Members' },
  { icon: Award, number: 90, suffix: '%', label: 'Success Rate' },
  { icon: Clock, number: 2, suffix: '+', label: 'Years Experience' },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="!py-16 md:!py-20 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand/15 transition-colors">
                <stat.icon className="w-5 h-5 text-brand" aria-hidden="true" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-foreground tabular-nums mb-1">
                {stat.number}<span className="text-brand">{stat.suffix}</span>
              </p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
