import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Caveat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-hand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AdGrades — Digital Marketing Agency in Bangalore | Performance Marketing & SEO',
    template: '%s | AdGrades — Digital Marketing Agency',
  },
  description:
    'AdGrades is a top-rated digital marketing agency in Bangalore helping startups and businesses with Google Ads, Meta Ads, SEO, social media management, lead generation, and brand strategy to drive 300%+ growth.',
  metadataBase: new URL('https://adgrades.in'),
  alternates: {
    canonical: 'https://adgrades.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adgrades.in',
    siteName: 'AdGrades',
    title: 'AdGrades — Best Digital Marketing Agency in Bangalore',
    description:
      'Top digital marketing agency in Bangalore helping startups become the next big name through Google Ads, Meta Ads, SEO, and performance marketing.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AdGrades — Digital Marketing Agency Bangalore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdGrades — Digital Marketing Agency in Bangalore',
    description: 'Google Ads, Meta Ads, SEO & social media marketing agency in Bangalore for startups and businesses. 300%+ avg growth.',
    images: ['/og-image.png'],
  },
  keywords: [
    'digital marketing agency Bangalore',
    'best digital marketing company Bangalore',
    'digital marketing agency Hassan Karnataka',
    'Google Ads agency Bangalore',
    'Meta Ads agency Bangalore',
    'Facebook Ads agency India',
    'social media marketing Bangalore',
    'SEO agency Bangalore',
    'SEO services India',
    'performance marketing agency India',
    'startup marketing agency Bangalore',
    'lead generation agency Bangalore',
    'content marketing agency India',
    'brand design agency Bangalore',
    'video marketing agency',
    'AdGrades',
    'AdGrades Bangalore',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
        'AdGrades is a top-rated digital marketing agency in Bangalore specializing in Google Ads, Meta Ads, SEO, social media management, lead generation, and brand strategy for startups and businesses across India.',
      foundingDate: '2023-05-02',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
      priceRange: '$$',
      currenciesAccepted: 'INR',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'Bangalore',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          postalCode: '560001',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'Vinayaka Industries, K Hoskoppalu',
          addressLocality: 'Hassan',
          postalCode: '573201',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9716,
        longitude: 77.5946,
      },
      areaServed: [
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'City', name: 'Hassan' },
        { '@type': 'State', name: 'Karnataka' },
        { '@type': 'Country', name: 'India' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-8073698913',
          email: 'info@adgrades.in',
          contactType: 'customer service',
          availableLanguage: ['English', 'Kannada', 'Hindi'],
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management & Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta (Facebook & Instagram) Ads' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Generation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Editing & Production' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Design & Identity' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '25',
        bestRating: '5',
      },
      sameAs: [
        'https://www.instagram.com/adgrades',
        'https://www.linkedin.com/company/ad-grades',
        'https://www.facebook.com/adgrades',
      ],
      knowsAbout: [
        'Digital Marketing',
        'Search Engine Optimization',
        'Pay Per Click Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Brand Strategy',
        'Lead Generation',
        'Performance Marketing',
        'Video Marketing',
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
      className={`${GeistSans.variable} ${GeistMono.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
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
