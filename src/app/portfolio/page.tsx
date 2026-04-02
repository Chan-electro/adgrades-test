import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/data/clientsData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signal Board | AdGrades',
  description: 'Explore our portfolio of work — campaigns, websites, branding, and digital transformations.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="mb-16">
          <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
            Our Work
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground">
            Signal Board<span className="text-brand">.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden group relative cursor-default"
            >
              {/* Background Image */}
              <Image
                src={p.image}
                alt={p.client}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Client Logo */}
              <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md p-1.5">
                <Image
                  src={p.logo}
                  alt={`${p.client} logo`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" aria-hidden="true" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 text-white">
                <span className="text-brand font-bold text-xs uppercase tracking-widest mb-2">{p.category}</span>
                <h3 className="text-2xl font-black mb-3 leading-tight">{p.client}</h3>
                <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-300">
                  <p className="text-white/70 text-sm border-t border-white/20 pt-3 leading-relaxed">
                    {p.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
