import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Chaine() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[12vh] w-[66vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.32em] text-primary">
          Comment j'ai travaillé
        </p>
        <h2
          className="fx-rise mx-auto mt-[2vh] font-display text-[4.4vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Démarche méthodologique
        </h2>
        <p
          className="fx-rise mx-auto mt-[1.6vh] max-w-[52vw] text-[1.7vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.18s", textWrap: "pretty" }}
        >
          Une immersion terrain au sein du département OPEX, avant de concevoir
          la solution.
        </p>
      </div>

      <div className="absolute left-1/2 top-[64%] w-[86vw] -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute left-[8%] right-[8%] top-[1.1vh] h-px bg-primary/20" />
          <div className="relative flex items-start justify-between">
            <div className="fx-pop flex w-[15vw] flex-col items-center text-center" style={{ animationDelay: "0.22s" }}>
              <span className="h-[2.2vh] w-[2.2vh] rounded-full bg-white ring-[3px] ring-primary" />
              <span className="mt-[1.6vh] font-display text-[1.5vw] font-bold text-primary">Observation</span>
              <span className="mt-[0.5vh] text-[1.2vw] text-muted">Site & interactions</span>
            </div>
            <div className="fx-pop flex w-[15vw] flex-col items-center text-center" style={{ animationDelay: "0.3s" }}>
              <span className="h-[2.2vh] w-[2.2vh] rounded-full bg-white ring-[3px] ring-primary" />
              <span className="mt-[1.6vh] font-display text-[1.5vw] font-bold text-primary">Réunions</span>
              <span className="mt-[0.5vh] text-[1.2vw] text-muted">Shopfloor & SHTUNG</span>
            </div>
            <div className="fx-pop flex w-[15vw] flex-col items-center text-center" style={{ animationDelay: "0.36s" }}>
              <span className="h-[2.2vh] w-[2.2vh] rounded-full bg-accent ring-[3px] ring-primary" />
              <span className="mt-[1.6vh] font-display text-[1.5vw] font-bold text-primary">Gemba Walk</span>
              <span className="mt-[0.5vh] text-[1.2vw] text-muted">Terrain · équipe OPEX</span>
            </div>
            <div className="fx-pop flex w-[15vw] flex-col items-center text-center" style={{ animationDelay: "0.42s" }}>
              <span className="h-[2.2vh] w-[2.2vh] rounded-full bg-white ring-[3px] ring-primary" />
              <span className="mt-[1.6vh] font-display text-[1.5vw] font-bold text-primary">Analyse KPI</span>
              <span className="mt-[0.5vh] text-[1.2vw] text-muted">Écarts identifiés</span>
            </div>
            <div className="fx-pop flex w-[15vw] flex-col items-center text-center" style={{ animationDelay: "0.46s" }}>
              <span className="h-[2.2vh] w-[2.2vh] rounded-full bg-primary ring-[3px] ring-primary" />
              <span className="mt-[1.6vh] font-display text-[1.5vw] font-bold text-primary">Structuration</span>
              <span className="mt-[0.5vh] text-[1.2vw] text-muted">Besoins de pilotage</span>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter n={10} />
    </SlideShell>
  );
}
