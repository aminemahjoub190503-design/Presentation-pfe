import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Conclusion() {
  return (
    <SlideShell>
      <div className="absolute left-1/2 top-[13vh] w-[70vw] -translate-x-1/2 text-center">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.32em] text-primary">
          Conclusion
        </p>
        <h2
          className="fx-zoom mx-auto mt-[2.2vh] font-display text-[4.6vw] font-bold leading-[1.04] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Du pilotage dispersé au pilotage intelligent
        </h2>
      </div>

      <div className="absolute left-1/2 top-[56%] flex w-[84vw] -translate-x-1/2 -translate-y-1/2 items-stretch justify-between gap-[2vw]">
        <div className="fx-pop flex-1 rounded-3xl bg-white px-[2vw] py-[3.4vh] text-center shadow-[0_16px_50px_rgba(40,92,204,0.12)] ring-1 ring-primary/12" style={{ animationDelay: "0.24s" }}>
          <p className="font-display text-[2.6vw] font-bold text-primary">Voir vite</p>
          <p className="mt-[1.2vh] text-[1.6vw] leading-relaxed text-muted">Une vision unifiée de la performance</p>
        </div>
        <div className="fx-pop flex-1 rounded-3xl bg-accent px-[2vw] py-[3.4vh] text-center shadow-[0_16px_50px_rgba(40,92,204,0.12)]" style={{ animationDelay: "0.32s" }}>
          <p className="font-display text-[2.6vw] font-bold text-primary">Décider juste</p>
          <p className="mt-[1.2vh] text-[1.6vw] leading-relaxed text-primary/80">Des données reliées aux actions</p>
        </div>
        <div className="fx-pop flex-1 rounded-3xl bg-primary px-[2vw] py-[3.4vh] text-center shadow-[0_16px_50px_rgba(40,92,204,0.28)]" style={{ animationDelay: "0.4s" }}>
          <p className="font-display text-[2.6vw] font-bold text-white">Agir mieux</p>
          <p className="mt-[1.2vh] text-[1.6vw] leading-relaxed text-white/80">L'amélioration continue au quotidien</p>
        </div>
      </div>

      <p
        className="fx-rise absolute bottom-[12vh] left-1/2 w-[64vw] -translate-x-1/2 text-center text-[1.9vw] font-medium leading-relaxed text-primary"
        style={{ animationDelay: "0.5s", textWrap: "balance" }}
      >
        L'OPEX Dashboard transforme des données dispersées en décisions concrètes.
      </p>

      <SlideFooter n={29} />
    </SlideShell>
  );
}
