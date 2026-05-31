import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Objectifs() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[14vh] w-[38vw]">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.32em] text-primary">
          Ce que vise le projet
        </p>
        <h2
          className="fx-rise mt-[2.2vh] font-display text-[5vw] font-bold leading-[0.98] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Objectifs du projet
        </h2>
        <p
          className="fx-rise mt-[3vh] max-w-[32vw] text-[1.9vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          Mieux organiser l'information pour renforcer la lisibilité du pilotage
          et la réactivité managériale.
        </p>
      </div>

      <div className="absolute right-[5vw] top-1/2 w-[44vw] -translate-y-1/2 space-y-[1.6vh]">
        <div className="fx-rise flex items-center gap-[1.4vw] rounded-2xl bg-white px-[1.7vw] py-[1.7vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.2s" }}>
          <span className="font-display text-[2.2vw] font-bold text-primary">01</span>
          <p className="text-[1.8vw] font-semibold text-primary">Centraliser les indicateurs clés de performance (KPI)</p>
        </div>
        <div className="fx-rise flex items-center gap-[1.4vw] rounded-2xl bg-white px-[1.7vw] py-[1.7vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.28s" }}>
          <span className="font-display text-[2.2vw] font-bold text-primary">02</span>
          <p className="text-[1.8vw] font-semibold text-primary">Visualiser la performance et les anomalies</p>
        </div>
        <div className="fx-rise flex items-center gap-[1.4vw] rounded-2xl bg-accent px-[1.7vw] py-[1.7vh]" style={{ animationDelay: "0.34s" }}>
          <span className="font-display text-[2.2vw] font-bold text-primary">03</span>
          <p className="text-[1.8vw] font-semibold text-primary">Relier indicateurs, anomalies et actions</p>
        </div>
        <div className="fx-rise flex items-center gap-[1.4vw] rounded-2xl bg-white px-[1.7vw] py-[1.7vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.4s" }}>
          <span className="font-display text-[2.2vw] font-bold text-primary">04</span>
          <p className="text-[1.8vw] font-semibold text-primary">Assurer la traçabilité des actions correctives</p>
        </div>
        <div className="fx-rise flex items-center gap-[1.4vw] rounded-2xl bg-primary px-[1.7vw] py-[1.9vh] shadow-[0_16px_44px_rgba(40,92,204,0.28)]" style={{ animationDelay: "0.44s" }}>
          <span className="font-display text-[2.2vw] font-bold text-white">05</span>
          <p className="text-[1.8vw] font-semibold text-white">Soutenir la décision managériale</p>
        </div>
      </div>

      <SlideFooter n={10} />
    </SlideShell>
  );
}
