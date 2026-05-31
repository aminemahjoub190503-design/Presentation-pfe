import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const stats = [
  { value: "102 000 m²", label: "Superficie totale" },
  { value: "6 986", label: "Collaborateurs" },
  { value: "2 unités", label: "MH1 & MH2" },
  { value: "2,4 M", label: "Véhicules / an", accent: true },
];

const sqdcm = [
  { l: "S", label: "Sécurité", bar: "bg-[#e23b3b]", text: "text-[#e23b3b]" },
  { l: "Q", label: "Qualité", bar: "bg-primary", text: "text-primary" },
  { l: "D", label: "Délai", bar: "bg-[#2f9e5a]", text: "text-[#2f9e5a]" },
  { l: "C", label: "Coût", bar: "bg-[#e8821e]", text: "text-[#e8821e]" },
  { l: "M", label: "Moral", bar: "bg-[#7e3fa3]", text: "text-[#7e3fa3]" },
];

export default function GroupeLeoni() {
  return (
    <SlideShell>
      <div className="absolute left-[6vw] right-[6vw] top-[5.5vh] bottom-[8vh] flex flex-col">
        {/* Header */}
        <div>
          <p className="fx-rise text-[1.35vw] font-bold uppercase tracking-[0.32em] text-primary">
            Le site d'accueil
          </p>
          <h2
            className="fx-rise mt-[1vh] font-display text-[4vw] font-bold leading-[0.98] tracking-tight text-primary"
            style={{ animationDelay: "0.08s" }}
          >
            LEONI Menzel Hayet
          </h2>
          <p
            className="fx-rise mt-[0.8vh] text-[1.55vw] font-medium text-muted"
            style={{ animationDelay: "0.14s" }}
          >
            Site spécialisé dans l'électromobilité — Projet MEB.
          </p>
        </div>

        {/* Key figures */}
        <div className="mt-[3vh] grid grid-cols-4 gap-[1.6vw]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`fx-rise flex flex-col items-center justify-center rounded-[1.1vw] px-[1.4vw] py-[2.2vh] text-center ${
                s.accent
                  ? "bg-primary shadow-[0_18px_46px_rgba(40,92,204,0.28)]"
                  : "bg-white shadow-[0_12px_34px_rgba(40,92,204,0.1)] ring-1 ring-primary/12"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.05}s` }}
            >
              <p
                className={`font-display text-[2.7vw] font-bold leading-none ${
                  s.accent ? "text-accent" : "text-primary"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`mt-[1vh] text-[1vw] font-semibold uppercase tracking-[0.12em] ${
                  s.accent ? "text-white/85" : "text-muted"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Spécialisation & OPEX */}
        <div className="mt-[2.6vh] grid grid-cols-2 gap-[1.6vw]">
          <div
            className="fx-rise rounded-[1.1vw] bg-white px-[1.9vw] py-[2vh] shadow-[0_12px_34px_rgba(40,92,204,0.1)] ring-1 ring-primary/12"
            style={{ animationDelay: "0.36s" }}
          >
            <div className="flex items-center gap-[0.9vw]">
              <span className="h-[2.2vh] w-[0.4vw] rounded-full bg-primary" />
              <p className="text-[1.25vw] font-bold uppercase tracking-[0.16em] text-primary">
                Spécialisation — Projet MEB
              </p>
            </div>
            <ul className="mt-[1.3vh] space-y-[0.9vh] text-[1.25vw] font-medium leading-snug text-text">
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/45" />Modular Elektrobaukasten — plateforme VW pour véhicules 100 % électriques</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/45" />Faisceaux de câblage pour Volkswagen, Seat, Audi, Ford</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/45" />Modèles NEO &amp; ASUVE — fleuron de l'électromobilité en Tunisie</li>
            </ul>
          </div>

          <div
            className="fx-rise rounded-[1.1vw] bg-accent/55 px-[1.9vw] py-[2vh] ring-1 ring-accent"
            style={{ animationDelay: "0.42s" }}
          >
            <div className="flex items-center gap-[0.9vw]">
              <span className="h-[2.2vh] w-[0.4vw] rounded-full bg-primary" />
              <p className="text-[1.25vw] font-bold uppercase tracking-[0.16em] text-primary">
                Département OPEX — rôle central
              </p>
            </div>
            <ul className="mt-[1.3vh] space-y-[0.9vh] text-[1.25vw] font-medium leading-snug text-primary">
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Amélioration continue &amp; suivi des KPI</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Analyse des écarts &amp; actions correctives</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Lean Management &amp; démarches Kaizen</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.8vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Interaction transversale avec tous les départements</li>
            </ul>
          </div>
        </div>

        {/* SQDCM axes */}
        <div className="mt-[2.6vh]">
          <p className="fx-fade text-[1.1vw] font-bold uppercase tracking-[0.2em] text-primary" style={{ animationDelay: "0.46s" }}>
            Axes de performance SQDCM pilotés par l'OPEX
          </p>
          <div className="mt-[1.2vh] grid grid-cols-5 gap-[1.2vw]">
            {sqdcm.map((a, i) => (
              <div
                key={a.l}
                className="fx-rise overflow-hidden rounded-[1vw] shadow-[0_10px_30px_rgba(40,92,204,0.1)] ring-1 ring-primary/10"
                style={{ animationDelay: `${0.5 + i * 0.05}s` }}
              >
                <div className={`flex items-center justify-center py-[1vh] ${a.bar}`}>
                  <span className="font-display text-[1.5vw] font-bold text-white">{a.l}</span>
                </div>
                <div className="flex items-center justify-center bg-white py-[1.6vh]">
                  <p className={`text-[1.25vw] font-bold ${a.text}`}>{a.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter n={3} />
    </SlideShell>
  );
}
