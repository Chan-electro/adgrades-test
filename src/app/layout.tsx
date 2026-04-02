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
    default: 'AdGrades — Digital Marketing Agency in Bangalore',
    template: '%s | AdGrades',
  },
  description:
    'AdGrades is a top digital marketing agency in Bangalore helping startups and businesses with Google Ads, Meta Ads, SEO, social media management, and web development to drive measurable growth.',
  metadataBase: new URL('https://adgrades.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adgrades.in',
    siteName: 'AdGrades',
    title: 'AdGrades — Digital Marketing Agency in Bangalore',
    description:
      'Top digital marketing agency in Bangalore helping startups become the next big name through Google Ads, Meta Ads, SEO, and stunning web design.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AdGrades — Digital Marketing Agency Bangalore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdGrades — Digital Marketing Agency in Bangalore',
    description: 'Google Ads, Meta Ads, SEO & social media marketing agency in Bangalore for startups and businesses.',
    images: ['/og-image.png'],
  },
  keywords: [
    'digital marketing agency Bangalore',
    'digital marketing agency Hassan Karnataka',
    'Google Ads agency Bangalore',
    'Meta Ads agency Bangalore',
    'social media marketing Bangalore',
    'SEO agency Bangalore',
    'performance marketing agency India',
    'startup marketing agency Bangalore',
    'web development agency Bangalore',
    'lead generation agency Bangalore',
    'content marketing agency',
    'brand design agency Bangalore',
    'AdGrades',
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MarketingAgency', 'LocalBusiness', 'ProfessionalService'],
      '@id': 'https://adgrades.in/#organization',
      name: 'AdGrades',
      alternateName: 'Ad Grades',
      url: 'https://adgrades.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adgrades.in/adgrades-logo.png',
        width: 512,
        height: 160,
      },
      image: 'https://adgrades.in/og-image.png',
      description:
        'AdGrades is a top digital marketing agency in Bangalore specializing in Google Ads, Meta Ads, SEO, social media management, web development, and lead generation for startups and businesses across India.',
      foundingDate: '2023-05-02',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'Bangalore',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Hassan',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'City', name: 'Hassan' },
        { '@type': 'State', name: 'Karnataka' },
        { '@type': 'Country', name: 'India' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'info@adgrades.in',
          contactType: 'customer service',
          availableLanguage: ['English', 'Kannada', 'Hindi'],
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Generation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Editing' } },
        ],
      },
      sameAs: [
        'https://www.instagram.com/adgrades',
        'https://www.linkedin.com/company/adgrades',
        'https://www.facebook.com/adgrades',
      ],
      knowsAbout: [
        'Digital Marketing',
        'Search Engine Optimization',
        'Pay Per Click Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Web Development',
        'Brand Strategy',
        'Lead Generation',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adgrades.in/#website',
      url: 'https://adgrades.in',
      name: 'AdGrades',
      publisher: { '@id': 'https://adgrades.in/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://adgrades.in/services?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
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
