import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

type Quadrant = {
  letter: string;
  title: string;
  items: string[];
  variant: "primary" | "accent" | "light";
  delay: string;
};

const QUADRANTS: Quadrant[] = [
  {
    letter: "S",
    title: "Forces",
    variant: "primary",
    delay: "0.24s",
    items: [
      "Base industrielle structurée, forte capacité de production",
      "Appartenance à un groupe international reconnu",
      "Positionnement sur l'électromobilité (projet MEB)",
      "Logique de suivi de la performance et d'amélioration continue",
      "Rôle transversal du département OPEX",
    ],
  },
  {
    letter: "W",
    title: "Faiblesses",
    variant: "light",
    delay: "0.3s",
    items: [
      "Complexité du pilotage multisites",
      "Dispersion des KPI entre plusieurs supports",
      "Faible centralisation des données",
      "Visibilité limitée en temps réel",
      "Surcharge informationnelle, exploitation lente",
    ],
  },
  {
    letter: "O",
    title: "Opportunités",
    variant: "accent",
    delay: "0.34s",
    items: [
      "Digitalisation du pilotage et système intégré",
      "Automatisation du reporting",
      "Croissance de l'électromobilité",
      "Développement de l'analyse de données et IA",
      "Renforcement des démarches d'amélioration continue",
    ],
  },
  {
    letter: "T",
    title: "Menaces",
    variant: "light",
    delay: "0.38s",
    items: [
      "Pression concurrentielle sur qualité, coûts, délais",
      "Exigences élevées des constructeurs",
      "Dépendance aux donneurs d'ordres",
      "Accélération des exigences de réactivité",
      "Risque de décalage des pratiques de pilotage",
    ],
  },
];

function QuadrantCard({ letter, title, items, variant, delay }: Quadrant) {
  const isPrimary = variant === "primary";
  const isAccent = variant === "accent";

  const cardClass = isPrimary
    ? "bg-primary shadow-[0_20px_50px_rgba(40,92,204,0.3)]"
    : isAccent
      ? "bg-accent shadow-[0_16px_44px_rgba(255,200,40,0.28)]"
      : "bg-white shadow-[0_14px_40px_rgba(40,92,204,0.1)] ring-1 ring-primary/15";

  const badgeClass = isPrimary
    ? "bg-accent text-primary"
    : isAccent
      ? "bg-primary text-white"
      : "bg-primary/10 text-primary";

  const titleClass = isPrimary
    ? "text-white"
    : isAccent
      ? "text-primary"
      : "text-muted";

  const itemTextClass = isPrimary ? "text-white" : "text-primary";

  const dotClass = isPrimary
    ? "bg-accent"
    : isAccent
      ? "bg-primary"
      : "bg-primary/40";

  return (
    <div
      className={`fx-rise relative flex flex-col justify-center overflow-hidden rounded-[1.4vw] px-[2vw] py-[2.2vh] ${cardClass}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-[1vw]">
        <span
          className={`flex h-[3.2vw] w-[3.2vw] items-center justify-center rounded-[0.8vw] font-display text-[1.95vw] font-bold ${badgeClass}`}
        >
          {letter}
        </span>
        <p className={`text-[1.75vw] font-bold uppercase tracking-[0.14em] ${titleClass}`}>
          {title}
        </p>
      </div>
      <ul className={`mt-[1.4vh] space-y-[0.9vh] text-[1.32vw] font-medium leading-[1.3] ${itemTextClass}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-[0.8vw]">
            <span className={`mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full ${dotClass}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Swot() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[3.6vh] w-[84vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.4vw] font-bold uppercase tracking-[0.34em] text-primary">
          Analyse stratégique
        </p>
        <h2
          className="fx-rise mx-auto mt-[0.6vh] font-display text-[3.5vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Analyse SWOT — LEONI Tunisia
        </h2>
      </div>

      <div className="absolute left-1/2 top-[58%] w-[86vw] -translate-x-1/2 -translate-y-1/2">
        {/* Column axis labels */}
        <div className="mb-[1.2vh] grid grid-cols-2 gap-x-[6vw] pl-[3.4vw]">
          <div className="fx-fade flex items-center justify-center gap-[0.8vw]" style={{ animationDelay: "0.15s" }}>
            <span className="h-[0.9vh] w-[0.9vh] rounded-full bg-primary" />
            <span className="text-[1.2vw] font-bold uppercase tracking-[0.26em] text-primary">Positif · Atouts</span>
          </div>
          <div className="fx-fade flex items-center justify-center gap-[0.8vw]" style={{ animationDelay: "0.2s" }}>
            <span className="h-[0.9vh] w-[0.9vh] rounded-full bg-muted" />
            <span className="text-[1.2vw] font-bold uppercase tracking-[0.26em] text-muted">Négatif · À surveiller</span>
          </div>
        </div>

        <div className="relative flex items-stretch gap-[1.6vw]">
          {/* Row axis labels */}
          <div className="flex w-[2.4vw] flex-col">
            <div className="fx-fade flex flex-1 items-center justify-center" style={{ animationDelay: "0.25s" }}>
              <span className="text-[1.2vw] font-bold uppercase tracking-[0.3em] text-primary [writing-mode:vertical-rl] rotate-180">
                Interne
              </span>
            </div>
            <div className="fx-fade flex flex-1 items-center justify-center" style={{ animationDelay: "0.3s" }}>
              <span className="text-[1.2vw] font-bold uppercase tracking-[0.3em] text-muted [writing-mode:vertical-rl] rotate-180">
                Externe
              </span>
            </div>
          </div>

          {/* Quadrant grid */}
          <div className="relative grid flex-1 grid-cols-2 gap-x-[6vw] gap-y-[2.4vh]">
            {QUADRANTS.map((q) => (
              <QuadrantCard key={q.title} {...q} />
            ))}

            {/* Center medallion */}
            <div className="fx-pop pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-[6.6vw] w-[6.6vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_18px_50px_rgba(40,92,204,0.3)] ring-[0.5vh] ring-accent" style={{ animationDelay: "0.44s" }}>
              <span className="font-display text-[1.9vw] font-bold leading-none text-primary">SWOT</span>
              <span className="mt-[0.5vh] whitespace-nowrap text-[0.7vw] font-bold uppercase tracking-[0.12em] text-muted">Menzel Hayet</span>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter n={5} />
    </SlideShell>
  );
}
