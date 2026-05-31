export default function CoreGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g
        className="spin-slow"
        style={{ transformOrigin: "200px 200px" }}
        fill="none"
        stroke="#285ccc"
      >
        <circle
          cx="200"
          cy="200"
          r="172"
          strokeOpacity="0.16"
          strokeWidth="1.4"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      </g>
      <g
        className="spin-rev"
        style={{ transformOrigin: "200px 200px" }}
        fill="none"
        stroke="#285ccc"
      >
        <circle
          cx="200"
          cy="200"
          r="138"
          strokeOpacity="0.22"
          strokeWidth="1.4"
          pathLength={1}
          className="fx-draw"
        />
      </g>

      <circle
        cx="200"
        cy="200"
        r="100"
        fill="none"
        stroke="#285ccc"
        strokeOpacity="0.3"
        strokeWidth="1.4"
        pathLength={1}
        className="fx-draw"
        style={{ animationDelay: "0.2s" }}
      />

      <line x1="200" y1="62" x2="200" y2="100" stroke="#285ccc" strokeOpacity="0.35" strokeWidth="1.4" />
      <line x1="338" y1="200" x2="300" y2="200" stroke="#285ccc" strokeOpacity="0.35" strokeWidth="1.4" />
      <line x1="200" y1="338" x2="200" y2="300" stroke="#285ccc" strokeOpacity="0.35" strokeWidth="1.4" />
      <line x1="62" y1="200" x2="100" y2="200" stroke="#285ccc" strokeOpacity="0.35" strokeWidth="1.4" />

      <circle cx="200" cy="62" r="6" fill="#285ccc" className="fx-pop" style={{ animationDelay: "0.5s" }} />
      <circle cx="338" cy="200" r="6" fill="#285ccc" className="fx-pop" style={{ animationDelay: "0.6s" }} />
      <circle cx="200" cy="338" r="6" fill="#285ccc" className="fx-pop" style={{ animationDelay: "0.7s" }} />
      <circle cx="62" cy="200" r="6" fill="#285ccc" className="fx-pop" style={{ animationDelay: "0.8s" }} />

      <g className="core-pulse" style={{ transformOrigin: "200px 200px" }}>
        <circle cx="200" cy="200" r="58" fill="#fff2bd" />
        <circle cx="200" cy="200" r="34" fill="#285ccc" />
        <circle cx="200" cy="200" r="14" fill="#ffffff" fillOpacity="0.9" />
      </g>
    </svg>
  );
}
