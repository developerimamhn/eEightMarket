const ExactButton = ({ children }) => {
  return (
    <div className="relative inline-block ">
      <svg
        viewBox="0 0 105 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-18 sm:w-20 md:w-26.25"
      >
        {/* Background */}
        <path
          d="M0 19.7006C0 14.3949 0 11.7421 0.709836 9.59869C2.10122 5.39729 5.39729 2.10122 9.59869 0.709836C11.7421 0 14.3949 0 19.7006 0H84.4431C89.7488 0 92.4016 0 94.545 0.709836C98.7464 2.10122 102.042 5.39729 103.434 9.59869C104.144 11.7421 104.144 14.3949 104.144 19.7006C104.144 25.0063 104.144 27.6591 103.434 29.8025C102.042 34.0039 98.7464 37.3 94.545 38.6914C92.4016 39.4012 89.7488 39.4012 84.4431 39.4012H19.7006C14.3949 39.4012 11.7421 39.4012 9.59869 38.6914C5.39729 37.3 2.10122 34.0039 0.709836 29.8025C0 27.6591 0 25.0063 0 19.7006Z"
          fill="url(#paint0)"
          fillOpacity="0.8"
        />

        {/* Border */}
        <path
          d="M19.7002 0.5H84.4434C89.7884 0.5 92.3402 0.506517 94.3877 1.18457C98.439 2.52625 101.617 5.70455 102.959 9.75586C103.637 11.8034 103.644 14.3552 103.644 19.7002C103.644 25.0455 103.637 27.5979 102.959 29.6455C101.617 33.6967 98.439 36.8751 94.3877 38.2168C92.3402 38.8948 89.7884 38.9014 84.4434 38.9014H19.7002C14.3552 38.9014 11.8034 38.8949 9.75586 38.2168C5.70458 36.8751 2.5263 33.6968 1.18457 29.6455C0.506476 27.5979 0.5 25.0455 0.5 19.7002C0.5 14.3552 0.506493 11.8034 1.18457 9.75586C2.52626 5.70454 5.70454 2.52626 9.75586 1.18457C11.8034 0.506493 14.3552 0.5 19.7002 0.5Z"
          stroke="url(#paint1)"
          strokeOpacity="0.5"
        />

        {/* Gradients */}
        <defs>
          <linearGradient
            id="paint0"
            x1="37.1942"
            y1="67.3968"
            x2="81.1463"
            y2="27.2332"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E8FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#032128" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient
            id="paint1"
            x1="101.809"
            y1="0"
            x2="0.328419"
            y2="13.1966"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9FBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0.3" />
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

export default ExactButton;

