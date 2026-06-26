// Brody glyph: a bold "B" rendered as text so it inherits the current text/brand color.
const HandyHand = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    width={width || 126}
    height={height || 135}
    viewBox="0 0 126 135"
    className="fill-text"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="50%"
      y="52%"
      dominantBaseline="central"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
      fontWeight="800"
      fontSize="120"
    >
      B
    </text>
  </svg>
);

export default HandyHand;
