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
    number: "01",
    name: "SYSTIA",
    description:
      "Structurer une activité, clarifier l’offre et concevoir des systèmes capables de générer des demandes.",
    href: "https://www.systia.fr/",
    className: "systia",
  },
  {
    number: "02",
    name: "Qlyk Studio Auto",
    description:
      "Valoriser un véhicule avec des visuels premium conçus pour capter l’attention et déclencher l’achat.",
    href: "https://www.qlykstudio.fr/",
    className: "qlyk",
  },
  {
    number: "03",
    name: "Cabinet Astraé",
    description:
      "Une lecture du thème astral pour comprendre une situation en profondeur et retrouver de la clarté.",
    href: "https://www.cabinet-astrae.fr/",
    className: "astrae",
  },
  {
    number: "04",
    name: "ARHI",
    description:
      "Éclairer les recrutements grâce à une lecture structurée des compatibilités entre un candidat, un poste et une organisation.",
    href: "https://arhi.fr/",
    className: "arhi",
  },
];
export default function Page() {
  return (
    <main className={`${inter.className} page`}>
      <section className="frame">
        <div className="signature">
          <div className={`${serif.className} ac`}>AC</div>

          <div className={`${serif.className} domain`}>
            arnaudcrestey.com
          </div>

          <div className="line" />

          <div className="baseline max-w-[420px] mx-auto text-center text-[13px] leading-[1.6] text-[#6b6257] sm:text-[14px] md:text-[15px]">
            Développer et structurer des activités à travers des systèmes
            numériques sur mesure
          </div>
        </div>

        <div className="intro">
          <h1 className={serif.className}>
            Quatre entités
            <br />
            Une même exigence
          </h1>

          <p>
            Un point d’entrée vers les structures développées sous
            arnaudcrestey.com
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
              <span className="number">{entity.number}</span>

              <h2
                className={
                  entity.className === "qlyk" || entity.className === "arhi"
                    ? inter.className
                    : serif.className
                }
              >
                {entity.name}
              </h2>

              <p>{entity.description}</p>

              <span className="access">Accéder</span>
            </a>
          ))}
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
