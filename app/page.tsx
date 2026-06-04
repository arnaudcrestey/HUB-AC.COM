import { Cormorant_Garamond, Inter } from "next/font/google";

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

        <section className="signature">
          <div className={`${serif.className} ac`}>AC</div>

          <div className={`${serif.className} domain`}>
            arnaudcrestey.com
          </div>

          <div className="signature-line" />

          <p className="baseline">
            Développer et structurer les activités
            <br />
            grâce à l’IA, au service de l’humain.
          </p>
        </section>

        <section className="method-block">
          <h1 className={serif.className}>Comprendre avant d’agir.</h1>
        </section>

        <section className="cards">
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

        <div className="ecosystem-note">
          <span>Trois lectures.</span>
          <span>Une même organisation.</span>
        </div>

        <section className="proofs">
          <p>Réalisations complémentaires</p>

          <div>
            <a
              href="https://www.qlykstudio.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              QLYK Studio Auto
            </a>

            <a
              href="https://www.cabinet-astrae.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cabinet Astraé
            </a>
          </div>
        </section>

        <footer className="contact">
          <span>Demande spécifique</span>
          <a href="mailto:demande@arnaudcrestey.com">
            demande@arnaudcrestey.com
          </a>
        </footer>
      </section>
    </main>
  );
}
