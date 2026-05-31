import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Swot() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[5.5vh] w-[80vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.35vw] font-bold uppercase tracking-[0.34em] text-primary">
          Analyse stratégique
        </p>
        <h2
          className="fx-rise mx-auto mt-[1vh] font-display text-[3.7vw] font-bold leading-[1.02] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Matrice SWOT du site
        </h2>
      </div>

      <div className="absolute left-1/2 top-[57%] w-[74vw] -translate-x-1/2 -translate-y-1/2">
        {/* Column axis labels */}
        <div className="mb-[1vh] grid grid-cols-2 gap-x-[6vw] pl-[3.4vw]">
          <div className="fx-fade flex items-center justify-center gap-[0.8vw]" style={{ animationDelay: "0.15s" }}>
            <span className="h-[0.9vh] w-[0.9vh] rounded-full bg-primary" />
            <span className="text-[1.1vw] font-bold uppercase tracking-[0.26em] text-primary">Positif · Atouts</span>
          </div>
          <div className="fx-fade flex items-center justify-center gap-[0.8vw]" style={{ animationDelay: "0.2s" }}>
            <span className="h-[0.9vh] w-[0.9vh] rounded-full bg-muted" />
            <span className="text-[1.1vw] font-bold uppercase tracking-[0.26em] text-muted">Négatif · À surveiller</span>
          </div>
        </div>

        <div className="relative flex items-stretch gap-[1.4vw]">
          {/* Row axis labels */}
          <div className="flex w-[2vw] flex-col">
            <div className="fx-fade flex flex-1 items-center justify-center" style={{ animationDelay: "0.25s" }}>
              <span className="text-[1.1vw] font-bold uppercase tracking-[0.3em] text-primary [writing-mode:vertical-rl] rotate-180">
                Interne
              </span>
            </div>
            <div className="fx-fade flex flex-1 items-center justify-center" style={{ animationDelay: "0.3s" }}>
              <span className="text-[1.1vw] font-bold uppercase tracking-[0.3em] text-muted [writing-mode:vertical-rl] rotate-180">
                Externe
              </span>
            </div>
          </div>

          {/* Quadrant grid */}
          <div className="relative grid flex-1 grid-cols-2 gap-x-[6vw] gap-y-[2.2vh]">
            {/* Forces */}
            <div className="fx-rise relative overflow-hidden rounded-[1.4vw] bg-primary px-[1.9vw] py-[1.9vh] shadow-[0_20px_50px_rgba(40,92,204,0.3)]" style={{ animationDelay: "0.24s" }}>
              <div className="flex items-center gap-[1vw]">
                <span className="flex h-[3vw] w-[3vw] items-center justify-center rounded-[0.8vw] bg-accent font-display text-[1.8vw] font-bold text-primary">S</span>
                <p className="text-[1.6vw] font-bold uppercase tracking-[0.14em] text-white">Forces</p>
              </div>
              <ul className="mt-[1.2vh] space-y-[0.7vh] text-[1.3vw] font-medium leading-snug text-white">
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-accent" />Base industrielle structurée, forte capacité de production</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-accent" />Appartenance à un groupe international reconnu</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-accent" />Positionnement sur l'électromobilité (projet MEB)
</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-accent" />Logique de suivi de la performance et d'amélioration continue
</li>
              </ul>
            </div>

            {/* Faiblesses */}
            <div className="fx-rise relative overflow-hidden rounded-[1.4vw] bg-white px-[1.9vw] py-[1.9vh] shadow-[0_14px_40px_rgba(40,92,204,0.1)] ring-1 ring-primary/15" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-[1vw]">
                <span className="flex h-[3vw] w-[3vw] items-center justify-center rounded-[0.8vw] bg-primary/10 font-display text-[1.8vw] font-bold text-primary">W</span>
                <p className="text-[1.6vw] font-bold uppercase tracking-[0.14em] text-muted">Faiblesses</p>
              </div>
              <ul className="mt-[1.2vh] space-y-[0.7vh] text-[1.3vw] font-medium leading-snug text-primary">
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/40" />Dispersion des informations sur plusieurs supports</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/40" />Faible centralisation des données de performance</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/40" />Consolidation encore partiellement manuelle</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/40" />Visibilité limitée en temps réel sur la performance globale</li>
              </ul>
            </div>

            {/* Opportunités */}
            <div className="fx-rise relative overflow-hidden rounded-[1.4vw] bg-accent px-[1.9vw] py-[1.9vh] shadow-[0_16px_44px_rgba(255,200,40,0.28)]" style={{ animationDelay: "0.34s" }}>
              <div className="flex items-center gap-[1vw]">
                <span className="flex h-[3vw] w-[3vw] items-center justify-center rounded-[0.8vw] bg-primary font-display text-[1.8vw] font-bold text-white">O</span>
                <p className="text-[1.6vw] font-bold uppercase tracking-[0.14em] text-primary">Opportunités</p>
              </div>
              <ul className="mt-[1.2vh] space-y-[0.7vh] text-[1.3vw] font-medium leading-snug text-primary">
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Digitalisation du pilotage & système intégré</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Automatisation du reporting, réduction des erreurs</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Croissance de l'électromobilité (demande soutenue)</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Outils d'aide à la décision & analyse des données</li>
              </ul>
            </div>

            {/* Menaces */}
            <div className="fx-rise relative overflow-hidden rounded-[1.4vw] bg-white px-[1.9vw] py-[1.9vh] shadow-[0_14px_40px_rgba(40,92,204,0.1)] ring-1 ring-primary/15" style={{ animationDelay: "0.38s" }}>
              <div className="flex items-center gap-[1vw]">
                <span className="flex h-[3vw] w-[3vw] items-center justify-center rounded-[0.8vw] bg-primary/10 font-display text-[1.8vw] font-bold text-primary">T</span>
                <p className="text-[1.6vw] font-bold uppercase tracking-[0.14em] text-muted">Menaces</p>
              </div>
              <ul className="mt-[1.2vh] space-y-[0.7vh] text-[1.3vw] font-medium leading-snug text-primary">
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/40" />Pression concurrentielle forte sur Q/C/D</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/40" />Exigences élevées des constructeurs automobiles</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/40" />Dépendance aux donneurs d'ordres</li>
                <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.7vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/40" />Risque de décalage si transformation incomplète</li>
              </ul>
            </div>

            {/* Center medallion */}
            <div className="fx-pop pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-[6vw] w-[6vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white shadow-[0_18px_50px_rgba(40,92,204,0.3)] ring-[0.45vh] ring-accent" style={{ animationDelay: "0.44s" }}>
              <span className="font-display text-[1.7vw] font-bold leading-none text-primary">SWOT</span>
              <span className="mt-[0.4vh] text-[0.7vw] font-bold uppercase tracking-[0.16em] text-muted">Menzel Hayet</span>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter n={7} />
    </SlideShell>
  );
}
