import React from "react";
import icon from "../../assets/new-job.svg";

const FancySvgButton = ({ text = "Button", className = "", }) => {
  return (
    <div className={`w-fit ${className}`}>
      <svg
        className="w-45.25 h-10"
        viewBox="0 0 181 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <path
          d="M0 19.7006C0 14.3949 0 11.7421 0.709836 9.59869C2.10122 5.39729 5.39729 2.10122 9.59869 0.709836C11.7421 0 14.3949 0 19.7006 0H160.443C165.749 0 168.402 0 170.545 0.709836C174.746 2.10122 178.042 5.39729 179.434 9.59869C180.144 11.7421 180.144 14.3949 180.144 19.7006C180.144 25.0063 180.144 27.6591 179.434 29.8025C178.042 34.0039 174.746 37.3 170.545 38.6914C168.402 39.4012 165.749 39.4012 160.443 39.4012H19.7006C14.3949 39.4012 11.7421 39.4012 9.59869 38.6914C5.39729 37.3 2.10122 34.0039 0.709836 29.8025C0 27.6591 0 25.0063 0 19.7006Z"
          fill="url(#bgGradient)"
          fillOpacity="0.8"
        />

        {/* Border */}
        <path
          d="M19.7002 0.5H160.443C165.788 0.5 168.34 0.506517 170.388 1.18457C174.439 2.52625 177.617 5.70455 178.959 9.75586C179.637 11.8034 179.644 14.3552 179.644 19.7002C179.644 25.0455 179.637 27.5979 178.959 29.6455C177.617 33.6967 174.439 36.8751 170.388 38.2168C168.34 38.8948 165.788 38.9014 160.443 38.9014H19.7002C14.3552 38.9014 11.8034 38.8949 9.75586 38.2168C5.70458 36.8751 2.5263 33.6968 1.18457 29.6455C0.506476 27.5979 0.5 25.0455 0.5 19.7002C0.5 14.3552 0.506493 11.8034 1.18457 9.75586C2.52626 5.70454 5.70454 2.52626 9.75586 1.18457C11.8034 0.506493 14.3552 0.5 19.7002 0.5Z"
          stroke="url(#strokeGradient)"
          strokeOpacity="0.5"
        />

        {/* Text */}
        <image
          href={icon}
          x="10"
          y="12"
          width="16"
          height="16"
        />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={`fill-white ${className}`}
        >
          <img src={icon} alt="icon" className="w-4 h-4" />
          {text}
        </text>

        {/* Gradients */}
        <defs>
          <linearGradient
            id="bgGradient"
            x1="64.337"
            y1="67.3968"
            x2="104.215"
            y2="4.36368"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E8FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#032128" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient
            id="strokeGradient"
            x1="176.105"
            y1="0"
            x2="6.19668"
            y2="38.2192"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9FBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FancySvgButton;


