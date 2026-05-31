import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function OpexDashboard() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[16vh] w-[34vw]">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.32em] text-primary">
          La solution
        </p>
        <h2
          className="fx-rise mt-[2.2vh] font-display text-[5.2vw] font-bold leading-[0.98] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          OPEX Dashboard
        </h2>
        <p
          className="fx-rise mt-[3vh] max-w-[30vw] text-[2vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          Un système intelligent et intégré de pilotage de la performance,
          conçu pour le département OPEX.
        </p>
        <div className="fx-rise mt-[4vh] inline-flex items-center gap-[0.8vw] rounded-full bg-accent px-[1.6vw] py-[1.1vh]" style={{ animationDelay: "0.3s" }}>
          <span className="h-[1.2vh] w-[1.2vh] rounded-full bg-primary" />
          <span className="text-[1.6vw] font-semibold text-primary">7 modules connectés</span>
        </div>
      </div>

      <div className="absolute right-[5vw] top-1/2 w-[48vw] -translate-y-1/2">
        <div className="fx-zoom floaty rounded-[1.6vw] bg-white p-[1.6vw] shadow-[0_30px_80px_rgba(40,92,204,0.18)] ring-1 ring-primary/12" style={{ transform: "perspective(1600px) rotateY(-9deg) rotateX(3deg)" }}>
          <div className="flex items-center gap-[0.6vw]">
            <span className="h-[1.1vh] w-[1.1vh] rounded-full bg-primary/30" />
            <span className="h-[1.1vh] w-[1.1vh] rounded-full bg-primary/30" />
            <span className="h-[1.1vh] w-[1.1vh] rounded-full bg-accent" />
            <span className="ml-[0.8vw] text-[1.5vw] font-semibold uppercase tracking-[0.2em] text-muted">OPEX · War Room</span>
          </div>

          <div className="mt-[1.4vh] grid grid-cols-3 gap-[1vw]">
            <div className="rounded-[0.8vw] bg-primary p-[1vw]">
              <p className="text-[1.5vw] font-medium text-white/70">TRS</p>
              <p className="font-display text-[1.7vw] font-bold text-white">86%</p>
            </div>
            <div className="rounded-[0.8vw] bg-accent p-[1vw]">
              <p className="text-[1.5vw] font-medium text-primary/70">Qualité</p>
              <p className="font-display text-[1.7vw] font-bold text-primary">99,2%</p>
            </div>
            <div className="rounded-[0.8vw] bg-white p-[1vw] ring-1 ring-primary/15">
              <p className="text-[1.5vw] font-medium text-muted">Actions</p>
              <p className="font-display text-[1.7vw] font-bold text-primary">24</p>
            </div>
          </div>

          <div className="mt-[1.2vh] rounded-[0.8vw] bg-white p-[1vw] ring-1 ring-primary/12">
            <svg viewBox="0 0 400 110" className="h-[14vh] w-full" aria-hidden="true">
              <polyline points="10,90 60,70 110,78 160,48 210,58 260,30 310,40 390,16" fill="none" stroke="#285ccc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="fx-draw" />
              <polyline points="10,100 60,92 110,95 160,80 210,86 260,70 310,76 390,60" fill="none" stroke="#fff2bd" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <SlideFooter n={17} />
    </SlideShell>
  );
}
