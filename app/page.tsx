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
    subtitle: "Comprendre l’activité",
    text: "Structurer l’activité, clarifier l’offre et concevoir des systèmes numériques capables de soutenir le développement.",
    href: "https://www.systia.fr/",
  },
  {
    dimension: "Collaborations",
    name: "ARHI",
    subtitle: "Comprendre les collaborations",
    text: "Éclairer les recrutements, les compatibilités humaines et les dynamiques collectives qui influencent une organisation.",
    href: "https://arhi.fr/",
  },
  {
    dimension: "Confiance",
    name: "UNYKO",
    subtitle: "Comprendre la confiance",
    text: "Mesurer les signaux qui rendent une organisation compréhensible, crédible et recommandable à l’ère de l’IA.",
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
          <a href="mailto:demande@arnaudcrestey.com">Contact</a>
        </header>

        <section className="signature">
          <div className={`${serif.className} ac`}>AC</div>

          <div className={`${serif.className} domain`}>
            ARNAUD CRESTEY
          </div>

          <div className="signature-line" />

          <p className="baseline">
            Développer et structurer les activités grâce à l’IA,
            au service de l’humain.
          </p>
        </section>

        <section className="method-block">
          <p>Comprendre avant d’agir.</p>
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
