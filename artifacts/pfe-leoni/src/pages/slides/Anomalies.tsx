import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const STEPS = [
  { name: "QQOQCCP", body: "Cadrer le problème", bg: "#0b2150" },
  { name: "Pareto", body: "Prioriser les causes", bg: "#1d3f8d" },
  { name: "Ishikawa + 5P", body: "Analyser la cause racine", bg: "#285ccc" },
  { name: "PDCA", body: "Planifier et agir", bg: "#4a7ad8" },
  { name: "Monitoring", body: "Suivre l'avancement", bg: "#6a9bf0" },
];

const STATS = [
  { value: "1", label: "Ouvertes", color: "#e2574c" },
  { value: "1", label: "En Investigation", color: "#e0930f" },
  { value: "1", label: "Contenues", color: "#285ccc" },
  { value: "0", label: "Fermées", color: "#2fa86b" },
];

const APPORTS = [
  "Approche plus rigoureuse que les traitements informels",
  "Continuité entre détection, analyse et action",
  "Traçabilité complète des anomalies",
  "Efficacité dépend de l'appropriation des utilisateurs",
];

export default function Anomalies() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[3.8vh] w-[86vw] -translate-x-1/2">
        <p className="fx-rise font-display text-[1.3vw] font-bold uppercase tracking-[0.3em] text-primary">
          Module 03
        </p>
        <h2
          className="fx-rise mt-[0.8vh] font-display text-[3.4vw] font-bold leading-[1.02] tracking-tight text-ink"
          style={{ animationDelay: "0.08s", textWrap: "balance" }}
        >
          Anomalies &amp; Actions <span className="text-primary">(Rapport A3)</span>
        </h2>
        <p
          className="fx-rise mt-[1vh] text-[1.5vw] font-semibold italic leading-snug text-muted"
          style={{ animationDelay: "0.16s" }}
        >
          Structuration méthodique : QQOQCCP → Pareto → Ishikawa → 5P → PDCA → Monitoring
        </p>
      </div>

      {/* Cheminement progressif */}
      <div className="absolute left-1/2 top-[27.5vh] w-[86vw] -translate-x-1/2">
        <p className="fx-fade mb-[1.4vh] text-[1.2vw] font-bold uppercase tracking-[0.18em] text-primary" style={{ animationDelay: "0.2s" }}>
          Cheminement progressif intégré dans la plateforme
        </p>
        <div className="flex items-stretch justify-between gap-[1vw]">
          {STEPS.map((s, i) => (
            <div key={s.name} className="flex flex-1 items-stretch">
              <div
                className="fx-rise flex flex-1 flex-col overflow-hidden rounded-[1vw] bg-white shadow-[0_12px_34px_rgba(11,33,80,0.12)] ring-1 ring-primary/10"
                style={{ animationDelay: `${0.24 + i * 0.06}s` }}
              >
                <div
                  className="flex h-[6.2vh] items-center justify-center px-[0.6vw] text-center font-display text-[1.25vw] font-bold leading-tight text-white"
                  style={{ background: s.bg }}
                >
                  {s.name}
                </div>
                <div className="flex flex-1 items-center justify-center px-[0.7vw] py-[1.6vh] text-center text-[1.15vw] font-medium leading-snug text-ink">
                  {s.body}
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex w-[1vw] items-center justify-center">
                  <svg width="22" height="16" viewBox="0 0 22 16" className="text-primary/45">
                    <path d="M2 8h14M12 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="absolute left-1/2 top-[54.5vh] grid w-[86vw] -translate-x-1/2 grid-cols-4 gap-[1.6vw]">
        {STATS.map((st, i) => (
          <div
            key={st.label}
            className="fx-pop flex flex-col items-center justify-center rounded-[1vw] bg-white py-[2.4vh] shadow-[0_12px_34px_rgba(11,33,80,0.1)] ring-1 ring-primary/10"
            style={{ animationDelay: `${0.5 + i * 0.07}s` }}
          >
            <span className="font-display text-[3.6vw] font-bold leading-none" style={{ color: st.color }}>
              {st.value}
            </span>
            <div className="mt-[1vh] flex items-center gap-[0.6vw]">
              <span className="h-[0.8vh] w-[0.8vh] rounded-full" style={{ background: st.color }} />
              <span className="text-[1.2vw] font-semibold text-muted">{st.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Apports clés */}
      <div
        className="fx-rise absolute left-1/2 top-[78vh] w-[86vw] -translate-x-1/2 overflow-hidden rounded-[1vw] bg-white shadow-[0_14px_40px_rgba(11,33,80,0.1)] ring-1 ring-primary/10"
        style={{ animationDelay: "0.78s" }}
      >
        <div className="flex items-stretch">
          <div className="w-[0.5vw] shrink-0 bg-primary" />
          <div className="flex-1 px-[2vw] py-[1.8vh]">
            <p className="font-display text-[1.4vw] font-bold text-primary">Apports clés de ce module</p>
            <div className="mt-[1vh] flex flex-wrap items-center gap-x-[1.4vw] gap-y-[0.6vh] text-[1.2vw] leading-snug text-ink">
              {APPORTS.map((a, i) => (
                <span key={a} className="flex items-center gap-[1.4vw]">
                  {i > 0 && <span className="text-primary/40">·</span>}
                  <span>{a}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SlideFooter n={20} />
    </SlideShell>
  );
}
