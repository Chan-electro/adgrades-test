import Link from 'next/link';
import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Signal Board', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

const serviceLinks = [
  'Social Media Marketing',
  'Meta & Google Ads',
  'Web Development',
  'SEO Optimization',
  'Video Editing',
  'Lead Generation',
];

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="inline-block text-2xl font-black tracking-tight">
              AdGrades<span className="text-brand">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We help startups become the next big name through creative marketing,
              data-driven ads, and stunning web design.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/adgrades"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AdGrades Instagram"
                className="p-2 rounded-full bg-background border border-border hover:bg-brand hover:text-white hover:border-brand transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/ad-grades"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AdGrades LinkedIn"
                className="p-2 rounded-full bg-background border border-border hover:bg-brand hover:text-white hover:border-brand transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919686314869"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 rounded-full bg-background border border-border hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/70 hover:text-brand transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-foreground/70 hover:text-brand transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand" />
                <span>Vinayaka Industries, K Hoskoppalu, Hassan 573201, Karnataka</span>
              </li>
              <li>
                <a href="tel:+918073698913" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-brand transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-brand" />
                  +91 80736 98913
                </a>
              </li>
              <li>
                <a href="mailto:info@adgrades.in" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-brand transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-brand" />
                  info@adgrades.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-brand" />
                <span>Mon–Sat: 9 AM – 9 PM<br />Sun: 9 AM – 1:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AdGrades. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
