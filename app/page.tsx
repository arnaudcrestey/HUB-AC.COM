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
    dimension: "Influence IA",
    name: "UNYKO",
    subtitle: "Être visible ne suffit plus.",
    text: "Augmenter vos chances d'être recommandé par les intelligences artificielles.",
    href: "https://unyko.arnaudcrestey.com/",
  },
  {
    dimension: "Systèmes",
    name: "SYSTIA",
    subtitle: "Structurer pour développer",
    text: "Concevoir les outils, les automatisations et les systèmes numériques qui attirent plus de clients.",
    href: "https://www.systia.fr/",
  },
];

export default function Page() {
  return (
    <main className={`${inter.className} page`}>
      <section className="frame">
        <div className="dark-arch" />
        <div className="circle circle-one" />
        <div className="circle circle-two" />
        <div className="circle circle-three" />

        <header className="topbar">
          <span>COMPRENDRE AVANT D&apos;AGIR</span>
        </header>

        <section
          className="signature hero-signature"
          aria-label="Signature Arnaud Crestey"
        >
          <Image
            src="/branding/signature-ac.png"
            alt="Arnaud Crestey"
            width={900}
            height={900}
            priority
            className="signature-logo"
          />

          <p className="baseline">
            <span>Développer et structurer les activités</span>
            <span>grâce à l’IA, au service de l’humain.</span>
          </p>
        </section>

        <section className="hero-positioning" aria-label="Positionnement">
          <p className="hero-positioning-lead">
            <span>Vous êtes peut-être excellent dans votre métier.</span>
            <span>
              Cela ne garantit pas que votre activité génère suffisamment de
              clients.
            </span>
          </p>

          <p className="hero-positioning-text">
            J&apos;aide les dirigeants à comprendre ce qui freine réellement
            leur développement avant de concevoir les outils, les systèmes ou
            les stratégies les plus adaptés.
          </p>
        </section>

        <section className="cards" aria-label="Les piliers de l'écosystème">
          {pillars.map((pillar) => (
            <a
              key={pillar.name}
              href={pillar.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <span className="dimension">{pillar.dimension}</span>
              <h2 className={serif.className}>{pillar.name}</h2>
              <span className="subtitle">{pillar.subtitle}</span>
              <p>{pillar.text}</p>
              <span className="access">Découvrir</span>
            </a>
          ))}
        </section>

        <section
          className="ecosystem-note"
          aria-label="Positionnement de l'écosystème"
        >
          <span>COMPRIS • CHOISI • CONTACTÉ</span>
        </section>

        <ProofsCarousel serifClassName={serif.className} />

        <footer className="contact">
          <span>Échanger sur un projet :</span>
          <a href="mailto:demande@arnaudcrestey.com">
            demande@arnaudcrestey.com
          </a>
        </footer>
      </section>
    </main>
  );
}
