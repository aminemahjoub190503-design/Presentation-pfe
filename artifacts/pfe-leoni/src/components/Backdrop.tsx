export default function Backdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
      {/* Soft corner glows */}
      <div
        className="absolute -right-[10vw] -top-[16vh] h-[46vw] w-[46vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,242,189,0.55), rgba(255,242,189,0) 70%)",
        }}
      />
      <div
        className="absolute -bottom-[20vh] -left-[12vw] h-[40vw] w-[40vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(40,92,204,0.06), rgba(40,92,204,0) 70%)",
        }}
      />

      {/* Faint dot field — lighter than a grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(40,92,204,0.06) 1px, transparent 1.6px)",
          backgroundSize: "2.6vw 2.6vw",
        }}
      />

      {/* Subtle outlined rings for quiet depth */}
      <div
        className="absolute -right-[14vw] top-[18vh] h-[34vw] w-[34vw] rounded-full border border-primary/[0.06]"
      />
      <div
        className="absolute -left-[16vw] -bottom-[18vh] h-[40vw] w-[40vw] rounded-full border border-accent/40"
      />

      {/* Hairline accents at the edges */}
      <div className="absolute left-0 right-0 top-0 h-px bg-primary/[0.06]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/[0.06]" />
    </div>
  );
}
