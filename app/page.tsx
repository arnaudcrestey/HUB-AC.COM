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
    description: "Structuration et conception de systèmes d’activité.",
    href: "https://www.arnaudcrestey.com/",
    className: "syxen",
  },
  {
    number: "02",
    name: "Cabinet Astraé",
    description:
      "Diagnostic et accompagnement des situations personnelles et professionnelles.",
    href: "https://www.cabinet-astrae.fr/",
    className: "astrae",
  },
  {
    number: "03",
    name: "Qlyk Studio Auto",
    description: "Production de visuels automobiles prêts à vendre.",
    href: "https://www.qlykstudio.fr/",
    className: "qlyk",
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

          <div className="baseline">
            Développement et structuration d’entreprises
          </div>
        </div>

        <div className="intro">
          <h1 className={serif.className}>
            Trois entités.
            <br />
            Une même exigence.
          </h1>

          <p>
            Un point d’entrée vers les structures développées sous
            arnaudcrestey.com.
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
                  entity.className === "qlyk"
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
      </section>
    </main>
  );
}
