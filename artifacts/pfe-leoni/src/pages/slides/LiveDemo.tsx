import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const DEMO_URL = "https://opex-dashboard.onrender.com/abnormality";

export default function LiveDemo() {
  return (
    <SlideShell>
      <p className="fx-rise absolute left-1/2 top-[8vh] -translate-x-1/2 text-[1.5vw] font-bold uppercase tracking-[0.34em] text-primary">
        Démonstration live
      </p>

      {/* Déroulé de la démo — 4 étapes */}
      <div className="fx-fade absolute left-1/2 top-[20vh] w-[78vw] -translate-x-1/2" style={{ animationDelay: "0.1s" }}>
        <div className="relative">
          <div className="absolute left-[10%] right-[10%] top-[2.4vh] h-px bg-primary/20" />
          <div className="relative flex items-start justify-between">
            <div className="flex w-[16vw] flex-col items-center text-center">
              <span className="flex h-[5vh] w-[5vh] items-center justify-center rounded-full bg-primary font-display text-[1.6vw] font-bold text-white">1</span>
              <span className="mt-[1.4vh] text-[1.5vw] font-semibold text-primary">War Room</span>
              <span className="mt-[0.4vh] text-[1.1vw] text-muted">Vision globale</span>
            </div>
            <div className="flex w-[16vw] flex-col items-center text-center">
              <span className="flex h-[5vh] w-[5vh] items-center justify-center rounded-full bg-primary font-display text-[1.6vw] font-bold text-white">2</span>
              <span className="mt-[1.4vh] text-[1.5vw] font-semibold text-primary">KPI Studio</span>
              <span className="mt-[0.4vh] text-[1.1vw] text-muted">Analyse d'un indicateur</span>
            </div>
            <div className="flex w-[16vw] flex-col items-center text-center">
              <span className="flex h-[5vh] w-[5vh] items-center justify-center rounded-full bg-primary font-display text-[1.6vw] font-bold text-white">3</span>
              <span className="mt-[1.4vh] text-[1.5vw] font-semibold text-primary">Anomalie</span>
              <span className="mt-[0.4vh] text-[1.1vw] text-muted">Traitement & action</span>
            </div>
            <div className="flex w-[16vw] flex-col items-center text-center">
              <span className="flex h-[5vh] w-[5vh] items-center justify-center rounded-full bg-accent font-display text-[1.6vw] font-bold text-primary ring-2 ring-primary">4</span>
              <span className="mt-[1.4vh] text-[1.5vw] font-semibold text-primary">AI Co-Pilot</span>
              <span className="mt-[0.4vh] text-[1.1vw] text-muted">Insight & décision</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carte plateforme — bouton unique */}
      <div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute left-1/2 top-1/2 h-[52vh] w-[52vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,242,189,0.9), rgba(255,242,189,0) 70%)",
          }}
        />
        <div className="fx-zoom relative w-[46vw] rounded-[1.8vw] bg-white px-[3.4vw] py-[3.4vh] text-center shadow-[0_40px_90px_rgba(40,92,204,0.16)] ring-1 ring-primary/12">
          <div className="mx-auto flex h-[7vh] w-[7vh] items-center justify-center rounded-[1.4vh] bg-primary">
            <svg viewBox="0 0 24 24" className="h-[3.6vh] w-[3.6vh]" aria-hidden="true">
              <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#ffffff" />
              <rect x="13" y="3" width="8" height="5" rx="1.5" fill="#fff2bd" />
              <rect x="13" y="10" width="8" height="11" rx="1.5" fill="#ffffff" fillOpacity="0.9" />
              <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#fff2bd" />
            </svg>
          </div>

          <h2 className="mt-[2vh] font-display text-[3.4vw] font-bold leading-[1] tracking-tight text-primary">
            OPEX Dashboard
          </h2>
          <p className="mt-[1.2vh] text-[1.6vw] text-muted">
            Plateforme de pilotage intelligente
          </p>

          <div className="mt-[3vh] flex justify-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[1vw] rounded-full bg-primary px-[2.8vw] py-[1.8vh] text-[1.8vw] font-semibold text-white shadow-[0_18px_42px_rgba(40,92,204,0.32)] transition hover:opacity-90"
            >
              Open OPEX Dashboard
              <svg width="34" height="22" viewBox="0 0 40 24" aria-hidden="true">
                <path
                  d="M2 12h28M24 5l9 7-9 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <p className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 text-[1.2vw] italic text-muted">
        En cas de problème réseau, retour à la synthèse.
      </p>

      <SlideFooter n={21} />
    </SlideShell>
  );
}
