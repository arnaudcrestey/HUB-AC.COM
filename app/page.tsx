import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ProofsCarousel } from "@/components/ProofsCarousel";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const pillars = [
  {
    name: "SYSTIA",
    title: "Créer ou faire évoluer votre site",
    subtitle: "Points d’entrée · Sites vivants · Parcours client",
    text: "Un site utile aujourd’hui, conçu pour suivre votre activité demain.",
    access: "Découvrir SYSTIA",
    href: "https://www.systia.fr/",
  },
  {
    name: "UNYKO",
    title: "Être mieux trouvé et mieux compris",
    subtitle: "Google · IA · Crédibilité numérique",
    text: "Rendre votre activité plus lisible, plus crédible et plus recommandable.",
    access: "Découvrir UNYKO",
    href: "https://unyko.arnaudcrestey.com/",
  },
];

export default function Page() {
  return (
    <main className={inter.className + " page"}>
      <section className="frame">
        <div className="dark-arch" />
        <div className="circle circle-one" />
        <div className="circle circle-two" />
        <div className="circle circle-three" />

        <header className="topbar">
          <span>COMPRENDRE AVANT D&apos;AGIR</span>
        </header>

        <section className="signature hero-signature" aria-label="Signature Arnaud Crestey">
          <Image
            src="/branding/signature-ac.png"
            alt="Arnaud Crestey"
            width={900}
            height={900}
            priority
            className="signature-logo"
          />
          <p className="baseline">
            <span>Communication &amp; stratégie digitale</span>
          </p>
        </section>

        <section className="hero-positioning" aria-label="Positionnement">
          <p className="hero-positioning-lead">
            <span>Vous êtes peut-être excellent dans votre métier.</span>
            <span>
              Cela ne garantit pas que votre activité génère suffisamment de clients.
            </span>
          </p>
          <p className="hero-positioning-text">
            J&apos;aide les dirigeants à clarifier ce dont leur activité a réellement besoin pour se développer, avant de concevoir les solutions les plus adaptées.
          </p>
        </section>

        <section className="cards" aria-label="Deux façons de faire avancer votre activité">
          {pillars.map((pillar) => (
            <a
              key={pillar.name}
              href={pillar.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <span className="dimension">{pillar.name}</span>
              <h2 className={serif.className}>{pillar.title}</h2>
              <span className="subtitle">{pillar.subtitle}</span>
              <p>{pillar.text}</p>
              <span className="access">{pillar.access}</span>
            </a>
          ))}
        </section>

        <section className="ecosystem-note" aria-label="Positionnement de l'écosystème">
          <span>COMPRENDRE • STRUCTURER • FAIRE ÉVOLUER</span>
        </section>

        <ProofsCarousel serifClassName={serif.className} />

        <footer className="contact">
          <span>Échanger sur un projet :</span>
          <a href="mailto:demande@arnaudcrestey.com">demande@arnaudcrestey.com</a>
        </footer>
      </section>
    </main>
  );
}
