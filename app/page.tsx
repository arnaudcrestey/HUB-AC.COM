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
    number: "01",
    name: "SYSTIA",
    axis: "Activité",
    title: "Comprendre l’activité",
    description:
      "Structurer une offre, clarifier un modèle et concevoir des systèmes numériques capables de générer des demandes qualifiées.",
    href: "https://www.systia.fr/",
  },
  {
    number: "02",
    name: "ARHI",
    axis: "Collaborations",
    title: "Comprendre les collaborations",
    description:
      "Éclairer les recrutements, les rôles et les compatibilités entre une personne, un poste et une organisation.",
    href: "https://arhi.fr/",
  },
  {
    number: "03",
    name: "UNYKO",
    axis: "Confiance",
    title: "Comprendre la confiance",
    description:
      "Lire les signaux qui rendent une organisation claire, crédible, mémorable et naturellement recommandée.",
    href: "#",
  },
];

const proofs = [
  {
    name: "QLYK Studio",
    text: "Application concrète de la logique SYSTIA : valoriser une offre par des visuels premium conçus pour déclencher l’action.",
    href: "https://www.qlykstudio.fr/",
  },
  {
    name: "Cabinet Astraé",
    text: "Application concrète d’une lecture sensible et structurée : aider à retrouver de la clarté dans une situation personnelle.",
    href: "https://www.cabinet-astrae.fr/",
  },
];

export default function Page() {
  return (
    <main className={`${inter.className} min-h-screen bg-[#05080c] text-[#f6efe3]`}>
      <section className="relative min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,156,92,0.16),transparent_34rem),radial-gradient(circle_at_50%_46%,rgba(255,255,255,0.055),transparent_28rem)]" />
        <div className="absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#c69c5c]/10 sm:h-[760px] sm:w-[760px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-[#05080c]/80 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-48px)] max-w-7xl flex-col">
          <header className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c69c5c]/75">
            <a href="#ecosysteme" className="transition hover:text-[#f1d69b]">
              Écosystème
            </a>
            <a href="mailto:demande@arnaudcrestey.com" className="transition hover:text-[#f1d69b]">
              Contact
            </a>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center pt-12 text-center">
            <div className="mb-10">
              <div className={`${serif.className} text-6xl leading-none text-[#d6b878] sm:text-7xl`}>
                AC
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#d6b878]">
                Arnaud Crestey
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.36em] text-[#d6b878]/75">
                Comprendre avant d’agir
              </p>
            </div>

            <h1
              className={`${serif.className} max-w-5xl text-[52px] font-medium leading-[0.92] tracking-[-0.05em] text-[#f8f3ea] sm:text-7xl md:text-8xl lg:text-[118px]`}
            >
              Comprendre
              <br />
              les organisations
              <br />
              dans leur globalité.
            </h1>

            <div className="mt-9 h-px w-12 bg-[#c69c5c]/70" />

            <p className="mt-8 max-w-xl text-base leading-8 text-[#d6b878] sm:text-lg">
              Activité. Collaborations. Confiance.
              <br />
              Trois dimensions. Une même vision.
            </p>

            <div
              id="ecosysteme"
              className="mt-14 grid w-full gap-5 sm:grid-cols-3 lg:mt-20 lg:gap-7"
            >
              {pillars.map((pillar) => (
                <a
                  key={pillar.name}
                  href={pillar.href}
                  target={pillar.href.startsWith("http") ? "_blank" : undefined}
                  rel={pillar.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-[28px] border border-[#d6b878]/18 bg-[#efe3cd]/[0.07] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d6b878]/45 hover:bg-[#efe3cd]/[0.11] sm:min-h-[360px] sm:p-7 lg:p-8"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b878]/60 to-transparent" />

                  <span className="text-[11px] font-semibold tracking-[0.32em] text-[#d6b878]/70">
                    {pillar.number}
                  </span>

                  <div className="mt-16 sm:mt-20">
                    <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#d6b878]/70">
                      {pillar.axis}
                    </p>

                    <h2
                      className={`${serif.className} mt-4 text-4xl font-medium tracking-[-0.04em] text-[#f8f3ea] sm:text-5xl`}
                    >
                      {pillar.name}
                    </h2>

                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.26em] text-[#d6b878]">
                      {pillar.title}
                    </p>

                    <p className="mt-5 max-w-sm text-sm leading-7 text-[#f6efe3]/72">
                      {pillar.description}
                    </p>
                  </div>

                  <span className="mt-9 inline-flex text-xs font-semibold text-[#d6b878]">
                    Accéder
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <footer className="relative z-10 mt-12 border-t border-[#d6b878]/12 pt-7">
            <div className="grid gap-6 text-center sm:grid-cols-[1fr_auto_1fr] sm:items-end sm:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d6b878]/55">
                AC — Stratégie & compréhension
              </p>

              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d6b878]/55">
                  Applications concrètes
                </p>

                <div className="mt-3 flex flex-col gap-2 text-sm text-[#f6efe3]/70 sm:flex-row sm:gap-5">
                  {proofs.map((proof) => (
                    <a
                      key={proof.name}
                      href={proof.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-[#d6b878]"
                      title={proof.text}
                    >
                      {proof.name}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="mailto:demande@arnaudcrestey.com"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d6b878]/55 transition hover:text-[#d6b878] sm:text-right"
              >
                demande@arnaudcrestey.com
              </a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
