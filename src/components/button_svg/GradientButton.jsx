const GradientButton = ({ children }) => {
    return (
        <div className="relative inline-block">

            {/* SVG BACKGROUND */}
            <svg className="w-24 md:w-28 lg:w-33.5" viewBox="0 0 134 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="134" height="40" rx="14" fill="url(#paint0_linear_174_468)" fill-opacity="0.8" />
                <rect x="0.5" y="0.5" width="133" height="39" rx="13.5" stroke="url(#paint1_linear_174_468)" stroke-opacity="0.5" />
                <defs>
                    <linearGradient id="paint0_linear_174_468" x1="47.4708" y1="77.0833" x2="94.2141" y2="17.503" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00E8FF" stop-opacity="0.5" />
                        <stop offset="1" stop-color="#032128" stop-opacity="0.05" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_174_468" x1="130.996" y1="-5.57694e-06" x2="1.72606" y2="21.3059" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E9FBFF" stop-opacity="0.4" />
                        <stop offset="1" stop-color="white" stop-opacity="0.3" />
                    </linearGradient>
                </defs>
            </svg>

            {/* TEXT */}
            <div className="absolute inset-0 flex items-center justify-center">
                {children}
            </div>

        </div>
    );
};

export default GradientButton;

