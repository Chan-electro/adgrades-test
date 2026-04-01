import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: {
    default: 'AdGrades — Transform Your Digital Presence',
    template: '%s | AdGrades',
  },
  description:
    'AdGrades is a creative digital marketing agency helping startups and businesses build powerful strategies that drive growth, engagement, and measurable results.',
  metadataBase: new URL('https://adgrades.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adgrades.in',
    siteName: 'AdGrades',
    title: 'AdGrades — Transform Your Digital Presence',
    description:
      'Creative marketing agency helping startups become the next big name through data-driven ads and stunning web design.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AdGrades' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdGrades — Transform Your Digital Presence',
    description: 'Creative marketing agency for startups and businesses.',
    images: ['/og-image.png'],
  },
  keywords: [
    'digital marketing agency',
    'social media marketing',
    'performance marketing',
    'web development',
    'SEO',
    'brand design',
    'Hassan Karnataka',
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'AdGrades',
  url: 'https://adgrades.in',
  logo: 'https://adgrades.in/logo.png',
  description:
    'AdGrades is a creative digital marketing agency helping startups and businesses build powerful strategies that drive growth, engagement, and measurable results.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hassan',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@adgrades.in',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.instagram.com/adgrades',
    'https://www.linkedin.com/company/adgrades',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Skip to main content — a11y */}
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
