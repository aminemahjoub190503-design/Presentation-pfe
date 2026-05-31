import SlideFooter from "@/components/SlideFooter";
import SlideShell from "@/components/SlideShell";

export default function VsmStudio() {
  return (
    <SlideShell>
      <div className="absolute left-[7vw] top-[14vh] w-[44vw]">
        <p className="fx-rise font-display text-[1.6vw] font-bold text-primary">Module 05</p>
        <h2
          className="fx-rise mt-[1.4vh] font-display text-[4.6vw] font-bold leading-[1] tracking-tight text-primary"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}
        >
          VSM Studio
        </h2>
        <p
          className="fx-rise mt-[2.4vh] max-w-[42vw] text-[2vw] leading-snug text-muted"
          style={{ animationDelay: "0.2s", textWrap: "pretty" }}
        >
          Cartographier le flux de valeur pour éliminer les gaspillages (Muda).
        </p>
      </div>

      <div className="absolute left-1/2 top-[70%] w-[84vw] -translate-x-1/2 -translate-y-1/2 space-y-[3vh]">
        <div className="fx-rise" style={{ animationDelay: "0.24s" }}>
          <p className="mb-[1vh] text-[1.5vw] font-bold uppercase tracking-[0.2em] text-muted">Flux actuel</p>
          <div className="flex items-center gap-[1vw]">
            <div className="h-[7vh] flex-1 rounded-xl bg-white ring-1 ring-primary/15" />
            <div className="h-[5vh] w-[5vh] rounded-full bg-accent" />
            <div className="h-[7vh] flex-1 rounded-xl bg-white ring-1 ring-primary/15" />
            <div className="h-[5vh] w-[5vh] rounded-full bg-accent" />
            <div className="h-[7vh] flex-1 rounded-xl bg-white ring-1 ring-primary/15" />
            <div className="h-[5vh] w-[5vh] rounded-full bg-accent" />
            <div className="h-[7vh] flex-1 rounded-xl bg-white ring-1 ring-primary/15" />
          </div>
        </div>
        <div className="fx-rise" style={{ animationDelay: "0.4s" }}>
          <p className="mb-[1vh] text-[1.5vw] font-bold uppercase tracking-[0.2em] text-primary">Flux futur</p>
          <div className="flex items-center gap-[1vw]">
            <div className="h-[7vh] flex-1 rounded-xl bg-primary" />
            <svg width="40" height="24" viewBox="0 0 40 24" className="text-primary"><path d="M2 12h26M22 5l9 7-9 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div className="h-[7vh] flex-1 rounded-xl bg-primary" />
            <svg width="40" height="24" viewBox="0 0 40 24" className="text-primary"><path d="M2 12h26M22 5l9 7-9 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div className="h-[7vh] flex-1 rounded-xl bg-primary" />
          </div>
        </div>
      </div>

      <SlideFooter n={23} />
    </SlideShell>
  );
}
