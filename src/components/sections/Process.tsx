'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Search, ClipboardList, Rocket, Settings } from 'lucide-react';
import { processData } from '@/data/homeData';

const stepIcons = [Search, ClipboardList, Rocket, Settings];

export default function Process() {
  return (
    <section className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
            {processData.subtitle}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] text-foreground mb-4">
            {processData.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {processData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

          {processData.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Search;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative group"
              >
                <div className="p-7 rounded-2xl border border-border bg-card hover:border-brand/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-brand/8 flex items-center justify-center group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-brand/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <span className="text-4xl font-black text-brand/15 select-none" aria-hidden="true">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
