'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonialData } from '@/data/homeData';

type Testimonial = (typeof testimonialData.testimonials)[number];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="w-[85vw] md:w-[420px] shrink-0 hover:border-brand/30 hover:shadow-md transition-all duration-300">
      <CardContent className="p-6 md:p-8 flex flex-col h-full gap-4">
        <StarRating rating={t.rating ?? 5} />
        <p className="text-foreground/80 italic leading-relaxed text-sm md:text-base flex-1 line-clamp-5">
          &ldquo;{t.content}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {t.avatar ? (
            <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
          ) : (
            <div className="w-10 h-10 shrink-0 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm">
              {(t as { initials?: string }).initials ?? t.name[0]}
            </div>
          )}
          <div>
            <p className="font-bold text-foreground text-sm leading-tight">{t.name}</p>
            <p className="text-xs text-muted-foreground">
              {t.role}{t.company ? `, ${t.company}` : ''}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  const { testimonials } = testimonialData;
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
          {testimonialData.subtitle}
        </Badge>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground max-w-xl">
          {testimonialData.title}
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        aria-label="Client testimonials"
      >
        {/* Gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" aria-hidden="true" />

        <div
          className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] pb-4"
          aria-hidden="true"
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
