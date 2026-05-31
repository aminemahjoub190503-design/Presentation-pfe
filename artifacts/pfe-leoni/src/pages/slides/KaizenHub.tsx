import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const KAIZEN_BARS = [
  { label: "Soumis", value: 1, color: "#285ccc" },
  { label: "En cours", value: 1, color: "#e0930f" },
  { label: "Implémenté", value: 1, color: "#2fa86b" },
  { label: "Best", value: 1, color: "#0b2150" },
];

const KAIZEN_POINTS = [
  "4 projets CI actifs · 200k€ économies totales",
  "Cartes numériques — idées visibles & traçables",
  "Valorise les contributions des équipes terrain",
  "Progression moyenne : 41% de réalisation",
];

const VSM_STATS = [
  { value: "319.5 min", label: "Total Lead Time" },
  { value: "185.5 min", label: "Processing Time" },
  { value: "33%", label: "Efficacité flux" },
];

const VSM_POINTS = [
  "Vision systémique — état actuel vs. état futur",
  "Détection automatique : goulots, encours, rebuts",
  "Lecture globale des pertes dans le processus",
  "Pertinence dépend de la qualité des données saisies",
];

const PORTFOLIO_ITEMS = [
  "Vue d'ensemble",
  "Équipe & gains financiers",
  "WBS décomposition hiérarchique",
  "Diagramme de Gantt (planning)",
  "Gestion des risques",
  "Stratégie de maintien",
];

function Bullets({ points, dotColor }: { points: string[]; dotColor: string }) {
  return (
    <ul className="space-y-[1.3vh] text-[1.22vw] font-medium leading-snug text-ink">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-[0.7vw]">
          <span className="mt-[0.8vh] h-[0.65vh] w-[0.65vh] shrink-0 rounded-full" style={{ background: dotColor }} />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function Panel({
  title,
  headerBg,
  delay,
  children,
}: {
  title: string;
  headerBg: string;
  delay: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fx-rise flex h-full flex-col overflow-hidden rounded-[1.2vw] bg-white shadow-[0_18px_48px_rgba(11,33,80,0.13)] ring-1 ring-primary/10"
      style={{ animationDelay: delay }}
    >
      <div
        className="flex items-center justify-center py-[2vh] text-center font-display text-[1.75vw] font-bold text-white"
        style={{ background: headerBg }}
      >
        {title}
      </div>
      <div className="flex flex-1 flex-col p-[1.7vw]">{children}</div>
    </div>
  );
}

export default function ModulesKaizenVsmPortfolio() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[3.6vh] w-[90vw] -translate-x-1/2">
        <p className="fx-rise font-display text-[1.4vw] font-bold uppercase tracking-[0.3em] text-primary">
          Modules 04 · 05 · 06
        </p>
        <h2
          className="fx-rise mt-[0.6vh] font-display text-[3.4vw] font-bold leading-[1.02] tracking-tight text-ink"
          style={{ animationDelay: "0.08s", textWrap: "balance" }}
        >
          Kaizen · VSM · Portefeuille de Projets
        </h2>
      </div>

      <div className="absolute left-1/2 top-[18vh] grid h-[74vh] w-[90vw] -translate-x-1/2 grid-cols-3 items-stretch gap-[2vw]">
        {/* ----- Module 4 — CI / Kaizen Hub ----- */}
        <Panel title="CI / Kaizen Hub" headerBg="#0b2150" delay="0.16s">
          <div className="rounded-[0.9vw] bg-[#f6f8fc] px-[1.3vw] py-[2vh] ring-1 ring-primary/8">
            <svg viewBox="0 0 280 150" className="h-[24vh] w-full" aria-hidden="true">
              {[0, 1, 2].map((g) => {
                const y = 120 - g * 45;
                return (
                  <g key={g}>
                    <line x1="34" y1={y} x2="270" y2={y} stroke="#285ccc" strokeOpacity="0.14" strokeWidth="1.2" />
                    <text x="22" y={y + 5} textAnchor="end" fontSize="15" fill="#5b6b8c" fontFamily="Manrope, sans-serif">
                      {g}
                    </text>
                  </g>
                );
              })}
              {KAIZEN_BARS.map((b, i) => {
                const bw = 38;
                const gap = (270 - 40 - KAIZEN_BARS.length * bw) / (KAIZEN_BARS.length - 1);
                const x = 44 + i * (bw + gap);
                const h = b.value * 45;
                const y = 120 - h;
                return (
                  <g key={b.label}>
                    <rect x={x} y={y} width={bw} height={h} rx="3" fill={b.color} className="fx-pop" style={{ animationDelay: `${0.3 + i * 0.07}s` }} />
                    <text x={x + bw / 2} y={y - 6} textAnchor="middle" fontSize="15" fontWeight="700" fill="#0b2150" fontFamily="Space Grotesk, sans-serif">
                      {b.value}
                    </text>
                    <text x={x + bw / 2} y="140" textAnchor="middle" fontSize="13" fill="#5b6b8c" fontFamily="Manrope, sans-serif">
                      {b.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="mt-[2.6vh] flex flex-1 items-center">
            <Bullets points={KAIZEN_POINTS} dotColor="#0b2150" />
          </div>
        </Panel>

        {/* ----- Module 5 — VSM Studio ----- */}
        <Panel title="VSM Studio" headerBg="#285ccc" delay="0.24s">
          <div className="space-y-[1.4vh]">
            {VSM_STATS.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between rounded-[0.8vw] bg-[#f6f8fc] px-[1.4vw] py-[2.1vh] ring-1 ring-primary/8"
              >
                <span className="font-display text-[2vw] font-bold text-primary">{s.value}</span>
                <span className="text-[1.2vw] font-semibold text-muted">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-[2.6vh] flex flex-1 items-center">
            <Bullets points={VSM_POINTS} dotColor="#285ccc" />
          </div>
        </Panel>

        {/* ----- Module 6 — Portefeuille de Projets ----- */}
        <Panel title="Portefeuille de Projets" headerBg="#7aa6ff" delay="0.32s">
          <ul className="space-y-[1.9vh]">
            {PORTFOLIO_ITEMS.map((it, i) => (
              <li key={it} className="fx-fade flex items-center gap-[0.9vw] text-[1.28vw] font-semibold text-ink" style={{ animationDelay: `${0.36 + i * 0.05}s` }}>
                <span className="h-[1.3vw] w-[1.3vw] shrink-0 rounded-[0.3vw] bg-primary" />
                {it}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-[2.4vh]">
            <div className="rounded-[0.9vw] bg-primary/[0.06] px-[1.4vw] py-[2.2vh] ring-1 ring-primary/30">
              <p className="text-center text-[1.22vw] font-semibold italic leading-snug text-primary">
                Finalité : transformer intentions générales en étapes concrètes, pilotées et traçables
              </p>
            </div>
          </div>
        </Panel>
      </div>

      <SlideFooter n={19} />
    </SlideShell>
  );
}
