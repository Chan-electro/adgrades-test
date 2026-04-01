import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import { ctaData } from '@/data/homeData';

export default function CTA() {
  return (
    <section className="bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-4">
          {ctaData.title}
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-brand mb-6">
          {ctaData.subtitle}
        </p>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {ctaData.description}
        </p>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {ctaData.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: 'lg' }), 'text-base px-8 h-12')}
          >
            {ctaData.primaryCTA}
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href="https://calendly.com/chandanbkrishna077/adgrades"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'text-base px-8 h-12')}
          >
            {ctaData.secondaryCTA}
          </a>
        </div>
      </div>
    </section>
  );
}
