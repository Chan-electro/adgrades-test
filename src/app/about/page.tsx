import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { milestones, values, team } from '@/data/aboutData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AdGrades',
  description: 'Meet the team behind AdGrades — a passionate digital marketing agency helping startups become the next big name.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="max-w-4xl mb-24">
          <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
            Who We Are
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-8 leading-tight">
            We Help Startups Become<br />the Next Big Name
            <span className="text-brand">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            {milestones[0].description}. We combine creative marketing, data-driven ads, and stunning
            web design to build brands that matter.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-foreground text-background rounded-3xl p-8 md:p-12 mb-24">
          <h2 className="text-3xl font-black tracking-tight mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center">
                  <val.icon className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand mb-2">{val.title}</h3>
                  <p className="text-background/70 text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-black tracking-tight text-foreground mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 pl-16 relative">
                  <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full border-2 border-brand bg-background" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-brand mb-1 block">{m.year}</span>
                    <h4 className="text-xl font-bold text-foreground mb-2">{m.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-black tracking-tight text-foreground mb-12">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Card key={i} className="group hover:border-brand/30 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-border group-hover:border-brand/30 transition-colors">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-sm leading-tight mb-1">{member.name}</h3>
                  <p className="text-xs text-brand font-semibold mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'h-7 text-xs gap-1.5 text-muted-foreground hover:text-brand')}
                  >
                    <Linkedin className="w-3 h-3" aria-hidden="true" />
                    Connect
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
