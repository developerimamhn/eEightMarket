const PurpleGlow = ({ className = "" }) => {
  return (
    <div className={`relative w-131 h-130.75 ${className}`}>
      <svg
        viewBox="0 0 524 523"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
      >
        <g filter="url(#blurPurple)">
          <path
            d="M548 -473.5C582.498 -449.497 587 132.001 415.956 350.747C286.554 536.735 -54.5014 1037.5 -88.9999 1013.5C-123.498 989.498 28.5973 413.988 158 228C84.9415 -348.161 513.501 -497.502 548 -473.5Z"
            fill="#BF0CFF"
            fillOpacity="0.45"
          />
        </g>
        <defs>
          <filter
            id="blurPurple"
            x="-343.963"
            y="-725.914"
            width="1161.1"
            height="1990.25"
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

export default PurpleGlow;

