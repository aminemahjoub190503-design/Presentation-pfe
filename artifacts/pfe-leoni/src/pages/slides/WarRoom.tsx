import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function WarRoom() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[16vh] w-[34vw]">
        <p className="fx-rise font-display text-[1.6vw] font-bold text-primary">Module 01</p>
        <h2
          className="fx-rise mt-[1.4vh] font-display text-[4.8vw] font-bold leading-[1] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          War Room
        </h2>
        <p
          className="fx-rise mt-[2.6vh] max-w-[30vw] text-[2vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          La vision globale du site : performance SQDCM et priorités
          opérationnelles en un coup d'œil.
        </p>
        <div className="fx-rise mt-[4vh] flex flex-wrap gap-[0.8vw]" style={{ animationDelay: "0.3s" }}>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Vision globale</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">SQDCM</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Priorités</span>
        </div>
      </div>

      <div className="absolute right-[5vw] top-1/2 grid w-[46vw] -translate-y-1/2 grid-cols-2 gap-[1.4vw]">
        <div className="fx-pop rounded-[1vw] bg-primary p-[1.4vw] shadow-[0_16px_44px_rgba(40,92,204,0.22)]" style={{ animationDelay: "0.2s" }}>
          <p className="text-[1.5vw] font-medium text-white/70">Sécurité</p>
          <p className="font-display text-[2vw] font-bold text-white">0 incident</p>
        </div>
        <div className="fx-pop rounded-[1vw] bg-white p-[1.4vw] ring-1 ring-primary/15 shadow-[0_12px_36px_rgba(40,92,204,0.1)]" style={{ animationDelay: "0.3s" }}>
          <p className="text-[1.5vw] font-medium text-muted">Qualité</p>
          <p className="font-display text-[2vw] font-bold text-primary">99,2%</p>
        </div>
        <div className="fx-pop rounded-[1vw] bg-accent p-[1.4vw]" style={{ animationDelay: "0.4s" }}>
          <p className="text-[1.5vw] font-medium text-primary/70">Coût</p>
          <p className="font-display text-[2vw] font-bold text-primary">−7%</p>
        </div>
        <div className="fx-pop rounded-[1vw] bg-white p-[1.4vw] ring-1 ring-primary/15 shadow-[0_12px_36px_rgba(40,92,204,0.1)]" style={{ animationDelay: "0.5s" }}>
          <p className="text-[1.5vw] font-medium text-muted">Délai</p>
          <p className="font-display text-[2vw] font-bold text-primary">94%</p>
        </div>
      </div>

      <SlideFooter n={19} />
    </SlideShell>
  );
}
