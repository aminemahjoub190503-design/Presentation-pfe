import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const TOOLS = [
  { name: "PDCA", desc: "Plan · Do · Check · Act : le cycle d'amélioration continue", hi: true },
  { name: "VSM", desc: "Value Stream Mapping : cartographier le flux de valeur", hi: false },
  { name: "QQOQCCP", desc: "Quoi, Qui, Où, Quand, Comment, Combien, Pourquoi : cadrer le problème", hi: false },
  { name: "Ishikawa", desc: "Diagramme causes-effet (5M) : organiser les causes", hi: false },
  { name: "5 Pourquoi", desc: "Remonter jusqu'à la cause racine d'un problème", hi: true },
  { name: "Pareto", desc: "20 % des causes → 80 % des effets : prioriser l'action", hi: false },
];

export default function CadreOutils() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[8vh] w-[80vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.4vw] font-bold uppercase tracking-[0.32em] text-primary">
          Cadre théorique · 3 / 4
        </p>
        <h2
          className="fx-rise mx-auto mt-[1.6vh] font-display text-[3.8vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Outils intégrés dans l'OPEX Dashboard
        </h2>
      </div>

      <div className="absolute left-1/2 top-[58%] grid w-[84vw] -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-[1.6vw]">
        {TOOLS.map((t, i) => (
          <div
            key={t.name}
            className={`fx-rise rounded-2xl px-[1.7vw] py-[2.2vh] ${t.hi ? "bg-accent" : "bg-white shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12"}`}
            style={{ animationDelay: `${0.16 + i * 0.07}s` }}
          >
            <p className="font-display text-[1.9vw] font-bold text-primary">{t.name}</p>
            <p className={`mt-[0.8vh] text-[1.25vw] leading-snug ${t.hi ? "text-primary/80" : "text-muted"}`}>{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="fx-rise absolute bottom-[5vh] left-1/2 flex -translate-x-1/2 items-center gap-[1vw] rounded-2xl bg-primary px-[2vw] py-[1.4vh] shadow-[0_14px_40px_rgba(40,92,204,0.26)]" style={{ animationDelay: "0.66s" }}>
        <span className="rounded-full bg-white px-[1vw] py-[0.5vh] text-[1.05vw] font-bold uppercase tracking-[0.16em] text-primary">À retenir</span>
        <p className="text-[1.45vw] font-medium text-white">Chaque outil est intégré dans un module concret de la solution.</p>
      </div>

      <SlideFooter n={12} />
    </SlideShell>
  );
}
