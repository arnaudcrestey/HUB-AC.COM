import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'arnaudcrestey.com — Hub',
  description: 'Hub premium vers les entités SYXEN, ASTRAÉ et QLYK.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
