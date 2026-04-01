'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Smartphone, Palette, Search, Mail, Monitor, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { servicesData } from '@/data/homeData';

const icons = [Smartphone, Palette, Search, Mail, Monitor, BarChart3];

export default function ServicesPreview() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
              {servicesData.title}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
              {servicesData.subtitle}
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-1 text-sm font-semibold text-foreground/70 hover:text-brand transition-colors group"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.services.map((service, i) => {
            const Icon = icons[i] ?? Monitor;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <Card className="group h-full hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6 w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-semibold text-brand hover:gap-2 transition-all gap-1"
                    >
                      Explore Service <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand transition-colors">
            View All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
