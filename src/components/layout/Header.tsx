'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Signal Board', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  const logoSrc = mounted && resolvedTheme === 'dark' ? '/Darkmode-Logo-AG.png' : '/adgrades-logo.png';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 mx-auto z-50 transition-all duration-500',
        isScrolled
          ? 'top-4 w-[95%] md:w-[90%] max-w-7xl rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-sm py-2'
          : 'top-0 w-full bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="AdGrades home" className="relative block w-32 h-10 shrink-0">
          <Image
            src={logoSrc}
            alt="AdGrades"
            fill
            className="object-contain object-left"
            priority
            sizes="128px"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand',
                pathname === item.href ? 'text-brand font-semibold' : 'text-foreground/70',
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              'rounded-full bg-foreground text-background hover:bg-brand hover:text-white transition-colors',
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open navigation menu"
              className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'w-9 h-9')}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-muted',
                      pathname === item.href ? 'bg-muted text-brand' : 'text-foreground',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 px-4">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className={cn(buttonVariants(), 'w-full rounded-full justify-center')}
                  >
                    Start a Project
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
