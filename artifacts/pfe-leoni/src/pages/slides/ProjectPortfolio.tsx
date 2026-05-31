import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function ProjectPortfolio() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[16vh] w-[34vw]">
        <p className="fx-rise font-display text-[1.6vw] font-bold text-primary">Module 06</p>
        <h2
          className="fx-rise mt-[1.4vh] font-display text-[4.6vw] font-bold leading-[1] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Project Portfolio
        </h2>
        <p
          className="fx-rise mt-[2.6vh] max-w-[30vw] text-[2vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          Structurer et piloter les projets : WBS, diagramme de Gantt, gestion
          des risques et suivi des gains.
        </p>
        <div className="fx-rise mt-[4vh] flex flex-wrap gap-[0.8vw]" style={{ animationDelay: "0.3s" }}>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">WBS</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Gantt</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Risques</span>
        </div>
      </div>

      <div className="absolute right-[5vw] top-1/2 w-[46vw] -translate-y-1/2 rounded-[1.4vw] bg-white p-[1.8vw] shadow-[0_24px_64px_rgba(40,92,204,0.16)] ring-1 ring-primary/12">
        <p className="font-display text-[2vw] font-bold text-primary">Feuille de route</p>
        <div className="mt-[2vh] space-y-[1.6vh]">
          <div className="flex items-center gap-[1vw]">
            <span className="w-[7vw] text-[1.5vw] font-semibold text-muted">Cadrage</span>
            <div className="relative h-[3vh] flex-1 rounded-full bg-primary/10">
              <div className="fx-rise absolute left-0 top-0 h-full w-[34%] rounded-full bg-primary" style={{ animationDelay: "0.3s", transformOrigin: "left" }} />
            </div>
          </div>
          <div className="flex items-center gap-[1vw]">
            <span className="w-[7vw] text-[1.5vw] font-semibold text-muted">Conception</span>
            <div className="relative h-[3vh] flex-1 rounded-full bg-primary/10">
              <div className="fx-rise absolute left-[20%] top-0 h-full w-[48%] rounded-full bg-accent" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
          <div className="flex items-center gap-[1vw]">
            <span className="w-[7vw] text-[1.5vw] font-semibold text-muted">Déploiement</span>
            <div className="relative h-[3vh] flex-1 rounded-full bg-primary/10">
              <div className="fx-rise absolute left-[52%] top-0 h-full w-[40%] rounded-full bg-primary" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
          <div className="flex items-center gap-[1vw]">
            <span className="w-[7vw] text-[1.5vw] font-semibold text-muted">Suivi gains</span>
            <div className="relative h-[3vh] flex-1 rounded-full bg-primary/10">
              <div className="fx-rise absolute left-[70%] top-0 h-full w-[28%] rounded-full bg-accent" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>
        </div>
      </div>

      <SlideFooter n={22} />
    </SlideShell>
  );
}
