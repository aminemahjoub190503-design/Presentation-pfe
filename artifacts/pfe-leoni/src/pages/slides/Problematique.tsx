import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Problematique() {
  return (
    <SlideShell>
      <div className="absolute inset-0 -z-0 opacity-[0.5]" aria-hidden="true">
        <svg viewBox="0 0 1280 720" className="h-full w-full">
          <rect x="120" y="110" width="150" height="92" rx="14" fill="none" stroke="#285ccc" strokeOpacity="0.12" strokeWidth="1.4" transform="rotate(-7 195 156)" />
          <rect x="990" y="120" width="150" height="92" rx="14" fill="#fff2bd" fillOpacity="0.4" transform="rotate(6 1065 166)" />
          <rect x="1010" y="470" width="150" height="92" rx="14" fill="none" stroke="#285ccc" strokeOpacity="0.12" strokeWidth="1.4" transform="rotate(-5 1085 516)" />
          <rect x="120" y="470" width="150" height="92" rx="14" fill="#fff2bd" fillOpacity="0.35" transform="rotate(8 195 516)" />
        </svg>
      </div>

      <div className="absolute left-1/2 top-1/2 w-[66vw] -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.34em] text-primary">
          La vraie problématique
        </p>
        <h2
          className="fx-zoom mx-auto mt-[3vh] font-display text-[4.2vw] font-bold leading-[1.12] tracking-tight text-primary"
          style={{ animationDelay: "0.12s", textWrap: "balance" }}
        >
          Comment améliorer le pilotage managérial de la performance
          opérationnelle au sein du département{" "}
          <span className="text-primary">OPEX</span> de LEONI Menzel Hayet&nbsp;?
        </h2>
      </div>

      <SlideFooter n={7} />
    </SlideShell>
  );
}
