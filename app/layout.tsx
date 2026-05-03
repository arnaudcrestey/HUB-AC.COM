import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'arnaudcrestey.com — Hub',
  description:
    'Point d’entrée vers SYSTIA, Cabinet Astraé et Qlyk Studio Auto.',
  metadataBase: new URL('https://www.arnaudcrestey.com'),
  openGraph: {
    title: 'arnaudcrestey.com — Hub',
    description:
      'Point d’entrée vers SYSTIA, Cabinet Astraé et Qlyk Studio Auto.',
    url: 'https://www.arnaudcrestey.com',
    siteName: 'arnaudcrestey.com',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.arnaudcrestey.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
