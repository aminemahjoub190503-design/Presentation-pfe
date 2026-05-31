import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const SQDCM = [
  ["S", "Safety"],
  ["Q", "Quality"],
  ["D", "Delivery"],
  ["C", "Cost"],
  ["M", "Morale"],
];

export default function CadrePerformance() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[8vh] w-[80vw]">
        <p className="fx-rise text-[1.4vw] font-bold uppercase tracking-[0.32em] text-primary">
          Cadre théorique · 1 / 4
        </p>
        <h2
          className="fx-rise mt-[1.6vh] font-display text-[3.8vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Performance industrielle & KPI
        </h2>
      </div>
      <div className="fx-rise absolute left-[7vw] top-[30vh] w-[40vw] rounded-[1.4vw] bg-white px-[2vw] py-[2.4vh] shadow-[0_18px_50px_rgba(40,92,204,0.12)] ring-1 ring-primary/12" style={{ animationDelay: "0.2s" }}>
        <p className="text-[1.2vw] font-bold uppercase tracking-[0.16em] text-muted">Mesurer la performance</p>
        <p className="mt-[1.6vh] text-[1.55vw] leading-snug text-primary">
          <span className="font-semibold">Performance</span> = efficacité (objectifs) + efficience (ressources)
        </p>
        <p className="mt-[1vh] text-[1.55vw] leading-snug text-primary">
          <span className="font-semibold">KPI</span> — Key Performance Indicator : l'indicateur clé
        </p>
        <p className="mt-[1vh] text-[1.55vw] leading-snug text-primary">
          <span className="font-semibold">Tableau de bord</span> — centralise les indicateurs
        </p>
        <div className="mt-[2vh] flex items-center gap-[0.7vw]">
          {SQDCM.map(([l, en]) => (
            <div key={l} className="flex flex-col items-center">
              <span className="flex h-[3vh] w-[3vh] items-center justify-center rounded-lg bg-primary font-display text-[1.4vw] font-bold text-white">{l}</span>
              <span className="mt-[0.5vh] text-[0.85vw] text-muted">{en}</span>
            </div>
          ))}
          <span className="ml-[0.4vw] text-[1.1vw] font-semibold text-primary">SQDCM</span>
        </div>
      </div>
      <div className="fx-rise absolute right-[7vw] top-[30vh] w-[40vw] rounded-[1.4vw] bg-accent px-[2vw] py-[2.4vh]" style={{ animationDelay: "0.3s" }}>
        <p className="text-[1.2vw] font-bold uppercase tracking-[0.16em] text-primary/70">Limites du pilotage traditionnel</p>
        <div className="mt-[1.6vh] space-y-[1.3vh]">
          <div className="flex items-start gap-[0.9vw]">
            <span className="mt-[0.7vh] h-[1.1vh] w-[1.1vh] shrink-0 rounded-full bg-primary" />
            <p className="text-[1.45vw] leading-snug text-primary">Données dispersées entre plusieurs fichiers / supports</p>
          </div>
          <div className="flex items-start gap-[0.9vw]">
            <span className="mt-[0.7vh] h-[1.1vh] w-[1.1vh] shrink-0 rounded-full bg-primary" />
            <p className="text-[1.45vw] leading-snug text-primary">Traitements manuels : collecte → analyse (pilotage descriptif)</p>
          </div>
          <div className="flex items-start gap-[0.9vw]">
            <span className="mt-[0.7vh] h-[1.1vh] w-[1.1vh] shrink-0 rounded-full bg-primary" />
            <p className="text-[1.45vw] leading-snug text-primary">Absence de lien entre indicateurs, causes et actions</p>
          </div>
          <div className="flex items-start gap-[0.9vw]">
            <span className="mt-[0.7vh] h-[1.1vh] w-[1.1vh] shrink-0 rounded-full bg-primary" />
            <p className="text-[1.45vw] leading-snug text-primary">Perte en réactivité, cohérence et efficacité décisionnelle</p>
          </div>
        </div>
      </div>
      <div className="fx-rise absolute bottom-[6vh] left-1/2 flex -translate-x-1/2 items-center gap-[1vw] rounded-2xl bg-primary px-[2vw] py-[1.5vh] shadow-[0_14px_40px_rgba(40,92,204,0.26)]" style={{ animationDelay: "0.46s" }}>
        <span className="rounded-full bg-white px-[1vw] py-[0.5vh] font-bold uppercase tracking-[0.16em] text-primary text-[7px] text-center">À retenir</span>
        <p className="text-[1.5vw] font-medium text-white">Le pilotage traditionnel mesure, mais ne relie pas la mesure à la décision.</p>
      </div>
      <SlideFooter n={10} />
    </SlideShell>
  );
}
