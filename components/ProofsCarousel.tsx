"use client";

import { useRef } from "react";

const proofs = [
  {
    field: "Commerce",
    name: "QLYK Studio",
    description:
      "Valoriser un véhicule avec des visuels premium conçus pour capter l’attention.",
    href: "https://www.qlykstudio.fr/",
  },
  {
    field: "Médico-social & prévention",
    name: "OSYS",
    description:
      "Permettre de faire le point sur une situation de violence au sein du couple.",
    href: "https://www.osys14.com/",
  },
  {
    field: "Développement personnel",
    name: "Cabinet Astraé",
    description:
      "Apporter un éclairage complémentaire dans les périodes de questionnement ou de transition.",
    href: "https://www.cabinet-astrae.fr/",
  },
  {
    field: "Éducation & prévention",
    name: "LANGOCHAT",
    description:
      "Aider les adultes à trouver les mots justes pour dialoguer avec les enfants.",
    href: "https://www.langochat.fr/",
  },
];

const possibilities = [
  {
    title: "Organisation & entreprise",
    text: "Structurer, clarifier et piloter une activité.",
    icon: "▦",
  },
  {
    title: "Ressources humaines",
    text: "Recrutement, équipes et dynamiques humaines.",
    icon: "◇",
  },
  {
    title: "Orientation professionnelle",
    text: "Aider à prendre une décision ou construire un parcours.",
    icon: "→",
  },
  {
    title: "Aidants & familles",
    text: "Soutenir les proches dans des situations complexes.",
    icon: "⌂",
  },
  {
    title: "Associations & ESS",
    text: "Renforcer l’impact et la lisibilité des structures.",
    icon: "◎",
  },
  {
    title: "Collectivités",
    text: "Mieux comprendre les besoins des citoyens.",
    icon: "⌂",
  },
  {
    title: "Santé & prévention",
    text: "Informer, prévenir et orienter.",
    icon: "♡",
  },
  {
    title: "Formation & transmission",
    text: "Transformer une expertise en outils utiles.",
    icon: "△",
  },
];

type ProofsCarouselProps = {
  serifClassName: string;
};

export function ProofsCarousel({ serifClassName }: ProofsCarouselProps) {
  const proofsTrackRef = useRef<HTMLDivElement | null>(null);
  const possibilitiesTrackRef = useRef<HTMLDivElement | null>(null);

  function scrollProofs(direction: "left" | "right") {
    proofsTrackRef.current?.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  }

  function scrollPossibilities(direction: "left" | "right") {
    possibilitiesTrackRef.current?.scrollBy({
      left: direction === "right" ? 260 : -260,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className="proofs-wheel" aria-label="Quelques réalisations">
        <div className="proofs-wheel-head">
          <span>Quelques réalisations</span>
          <h2 className={serifClassName}>Des univers différents.</h2>
          <p>Différents domaines. Une même démarche.</p>
        </div>

        <div className="carousel-shell">
          <button
            type="button"
            className="carousel-button"
            onClick={() => scrollProofs("left")}
            aria-label="Voir le projet précédent"
          >
            ←
          </button>

          <div ref={proofsTrackRef} className="proofs-track">
            {proofs.map((proof) => (
              <a
                key={proof.name}
                href={proof.href}
                target="_blank"
                rel="noopener noreferrer"
                className="proof-card"
              >
                <span className="proof-field">{proof.field}</span>
                <strong className={serifClassName}>{proof.name}</strong>
                <p>{proof.description}</p>
                <span className="proof-access">Découvrir</span>
              </a>
            ))}
          </div>

          <button
            type="button"
            className="carousel-button"
            onClick={() => scrollProofs("right")}
            aria-label="Voir le projet suivant"
          >
            →
          </button>
        </div>
      </section>

      <section className="possibilities" aria-label="Autres applications possibles">
        <div className="possibilities-head">
          <span>Et demain ?</span>
          <h3 className={serifClassName}>D’autres projets sont possibles.</h3>
          <p>
            Chaque organisation possède ses propres enjeux. La démarche reste la
            même : comprendre, structurer et construire.
          </p>
        </div>

        <div className="possibilities-shell">
          <button
            type="button"
            className="possibilities-button"
            onClick={() => scrollPossibilities("left")}
            aria-label="Voir le domaine précédent"
          >
            ←
          </button>

          <div ref={possibilitiesTrackRef} className="possibilities-track">
            {possibilities.map((item) => (
              <article key={item.title} className="possibility-card">
                <span className="possibility-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="possibilities-button"
            onClick={() => scrollPossibilities("right")}
            aria-label="Voir le domaine suivant"
          >
            →
          </button>
        </div>
      </section>
    </>
  );
}
