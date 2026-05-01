import React from "react";

const BRAND_NAME = "Brody";
const BRAND_TAGLINE = "UZBEK STT";
const BRO_MARK = "bro";

const BrodyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 540 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Brody"
    >
      <defs>
        <linearGradient
          id="brodyMarkGradient"
          x1="18"
          y1="20"
          x2="154"
          y2="132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21E7F2" />
          <stop offset="0.48" stopColor="#13C7F3" />
          <stop offset="1" stopColor="#0B83F2" />
        </linearGradient>
        <linearGradient
          id="brodyTextGradient"
          x1="176"
          y1="38"
          x2="452"
          y2="118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#061E2D" />
          <stop offset="1" stopColor="#0756B5" />
        </linearGradient>
        <filter
          id="brodyGlow"
          x="-30"
          y="-30"
          width="230"
          height="210"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.04 0 0 0 0 0.78 0 0 0 0 0.95 0 0 0 0.46 0"
          />
          <feBlend in2="SourceGraphic" mode="screen" />
        </filter>
      </defs>

      <rect x="2" y="2" width="152" height="152" rx="40" fill="#020812" />
      <rect
        x="7"
        y="7"
        width="142"
        height="142"
        rx="35"
        stroke="#23DFF5"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <circle cx="112" cy="112" r="68" fill="#0B83F2" opacity="0.16" />
      <text
        x="21"
        y="103"
        filter="url(#brodyGlow)"
        fill="url(#brodyMarkGradient)"
        fontFamily="Avenir Next, ui-rounded, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="68"
        fontWeight="900"
        letterSpacing="-7"
      >
        {BRO_MARK}
      </text>
      <path
        d="M36 121c13-13 26-13 39 0s26 13 39 0"
        stroke="url(#brodyMarkGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.92"
      />

      <text
        x="178"
        y="98"
        fill="url(#brodyTextGradient)"
        fontFamily="Avenir Next, ui-rounded, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="76"
        fontWeight="900"
        letterSpacing="-4"
      >
        {BRAND_NAME}
      </text>
      <text
        x="184"
        y="128"
        fill="#0FBFEF"
        fontFamily="Avenir Next, ui-rounded, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="17"
        fontWeight="800"
        letterSpacing="5"
      >
        {BRAND_TAGLINE}
      </text>
    </svg>
  );
};

export default BrodyTextLogo;
