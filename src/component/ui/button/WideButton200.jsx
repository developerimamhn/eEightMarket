const WideButton200 = ({ children }) => {
    return (
        <div className="relative inline-block w-50 h-10">

            {/* SVG BACKGROUND */}
            <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 19.7006C0 14.3949 0 11.7421 0.709836 9.59869C2.10122 5.39729 5.39729 2.10122 9.59869 0.709836C11.7421 0 14.3949 0 19.7006 0H180.299C185.605 0 188.258 0 190.401 0.709836C194.603 2.10122 197.899 5.39729 199.29 9.59869C200 11.7421 200 14.3949 200 19.7006C200 25.0063 200 27.6591 199.29 29.8025C197.899 34.0039 194.603 37.3 190.401 38.6914C188.258 39.4012 185.605 39.4012 180.299 39.4012H19.7006C14.3949 39.4012 11.7421 39.4012 9.59869 38.6914C5.39729 37.3 2.10122 34.0039 0.709836 29.8025C0 27.6591 0 25.0063 0 19.7006Z" fill="url(#paint0_linear_117_5334)" fill-opacity="0.8" />
                <path d="M19.7002 0.5H180.3C185.645 0.5 188.197 0.506493 190.244 1.18457C194.295 2.52626 197.474 5.70455 198.815 9.75586C199.494 11.8034 199.5 14.3552 199.5 19.7002C199.5 25.0455 199.494 27.5979 198.815 29.6455C197.474 33.6968 194.295 36.8751 190.244 38.2168C188.197 38.8949 185.645 38.9014 180.3 38.9014H19.7002C14.3552 38.9014 11.8034 38.8949 9.75586 38.2168C5.70458 36.8751 2.5263 33.6968 1.18457 29.6455C0.506476 27.5979 0.5 25.0455 0.5 19.7002C0.5 14.3552 0.506493 11.8034 1.18457 9.75586C2.52626 5.70454 5.70454 2.52626 9.75586 1.18457C11.8034 0.506493 14.3552 0.5 19.7002 0.5Z" stroke="url(#paint1_linear_117_5334)" stroke-opacity="0.5" />
                <defs>
                    <linearGradient id="paint0_linear_117_5334" x1="71.4286" y1="67.3968" x2="109.395" y2="0.769862" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00E8FF" stop-opacity="0.5" />
                        <stop offset="1" stop-color="#032128" stop-opacity="0.05" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_117_5334" x1="195.516" y1="-5.49345e-06" x2="8.96946" y2="46.5871" gradientUnits="userSpaceOnUse">
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

export default WideButton200;