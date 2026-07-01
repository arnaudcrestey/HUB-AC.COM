"use client";

import { useRef } from "react";
import {
  Building2,
  Users,
  Compass,
  Home,
  HandHeart,
  Landmark,
  HeartPulse,
  GraduationCap,
} from "lucide-react";

const proofs = [
  {
    field: "Commerce",
    name: "Qlyk Studio",
    description:
      "Valoriser un véhicule avec des visuels premium conçus pour capter l’attention.",
    href: "https://www.qlykstudio.fr/",
  },
  {
    field: "Médico-social & prévention",
    name: "Osys",
    description:
      "Permettre de faire le point sur une situation de violence au sein du couple.",
    href: "https://www.osys14.com/",
  },
  {
  field: "Recrutement & collaborations",
  name: "ARHI",
  description:
    "Parce qu’une collaboration repose avant tout sur des femmes et des hommes.",
  href: "https://www.arhi.fr/",
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
    name: "LangOchat",
    description:
      "Aider les adultes à trouver les mots justes pour dialoguer avec les enfants.",
    href: "https://www.langochat.fr/",
  },
  {
  field: "Transmission & mémoire familiale",
  name: "Racinae",
  description:
    "Le premier livre qui s'écrit pendant que votre enfant grandit. Projet actuellement en construction.",
  href: "https://www.racinae.org/",
},
  {
    field: "Vie professionnelle & prévention",
    name: "B.E.S.T",
    description:
      "Permettre aux salariés de faire le point sur une situation professionnelle difficile.",
    href: "https://best.systia.fr/",
  },
];



const possibilities = [
  {
  title: "Entreprises & organisations",
  text: "Structurer, clarifier\net piloter une activité.",
  icon: Building2,
},
  {
    title: "Ressources humaines",
    text: "Recrutement, équipes et dynamiques humaines.",
    icon: Users,
  },
  {
    title: "Orientation professionnelle",
    text: "Aider à prendre une décision ou construire un parcours.",
    icon: Compass,
  },
  {
    title: "Aidants & familles",
    text: "Soutenir les proches dans des situations complexes.",
    icon: Home,
  },
  {
    title: "Associations",
    text: "Renforcer l’impact et la lisibilité des structures.",
    icon: HandHeart,
  },
  {
    title: "Collectivités",
    text: "Mieux comprendre les besoins des citoyens.",
    icon: Landmark,
  },
  {
    title: "Santé & prévention",
    text: "Informer, prévenir et orienter.",
    icon: HeartPulse,
  },
  {
    title: "Formation & transmission",
    text: "Transformer une expertise en outils utiles.",
    icon: GraduationCap,
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
          <span>Quelques exemples</span>
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

      <section className="possibilities" aria-label="Autres projets possibles">
        <div className="possibilities-head">
          <span>Se projeter</span>
          <h3 className={serifClassName}>
  Chaque situation mérite
  <br className="block sm:hidden" />
  sa propre réponse.
</h3>
          <p>Comprendre • Structurer • Construire</p>
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
            {possibilities.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="possibility-card">
                  <div className="possibility-icon">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  <h4>{item.title}</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{item.text}</p>
                </article>
              );
            })}
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
