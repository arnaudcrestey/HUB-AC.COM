import { Cormorant_Garamond, Inter } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pillars = [
  {
    dimension: "Activité",
    name: "SYSTIA",
    text: "Structurer l’activité, clarifier l’offre et concevoir des systèmes numériques capables de soutenir le développement.",
    href: "https://www.systia.fr/",
  },
  {
    dimension: "Collaborations",
    name: "ARHI",
    text: "Éclairer les recrutements, les compatibilités humaines et les dynamiques collectives qui influencent une organisation.",
    href: "https://arhi.fr/",
  },
  {
    dimension: "Confiance",
    name: "UNYKO",
    text: "Mesurer les signaux qui rendent une organisation compréhensible, crédible et recommandable à l’ère de l’IA.",
    href: "https://unyko.arnaudcrestey.com/",
  },
];

export default function Page() {
  return (
    <main className={`${inter.className} page`}>
      <section className="frame">
        <div className="circle circle-large" />
        <div className="circle circle-medium" />
        <div className="circle circle-small" />
        <div className="gold-dot" />

        <header className="topbar">
          <div className="menu-label">Écosystème</div>
          <a href="mailto:demande@arnaudcrestey.com">Contact</a>
        </header>

        <div className="signature">
          <div className={`${serif.className} ac`}>AC</div>
          <div className={`${serif.className} domain`}>ARNAUD CRESTEY</div>
          <div className="baseline">Comprendre avant d’agir</div>
        </div>

        <section className="hero">
          <h1 className={serif.className}>
            Développer et structurer les activités grâce à l’IA,
            <span> au service de l’humain.</span>
          </h1>

          <p>
            Toute organisation repose sur trois dimensions essentielles :
            son activité, ses collaborations et la confiance qu’elle inspire.
          </p>
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
              <p>{pillar.text}</p>
              <span className="access">Découvrir</span>
            </a>
          ))}
        </section>

        <div className="ecosystem-note">
          <span>Trois dimensions.</span>
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
      </section>
    </main>
  );
}
