import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Limites() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[14vh] w-[38vw]">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.32em] text-primary">
          En toute honnêteté
        </p>
        <h2
          className="fx-rise mt-[2.2vh] font-display text-[4.2vw] font-bold leading-[1.04] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Limites & conditions de réussite
        </h2>
        <p
          className="fx-rise mt-[3vh] max-w-[32vw] text-[1.9vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          Une réalisation fonctionnelle qui démontre la faisabilité — son impact
          dépend de quelques conditions clés.
        </p>
      </div>

      <div className="absolute right-[5vw] top-1/2 w-[44vw] -translate-y-1/2 space-y-[1.6vh]">
        <div className="fx-rise flex items-center gap-[1.2vw] rounded-2xl bg-white px-[1.7vw] py-[1.7vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.22s" }}>
          <span className="h-[1.3vh] w-[1.3vh] rounded-full bg-primary" />
          <p className="text-[1.8vw] font-semibold text-primary">Validation en environnement réel, sur la durée</p>
        </div>
        <div className="fx-rise flex items-center gap-[1.2vw] rounded-2xl bg-white px-[1.7vw] py-[1.7vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.3s" }}>
          <span className="h-[1.3vh] w-[1.3vh] rounded-full bg-primary" />
          <p className="text-[1.8vw] font-semibold text-primary">Qualité et fiabilité des données</p>
        </div>
        <div className="fx-rise flex items-center gap-[1.2vw] rounded-2xl bg-white px-[1.7vw] py-[1.7vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.36s" }}>
          <span className="h-[1.3vh] w-[1.3vh] rounded-full bg-primary" />
          <p className="text-[1.8vw] font-semibold text-primary">Intégration aux systèmes ERP et MES</p>
        </div>
        <div className="fx-rise flex items-center gap-[1.2vw] rounded-2xl bg-white px-[1.7vw] py-[1.7vh] shadow-[0_12px_36px_rgba(40,92,204,0.1)] ring-1 ring-primary/12" style={{ animationDelay: "0.42s" }}>
          <span className="h-[1.3vh] w-[1.3vh] rounded-full bg-primary" />
          <p className="text-[1.8vw] font-semibold text-primary">Adoption par les utilisateurs</p>
        </div>
        <div className="fx-rise flex items-center gap-[1.2vw] rounded-2xl bg-accent px-[1.7vw] py-[1.7vh]" style={{ animationDelay: "0.46s" }}>
          <span className="h-[1.3vh] w-[1.3vh] rounded-full bg-primary" />
          <p className="text-[1.8vw] font-semibold text-primary">Mesure de l'impact à long terme</p>
        </div>
      </div>

      <SlideFooter n={28} />
    </SlideShell>
  );
}
