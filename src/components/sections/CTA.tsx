import Link from 'next/link';
import { ArrowRight, CircleCheck as CheckCircle2 } from 'lucide-react';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import { ctaData } from '@/data/homeData';

export default function CTA() {
  return (
    <section className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, oklch(0.42 0.19 264 / 6%) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-foreground mb-5">
            {ctaData.title}
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-brand mb-6">
            {ctaData.subtitle}
          </p>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {ctaData.description}
          </p>

          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
            {ctaData.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'text-base px-10 h-13 rounded-xl bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20 hover:shadow-brand/30 transition-all font-bold',
              )}
            >
              {ctaData.primaryCTA}
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href="https://calendly.com/chandanbkrishna077/adgrades"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'text-base px-10 h-13 rounded-xl border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all font-bold',
              )}
            >
              {ctaData.secondaryCTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
