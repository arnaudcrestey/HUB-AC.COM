import { Cormorant_Garamond, Inter } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const entities = [
  {
    name: "SYSTIA",
    title: "Comprendre l'activité",
    description:
      "Structurer l’organisation, clarifier l’offre et concevoir des systèmes capables de soutenir durablement le développement d’une activité.",
    href: "https://www.systia.fr/",
    className: "systia",
  },
  {
    name: "ARHI",
    title: "Comprendre les collaborations",
    description:
      "Éclairer les recrutements, les compatibilités humaines et les dynamiques collectives qui influencent durablement une organisation.",
    href: "https://arhi.fr/",
    className: "arhi",
  },
  {
    name: "UNYKO",
    title: "Comprendre la confiance",
    description:
      "Mesurer les signaux qui rendent une organisation plus lisible, plus crédible et plus facilement recommandée.",
    href: "https://unyko.fr/",
    className: "unyko",
  },
];

export default function Page() {
  return (
    <main className={`${inter.className} page`}>
      <section className="frame">
        <div className="signature">
          <div className={`${serif.className} ac`}>AC</div>

          <div className={`${serif.className} domain`}>
            ARNAUD CRESTEY
          </div>

          <div className="line" />

          <div className="baseline max-w-[700px] mx-auto text-center text-[13px] leading-[1.8] text-[#6b6257] sm:text-[14px] md:text-[16px]">
            Développer et structurer les activités grâce à l'IA,
            au service de l'humain.
          </div>
        </div>

        <div className="intro">
          <h1 className={serif.className}>
            Comprendre
            <br />
            avant d'agir
          </h1>

          <p className="max-w-[700px] mx-auto">
            Toute organisation repose sur trois dimensions essentielles :
            son activité, ses collaborations et la confiance qu'elle inspire.
          </p>
        </div>

        <div className="cards">
          {entities.map((entity) => (
            <a
              key={entity.name}
              href={entity.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card ${entity.className}`}
            >
              <span className="card-title">
                {entity.title}
              </span>

              <h2 className={serif.className}>
                {entity.name}
              </h2>

              <p>{entity.description}</p>

              <span className="access">
                Découvrir
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[13px] uppercase tracking-[0.25em] text-[#8a7f72]">
            Trois dimensions.
          </p>

          <p className="mt-2 text-[13px] uppercase tracking-[0.25em] text-[#8a7f72]">
            Une même organisation.
          </p>
        </div>

        <div className="mt-24 border-t border-[#d8c5a3]/10 pt-12 text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#8a7f72]">
            Réalisations complémentaires
          </div>

          <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-12">
            <a
              href="https://www.qlykstudio.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b6257] transition hover:text-[#b79c6d]"
            >
              QLYK Studio Auto
            </a>

            <a
              href="https://www.cabinet-astrae.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b6257] transition hover:text-[#b79c6d]"
            >
              Cabinet Astraé
            </a>
          </div>
        </div>

        <div className="contact">
          <span>Demande spécifique</span>

          <a href="mailto:demande@arnaudcrestey.com">
            demande@arnaudcrestey.com
          </a>
        </div>
      </section>
    </main>
  );
}
