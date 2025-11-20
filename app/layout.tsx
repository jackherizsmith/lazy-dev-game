import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lazy Dev: Office Survival',
  description:
    'Can you survive the workday doing the bare minimum? Navigate workplace events, manage your coolness, and make it to 5pm without getting replaced by AI.',
  keywords: ['game', 'office', 'developer', 'lazy', 'survival', 'workplace'],
  metadataBase: new URL('https://lazy-dev.game'),
  openGraph: {
    title: 'Lazy Dev: Office Survival',
    description:
      'Can you survive the workday doing the bare minimum? Navigate workplace events and make it to 5pm without getting replaced by AI.',
    type: 'website',
    siteName: 'Lazy Dev: Office Survival',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lazy Dev: Office Survival',
    description: 'Can you survive the workday doing the bare minimum?',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
