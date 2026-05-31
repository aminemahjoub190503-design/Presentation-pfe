import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

const stats = [
  { value: "1917", label: "Année de fondation" },
  { value: "25+", label: "Pays de présence" },
  { value: "90 000+", label: "Collaborateurs mondiaux" },
  { value: "EV", label: "Spécialiste électromobilité", accent: true },
];

const sites = [
  { name: "Mateur South", count: "4 831" },
  { name: "Mateur North", count: "3 931" },
  { name: "Sidi Bouali", count: "1 435" },
  { name: "Sousse", count: "6 931" },
  { name: "Menzel Hayet", count: "6 986", star: true },
];

export default function Terrain() {
  return (
    <SlideShell>
      <div className="absolute left-[6vw] right-[6vw] top-[6vh] bottom-[9vh] flex flex-col">
        {/* Header */}
        <div>
          <p className="fx-rise text-[1.35vw] font-bold uppercase tracking-[0.32em] text-primary">
            L'entreprise d'accueil
          </p>
          <h2
            className="fx-rise mt-[1vh] font-display text-[4vw] font-bold leading-[0.98] tracking-tight text-primary"
            style={{ animationDelay: "0.08s" }}
          >
            Le groupe LEONI
          </h2>
          <p
            className="fx-rise mt-[0.8vh] text-[1.55vw] font-medium text-muted"
            style={{ animationDelay: "0.14s" }}
          >
            Un leader mondial des systèmes de câblage et des solutions énergie / données.
          </p>
        </div>

        {/* Key figures */}
        <div className="mt-[3.4vh] grid grid-cols-4 gap-[1.6vw]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`fx-rise flex flex-col items-center justify-center rounded-[1.1vw] px-[1.4vw] py-[2.4vh] text-center ${
                s.accent
                  ? "bg-primary shadow-[0_18px_46px_rgba(40,92,204,0.28)]"
                  : "bg-white shadow-[0_12px_34px_rgba(40,92,204,0.1)] ring-1 ring-primary/12"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <p
                className={`font-display text-[3vw] font-bold leading-none ${
                  s.accent ? "text-accent" : "text-primary"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`mt-[1.2vh] text-[1vw] font-semibold uppercase tracking-[0.12em] ${
                  s.accent ? "text-white/85" : "text-muted"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Activities & Tunisia */}
        <div className="mt-[2.8vh] grid grid-cols-[1.5fr_1fr] gap-[1.6vw]">
          <div
            className="fx-rise rounded-[1.1vw] bg-white px-[2vw] py-[2.2vh] shadow-[0_12px_34px_rgba(40,92,204,0.1)] ring-1 ring-primary/12"
            style={{ animationDelay: "0.46s" }}
          >
            <div className="flex items-center gap-[0.9vw]">
              <span className="h-[2.2vh] w-[0.4vw] rounded-full bg-primary" />
              <p className="text-[1.3vw] font-bold uppercase tracking-[0.18em] text-primary">
                Activités principales
              </p>
            </div>
            <ul className="mt-[1.4vh] space-y-[1vh] text-[1.3vw] font-medium text-text">
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.85vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/45" />Conception &amp; fabrication de systèmes de câblage automobile</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.85vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/45" />Transmission d'énergie et de données dans les véhicules</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.85vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary/45" />Adaptation continue aux exigences de l'électromobilité</li>
            </ul>
          </div>

          <div
            className="fx-rise rounded-[1.1vw] bg-accent/55 px-[2vw] py-[2.2vh] ring-1 ring-accent"
            style={{ animationDelay: "0.54s" }}
          >
            <div className="flex items-center gap-[0.9vw]">
              <span className="h-[2.2vh] w-[0.4vw] rounded-full bg-primary" />
              <p className="text-[1.3vw] font-bold uppercase tracking-[0.18em] text-primary">
                LEONI Tunisia
              </p>
            </div>
            <ul className="mt-[1.4vh] space-y-[1vh] text-[1.3vw] font-medium text-primary">
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.85vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />Présence en Tunisie depuis 1977</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.85vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />5 sites de production</li>
              <li className="flex items-start gap-[0.9vw]"><span className="mt-[0.85vh] h-[0.7vh] w-[0.7vh] shrink-0 rounded-full bg-primary" />~24 000 employés au total</li>
            </ul>
          </div>
        </div>

        {/* Sites */}
        <div className="mt-[2.8vh] grid grid-cols-5 gap-[1.2vw]">
          {sites.map((site, i) => (
            <div
              key={site.name}
              className={`fx-rise overflow-hidden rounded-[1vw] ${
                site.star
                  ? "shadow-[0_18px_44px_rgba(40,92,204,0.3)] ring-2 ring-primary"
                  : "shadow-[0_10px_30px_rgba(40,92,204,0.1)] ring-1 ring-primary/12"
              }`}
              style={{ animationDelay: `${0.62 + i * 0.06}s` }}
            >
              <div
                className={`flex items-center justify-center gap-[0.4vw] px-[0.8vw] py-[1.1vh] text-center ${
                  site.star ? "bg-primary" : "bg-primary/85"
                }`}
              >
                <p className="text-[1.05vw] font-bold leading-tight text-white">{site.name}</p>
                {site.star && <span className="text-[1.05vw] leading-none text-accent">★</span>}
              </div>
              <div
                className={`flex flex-col items-center justify-center py-[2.2vh] ${
                  site.star ? "bg-accent/45" : "bg-white"
                }`}
              >
                <p className="font-display text-[1.7vw] font-bold leading-none text-primary">{site.count}</p>
                <p className="mt-[0.6vh] text-[0.95vw] font-semibold text-muted">employés</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter n={3} />
    </SlideShell>
  );
}
