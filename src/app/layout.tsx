import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';

const siteUrl = 'https://sebiunipan.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sebi Unipan | Software Engineer',
    template: '%s | Sebi Unipan',
  },
  description:
    'Software engineer building scalable applications. Experienced in TypeScript, React, Kotlin, and Android development. Based in Vancouver, BC.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'TypeScript',
    'Kotlin',
    'Android Developer',
    'Vancouver',
    'Web Developer',
    'Mobile Developer',
  ],
  authors: [{ name: 'Sebi Unipan', url: siteUrl }],
  creator: 'Sebi Unipan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Sebi Unipan',
    title: 'Sebi Unipan | Software Engineer',
    description:
      'Software engineer building scalable applications. Experienced in TypeScript, React, Kotlin, and Android development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebi Unipan | Software Engineer',
    description:
      'Software engineer building scalable applications. Experienced in TypeScript, React, Kotlin, and Android development.',
  },
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
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
