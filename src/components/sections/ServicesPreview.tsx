'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Smartphone, Palette, Search, Mail, ChartBar as BarChart3, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { servicesData } from '@/data/homeData';

const icons = [Smartphone, Palette, Search, Mail, Target, BarChart3];
const gradients = [
  'from-blue-500/10 to-cyan-500/10',
  'from-amber-500/10 to-orange-500/10',
  'from-emerald-500/10 to-teal-500/10',
  'from-rose-500/10 to-pink-500/10',
  'from-sky-500/10 to-blue-500/10',
  'from-violet-500/10 to-fuchsia-500/10',
];

export default function ServicesPreview() {
  return (
    <section className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
              {servicesData.title}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] text-foreground mb-4">
              {servicesData.subtitle}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {servicesData.description}
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-foreground/70 hover:text-brand transition-colors group border border-border rounded-full px-5 py-2.5 hover:border-brand/40"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.services.map((service, i) => {
            const Icon = icons[i] ?? Smartphone;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <div className="group h-full p-7 rounded-2xl border border-border bg-card hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 transition-all duration-400 card-shine">
                  <div className={`mb-5 w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-brand transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-bold text-brand hover:gap-2.5 transition-all gap-1.5 group/link"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand transition-colors">
            View All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
