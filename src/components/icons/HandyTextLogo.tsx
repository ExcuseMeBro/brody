import React from "react";

// Brody wordmark. Renders the product name as styled text so it inherits the
// brand color via the `logo-primary` class (see App.css).
const HandyTextLogo = ({
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
      viewBox="0 0 420 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        className="logo-primary"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="120"
        letterSpacing="-4"
      >
        brody
      </text>
    </svg>
  );
};

export default HandyTextLogo;
