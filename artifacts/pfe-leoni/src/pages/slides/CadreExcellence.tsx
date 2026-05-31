import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function CadreExcellence() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[10vh] w-[80vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.4vw] font-bold uppercase tracking-[0.32em] text-primary">
          Cadre théorique · 2 / 4
        </p>
        <h2
          className="fx-rise mx-auto mt-[1.6vh] font-display text-[4vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Excellence opérationnelle
        </h2>
      </div>

      <div className="absolute left-1/2 top-[54%] flex w-[88vw] -translate-x-1/2 -translate-y-1/2 items-stretch justify-center gap-[1.2vw]">
        <div className="fx-rise flex w-[24vw] flex-col rounded-[1.4vw] bg-white px-[1.8vw] py-[2.6vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.2s" }}>
          <p className="font-display text-[2vw] font-bold text-primary">Lean Management</p>
          <p className="mt-[1.2vh] text-[1.4vw] leading-snug text-muted">Éliminer les gaspillages (Muda) et maximiser la valeur pour le client.</p>
        </div>

        <div className="flex items-center">
          <span className="font-display text-[2.6vw] font-bold text-primary/50">+</span>
        </div>

        <div className="fx-rise flex w-[24vw] flex-col rounded-[1.4vw] bg-white px-[1.8vw] py-[2.6vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.3s" }}>
          <p className="font-display text-[2vw] font-bold text-primary">Kaizen</p>
          <p className="mt-[1.2vh] text-[1.4vw] leading-snug text-muted">Amélioration continue, par petits pas et avec l'implication de tous.</p>
        </div>

        <div className="flex items-center">
          <span className="font-display text-[2.6vw] font-bold text-primary/50">=</span>
        </div>

        <div className="fx-rise flex w-[26vw] flex-col rounded-[1.4vw] bg-primary px-[1.8vw] py-[2.6vh] shadow-[0_18px_50px_rgba(40,92,204,0.28)]" style={{ animationDelay: "0.4s" }}>
          <p className="text-[1.1vw] font-bold uppercase tracking-[0.16em] text-white/70">OPEX — Operational Excellence</p>
          <p className="mt-[0.6vh] font-display text-[2vw] font-bold text-white">Excellence opérationnelle</p>
          <p className="mt-[1.2vh] text-[1.4vw] leading-snug text-white/85">Une performance durable et compétitive, à tous les niveaux.</p>
        </div>
      </div>

      <div className="fx-rise absolute bottom-[8vh] left-1/2 flex -translate-x-1/2 items-center gap-[1vw] rounded-2xl bg-accent px-[2vw] py-[1.5vh]" style={{ animationDelay: "0.5s" }}>
        <span className="rounded-full bg-primary px-[1vw] py-[0.5vh] text-[1.1vw] font-bold uppercase tracking-[0.16em] text-white">À retenir</span>
        <p className="text-[1.5vw] font-medium text-primary">L'OPEX n'est pas un outil, c'est une culture d'amélioration permanente.</p>
      </div>

      <SlideFooter n={11} />
    </SlideShell>
  );
}
