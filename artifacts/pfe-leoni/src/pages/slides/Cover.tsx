import isgLogo from "@assets/isg_sousse_nobg.png";
import leoniLogo from "@assets/Logo_Leoni_1780209942068.png";

import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Cover() {
  return (
    <SlideShell>
      {/* Modern blue cover design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft blue glow */}
        <div
          className="absolute -bottom-[20vh] -right-[6vw] h-[46vw] w-[46vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(40,92,204,0.12), rgba(40,92,204,0) 66%)",
          }}
        />
        <div
          className="absolute -top-[26vh] -left-[14vw] h-[40vw] w-[40vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(40,92,204,0.07), rgba(40,92,204,0) 68%)",
          }}
        />

        {/* Concentric radar arcs — bottom-right */}
        <svg
          className="fx-fade absolute bottom-0 right-0 h-[46vw] w-[46vw]"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMaxYMax meet"
        >
          <defs>
            <linearGradient id="coverArc" x1="0" y1="100" x2="100" y2="0">
              <stop offset="0" stopColor="#285ccc" stopOpacity="0.55" />
              <stop offset="1" stopColor="#7aa6ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M16 100 A84 84 0 0 1 100 16" stroke="url(#coverArc)" strokeWidth="0.4" />
          <path d="M28 100 A72 72 0 0 1 100 28" stroke="url(#coverArc)" strokeWidth="0.45" />
          <path d="M40 100 A60 60 0 0 1 100 40" stroke="url(#coverArc)" strokeWidth="0.5" />
          <path d="M52 100 A48 48 0 0 1 100 52" stroke="url(#coverArc)" strokeWidth="0.55" />
          <path d="M64 100 A36 36 0 0 1 100 64" stroke="url(#coverArc)" strokeWidth="0.6" />
          <circle cx="100" cy="40" r="1.1" fill="#285ccc" />
          <circle cx="64" cy="64" r="1" fill="#285ccc" opacity="0.7" />
          <circle cx="40" cy="100" r="1.1" fill="#285ccc" />
        </svg>

        {/* Modern accent line — top-right */}
        <div className="absolute right-[6vw] top-[26vh] h-px w-[16vw] bg-gradient-to-l from-primary/40 to-transparent" />
      </div>

      {/* Logos — ISG on the left, LEONI on the right */}
      <img
        src={isgLogo}
        alt="ISG Sousse"
        className="fx-rise absolute left-[6vw] top-[7vh] h-[20vh] w-auto object-contain"
      />
      <img
        src={leoniLogo}
        alt="LEONI"
        className="fx-rise absolute right-[6vw] top-[9vh] h-[16vh] w-auto object-contain"
        style={{ animationDelay: "0.08s" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8vw] text-center">
        {/* Delicate flourish */}
        <div
          className="fx-fade flex items-center gap-[1.1vw]"
          style={{ animationDelay: "0.12s" }}
        >
          <span className="h-px w-[4vw] bg-primary/25" />
          <span className="h-[1vh] w-[1vh] rotate-45 rounded-[2px] bg-accent ring-1 ring-primary/25" />
          <span className="h-px w-[4vw] bg-primary/25" />
        </div>

        {/* Year pill */}
        <p
          className="fx-rise mt-[2.6vh] inline-flex rounded-full bg-primary/[0.06] px-[1.8vw] py-[0.9vh] text-[1.25vw] font-bold uppercase tracking-[0.32em] text-primary"
          style={{ animationDelay: "0.2s" }}
        >
          Projet de Fin d'Études · 2025–2026
        </p>

        <h1
          className="fx-rise mt-[2.6vh] max-w-[72vw] font-display text-[4.7vw] font-bold leading-[1.0] tracking-tight text-primary"
          style={{ animationDelay: "0.28s", textWrap: "balance" }}
        >
          Piloter l'industrie autrement
        </h1>

        {/* Accent underline */}
        <div
          className="fx-zoom mt-[1.8vh] h-[0.5vh] w-[6vw] rounded-full bg-accent"
          style={{ animationDelay: "0.36s" }}
        />

        <p
          className="fx-rise mt-[2.6vh] max-w-[58vw] text-[1.7vw] leading-snug text-muted"
          style={{ animationDelay: "0.44s", textWrap: "pretty" }}
        >
          Conception d'un système intelligent de pilotage de la performance
          industrielle — application au cas LEONI Menzel Hayet.
        </p>

        <div
          className="fx-rise mt-[4.8vh] flex items-start justify-center gap-[3vw]"
          style={{ animationDelay: "0.52s" }}
        >
          <div>
            <p className="text-[1.2vw] font-bold uppercase tracking-[0.22em] text-muted">
              Étudiant
            </p>
            <p className="mt-[0.8vh] text-[1.7vw] font-semibold text-primary">
              Mohamed Amine Mahjoub
            </p>
          </div>
          <div className="h-[7vh] w-px bg-primary/20" />
          <div>
            <p className="text-[1.2vw] font-bold uppercase tracking-[0.22em] text-muted">
              Encadrantes
            </p>
            <p className="mt-[0.8vh] max-w-[26vw] text-[1.7vw] font-semibold leading-snug text-primary">
              Mme Nihel Jouirou · Mme Mouna Shelly
            </p>
          </div>
        </div>
      </div>

      <SlideFooter n={1} />
    </SlideShell>
  );
}
