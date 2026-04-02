import { use } from 'react';
import { services } from '@/data/servicesData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function generateStaticParams() {
  return services.map(s => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = services.find(s => s.id === id);
  if (!service) return { title: 'Service | AdGrades' };
  return {
    title: `${service.title} | AdGrades`,
    description: service.shortDescription,
    keywords: [
      service.title,
      `${service.title} Bangalore`,
      `${service.title} agency India`,
      ...service.technologies.slice(0, 4),
      'AdGrades',
    ],
    openGraph: {
      title: `${service.title} | AdGrades`,
      description: service.shortDescription,
      url: `https://adgrades.in/services/${service.id}`,
    },
  };
}

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const service = services.find(s => s.id === id);

  if (!service) notFound();

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.fullDescription,
    provider: {
      '@type': 'Organization',
      name: 'AdGrades',
      url: 'https://adgrades.in',
    },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `https://adgrades.in/services/${service.id}`,
  };

  const faqJsonLd = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-background pb-20 pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <div className="container mx-auto px-6">
        <Link
          href="/services"
          className={cn(buttonVariants({ variant: 'ghost' }), 'mb-8 -ml-2 text-muted-foreground')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Back to Services
        </Link>

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/10 mb-6">
            <service.icon className="w-8 h-8 text-brand" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Packages */}
        {service.packages && service.packages.length > 0 ? (
          <div className="mb-20">
            <h2 className="text-3xl font-black tracking-tight text-center text-foreground mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-6">
              {service.packages.map((pkg) => {
                const isPopular = pkg.id === 'premium';
                return (
                  <Card
                    key={pkg.id}
                    className={cn(
                      'relative flex flex-col transition-all',
                      isPopular ? 'border-brand shadow-lg shadow-brand/10 scale-[1.02]' : 'hover:border-brand/30',
                    )}
                  >
                    {isPopular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white border-0 text-xs font-bold px-3">
                        Most Popular
                      </Badge>
                    )}
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                        <p className="text-muted-foreground text-sm min-h-[40px]">{pkg.description}</p>
                      </div>
                      <div className="mb-8">
                        <span className="text-3xl font-black text-foreground">{pkg.price}</span>
                      </div>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {pkg.includes.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" aria-hidden="true" />
                            <span className="text-muted-foreground text-sm leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/contact?service=${service.id}&package=${pkg.id}`}
                        className={cn(
                          buttonVariants({ variant: isPopular ? 'default' : 'outline' }),
                          'w-full justify-center',
                        )}
                      >
                        Select Plan
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center p-12 bg-muted/30 rounded-2xl border border-border mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">Custom Solutions Available</h3>
            <p className="text-muted-foreground mb-6">Contact us for a tailored quote based on your specific needs.</p>
            <Link href="/contact" className={cn(buttonVariants(), 'inline-flex')}>
              Get a Quote
            </Link>
          </div>
        )}

        {/* Process */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-black tracking-tight text-center text-foreground mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-muted/30 border border-border p-6 rounded-xl relative">
                <span className="text-5xl font-black text-brand/10 absolute top-3 right-4 select-none" aria-hidden="true">
                  {idx + 1}
                </span>
                <h3 className="font-bold text-foreground text-base mb-2 relative z-10">{step.step}</h3>
                <p className="text-sm text-muted-foreground relative z-10">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        {service.technologies && service.technologies.length > 0 && (
          <div className="text-center mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Tools &amp; Technologies</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-black tracking-tight text-center text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-10 text-sm">
              Everything you need to know about our {service.title} service.
            </p>
            <Accordion className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:border-brand/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA after FAQ */}
            <div className="mt-12 text-center p-8 bg-brand/5 border border-brand/15 rounded-2xl">
              <p className="font-bold text-foreground mb-2">Still have questions?</p>
              <p className="text-sm text-muted-foreground mb-6">
                Talk to our team — we&apos;ll answer everything before you commit to anything.
              </p>
              <Link
                href={`/contact?service=${service.id}`}
                className={cn(buttonVariants(), 'rounded-full px-8')}
              >
                Talk to Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
