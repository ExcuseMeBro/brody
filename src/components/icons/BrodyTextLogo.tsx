import React from "react";

const BRAND_NAME = "Brody";
const BRAND_TAGLINE = "UZBEK STT";

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
      viewBox="0 0 520 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Brody"
    >
      <rect width="150" height="150" rx="38" fill="#121826" />
      <path
        d="M47 42h33.5c22.5 0 36.5 10.5 36.5 28 0 9.8-5.2 18.2-14.2 22.8 11.4 4 18.2 12.5 18.2 25.1 0 19.1-15 31.1-39.6 31.1H47V42Zm32.4 40.5c9.6 0 15.1-4.2 15.1-11.6 0-7.2-5.5-11.2-15.1-11.2H69.5v22.8h9.9Zm2 48.4c10.8 0 16.9-4.8 16.9-13.3 0-8.4-6.1-13.1-16.9-13.1H69.5v26.4h11.9Z"
        fill="#F6FFFB"
      />
      <path
        d="M42 118c8-11 16-11 24 0s16 11 24 0 16-11 24 0"
        stroke="#24D19A"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <text
        x="176"
        y="101"
        fill="#121826"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        fontSize="72"
        fontWeight="800"
        letterSpacing="-3"
      >
        {BRAND_NAME}
      </text>
      <text
        x="180"
        y="128"
        fill="#24D19A"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        fontSize="17"
        fontWeight="700"
        letterSpacing="5"
      >
        {BRAND_TAGLINE}
      </text>
    </svg>
  );
};

export default BrodyTextLogo;
