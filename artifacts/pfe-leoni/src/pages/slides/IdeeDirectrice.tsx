import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function IdeeDirectrice() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[12vh] w-[60vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.34em] text-primary">
          L'idée directrice
        </p>
        <h2
          className="fx-rise mx-auto mt-[2.2vh] font-display text-[4.4vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Un seul système, quatre gestes
        </h2>
      </div>

      <div className="absolute left-1/2 top-[62%] h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <circle cx="200" cy="200" r="150" fill="none" stroke="#285ccc" strokeOpacity="0.16" strokeWidth="1.4" strokeDasharray="2 8" className="spin-slow" style={{ transformOrigin: "200px 200px" }} />
          <line x1="200" y1="200" x2="200" y2="70" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" pathLength={1} className="fx-draw" />
          <line x1="200" y1="200" x2="330" y2="200" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" pathLength={1} className="fx-draw" style={{ animationDelay: "0.1s" }} />
          <line x1="200" y1="200" x2="200" y2="330" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" pathLength={1} className="fx-draw" style={{ animationDelay: "0.2s" }} />
          <line x1="200" y1="200" x2="70" y2="200" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" pathLength={1} className="fx-draw" style={{ animationDelay: "0.3s" }} />
          <circle cx="200" cy="200" r="52" fill="#fff2bd" className="core-pulse" style={{ transformOrigin: "200px 200px" }} />
          <circle cx="200" cy="200" r="30" fill="#285ccc" />
          <circle cx="200" cy="200" r="12" fill="#ffffff" fillOpacity="0.9" />
        </svg>

        <div className="fx-pop absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 font-display text-[1.5vw] font-bold text-primary" style={{ animationDelay: "0.5s" }}>Centraliser</div>
        <div className="fx-pop absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 font-display text-[1.5vw] font-bold text-primary" style={{ animationDelay: "0.6s" }}>Analyser</div>
        <div className="fx-pop absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 font-display text-[1.5vw] font-bold text-primary" style={{ animationDelay: "0.7s" }}>Décider</div>
        <div className="fx-pop absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 font-display text-[1.5vw] font-bold text-primary" style={{ animationDelay: "0.8s" }}>Agir</div>
      </div>

      <SlideFooter n={16} />
    </SlideShell>
  );
}
