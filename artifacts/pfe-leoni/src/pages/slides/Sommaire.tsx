import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Sommaire() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[13vh] w-[40vw]">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.34em] text-primary">
          Plan de la présentation
        </p>
        <h2
          className="fx-rise mt-[2.2vh] font-display text-[4.6vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Sommaire
        </h2>
        <p
          className="fx-rise mt-[3vh] max-w-[34vw] text-[1.9vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          Du terrain industriel à la solution intelligente, en passant par les
          fondements de la performance.
        </p>
      </div>

      <div className="absolute right-[6vw] top-1/2 w-[44vw] -translate-y-1/2 space-y-[2vh]">
        <div className="fx-rise flex items-center gap-[1.6vw] rounded-2xl bg-white px-[1.8vw] py-[1.8vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.18s" }}>
          <span className="font-display text-[2.2vw] font-bold text-primary">01</span>
          <div>
            <p className="text-[1.9vw] font-semibold text-primary">Entreprise & terrain</p>
            <p className="text-[1.2vw] text-muted">Groupe LEONI · Menzel Hayet · département OPEX</p>
          </div>
        </div>
        <div className="fx-rise flex items-center gap-[1.6vw] rounded-2xl bg-accent px-[1.8vw] py-[1.8vh]" style={{ animationDelay: "0.28s" }}>
          <span className="font-display text-[2.2vw] font-bold text-primary">02</span>
          <div>
            <p className="text-[1.9vw] font-semibold text-primary">Diagnostic & problématique</p>
            <p className="text-[1.2vw] text-primary/70">SWOT · objectifs · démarche</p>
          </div>
        </div>
        <div className="fx-rise flex items-center gap-[1.6vw] rounded-2xl bg-white px-[1.8vw] py-[1.8vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.38s" }}>
          <span className="font-display text-[2.2vw] font-bold text-primary">03</span>
          <div>
            <p className="text-[1.9vw] font-semibold text-primary">Cadre théorique</p>
            <p className="text-[1.2vw] text-muted">Performance · excellence opérationnelle · digitalisation</p>
          </div>
        </div>
        <div className="fx-rise flex items-center gap-[1.6vw] rounded-2xl bg-primary px-[1.8vw] py-[1.8vh] shadow-[0_16px_44px_rgba(40,92,204,0.28)]" style={{ animationDelay: "0.48s" }}>
          <span className="font-display text-[2.2vw] font-bold text-white">04</span>
          <div>
            <p className="text-[1.9vw] font-semibold text-white">Solution & valeur</p>
            <p className="text-[1.2vw] text-white/70">OPEX Dashboard · architecture · démo · limites</p>
          </div>
        </div>
      </div>

      <SlideFooter n={2} />
    </SlideShell>
  );
}
