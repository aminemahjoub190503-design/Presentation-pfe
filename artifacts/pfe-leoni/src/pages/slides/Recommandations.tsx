import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const CARDS = [
  {
    num: "01",
    title: "Phase Pilote",
    text: "Déployer sur un périmètre défini (atelier, ligne) — observer la plateforme en conditions réelles et ajuster",
  },
  {
    num: "02",
    title: "Enrichissement Progressif",
    text: "Approfondir les modules existants — personnalisation des vues, fluidité d'utilisation, profils management",
  },
  {
    num: "03",
    title: "Évaluation Formelle",
    text: "Définir critères mesurables : rapidité de traitement des écarts, qualité suivi actions, visibilité priorités",
  },
  {
    num: "04",
    title: "Accompagnement Humain",
    text: "Cadre d'usage clair, définition des rôles, sensibilisation et formation des utilisateurs finaux",
  },
  {
    num: "05",
    title: "Intégration Systèmes",
    text: "Connexion progressive avec ERP/MES pour automatiser l'alimentation des données en temps réel",
  },
  {
    num: "06",
    title: "IA Avancée",
    text: "Renforcer les mécanismes d'alerte prédictive, d'analyse des tendances et d'aide à la décision proactive",
  },
];

export default function Recommandations() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[3.6vh] w-[90vw] -translate-x-1/2">
        <p className="fx-rise font-display text-[1.4vw] font-bold uppercase tracking-[0.3em] text-primary">
          Perspectives
        </p>
        <h2
          className="fx-rise mt-[0.5vh] font-display text-[3vw] font-bold leading-[1.04] tracking-tight text-ink"
          style={{ animationDelay: "0.08s", textWrap: "balance" }}
        >
          Recommandations &amp; Perspectives d'Amélioration
        </h2>
      </div>

      <div className="absolute left-1/2 top-[19vh] grid h-[73vh] w-[90vw] -translate-x-1/2 grid-cols-3 grid-rows-2 items-stretch gap-[2vw]">
        {CARDS.map((c, i) => (
          <div
            key={c.num}
            className="fx-rise flex flex-col overflow-hidden rounded-[0.9vw] bg-white shadow-[0_14px_38px_rgba(11,33,80,0.1)] ring-1 ring-primary/10"
            style={{ animationDelay: `${0.16 + i * 0.07}s` }}
          >
            <div
              className="flex items-center gap-[0.9vw] px-[1.6vw] py-[1.9vh]"
              style={{ background: i % 2 === 0 ? "#285ccc" : "#0b2150" }}
            >
              <span className="font-display text-[1.7vw] font-bold text-accent">{c.num}</span>
              <span className="font-display text-[1.45vw] font-bold leading-tight text-white">{c.title}</span>
            </div>
            <div className="flex flex-1 items-start border-l-[0.4vw] border-primary px-[1.6vw] py-[2.2vh]">
              <p className="text-[1.5vw] font-medium leading-snug text-muted">{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      <SlideFooter n={24} />
    </SlideShell>
  );
}
