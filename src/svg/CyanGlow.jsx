const CyanGlow = ({ className = "" }) => {
  return (
    <div className={`relative w-131 h-130.75 ${className}`}>
      <svg
        viewBox="0 0 524 523"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
      >
        <g filter="url(#blurCyan)">
          <path
            d="M572 -444C606.499 -419.997 587.5 77.0001 415.956 350.747C286.553 536.735 -197.002 948.503 -231.501 924.5C-265.999 900.498 28.5969 413.988 157.999 228C138 -359 537.502 -468.002 572 -444Z"
            fill="#00FFE1"
            fillOpacity="0.4"
          />
        </g>

        <defs>
          <filter
            id="blurCyan"
            x="-484.289"
            y="-697.031"
            width="1320.61"
            height="1872.54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="125" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default CyanGlow;

