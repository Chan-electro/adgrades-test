import Link from 'next/link';
import { buttonVariants } from '@/lib/button-variants';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import ServicesFilter from '@/components/sections/ServicesFilter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | AdGrades',
  description: 'Explore our full range of digital marketing services — social media, performance ads, web development, SEO, and more.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-muted/30 border-b border-border py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
            Premium Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6">
            Elevate Your Digital Presence
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            From concept to launch, we deliver exceptional digital solutions that drive growth,
            enhance user experience, and transform your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'px-8 h-12')}>
              Start Your Project
            </Link>
            <Link href="/portfolio" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'px-8 h-12')}>
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid with Filter */}
      <div className="container mx-auto px-6 py-16">
        <ServicesFilter />
      </div>
    </div>
  );
}
