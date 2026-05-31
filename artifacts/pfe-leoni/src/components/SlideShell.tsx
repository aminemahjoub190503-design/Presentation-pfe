import type { ReactNode } from "react";

import Backdrop from "./Backdrop";

export default function SlideShell({ children }: { children: ReactNode }) {
  const exporting =
    typeof window !== "undefined" &&
    window.location.pathname.endsWith("/allslides");

  return (
    <div
      className={`relative h-screen w-screen overflow-hidden bg-white font-body text-text ${
        exporting ? "" : "play"
      }`}
    >
      <Backdrop />
      <div className="pointer-events-none absolute left-[1.8vw] right-[1.8vw] top-[1.8vh] bottom-[1.8vh] z-20 rounded-[1vw] ring-1 ring-primary/20" />
      <div className="pointer-events-none absolute left-[2.4vw] right-[2.4vw] top-[2.5vh] bottom-[2.5vh] z-20 rounded-[0.7vw] ring-1 ring-primary/10" />
      {children}
    </div>
  );
}
