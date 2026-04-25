const GlowBlob = () => {
    return (
        <div className="relative w-101.25 h-58.5 overflow-hidden">
            <svg
                className="absolute inset-0"
                viewBox="0 0 405 234"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#blur)">
                    <path
                        d="M237.065 -91.2332C188.504 23.0469 114.457 138.413 101.718 133C88.9795 127.587 149.66 7.78 198.221 -106.5C246.782 -220.78 289.187 -313.37 301.926 -307.957C314.665 -302.544 285.626 -205.513 237.065 -91.2332Z"
                        fill="#14FCF2"
                        fillOpacity="0.25"
                    />
                </g>

                <defs>
                    <filter
                        id="blur"
                        x="0"
                        y="-408"
                        width="405"
                        height="641"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feGaussianBlur stdDeviation="50" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default GlowBlob;
