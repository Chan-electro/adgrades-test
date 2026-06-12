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

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 mx-auto z-50 transition-all duration-500 ease-out',
        isScrolled
          ? 'top-4 w-[95%] md:w-[90%] max-w-7xl rounded-full bg-background/85 backdrop-blur-xl border border-border/80 shadow-lg shadow-black/[0.03] py-2'
          : 'top-0 w-full bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
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

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                pathname === item.href
                  ? 'text-brand bg-brand/8 font-semibold'
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted',
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              'rounded-full bg-brand text-white hover:bg-brand-dark shadow-md shadow-brand/15 hover:shadow-brand/25 transition-all duration-300 font-bold text-sm px-6',
            )}
          >
            Get Started
          </Link>
        </div>

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
                      'px-4 py-3 rounded-xl text-base font-medium transition-colors hover:bg-muted',
                      pathname === item.href ? 'bg-brand/8 text-brand font-semibold' : 'text-foreground',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-6 px-4">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className={cn(buttonVariants(), 'w-full rounded-full justify-center bg-brand text-white hover:bg-brand-dark font-bold')}
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
