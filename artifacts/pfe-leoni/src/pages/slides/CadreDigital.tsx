import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

function Arrow() {
  return (
    <svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true" className="shrink-0">
      <path d="M2 10h30M26 4l9 6-9 6" fill="none" stroke="#285ccc" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CadreDigital() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[9vh] w-[80vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.4vw] font-bold uppercase tracking-[0.32em] text-primary">
          Cadre théorique · 4 / 4
        </p>
        <h2
          className="fx-rise mx-auto mt-[1.6vh] font-display text-[3.8vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Digitalisation & intelligence artificielle
        </h2>
      </div>

      <div className="absolute left-1/2 top-[52%] flex w-[88vw] -translate-x-1/2 -translate-y-1/2 items-stretch justify-center gap-[0.8vw]">
        <div className="fx-pop flex w-[24vw] flex-col rounded-2xl bg-white px-[1.6vw] py-[2.4vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.2s" }}>
          <span className="font-display text-[1.5vw] font-bold text-primary/30">01</span>
          <p className="mt-[0.4vh] font-display text-[1.7vw] font-bold text-primary">Système intégré de pilotage</p>
          <p className="mt-[1vh] text-[1.3vw] leading-snug text-muted">Les données ERP & MES centralisées dans un tableau de bord digital unique.</p>
        </div>
        <div className="flex items-center"><Arrow /></div>
        <div className="fx-pop flex w-[24vw] flex-col rounded-2xl bg-accent px-[1.6vw] py-[2.4vh]" style={{ animationDelay: "0.3s" }}>
          <span className="font-display text-[1.5vw] font-bold text-primary/35">02</span>
          <p className="mt-[0.4vh] font-display text-[1.7vw] font-bold text-primary">Automatisation & reporting</p>
          <p className="mt-[1vh] text-[1.3vw] leading-snug text-primary/80">La Business Intelligence (BI) génère analyses et rapports automatiquement.</p>
        </div>
        <div className="flex items-center"><Arrow /></div>
        <div className="fx-pop flex w-[24vw] flex-col rounded-2xl bg-primary px-[1.6vw] py-[2.4vh] shadow-[0_18px_50px_rgba(40,92,204,0.28)]" style={{ animationDelay: "0.4s" }}>
          <span className="font-display text-[1.5vw] font-bold text-white/40">03</span>
          <p className="mt-[0.4vh] font-display text-[1.7vw] font-bold text-white">IA dans le pilotage</p>
          <p className="mt-[1vh] text-[1.3vw] leading-snug text-white/85">L'AI Co-Pilot transforme les données en aide à la décision.</p>
        </div>
      </div>

      <p
        className="fx-fade absolute left-1/2 top-[74%] w-[82vw] -translate-x-1/2 text-center text-[1.1vw] text-muted"
        style={{ animationDelay: "0.5s" }}
      >
        ERP : Enterprise Resource Planning · MES : Manufacturing Execution System · BI : Business Intelligence · IA : Intelligence Artificielle
      </p>

      <div className="fx-rise absolute bottom-[6vh] left-1/2 flex -translate-x-1/2 items-center gap-[1vw] rounded-2xl bg-primary px-[2vw] py-[1.5vh] shadow-[0_14px_40px_rgba(40,92,204,0.26)]" style={{ animationDelay: "0.56s" }}>
        <span className="rounded-full bg-white px-[1vw] py-[0.5vh] text-[1.1vw] font-bold uppercase tracking-[0.16em] text-primary">À retenir</span>
        <p className="text-[1.5vw] font-medium text-white">L'OPEX Dashboard réunit ces briques en un seul outil de pilotage intelligent.</p>
      </div>

      <SlideFooter n={13} />
    </SlideShell>
  );
}
