'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CircleCheck as CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import { services } from '@/data/servicesData';

function formatCategory(cat: string) {
  return cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export default function ServicesFilter() {
  const [filter, setFilter] = useState('All');
  const visibleServices = services.filter(s => !s.hidden);
  const categories = ['All', ...Array.from(new Set(visibleServices.map(s => s.category)))];
  const filtered = filter === 'All' ? visibleServices : visibleServices.filter(s => s.category === filter);

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-16" role="group" aria-label="Filter services by category">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
              filter === cat
                ? 'bg-brand text-white border-brand'
                : 'bg-background border-border text-muted-foreground hover:border-brand/50 hover:text-foreground'
            }`}
          >
            {cat === 'All' ? 'All Services' : formatCategory(cat)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((service) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <Card className="group h-full hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <Badge variant="outline" className="mb-4 self-start text-brand border-brand/30 bg-brand/5 text-xs font-bold tracking-wider uppercase">
                    {formatCategory(service.category)}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="border-t border-border pt-5">
                    <ul className="mb-5 space-y-2">
                      {service.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-foreground">
                        {typeof service.pricing === 'object'
                          ? (service.pricing as Record<string, string>).basic ?? 'Custom Pricing'
                          : 'Custom Pricing'}
                      </span>
                      <Link href={`/services/${service.id}`} className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'text-brand hover:text-brand px-0 font-semibold')}>
                        View Plans →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center py-20 text-muted-foreground">No services found in this category.</p>
      )}
    </>
  );
}
