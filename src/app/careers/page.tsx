import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { cultureValues, openPositions, benefits } from '@/data/careersData';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/lib/button-variants';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | AdGrades',
  description: 'Join the AdGrades team. Explore open positions and help shape the future of digital marketing.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
            Careers at AdGrades
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
            Join Our Growing Team
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Be part of a dynamic agency shaping the future of digital marketing. We&rsquo;re looking for
            passionate individuals to join us.
          </p>
        </div>

        {/* Culture Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {cultureValues.slice(0, 3).map((v, i) => {
            const Icon = v.icon as React.ElementType;
            return (
              <Card key={i} className="group hover:border-brand/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-black tracking-tight text-foreground text-center mb-10">
            Benefits &amp; Perks
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-brand/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0" aria-hidden="true" />
                <span className="text-foreground text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight text-foreground text-center mb-10">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((p, i) => (
              <Card key={i} className="group hover:border-brand/30 hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors mb-2">
                        {p.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-medium">
                        <Badge variant="secondary">{p.department}</Badge>
                        <Badge variant="secondary">{p.type}</Badge>
                        <Badge variant="secondary">{p.location}</Badge>
                      </div>
                    </div>
                    <Link
                      href={`mailto:careers@adgrades.in?subject=Application for ${encodeURIComponent(p.title)}`}
                      className={cn(buttonVariants({ size: 'sm' }), 'shrink-0')}
                    >
                      Apply Now
                    </Link>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.description}</p>

                  <div className="bg-muted/30 rounded-xl p-5">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Requirements
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {p.requirements.map((req, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="text-brand mt-0.5 shrink-0" aria-hidden="true">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
