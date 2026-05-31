import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const FORCES = [
  {
    title: "Cohérence d'ensemble",
    text: "Logique structurée — modules interconnectés dans une vision unifiée du pilotage",
  },
  {
    title: "Solidité méthodologique",
    text: "Basé sur KPI, A3, Kaizen, VSM, WBS, Gantt — méthodes reconnues du management industriel",
  },
  {
    title: "Traduction concrète du besoin",
    text: "Plateforme fonctionnelle et démontrable — du besoin formulé à la réponse visible",
  },
  {
    title: "Lisibilité & export",
    text: "Vues synthétiques, graphiques variés, PDF/PNG/SVG — gain de temps en reporting",
  },
  {
    title: "IA & interactivité",
    text: "AI Co-Pilot et Chat rendent l'utilisation plus fluide et orientée vers les priorités",
  },
];

const FAIBLESSES = [
  {
    title: "Validation limitée",
    text: "Faisabilité et cohérence démontrées — impact réel sur la performance encore à confirmer en environnement réel",
  },
  {
    title: "Dépendance aux données",
    text: "Qualité des analyses proportionnelle à la fiabilité et l'actualisation des données",
  },
  {
    title: "Appropriation utilisateurs",
    text: "Discipline de mise à jour, compréhension des logiques et accompagnement au changement nécessaires",
  },
  {
    title: "Richesse = complexité",
    text: "La diversité des modules peut créer une complexité d'usage sans guidage suffisant",
  },
];

type Item = { title: string; text: string };

function Column({
  heading,
  accent,
  items,
  baseDelay,
}: {
  heading: string;
  accent: string;
  items: Item[];
  baseDelay: number;
}) {
  return (
    <div className="flex h-full flex-col">
      <h3 className="mb-[1.6vh] font-display text-[1.85vw] font-bold text-primary">{heading}</h3>
      <div className="flex flex-1 flex-col justify-between gap-[1.4vh]">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="fx-rise flex-1 rounded-[0.9vw] bg-white px-[1.5vw] py-[1.5vh] shadow-[0_12px_32px_rgba(11,33,80,0.1)] ring-1 ring-primary/10"
            style={{ animationDelay: `${baseDelay + i * 0.06}s`, borderLeft: `0.5vw solid ${accent}` }}
          >
            <p className="font-display text-[1.32vw] font-bold text-ink">{it.title}</p>
            <p className="mt-[0.5vh] text-[1.05vw] font-medium leading-snug text-muted">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Limites() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[3.6vh] w-[90vw] -translate-x-1/2">
        <p className="fx-rise font-display text-[1.4vw] font-bold uppercase tracking-[0.3em] text-primary">
          En toute honnêteté
        </p>
        <h2
          className="fx-rise mt-[0.5vh] font-display text-[3vw] font-bold leading-[1.04] tracking-tight text-ink"
          style={{ animationDelay: "0.08s", textWrap: "balance" }}
        >
          Forces &amp; Faiblesses de la Solution OPEX Dashboard
        </h2>
      </div>

      <div className="absolute left-1/2 top-[18vh] grid h-[74vh] w-[90vw] -translate-x-1/2 grid-cols-2 items-stretch gap-[2.6vw]">
        <Column heading="Forces" accent="#285ccc" items={FORCES} baseDelay={0.18} />
        <Column heading="Faiblesses" accent="#7aa6ff" items={FAIBLESSES} baseDelay={0.28} />
      </div>

      <SlideFooter n={23} />
    </SlideShell>
  );
}
