import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Anomalies() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[15vh] w-[40vw]">
        <p className="fx-rise font-display text-[1.6vw] font-bold text-primary">Module 03</p>
        <h2
          className="fx-rise mt-[1.4vh] font-display text-[4.6vw] font-bold leading-[1] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Anomalies & Actions
        </h2>
        <p
          className="fx-rise mt-[2.6vh] max-w-[38vw] text-[2vw] leading-snug text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          Chaque écart devient un plan d'action structuré et suivi.
        </p>
      </div>

      <div className="absolute left-1/2 top-[74%] flex w-[86vw] -translate-x-1/2 -translate-y-1/2 items-center justify-between">
        <div className="fx-pop flex h-[16vh] w-[12vw] flex-col items-center justify-center rounded-2xl bg-primary text-center shadow-[0_14px_40px_rgba(40,92,204,0.24)]" style={{ animationDelay: "0.2s" }}>
          <span className="font-display text-[2vw] font-bold text-white">Écart</span>
          <span className="mt-[0.6vh] text-[1.5vw] text-white/75">Alerte</span>
        </div>
        <svg width="48" height="30" viewBox="0 0 48 30" className="text-primary"><path d="M2 15H38M30 7l10 8-10 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="fx-draw" style={{ animationDelay: "0.35s" }} /></svg>
        <div className="fx-pop flex h-[16vh] w-[12vw] flex-col items-center justify-center rounded-2xl bg-white text-center ring-1 ring-primary/15 shadow-[0_12px_34px_rgba(40,92,204,0.1)]" style={{ animationDelay: "0.3s" }}>
          <span className="font-display text-[2vw] font-bold text-primary">QQOQCCP</span>
          <span className="mt-[0.6vh] text-[1.5vw] text-muted">Cadrer</span>
        </div>
        <svg width="48" height="30" viewBox="0 0 48 30" className="text-primary"><path d="M2 15H38M30 7l10 8-10 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="fx-draw" style={{ animationDelay: "0.45s" }} /></svg>
        <div className="fx-pop flex h-[16vh] w-[12vw] flex-col items-center justify-center rounded-2xl bg-white text-center ring-1 ring-primary/15 shadow-[0_12px_34px_rgba(40,92,204,0.1)]" style={{ animationDelay: "0.4s" }}>
          <span className="font-display text-[2vw] font-bold text-primary">Pareto · Ishikawa</span>
          <span className="mt-[0.6vh] text-[1.5vw] text-muted">Analyser</span>
        </div>
        <svg width="48" height="30" viewBox="0 0 48 30" className="text-primary"><path d="M2 15H38M30 7l10 8-10 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="fx-draw" style={{ animationDelay: "0.55s" }} /></svg>
        <div className="fx-pop flex h-[16vh] w-[12vw] flex-col items-center justify-center rounded-2xl bg-accent text-center shadow-[0_14px_40px_rgba(40,92,204,0.14)]" style={{ animationDelay: "0.5s" }}>
          <span className="font-display text-[2vw] font-bold text-primary">PDCA</span>
          <span className="mt-[0.6vh] text-[1.5vw] text-primary/80">Agir & suivre</span>
        </div>
      </div>

      <SlideFooter n={21} />
    </SlideShell>
  );
}
