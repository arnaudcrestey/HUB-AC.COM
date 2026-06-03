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
    title: "Comprendre l’activité",
    href: "https://www.systia.fr/",
  },
  {
    number: "02",
    name: "ARHI",
    title: "Comprendre les collaborations",
    href: "https://arhi.fr/",
  },
  {
    number: "03",
    name: "UNYKO",
    title: "Comprendre la confiance",
    href: "#",
  },
];

export default function Page() {
  return (
    <main className={`${inter.className} min-h-screen bg-[#05080c] text-[#f7f1e8]`}>
      <section className="relative min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,184,120,0.16),transparent_34rem),radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.05),transparent_30rem)]" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#d6b878]/10 sm:h-[760px] sm:w-[760px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-[#05080c]/85 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-48px)] max-w-7xl flex-col">
          <header className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d6b878]/70">
            <span>Écosystème</span>
            <a href="mailto:demande@arnaudcrestey.com" className="hover:text-[#f1d69b]">
              Contact
            </a>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center pt-12 text-center">
            <div className={`${serif.className} text-5xl leading-none text-[#d6b878] sm:text-7xl`}>
              AC
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#d6b878]">
              Arnaud Crestey
            </p>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#d6b878]/75">
              Comprendre avant d’agir
            </p>

            <h1
              className={`${serif.className} mt-12 max-w-5xl text-[48px] font-medium leading-[0.92] tracking-[-0.055em] text-[#f8f3ea] sm:text-7xl md:text-8xl lg:text-[112px]`}
            >
              Comprendre
              <br />
              les organisations
              <br />
              dans leur globalité.
            </h1>

            <div className="mt-9 h-px w-12 bg-[#d6b878]/70" />

            <p className="mt-8 max-w-xl text-base leading-8 text-[#d6b878] sm:text-lg">
              Activité. Collaborations. Confiance.
              <br />
              Trois dimensions. Une même vision.
            </p>

            <div className="mt-16 grid w-full max-w-5xl gap-5 sm:grid-cols-3 lg:mt-20 lg:gap-8">
              {pillars.map((pillar) => (
                <a
                  key={pillar.name}
                  href={pillar.href}
                  target={pillar.href.startsWith("http") ? "_blank" : undefined}
                  rel={pillar.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative flex min-h-[330px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#d6b878]/20 bg-[#e8dcc7] px-6 py-10 text-center text-[#6d552c] shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1 hover:border-[#f1d69b]/60 sm:min-h-[390px] lg:min-h-[440px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.42),transparent_38%,rgba(90,61,25,0.12))]" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#cdbb9b]/60 to-transparent" />
                  <span className="absolute left-5 top-5 text-[10px] font-semibold tracking-[0.28em] text-[#8a6d3d]/55">
                    {pillar.number}
                  </span>

                  <div className="relative z-10">
                    <div className="mx-auto mb-8 h-px w-16 bg-[#8a6d3d]/45" />

                    <h2
                      className={`${serif.className} text-4xl font-medium tracking-[-0.04em] text-[#7a6035] sm:text-5xl`}
                    >
                      {pillar.name}
                    </h2>

                    <p className="mt-7 text-[10px] font-bold uppercase leading-5 tracking-[0.32em] text-[#7a6035]/80">
                      {pillar.title}
                    </p>
                  </div>

                  <span className="absolute bottom-7 text-[10px] font-bold uppercase tracking-[0.28em] text-[#8a6d3d]/0 transition group-hover:text-[#8a6d3d]/70">
                    Accéder
                  </span>
                </a>
              ))}
            </div>
          </div>

          <footer className="relative z-10 mt-12 grid gap-5 border-t border-[#d6b878]/10 pt-7 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d6b878]/55 sm:grid-cols-3 sm:text-left">
            <p>AC — Stratégie & compréhension</p>

            <p className="sm:text-center">
              Une méthode de lecture
              <br />
              au service des organisations
            </p>

            <a
              href="mailto:demande@arnaudcrestey.com"
              className="transition hover:text-[#d6b878] sm:text-right"
            >
              demande@arnaudcrestey.com
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}
