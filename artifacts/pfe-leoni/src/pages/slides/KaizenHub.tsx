import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function KaizenHub() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[16vh] w-[34vw]">
        <p className="fx-rise font-display text-[1.6vw] font-bold text-primary">Module 04</p>
        <h2
          className="fx-rise mt-[1.4vh] font-display text-[4.8vw] font-bold leading-[1] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          Kaizen Hub
        </h2>
        <p
          className="fx-rise mt-[2.6vh] max-w-[30vw] text-[2vw] leading-relaxed text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          L'amélioration continue pilotée : idées du terrain, chantiers
          organisés et traçabilité des gains.
        </p>
        <div className="fx-rise mt-[4vh] flex flex-wrap gap-[0.8vw]" style={{ animationDelay: "0.3s" }}>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Idées terrain</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Chantiers</span>
          <span className="rounded-full bg-accent px-[1.3vw] py-[0.9vh] text-[1.5vw] font-semibold text-primary">Traçabilité</span>
        </div>
      </div>

      <div className="absolute right-[5vw] top-1/2 grid w-[46vw] -translate-y-1/2 grid-cols-3 gap-[1.1vw]">
        <div className="fx-pop rounded-[0.9vw] bg-white p-[1.1vw] ring-1 ring-primary/15 shadow-[0_10px_30px_rgba(40,92,204,0.1)]" style={{ animationDelay: "0.2s" }}>
          <span className="text-[1.5vw] font-bold uppercase tracking-[0.16em] text-primary">À faire</span>
          <div className="mt-[1.2vh] space-y-[1vh]">
            <div className="h-[5.5vh] rounded-[0.5vw] bg-accent" />
            <div className="h-[5.5vh] rounded-[0.5vw] bg-primary/10" />
          </div>
        </div>
        <div className="fx-pop rounded-[0.9vw] bg-white p-[1.1vw] ring-1 ring-primary/15 shadow-[0_10px_30px_rgba(40,92,204,0.1)]" style={{ animationDelay: "0.35s" }}>
          <span className="text-[1.5vw] font-bold uppercase tracking-[0.16em] text-primary">En cours</span>
          <div className="mt-[1.2vh] space-y-[1vh]">
            <div className="h-[5.5vh] rounded-[0.5vw] bg-primary/15" />
            <div className="h-[5.5vh] rounded-[0.5vw] bg-accent" />
          </div>
        </div>
        <div className="fx-pop rounded-[0.9vw] bg-primary p-[1.1vw] shadow-[0_14px_36px_rgba(40,92,204,0.24)]" style={{ animationDelay: "0.5s" }}>
          <span className="text-[1.5vw] font-bold uppercase tracking-[0.16em] text-white/80">Gagné</span>
          <div className="mt-[1.2vh] space-y-[1vh]">
            <div className="h-[5.5vh] rounded-[0.5vw] bg-white/25" />
            <div className="h-[5.5vh] rounded-[0.5vw] bg-white/15" />
          </div>
        </div>
      </div>

      <SlideFooter n={20} />
    </SlideShell>
  );
}
