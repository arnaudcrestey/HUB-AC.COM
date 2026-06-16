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

type ProofsCarouselProps = {
  serifClassName: string;
};

export function ProofsCarousel({ serifClassName }: ProofsCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  function scroll(direction: "left" | "right") {
    trackRef.current?.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  }

  return (
    <section className="proofs-wheel" aria-label="Applications concrètes">
      <div className="proofs-wheel-head">
        <span>Quelques réalisations.</span>
        <h2 className={serifClassName}>Des univers différents.</h2>
        <p>Différents domaines. Une même démarche.</p>
      </div>

      <div className="carousel-shell">
        <button
          type="button"
          className="carousel-button"
          onClick={() => scroll("left")}
          aria-label="Voir le projet précédent"
        >
          ←
        </button>

        <div ref={trackRef} className="proofs-track">
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
          onClick={() => scroll("right")}
          aria-label="Voir le projet suivant"
        >
          →
        </button>
      </div>
    </section>
  );
}
