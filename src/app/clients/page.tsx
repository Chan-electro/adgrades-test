import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { clientsData } from '@/data/clientsData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Success Stories & Case Studies — Real Results',
  description: 'Real results for real businesses. Explore how AdGrades helped 25+ clients achieve 300%+ growth through digital marketing, SEO, performance ads, and brand strategy.',
  alternates: {
    canonical: 'https://adgrades.in/clients',
  },
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="mb-20">
          <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
            Case Studies
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-4">
            Real Results for<br />Real Businesses.
          </h1>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border">
          {clientsData.map((c) => (
            <Link href={`/clients/${c.id}`} key={c.id} className="group block">
              <div className="py-10 px-4 -mx-4 hover:bg-muted/30 transition-colors rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-8 items-center">
                  {/* Left: Name & Category */}
                  <div className="flex flex-col gap-3">
                    <Badge variant="outline" className="self-start text-xs font-bold uppercase tracking-wider">
                      {c.category}
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground group-hover:text-brand transition-colors">
                      {c.name}
                    </h2>
                  </div>

                  {/* Center: Logo */}
                  <div className="flex justify-center">
                    {c.logo && (
                      <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center p-4 rounded-full bg-background border border-border shadow-sm group-hover:shadow-md group-hover:border-brand/30 transition-all duration-300">
                        <Image
                          src={c.logo}
                          alt={c.name}
                          fill
                          className="object-contain p-4 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all"
                          sizes="112px"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right: Result & Arrow */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      {c.results && c.results.length > 0 && (
                        <>
                          <span className="block text-5xl md:text-6xl font-black text-foreground font-mono tabular-nums mb-1">
                            {c.results[0].value}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            {c.results[0].metric}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="hidden md:flex w-14 h-14 rounded-full border border-border items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
