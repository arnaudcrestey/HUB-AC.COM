import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://www.arnaudcrestey.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Arnaud Crestey | Systèmes numériques et IA",
    template: "%s | Arnaud Crestey",
  },

  description:
    "Arnaud Crestey conçoit des systèmes numériques et des solutions intégrant l’intelligence artificielle pour développer, structurer et renforcer les activités.",

  applicationName: "Arnaud Crestey",

  authors: [
    {
      name: "Arnaud Crestey",
      url: siteUrl,
    },
  ],

  creator: "Arnaud Crestey",
  publisher: "Arnaud Crestey",

  category: "Technologie",

  keywords: [
    "Arnaud Crestey",
    "intelligence artificielle",
    "systèmes numériques",
    "automatisation",
    "développement web",
    "solutions IA",
    "transformation numérique",
    "SYSTIA",
    "UNYKO",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Arnaud Crestey",
    title: "Arnaud Crestey | Systèmes numériques et IA",
    description:
      "Développer et structurer les activités grâce à l’intelligence artificielle, au service de l’humain.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arnaud Crestey — Systèmes numériques et intelligence artificielle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arnaud Crestey | Systèmes numériques et IA",
    description:
      "Développer et structurer les activités grâce à l’intelligence artificielle, au service de l’humain.",
    images: ["/opengraph-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
