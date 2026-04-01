'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { contactMethods, officeInfo, faqs, budgetOptions } from '@/data/contactData';
import { services } from '@/data/servicesData';
import { Send, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { toast } from 'sonner';

function getServiceDetails(serviceId: string | null, packageId: string | null) {
  if (!serviceId) return { serviceName: '', packagePrice: '' };
  const service = services.find(s => s.id === serviceId);
  if (!service) return { serviceName: '', packagePrice: '' };
  let packagePrice = '';
  if (packageId && service.packages) {
    const pkg = service.packages.find(p => p.id === packageId);
    if (pkg) packagePrice = pkg.price;
  }
  return { serviceName: service.title, packagePrice };
}

function ContactForm() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('service');
  const packageId = searchParams.get('package');
  const { serviceName, packagePrice } = getServiceDetails(serviceId, packageId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceName || '',
    budget: packagePrice || '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    if (serviceName || packagePrice) {
      setFormData(prev => ({
        ...prev,
        service: serviceName || prev.service,
        budget: packagePrice || prev.budget,
      }));
    }
  }, [serviceName, packagePrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', budget: '', message: '' });
        toast.success('Message sent! We\'ll get back to you within 24 hours.');
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('idle');
      toast.error('Something went wrong. Please try again or WhatsApp us.');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header + Form */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          {/* Left info */}
          <div>
            <Badge variant="outline" className="mb-4 text-brand border-brand/30 bg-brand/5 font-bold tracking-widest uppercase text-xs">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground mb-6 leading-tight">
              Let&rsquo;s Chat About<br />Your Next Project
            </h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Ready to transform your business? We&rsquo;d love to hear about your goals.
            </p>

            <div className="space-y-6 mb-10">
              <h3 className="text-lg font-bold text-foreground">Contact Info</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {officeInfo.map((info, i) => (
                  <Card key={i}>
                    <CardContent className="p-5">
                      <info.icon className="w-5 h-5 text-brand mb-3" aria-hidden="true" />
                      <h4 className="font-bold text-foreground text-sm mb-2">{info.title}</h4>
                      <div className="text-muted-foreground text-xs space-y-1">
                        {info.details.map((d, idx) => <p key={idx}>{d}</p>)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Connect</h3>
              <div className="flex gap-3">
                {contactMethods.map((m, i) => (
                  <a
                    key={i}
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={m.title}
                    className="p-3 rounded-xl bg-muted/30 border border-border hover:border-brand/30 hover:bg-muted transition-colors"
                  >
                    <m.icon className={`w-5 h-5 ${m.color}`} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <Card>
            <CardContent className="p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-brand mx-auto mb-6" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8">We&rsquo;ll get back to you within 24 hours.</p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <h3 className="text-xl font-bold text-foreground">Send us a Message</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name <span aria-hidden="true" className="text-brand">*</span></Label>
                      <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span aria-hidden="true" className="text-brand">*</span></Label>
                      <Input
                        id="email"
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service</Label>
                      {serviceName ? (
                        <Input id="service" readOnly value={formData.service} className="opacity-60 cursor-not-allowed" />
                      ) : (
                        <select
                          id="service"
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground"
                          value={formData.service}
                          onChange={e => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="">Select Service...</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Ads">Ads (Performance)</option>
                          <option value="Web Development">Web Development</option>
                          <option value="SEO">SEO</option>
                          <option value="Other">Other</option>
                        </select>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">{packagePrice ? 'Selected Plan' : 'Budget'}</Label>
                      {packagePrice ? (
                        <Input id="budget" readOnly value={formData.budget} className="opacity-60 cursor-not-allowed" />
                      ) : (
                        <select
                          id="budget"
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground"
                          value={formData.budget}
                          onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        >
                          <option value="">Select Budget...</option>
                          {budgetOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details <span aria-hidden="true" className="text-brand">*</span></Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] resize-none"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : (
                      <>Send Message <Send className="ml-2 w-4 h-4" aria-hidden="true" /></>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-black tracking-tight text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-brand">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Map */}
        <div className="w-full h-80 rounded-2xl overflow-hidden border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.983962!2d76.107463!3d12.983962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzAyLjMiTiA3NsKwMDYnMjYuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="AdGrades Office Location"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" aria-label="Loading" />
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
