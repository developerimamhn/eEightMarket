const GradientButton = ({ text = "Button" }) => {
    return (
        <div className="relative w-33.5 h-10">

            {/* SVG BACKGROUND */}
            <svg
                viewBox="0 0 134 40"
                className="absolute inset-0 w-full h-full"
                fill="none"
            >
                {/* Background */}
                <rect
                    width="134"
                    height="40"
                    rx="14"
                    fill="url(#bgGradient)"
                    fillOpacity="0.8"
                />

                {/* Border */}
                <rect
                    x="0.5"
                    y="0.5"
                    width="133"
                    height="39"
                    rx="13.5"
                    stroke="url(#borderGradient)"
                    strokeOpacity="0.5"
                />

                <defs>
                    <linearGradient id="bgGradient" x1="47" y1="77" x2="94" y2="17">
                        <stop stopColor="#00E8FF" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#032128" stopOpacity="0.05" />
                    </linearGradient>

                    <linearGradient id="borderGradient" x1="130" y1="0" x2="1" y2="21">
                        <stop stopColor="#E9FBFF" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
            </svg>

            {/* CONTENT */}
            <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
                <span className="text-white text-[13px] font-medium">
                    {text}
                </span>
            </div>

        </div>
    );
};

export default GradientButton;