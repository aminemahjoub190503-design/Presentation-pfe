import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const CHAT_POINTS = [
  "Accessible sur TOUTES les pages de la plateforme",
  "Réponses contextualisées selon le module consulté",
  "Génère : résumés · constats clés · causes possibles · recommandations",
  "Dialogue direct avec l'utilisateur pour explications et appui",
];

const COPILOT_POINTS = [
  "Analyse KPI, anomalies, retards d'actions, gaspillages VSM, risques projet",
  "Produit : alertes · recommandations · synthèses quotidiennes · brouillons",
  "Oriente l'attention vers les priorités critiques du moment",
];

const VIGILANCE_POINTS = [
  "Repose sur une logique déterministe + données plateforme — pas une IA générale autonome",
  "Efficacité conditionnée à la qualité des données disponibles",
  "Ne remplace pas le jugement managérial — outil d'assistance",
  "Risque de sur-confiance ou rejet si non compris",
];

function Bullets({ points, dotColor }: { points: string[]; dotColor: string }) {
  return (
    <ul className="space-y-[0.75vh] text-[1.05vw] font-medium leading-snug text-ink">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-[0.6vw]">
          <span className="mt-[0.7vh] h-[0.55vh] w-[0.55vh] shrink-0 rounded-full" style={{ background: dotColor }} />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AiCoPilot() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[3.4vh] w-[90vw] -translate-x-1/2">
        <p className="fx-rise font-display text-[1.25vw] font-bold uppercase tracking-[0.3em] text-primary">
          Module 07
        </p>
        <h2
          className="fx-rise mt-[0.5vh] font-display text-[2.95vw] font-bold leading-[1.02] tracking-tight text-ink"
          style={{ animationDelay: "0.08s", textWrap: "balance" }}
        >
          Assistant Intelligent &amp; AI Co-Pilot
        </h2>
        <p
          className="fx-rise mt-[0.6vh] text-[1.3vw] font-medium italic text-muted"
          style={{ animationDelay: "0.16s" }}
        >
          Aide à la décision contextuelle — présent sur toutes les pages
        </p>
      </div>

      <div className="absolute left-1/2 top-[20vh] grid w-[90vw] -translate-x-1/2 grid-cols-[1.08fr_1fr] gap-[1.8vw]">
        {/* ----- Left : Smart Copilot Chat + AI Co-Pilot ----- */}
        <div
          className="fx-rise flex flex-col gap-[2.4vh] overflow-hidden rounded-[1.1vw] border-l-[0.5vw] border-primary bg-white p-[1.7vw] shadow-[0_16px_44px_rgba(11,33,80,0.12)] ring-1 ring-primary/10"
          style={{ animationDelay: "0.2s" }}
        >
          <div>
            <h3 className="mb-[1.2vh] font-display text-[1.55vw] font-bold text-primary">Smart Copilot Chat</h3>
            <Bullets points={CHAT_POINTS} dotColor="#285ccc" />
          </div>
          <div>
            <h3 className="mb-[1.2vh] font-display text-[1.55vw] font-bold text-primary">AI Co-Pilot</h3>
            <Bullets points={COPILOT_POINTS} dotColor="#285ccc" />
          </div>
        </div>

        {/* ----- Right : vigilance + valeur ajoutée ----- */}
        <div className="flex flex-col gap-[2vh]">
          <div
            className="fx-rise overflow-hidden rounded-[1.1vw] border-l-[0.5vw] border-[#e0930f] bg-accent/60 p-[1.6vw] shadow-[0_12px_34px_rgba(224,147,15,0.16)] ring-1 ring-[#e0930f]/30"
            style={{ animationDelay: "0.28s" }}
          >
            <h3 className="mb-[1.1vh] flex items-center gap-[0.55vw] font-display text-[1.5vw] font-bold text-ink">
              <span aria-hidden="true">⚠</span> Points de vigilance
            </h3>
            <Bullets points={VIGILANCE_POINTS} dotColor="#e0930f" />
          </div>

          <div
            className="fx-rise overflow-hidden rounded-[1.1vw] border-l-[0.5vw] border-primary bg-primary/[0.07] p-[1.6vw] shadow-[0_12px_34px_rgba(40,92,204,0.14)] ring-1 ring-primary/25"
            style={{ animationDelay: "0.36s" }}
          >
            <h3 className="mb-[1.1vh] font-display text-[1.5vw] font-bold text-primary">Valeur ajoutée</h3>
            <p className="text-[1.05vw] font-medium leading-snug text-ink">
              Réduit la charge cognitive — rend l'information plus immédiatement exploitable —
              améliore la fluidité d'utilisation et la réactivité managériale
            </p>
          </div>
        </div>
      </div>

      <SlideFooter n={21} />
    </SlideShell>
  );
}
