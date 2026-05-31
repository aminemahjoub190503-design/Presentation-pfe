import manifest from "@/data/slides-manifest.json";

const TOTAL = manifest.length;

export default function SlideFooter({ n }: { n: number }) {
  const nn = String(n).padStart(2, "0");
  const tt = String(TOTAL).padStart(2, "0");
  return (
    <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex items-center justify-end text-[1.5vw] font-semibold uppercase tracking-[0.28em] text-muted">
      <span>
        {nn} / {tt}
      </span>
    </div>
  );
}
