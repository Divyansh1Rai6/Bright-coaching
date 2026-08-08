import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { siteConfig } from '@/lib/data';
import SiteLayout from '@/components/site/SiteLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brightfuturecoaching.in'),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Bright Future Coaching in Indore offers expert preparation for JEE, NEET, and school board exams. Experienced faculty, small batches, and a proven track record of 3,400+ selections.',
  keywords: [
    'coaching center Indore',
    'JEE coaching Indore',
    'NEET coaching Indore',
    'best coaching in Vijay Nagar Indore',
    'Bright Future Coaching',
    'competitive exam preparation',
    'school tuition Indore',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      'Expert JEE, NEET, and board exam coaching in Indore. 18+ years of excellence with 3,400+ selections.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      'Expert JEE, NEET, and board exam coaching in Indore. 18+ years of excellence with 3,400+ selections.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
