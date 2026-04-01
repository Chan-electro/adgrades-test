'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, HeartHandshake, Lightbulb, BarChart2, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { whyChooseUsData } from '@/data/homeData';

const icons = [Target, TrendingUp, HeartHandshake, Lightbulb, BarChart2, Zap];

export default function WhyChoose() {
  return (
    <section className="bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
            {whyChooseUsData.title}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-4">
            {whyChooseUsData.subtitle}
          </h2>
          <p className="text-muted-foreground text-lg">{whyChooseUsData.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.features.map((feature, i) => {
            const Icon = icons[i] ?? Target;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:border-brand/30 hover:shadow-md transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
