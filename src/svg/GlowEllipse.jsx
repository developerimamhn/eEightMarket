const GlowEllipse = () => {
    return (
        <div className="relative w-115.25 h-70.75 overflow-hidden">
            <svg
                className="absolute inset-0"
                viewBox="0 0 461 283"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#blur)">
                    <ellipse
                        cx="230.365"
                        cy="-111.411"
                        rx="41.0681"
                        ry="318.93"
                        transform="rotate(23.0221 230.365 -111.411)"
                        fill="#14FCF2"
                        fillOpacity="0.25"
                    />
                </g>

                <defs>
                    <filter
                        id="blur"
                        x="0"
                        y="-505"
                        width="461"
                        height="788"
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

export default GlowEllipse;