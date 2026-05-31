import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Architecture() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[11vh] w-[66vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.32em] text-primary">
          Une logique intégrée
        </p>
        <h2
          className="fx-rise mx-auto mt-[2vh] font-display text-[4.4vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Architecture de la plateforme
        </h2>
      </div>

      {/* Entrée : données terrain */}
      <div className="fx-rise absolute left-1/2 top-[37%] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "0.18s" }}>
        <div className="rounded-2xl bg-primary px-[2.4vw] py-[1.6vh] text-center shadow-[0_16px_44px_rgba(40,92,204,0.28)]">
          <p className="text-[1.2vw] font-bold uppercase tracking-[0.2em] text-white/70">Entrée</p>
          <p className="mt-[0.3vh] text-[1.8vw] font-semibold text-white">Données terrain · KPI · anomalies</p>
        </div>
      </div>

      {/* Modules opérationnels */}
      <div className="absolute left-1/2 top-[58%] w-[84vw] -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-stretch justify-between gap-[1vw]">
          <div className="fx-pop flex flex-1 items-center justify-center rounded-2xl bg-white px-[1vw] py-[2.2vh] text-center shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.24s" }}>
            <span className="text-[1.4vw] font-semibold text-primary">War Room</span>
          </div>
          <div className="fx-pop flex flex-1 items-center justify-center rounded-2xl bg-white px-[1vw] py-[2.2vh] text-center shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.3s" }}>
            <span className="text-[1.4vw] font-semibold text-primary">KPI Studio</span>
          </div>
          <div className="fx-pop flex flex-1 items-center justify-center rounded-2xl bg-white px-[1vw] py-[2.2vh] text-center shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.34s" }}>
            <span className="text-[1.4vw] font-semibold text-primary">Anomalies & Actions</span>
          </div>
          <div className="fx-pop flex flex-1 items-center justify-center rounded-2xl bg-accent px-[1vw] py-[2.2vh] text-center" style={{ animationDelay: "0.38s" }}>
            <span className="text-[1.4vw] font-semibold text-primary">Kaizen / VSM</span>
          </div>
          <div className="fx-pop flex flex-1 items-center justify-center rounded-2xl bg-white px-[1vw] py-[2.2vh] text-center shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.42s" }}>
            <span className="text-[1.4vw] font-semibold text-primary">Project Portfolio</span>
          </div>
        </div>
      </div>

      {/* Sortie : aide à la décision */}
      <div className="fx-rise absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "0.46s" }}>
        <div className="rounded-full bg-primary px-[2.6vw] py-[1.5vh] text-center shadow-[0_16px_44px_rgba(40,92,204,0.28)]">
          <span className="text-[1.7vw] font-semibold text-white">AI Co-Pilot — aide à la décision</span>
        </div>
      </div>

      <SlideFooter n={18} />
    </SlideShell>
  );
}
