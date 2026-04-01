'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { processData } from '@/data/homeData';

export default function Process() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
            {processData.subtitle}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
            {processData.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {processData.steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative group"
            >
              {/* Connector line */}
              {i < processData.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-16 w-[calc(100%+2.5rem)] h-px bg-border -z-10" aria-hidden="true" />
              )}

              <div className="w-16 h-16 rounded-full bg-background border-2 border-border text-brand font-black text-xl flex items-center justify-center mb-6 group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                {step.step}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
