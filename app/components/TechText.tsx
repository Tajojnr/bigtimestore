"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type TechTextStyle = CSSProperties & {
  "--tech-intro-duration"?: string;
  "--tech-letter-index"?: number;
  "--speck-index"?: number;
  "--speck-left"?: string;
  "--speck-top"?: string;
};

function styleWithVariables(style: TechTextStyle): CSSProperties {
  return style;
}

type TechTextProps = {
  text: string;
  fontWeight?: number;
  fontSize?: number;
  reveal?: "letter" | "all";
  dashLength?: number;
  dashGap?: number;
  specks?: number;
  intro?: "none" | "fade";
  introDuration?: number;
  clickKick?: boolean;
  guides?: boolean;
  className?: string;
};

export default function TechText({
  text,
  fontWeight = 700,
  fontSize = 150,
  reveal = "letter",
  dashLength = 4,
  dashGap = 2,
  specks = 15,
  intro = "none",
  introDuration = 2,
  clickKick = false,
  guides = false,
  className = "",
}: TechTextProps) {
  const [kick, setKick] = useState(false);
  const kickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const letters = Array.from(text);

  useEffect(
    () => () => {
      if (kickTimeout.current) clearTimeout(kickTimeout.current);
    },
    [],
  );

  function replayKick() {
    if (!clickKick) return;
    if (kickTimeout.current) clearTimeout(kickTimeout.current);
    setKick(false);
    requestAnimationFrame(() => setKick(true));
    kickTimeout.current = setTimeout(() => setKick(false), 1100);
  }

  return (
    <button
      type="button"
      aria-label={`Replay ${text} text animation`}
      onClick={clickKick ? replayKick : undefined}
      className={`tech-text relative block w-full overflow-hidden text-left ${className} ${
        clickKick ? "cursor-pointer" : "cursor-default"
      } ${kick ? "tech-text-kick" : ""}`}
      style={styleWithVariables(
        {
          "--tech-intro-duration": `${introDuration}s`,
        },
      )}
    >
      <svg
        aria-hidden="true"
        className="relative z-10 block h-full w-full overflow-visible"
        viewBox="0 0 1000 180"
        preserveAspectRatio="xMinYMid meet"
      >
        {guides && (
          <path
            d="M20 150H980M20 30H980"
            fill="none"
            stroke="currentColor"
            strokeOpacity=".2"
            strokeWidth="1"
          />
        )}
        <text
          x="20"
          y="142"
          fill="rgba(255,255,255,.09)"
          stroke="#ffbd83"
          strokeWidth="1.5"
          strokeDasharray={`${dashLength} ${dashGap}`}
          strokeLinecap="round"
          fontFamily="var(--font-geist-sans), Arial, sans-serif"
          fontSize={fontSize}
          fontWeight={fontWeight}
          textLength="960"
          lengthAdjust="spacingAndGlyphs"
        >
          {letters.map((letter, index) => (
            <tspan
              key={`${letter}-${index}`}
              className={`tech-text-letter ${
                reveal === "letter" ? "tech-text-letter-reveal" : ""
              } ${intro === "fade" ? "tech-text-intro" : ""}`}
              style={styleWithVariables(
                {
                  "--tech-letter-index": index,
                },
              )}
            >
              {letter === " " ? "\u00a0" : letter}
            </tspan>
          ))}
        </text>
      </svg>
      {Array.from({ length: Math.max(0, Math.min(specks, 40)) }, (_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="tech-text-speck"
          style={styleWithVariables(
            {
              "--speck-index": index,
              "--speck-left": `${(index * 47 + 11) % 97}%`,
              "--speck-top": `${(index * 31 + 19) % 83}%`,
            },
          )}
        />
      ))}
    </button>
  );
}
