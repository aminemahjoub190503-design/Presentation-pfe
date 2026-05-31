import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function ValeurAjoutee() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[13vh] w-[60vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.34em] text-primary">
          Valeur ajoutée
        </p>
        <h2
          className="fx-rise mx-auto mt-[2.2vh] font-display text-[4.4vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Du chaos dispersé au système unifié
        </h2>
      </div>

      <div className="absolute left-1/2 top-[58%] flex w-[88vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-[3vw]">
        <div className="fx-rise relative h-[36vh] w-[26vw] rounded-3xl bg-white ring-1 ring-primary/12" style={{ animationDelay: "0.2s" }}>
          <span className="absolute left-[1.6vw] top-[1.6vh] text-[1.5vw] font-bold uppercase tracking-[0.2em] text-muted">Avant</span>
          <svg viewBox="0 0 320 220" className="h-full w-full p-[1.4vw]" aria-hidden="true">
            <rect x="30" y="60" width="70" height="44" rx="8" fill="#fff2bd" transform="rotate(-9 65 82)" />
            <rect x="160" y="40" width="70" height="44" rx="8" fill="none" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" transform="rotate(8 195 62)" />
            <rect x="200" y="130" width="70" height="44" rx="8" fill="#fff2bd" transform="rotate(-6 235 152)" />
            <rect x="60" y="140" width="70" height="44" rx="8" fill="none" stroke="#285ccc" strokeOpacity="0.3" strokeWidth="1.6" transform="rotate(7 95 162)" />
          </svg>
        </div>

        <svg width="70" height="44" viewBox="0 0 70 44" className="text-primary"><path d="M4 22h54M48 10l14 12-14 12" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="fx-draw" style={{ animationDelay: "0.5s" }} /></svg>

        <div className="fx-rise flex h-[36vh] w-[40vw] flex-col justify-center rounded-3xl bg-primary px-[2.4vw] shadow-[0_24px_64px_rgba(40,92,204,0.28)]" style={{ animationDelay: "0.4s" }}>
          <span className="text-[1.5vw] font-bold uppercase tracking-[0.2em] text-white/70">Après · OPEX Dashboard</span>
          <div className="mt-[2vh] grid grid-cols-2 gap-x-[2vw] gap-y-[1.4vh]">
            <span className="text-[2vw] font-semibold text-white">Centralisation</span>
            <span className="text-[2vw] font-semibold text-white">Lisibilité</span>
            <span className="text-[2vw] font-semibold text-white">Réactivité</span>
            <span className="text-[2vw] font-semibold text-white">Traçabilité</span>
            <span className="col-span-2 text-[2vw] font-semibold text-accent">Aide à la décision</span>
          </div>
        </div>
      </div>

      <SlideFooter n={26} />
    </SlideShell>
  );
}
