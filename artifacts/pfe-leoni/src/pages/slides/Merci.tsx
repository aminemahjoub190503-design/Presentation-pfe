import CoreGraphic from "@/components/CoreGraphic";
import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function Merci() {
  return (
    <SlideShell>
      <div className="absolute right-[5vw] top-1/2 h-[64vh] w-[36vw] -translate-y-1/2 opacity-90">
        <CoreGraphic className="floaty h-full w-full fx-zoom" />
      </div>

      <div className="absolute left-[8vw] top-1/2 w-[52vw] -translate-y-1/2">
        <p className="fx-rise text-[1.5vw] font-bold uppercase tracking-[0.34em] text-primary">
          ISG Sousse · 2025–2026
        </p>
        <h2
          className="fx-zoom mt-[2.4vh] font-display text-[6.4vw] font-bold leading-[0.96] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Merci de votre attention
        </h2>
        <p
          className="fx-rise mt-[3vh] text-[2vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.24s" }}
        >
          Je suis à votre disposition pour vos questions.
        </p>

        <div className="fx-rise mt-[5vh] space-y-[0.8vh]" style={{ animationDelay: "0.34s" }}>
          <p className="text-[1.8vw] font-semibold text-primary">Mohamed Amine Mahjoub</p>
          <p className="text-[1.5vw] text-muted">
            Encadrantes : Mme Nihel Jouirou · Mme Mouna Shelly
          </p>
        </div>
      </div>

      <SlideFooter n={28} />
    </SlideShell>
  );
}
