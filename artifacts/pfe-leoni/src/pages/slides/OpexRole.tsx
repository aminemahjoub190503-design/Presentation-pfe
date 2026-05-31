import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function OpexRole() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[15vh] w-[40vw]">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.32em] text-primary">
          L'environnement d'accueil
        </p>
        <h2
          className="fx-rise mt-[2vh] font-display text-[4.4vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Le département Excellence Opérationnelle
        </h2>
        <div
          className="fx-rise mt-[2.4vh] inline-flex items-center gap-[0.8vw] rounded-full bg-accent px-[1.6vw] py-[1.1vh]"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="h-[1.2vh] w-[1.2vh] rounded-full bg-primary" />
          <span className="text-[1.6vw] font-semibold text-primary">
            Operational Excellence (OPEX)
          </span>
        </div>
        <p
          className="fx-rise mt-[3vh] max-w-[36vw] text-[1.9vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.28s", textWrap: "pretty" }}
        >
          Le levier d'amélioration continue et de pilotage de la performance
          industrielle du site.
        </p>
      </div>

      <div className="absolute right-[5vw] top-1/2 w-[42vw] -translate-y-1/2 space-y-[1.8vh]">
        <div className="fx-rise rounded-2xl bg-white px-[1.9vw] py-[1.9vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.22s" }}>
          <p className="text-[1.9vw] font-semibold text-primary">Suivi & mesure de la performance</p>
        </div>
        <div className="fx-rise rounded-2xl bg-white px-[1.9vw] py-[1.9vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.3s" }}>
          <p className="text-[1.9vw] font-semibold text-primary">Analyse des écarts (gap analysis)</p>
        </div>
        <div className="fx-rise rounded-2xl bg-white px-[1.9vw] py-[1.9vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.38s" }}>
          <p className="text-[1.9vw] font-semibold text-primary">Amélioration continue · Lean & Kaizen</p>
        </div>
        <div className="fx-rise rounded-2xl bg-primary px-[1.9vw] py-[2.2vh] shadow-[0_16px_44px_rgba(40,92,204,0.28)]" style={{ animationDelay: "0.4s" }}>
          <p className="text-[1.3vw] font-bold uppercase tracking-[0.2em] text-white/70">Fonction transversale</p>
          <p className="mt-[0.5vh] text-[1.9vw] font-semibold text-white">Production · Qualité · Chaîne logistique</p>
        </div>
      </div>

      <SlideFooter n={6} />
    </SlideShell>
  );
}
