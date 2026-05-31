import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Diagnostic() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[14vh] w-[44vw]">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.32em] text-primary">
          Diagnostic
        </p>
        <h2
          className="fx-rise mt-[2.2vh] font-display text-[4.4vw] font-bold leading-[1.04] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Trop d'informations. Pas assez de vision.
        </h2>

        <div className="mt-[5vh] space-y-[2.4vh]">
          <div className="fx-rise flex items-center gap-[1.4vw]" style={{ animationDelay: "0.22s" }}>
            <span className="font-display text-[2vw] font-bold text-primary">01</span>
            <p className="text-[2vw] font-medium text-primary">Dispersion des données</p>
          </div>
          <div className="fx-rise flex items-center gap-[1.4vw]" style={{ animationDelay: "0.32s" }}>
            <span className="font-display text-[2vw] font-bold text-primary">02</span>
            <p className="text-[2vw] font-medium text-primary">Multiplication des supports</p>
          </div>
          <div className="fx-rise flex items-center gap-[1.4vw]" style={{ animationDelay: "0.42s" }}>
            <span className="font-display text-[2vw] font-bold text-primary">03</span>
            <p className="text-[2vw] font-medium text-primary">Lenteur de la décision</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[4vw] top-1/2 h-[66vh] w-[42vw] -translate-y-1/2">
        <svg viewBox="0 0 460 460" className="h-full w-full" aria-hidden="true">
          <rect x="40" y="60" width="120" height="78" rx="12" fill="#ffffff" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" className="floaty" transform="rotate(-8 100 99)" />
          <rect x="250" y="40" width="120" height="78" rx="12" fill="#fff2bd" className="floaty" style={{ animationDelay: "0.6s" }} transform="rotate(7 310 79)" />
          <rect x="300" y="180" width="120" height="78" rx="12" fill="#ffffff" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" className="floaty" style={{ animationDelay: "1.2s" }} transform="rotate(-6 360 219)" />
          <rect x="30" y="240" width="120" height="78" rx="12" fill="#ffffff" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" className="floaty" style={{ animationDelay: "0.9s" }} transform="rotate(9 90 279)" />
          <rect x="180" y="330" width="120" height="78" rx="12" fill="#fff2bd" className="floaty" style={{ animationDelay: "0.4s" }} transform="rotate(-5 240 369)" />
          <line x1="100" y1="120" x2="240" y2="240" stroke="#285ccc" strokeOpacity="0.18" strokeWidth="1.4" strokeDasharray="4 6" />
          <line x1="310" y1="120" x2="240" y2="240" stroke="#285ccc" strokeOpacity="0.18" strokeWidth="1.4" strokeDasharray="4 6" />
          <line x1="360" y1="200" x2="240" y2="240" stroke="#285ccc" strokeOpacity="0.18" strokeWidth="1.4" strokeDasharray="4 6" />
        </svg>
      </div>

      <SlideFooter n={6} />
    </SlideShell>
  );
}
