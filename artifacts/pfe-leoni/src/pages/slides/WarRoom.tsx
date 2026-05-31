import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const KPIS = [
  { value: "29%", label: "Sécurité", color: "#e2574c" },
  { value: "83%", label: "Qualité", color: "#285ccc" },
  { value: "91%", label: "Délai", color: "#2fa86b" },
  { value: "77%", label: "Coût", color: "#e0930f" },
  { value: "72%", label: "Moral", color: "#8b5cf6" },
  { value: "70", label: "Score OPEX", color: "#0b2150" },
];

const WAR_ROOM_POINTS = [
  "Point d'entrée unique : score global, SQDCM, anomalies ouvertes, actions en cours",
  "Réduit la dispersion — lecture rapide des sous-performances",
  "Dépend de la fiabilité et de la fréquence de mise à jour des données",
];

const KPI_STUDIO_POINTS = [
  "Exploration détaillée des KPI SQDCM — plusieurs vues graphiques",
  "Filtres par catégorie, département, période — comparaisons temporelles",
  "Export PDF / PNG / SVG — réduction du travail de mise en forme manuel",
];

const MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"];
const SCRAP = [2.8, 2.5, 2.1, 2.4, 2.0, 2.2];
const TARGET = 2.8;

// Chart geometry
const CX = (i: number) => 80 + i * 72; // 80..440
const CY = (v: number) => 190 - v * 40; // value 0..4 -> y 190..30

function Bullets({ points, dotColor }: { points: string[]; dotColor: string }) {
  return (
    <ul className="space-y-[1.3vh] text-[1.28vw] font-medium leading-snug text-ink">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-[0.7vw]">
          <span className="mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full" style={{ background: dotColor }} />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ModulesWarRoomKpi() {
  const scrapLine = SCRAP.map((v, i) => `${CX(i)},${CY(v)}`).join(" ");
  const targetY = CY(TARGET);

  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[3.6vh] w-[90vw] -translate-x-1/2">
        <p className="fx-rise font-display text-[1.4vw] font-bold uppercase tracking-[0.3em] text-primary">
          Modules 01 &amp; 02
        </p>
        <h2
          className="fx-rise mt-[0.6vh] font-display text-[3.4vw] font-bold leading-[1.02] tracking-tight text-ink"
          style={{ animationDelay: "0.08s", textWrap: "balance" }}
        >
          War Room &amp; KPI Studio
        </h2>
      </div>

      <div className="absolute left-1/2 top-[18vh] grid h-[74vh] w-[90vw] -translate-x-1/2 grid-cols-2 items-stretch gap-[2.4vw]">
        {/* ----- Module 1 — War Room ----- */}
        <div
          className="fx-rise flex h-full flex-col overflow-hidden rounded-[1.2vw] bg-white shadow-[0_18px_48px_rgba(11,33,80,0.13)] ring-1 ring-primary/10"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="flex items-center justify-center bg-ink py-[2vh] text-center font-display text-[1.75vw] font-bold text-white">
            Module 1 — Salle de Pilotage (War Room)
          </div>
          <div className="flex flex-1 flex-col p-[1.9vw]">
            <div className="grid grid-cols-3 gap-[1.1vw]">
              {KPIS.map((k, i) => (
                <div
                  key={k.label}
                  className="fx-pop flex flex-col items-center justify-center rounded-[0.8vw] bg-[#f6f8fc] py-[2.8vh] text-center"
                  style={{ animationDelay: `${0.22 + i * 0.05}s`, borderTop: `0.45vh solid ${k.color}` }}
                >
                  <span className="font-display text-[2.9vw] font-bold leading-none" style={{ color: k.color }}>
                    {k.value}
                  </span>
                  <span className="mt-[1vh] text-[1.2vw] font-semibold text-muted">{k.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-[2.6vh]">
              <Bullets points={WAR_ROOM_POINTS} dotColor="#0b2150" />
            </div>
          </div>
        </div>

        {/* ----- Module 2 — KPI Studio ----- */}
        <div
          className="fx-rise flex h-full flex-col overflow-hidden rounded-[1.2vw] bg-white shadow-[0_18px_48px_rgba(11,33,80,0.13)] ring-1 ring-primary/10"
          style={{ animationDelay: "0.24s" }}
        >
          <div className="flex items-center justify-center bg-primary py-[2vh] text-center font-display text-[1.75vw] font-bold text-white">
            Module 2 — KPI Studio
          </div>
          <div className="flex flex-1 flex-col p-[1.9vw]">
            <div className="rounded-[0.9vw] bg-[#f6f8fc] px-[1.6vw] py-[2vh] ring-1 ring-primary/8">
              <p className="text-center font-display text-[1.4vw] font-bold text-ink">
                Scrap Rate — Qualité (ex. de vue KPI)
              </p>
              <svg viewBox="0 0 480 215" className="mt-[0.8vh] h-[23vh] w-full" aria-hidden="true">
                {/* gridlines + y labels */}
                {[0, 2, 4].map((g) => (
                  <g key={g}>
                    <line x1="60" y1={CY(g)} x2="460" y2={CY(g)} stroke="#285ccc" strokeOpacity="0.14" strokeWidth="1.2" />
                    <text x="44" y={CY(g) + 5} textAnchor="end" fontSize="15" fill="#5b6b8c" fontFamily="Manrope, sans-serif">
                      {g}
                    </text>
                  </g>
                ))}
                {/* x labels */}
                {MONTHS.map((m, i) => (
                  <text key={m} x={CX(i)} y="208" textAnchor="middle" fontSize="15" fill="#5b6b8c" fontFamily="Manrope, sans-serif">
                    {m}
                  </text>
                ))}
                {/* Cible (target) line */}
                <line x1="80" y1={targetY} x2="440" y2={targetY} stroke="#e2574c" strokeWidth="3" strokeLinecap="round" />
                {SCRAP.map((_, i) => (
                  <circle key={`t${i}`} cx={CX(i)} cy={targetY} r="4.5" fill="#e2574c" />
                ))}
                {/* Scrap rate line */}
                <polyline
                  points={scrapLine}
                  fill="none"
                  stroke="#285ccc"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  className="fx-draw"
                  style={{ animationDelay: "0.5s" }}
                />
                {SCRAP.map((v, i) => (
                  <circle key={`s${i}`} cx={CX(i)} cy={CY(v)} r="5" fill="#285ccc" stroke="#ffffff" strokeWidth="2" />
                ))}
              </svg>
              {/* legend */}
              <div className="mt-[0.8vh] flex items-center justify-center gap-[2vw] text-[1.12vw] font-semibold text-muted">
                <span className="flex items-center gap-[0.5vw]">
                  <span className="h-[0.4vh] w-[1.4vw] rounded-full bg-primary" /> Scrap Rate (%)
                </span>
                <span className="flex items-center gap-[0.5vw]">
                  <span className="h-[0.4vh] w-[1.4vw] rounded-full bg-[#e2574c]" /> Cible
                </span>
              </div>
            </div>
            <div className="mt-auto pt-[2.6vh]">
              <Bullets points={KPI_STUDIO_POINTS} dotColor="#285ccc" />
            </div>
          </div>
        </div>
      </div>

      <SlideFooter n={18} />
    </SlideShell>
  );
}
