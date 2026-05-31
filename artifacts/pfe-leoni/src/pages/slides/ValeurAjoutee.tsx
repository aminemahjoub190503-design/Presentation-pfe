import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const ROWS = [
  {
    dimension: "Organisation des données",
    traditional: "Fichiers séparés, supports manuels",
    opex: "Environnement unique et centralisé",
  },
  {
    dimension: "Lisibilité de la performance",
    traditional: "Difficile — consolidation lente",
    opex: "Vues synthétiques + analyses détaillées",
  },
  {
    dimension: "Lien écart → action",
    traditional: "Rupture fréquente entre étapes",
    opex: "Continuité mesure → analyse → action",
  },
  {
    dimension: "Reporting",
    traditional: "Temps consacré à la mise en forme",
    opex: "Export PDF / PNG / SVG en un clic",
  },
];

export default function ValeurAjoutee() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[3.6vh] w-[90vw] -translate-x-1/2">
        <p className="fx-rise font-display text-[1.4vw] font-bold uppercase tracking-[0.3em] text-primary">
          Résultats &amp; valeur ajoutée
        </p>
        <h2
          className="fx-rise mt-[0.5vh] font-display text-[3vw] font-bold leading-[1.04] tracking-tight text-ink"
          style={{ animationDelay: "0.08s", textWrap: "balance" }}
        >
          Résultats &amp; Valeur Ajoutée par Rapport au Pilotage Traditionnel
        </h2>
      </div>

      <div className="absolute left-1/2 top-[19vh] w-[92vw] -translate-x-1/2">
        <p
          className="fx-rise mb-[1.8vh] font-display text-[1.85vw] font-bold text-primary"
          style={{ animationDelay: "0.14s" }}
        >
          Comparaison Pilotage Traditionnel vs. OPEX Dashboard
        </p>

        {/* ----- Comparison table ----- */}
        <div
          className="fx-rise overflow-hidden rounded-[1.1vw] shadow-[0_18px_50px_rgba(11,33,80,0.14)] ring-1 ring-primary/12"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Header */}
          <div className="grid grid-cols-[1.1fr_1.2fr_1.2fr] bg-ink text-white">
            <div className="px-[1.9vw] py-[2.6vh] font-display text-[1.55vw] font-bold">Dimension</div>
            <div className="px-[1.9vw] py-[2.6vh] text-center font-display text-[1.55vw] font-bold">Pilotage Traditionnel</div>
            <div className="px-[1.9vw] py-[2.6vh] text-center font-display text-[1.55vw] font-bold">OPEX Dashboard</div>
          </div>
          {/* Rows */}
          {ROWS.map((r, i) => (
            <div
              key={r.dimension}
              className="grid grid-cols-[1.1fr_1.2fr_1.2fr] items-center border-t border-primary/10"
              style={{ background: i % 2 === 1 ? "#f6f8fc" : "#ffffff" }}
            >
              <div className="px-[1.9vw] py-[2.9vh] text-[1.42vw] font-bold text-ink">{r.dimension}</div>
              <div className="px-[1.9vw] py-[2.9vh] text-center text-[1.38vw] font-semibold text-[#e2574c]">{r.traditional}</div>
              <div className="px-[1.9vw] py-[2.9vh] text-center text-[1.38vw] font-semibold text-[#2fa86b]">{r.opex}</div>
            </div>
          ))}
        </div>

        {/* ----- Real case study box ----- */}
        <div
          className="fx-rise mt-[3vh] overflow-hidden rounded-[1.1vw] border-l-[0.6vw] border-primary bg-primary/[0.06] px-[2.4vw] py-[2.8vh] ring-1 ring-primary/25"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="font-display text-[1.75vw] font-bold text-ink">
            Cas réel — Siemens Guadalajara (Mexique) : résultats après déploiement d'une plateforme similaire
          </p>
          <p className="mt-[1.5vh] text-[1.4vw] font-medium leading-relaxed text-primary">
            +8% temps d'usinage (6 premiers mois) · Réduction temps changement de série · Baisse arrêts non
            planifiés · 160 000 $ économies attendues / 2 ans → Confirmation empirique de l'impact d'un pilotage
            digital intégré
          </p>
        </div>
      </div>

      <SlideFooter n={22} />
    </SlideShell>
  );
}
