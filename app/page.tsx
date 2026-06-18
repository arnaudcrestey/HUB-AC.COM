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
    dimension: "Activité",
    name: "SYSTIA",
    subtitle: "Structurer l’activité",
    text: "Clarifier l’offre, organiser les systèmes et concevoir des outils numériques capables de soutenir le développement.",
    href: "https://www.systia.fr/",
  },
  {
    dimension: "Collaborations",
    name: "ARHI",
    subtitle: "Éclairer les collaborations",
    text: "Lire les compatibilités humaines, les recrutements, les équipes et les dynamiques qui influencent une organisation.",
    href: "https://arhi.fr/",
  },
  {
    dimension: "Confiance",
    name: "UNYKO",
    subtitle: "Mesurer la confiance",
    text: "Identifier les signaux qui rendent une organisation compréhensible, crédible et recommandable à l’ère de l’IA.",
    href: "https://unyko.arnaudcrestey.com/",
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
          <span>Écosystème</span>
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
            Développer et structurer les activités
            <br />
            grâce à l’IA, au service de l’humain.
          </p>
        </section>

        <section className="method-block">
          <h1 className={`${serif.className} method-title`}>
            Comprendre avant d’agir.
          </h1>
        </section>

        <section
          className="cards"
          aria-label="Les trois piliers de l'écosystème"
        >
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
          <span>Trois lectures.</span>
          <span>Une même organisation.</span>
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
