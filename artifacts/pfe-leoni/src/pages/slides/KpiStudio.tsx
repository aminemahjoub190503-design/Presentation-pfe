import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function KpiStudio() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[16vh] w-[34vw]">
        <p className="fx-rise font-display text-[1.6vw] font-bold text-primary">Module 02</p>
        <h2
          className="fx-rise mt-[1.4vh] font-display text-[4.8vw] font-bold leading-[1] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          KPI Studio
        </h2>
        <p
          className="fx-rise mt-[2.6vh] max-w-[30vw] text-[2vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          Suivre, comparer et interpréter les indicateurs clés — OEE / TRS,
          qualité, productivité.
        </p>
        <div className="fx-rise mt-[4vh] flex flex-wrap gap-[0.8vw]" style={{ animationDelay: "0.3s" }}>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Suivre</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Comparer</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Interpréter</span>
        </div>
      </div>

      <div className="absolute right-[5vw] top-1/2 w-[46vw] -translate-y-1/2 rounded-[1.4vw] bg-white p-[1.8vw] shadow-[0_24px_64px_rgba(40,92,204,0.16)] ring-1 ring-primary/12">
        <div className="flex items-end justify-between">
          <p className="font-display text-[2vw] font-bold text-primary">OEE / TRS</p>
          <p className="font-display text-[1.7vw] font-bold text-primary">86%</p>
        </div>
        <svg viewBox="0 0 460 200" className="mt-[1.6vh] h-[26vh] w-full" aria-hidden="true">
          <line x1="20" y1="160" x2="440" y2="160" stroke="#285ccc" strokeOpacity="0.15" strokeWidth="1.4" />
          <line x1="20" y1="110" x2="440" y2="110" stroke="#285ccc" strokeOpacity="0.1" strokeWidth="1.4" />
          <line x1="20" y1="60" x2="440" y2="60" stroke="#285ccc" strokeOpacity="0.1" strokeWidth="1.4" />
          <polygon points="20,160 70,120 130,132 190,86 250,98 310,58 370,70 440,34 440,160" fill="#fff2bd" fillOpacity="0.55" />
          <polyline points="20,160 70,120 130,132 190,86 250,98 310,58 370,70 440,34" fill="none" stroke="#285ccc" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="fx-draw" />
          <circle cx="190" cy="86" r="6" fill="#285ccc" className="fx-pop" style={{ animationDelay: "0.6s" }} />
          <circle cx="310" cy="58" r="6" fill="#285ccc" className="fx-pop" style={{ animationDelay: "0.7s" }} />
          <circle cx="440" cy="34" r="7" fill="#285ccc" className="fx-pop" style={{ animationDelay: "0.8s" }} />
        </svg>
      </div>

      <SlideFooter n={19} />
    </SlideShell>
  );
}
