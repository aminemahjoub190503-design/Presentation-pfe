import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function AiCoPilot() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[16vh] w-[34vw]">
        <p className="fx-rise font-display text-[1.6vw] font-bold text-primary">Module 07</p>
        <h2
          className="fx-rise mt-[1.4vh] font-display text-[4.6vw] font-bold leading-[1] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          AI Co-Pilot
        </h2>
        <p
          className="fx-rise mt-[2.6vh] max-w-[30vw] text-[2vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          L'assistant intelligent qui relie les six modules : il alerte,
          explique et recommande.
        </p>
        <div className="fx-rise mt-[4vh] flex flex-wrap gap-[0.8vw]" style={{ animationDelay: "0.3s" }}>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Alerter</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Expliquer</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Recommander</span>
        </div>
      </div>

      <div className="absolute right-[5vw] top-1/2 h-[74vh] w-[44vw] -translate-y-1/2">
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <line x1="200" y1="200" x2="200" y2="52" stroke="#285ccc" strokeOpacity="0.45" strokeWidth="2" pathLength={1} className="fx-draw" />
          <line x1="200" y1="200" x2="336" y2="116" stroke="#285ccc" strokeOpacity="0.45" strokeWidth="2" pathLength={1} className="fx-draw" style={{ animationDelay: "0.1s" }} />
          <line x1="200" y1="200" x2="336" y2="284" stroke="#285ccc" strokeOpacity="0.45" strokeWidth="2" pathLength={1} className="fx-draw" style={{ animationDelay: "0.2s" }} />
          <line x1="200" y1="200" x2="200" y2="348" stroke="#285ccc" strokeOpacity="0.45" strokeWidth="2" pathLength={1} className="fx-draw" style={{ animationDelay: "0.3s" }} />
          <line x1="200" y1="200" x2="64" y2="284" stroke="#285ccc" strokeOpacity="0.45" strokeWidth="2" pathLength={1} className="fx-draw" style={{ animationDelay: "0.4s" }} />
          <line x1="200" y1="200" x2="64" y2="116" stroke="#285ccc" strokeOpacity="0.45" strokeWidth="2" pathLength={1} className="fx-draw" style={{ animationDelay: "0.5s" }} />

          <g className="fx-pop" style={{ animationDelay: "0.6s" }}>
            <circle cx="200" cy="52" r="20" fill="#fff2bd" stroke="#285ccc" strokeWidth="2.4" />
            <circle cx="200" cy="52" r="7" fill="#285ccc" />
          </g>
          <g className="fx-pop" style={{ animationDelay: "0.66s" }}>
            <circle cx="336" cy="116" r="20" fill="#fff2bd" stroke="#285ccc" strokeWidth="2.4" />
            <circle cx="336" cy="116" r="7" fill="#285ccc" />
          </g>
          <g className="fx-pop" style={{ animationDelay: "0.72s" }}>
            <circle cx="336" cy="284" r="20" fill="#fff2bd" stroke="#285ccc" strokeWidth="2.4" />
            <circle cx="336" cy="284" r="7" fill="#285ccc" />
          </g>
          <g className="fx-pop" style={{ animationDelay: "0.78s" }}>
            <circle cx="200" cy="348" r="20" fill="#fff2bd" stroke="#285ccc" strokeWidth="2.4" />
            <circle cx="200" cy="348" r="7" fill="#285ccc" />
          </g>
          <g className="fx-pop" style={{ animationDelay: "0.84s" }}>
            <circle cx="64" cy="284" r="20" fill="#fff2bd" stroke="#285ccc" strokeWidth="2.4" />
            <circle cx="64" cy="284" r="7" fill="#285ccc" />
          </g>
          <g className="fx-pop" style={{ animationDelay: "0.9s" }}>
            <circle cx="64" cy="116" r="20" fill="#fff2bd" stroke="#285ccc" strokeWidth="2.4" />
            <circle cx="64" cy="116" r="7" fill="#285ccc" />
          </g>

          <circle cx="200" cy="200" r="58" fill="#fff2bd" className="core-pulse" style={{ transformOrigin: "200px 200px" }} />
          <circle cx="200" cy="200" r="34" fill="#285ccc" />
          <circle cx="200" cy="200" r="13" fill="#ffffff" fillOpacity="0.92" />
        </svg>
      </div>

      <SlideFooter n={24} />
    </SlideShell>
  );
}
