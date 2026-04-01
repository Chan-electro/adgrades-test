import { clientsData } from '@/data/clientsData';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/lib/button-variants';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return clientsData.map(c => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const client = clientsData.find(c => c.id === id);
  return {
    title: client ? `${client.name} Case Study | AdGrades` : 'Case Study | AdGrades',
    description: client?.description,
  };
}

export default async function ClientDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const client = clientsData.find(c => c.id === id);

  if (!client) notFound();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Image */}
      <div className="h-[50vh] relative bg-muted">
        {client.image && (
          <Image
            src={client.image}
            alt={client.name}
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="absolute top-8 left-6 md:left-12 z-20">
          <Link
            href="/clients"
            className={cn(buttonVariants({ variant: 'secondary' }), 'rounded-full backdrop-blur-sm bg-background/80 border border-border')}
          >
            <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" /> Back to Clients
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 -mt-32">
        <Card className="shadow-xl">
          <CardContent className="p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              {client.logo && (
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-background rounded-2xl shadow-md border border-border flex-shrink-0 overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-3"
                    sizes="128px"
                  />
                </div>
              )}
              <div>
                <Badge variant="outline" className="mb-2 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
                  {client.category}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-4 leading-tight">
                  {client.name}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">{client.description}</p>
              </div>
            </div>

            {/* Results */}
            {client.results && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border-y border-border py-12">
                {client.results.map((r, i) => (
                  <div key={i} className="text-center p-6 bg-muted/30 rounded-xl">
                    <span className="block text-4xl md:text-5xl font-black text-foreground font-mono tabular-nums mb-2">{r.value}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">{r.metric}</span>
                    <p className="text-muted-foreground text-xs">{r.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-6">About {client.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">{client.about}</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-6">How We Helped</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">{client.howWeHelped}</p>
                </section>

                {client.testimonial && (
                  <blockquote className="bg-brand text-white p-10 rounded-2xl relative overflow-hidden">
                    <svg className="absolute top-4 right-4 w-20 h-20 text-white/10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                    <p className="text-xl md:text-2xl font-bold italic mb-6 relative z-10">&ldquo;{client.testimonial.quote}&rdquo;</p>
                    <footer className="font-bold relative z-10">— {client.testimonial.author}</footer>
                  </blockquote>
                )}
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-5">Project Details</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-bold text-foreground">{client.duration}</span>
                      </li>
                      <li className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Year</span>
                        <span className="font-bold text-foreground">{client.year}</span>
                      </li>
                      {client.tags?.map(tag => (
                        <li key={tag} className="flex justify-between border-b border-border pb-3 last:border-0">
                          <span className="text-muted-foreground">Focus</span>
                          <span className="font-bold text-foreground">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-5">Services Delivered</h4>
                    <ul className="space-y-3">
                      {client.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Link href="/contact" className={cn(buttonVariants(), 'w-full justify-center')}>
                  Start Your Success Story
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
