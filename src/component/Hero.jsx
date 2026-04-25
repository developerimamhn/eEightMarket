import { useState } from "react";
import logo from "../assets/Logo.png";

const BtnActiveBg = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 223 48"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0H199C206.455 0 210.183 0 213.123 1.21793C217.043 2.84183 220.158 5.95662 221.782 9.87706C223 12.8174 223 16.5449 223 24C223 31.4551 223 35.1826 221.782 38.1229C220.158 42.0434 217.043 45.1582 213.123 46.7821C210.183 48 206.455 48 199 48H24C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z" fill="url(#paint0)" fillOpacity="0.8"/>
    <path d="M24 0.5H199C202.734 0.5 205.51 0.500557 207.721 0.651367C209.926 0.801876 211.533 1.1002 212.932 1.67969C216.73 3.25284 219.747 6.27043 221.32 10.0684C221.9 11.4674 222.198 13.0736 222.349 15.2793C222.499 17.4896 222.5 20.2656 222.5 24C222.5 27.7344 222.499 30.5104 222.349 32.7207C222.198 34.9264 221.9 36.5326 221.32 37.9316C219.747 41.7296 216.73 44.7472 212.932 46.3203C211.533 46.8998 209.926 47.1981 207.721 47.3486C205.51 47.4994 202.734 47.5 199 47.5H24C20.2656 47.5 17.4896 47.4994 15.2793 47.3486C13.0736 47.1981 11.4674 46.8998 10.0684 46.3203C6.27042 44.7472 3.25284 41.7296 1.67969 37.9316C1.1002 36.5326 0.801876 34.9264 0.651367 32.7207C0.500557 30.5104 0.5 27.7344 0.5 24C0.5 20.2656 0.500557 17.4896 0.651367 15.2793C0.801876 13.0736 1.1002 11.4674 1.67969 10.0684C3.25284 6.27042 6.27042 3.25284 10.0684 1.67969C11.4674 1.1002 13.0736 0.801876 15.2793 0.651367C17.4896 0.500557 20.2656 0.5 24 0.5Z" stroke="url(#paint1)" strokeOpacity="0.5"/>
    <line x1="69" y1="0.5" x2="209" y2="0.499988" stroke="url(#paint2)" strokeOpacity="0.7"/>
    <defs>
      <linearGradient id="paint0" x1="80" y1="86" x2="128.5" y2="5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E8FF" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#032128" stopOpacity="0.05"/>
      </linearGradient>
      <linearGradient id="paint1" x1="218" y1="-6.69233e-06" x2="8.00001" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E9FBFF" stopOpacity="0.4"/>
        <stop offset="1" stopColor="white" stopOpacity="0.3"/>
      </linearGradient>
      <linearGradient id="paint2" x1="69" y1="1.5" x2="209" y2="1.49999" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0"/>
        <stop offset="0.49" stopColor="#9DEEFF"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const tabs = ["General", "Verification", "Preferences", "Security"];

const Hero = () => {
  const [active, setActive] = useState("General");

  return (
    <div className="w-full px-3 sm:px-5 py-3">
      
      {/* Mobile: Logo উপরে center এ, Tabs নিচে full width */}
      {/* Desktop: Logo বামে, Tabs ডানে একই row এ */}
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        
        {/* Logo */}
        <div className="flex items-center self-start sm:self-auto">
          <img
            src={logo}
            alt="logo"
            className="object-contain h-[32px] sm:h-[40px]"
          />
        </div>

        {/* Tabs — mobile এ full width, desktop এ auto */}
        <div
          className="flex items-center p-[4px] rounded-[14px] w-full sm:w-auto"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="relative flex flex-1 sm:flex-none justify-center items-center px-3 sm:px-4 py-[8px] sm:py-[9px] text-[11px] sm:text-[13px] whitespace-nowrap z-10 rounded-[10px]"
              style={{
                fontFamily: "'Neue Haas Grotesk Text Pro', sans-serif",
                color: active === tab ? "#fff" : "rgba(255,255,255,0.5)",
                minWidth: 0,
              }}
            >
              {active === tab && (
                <div className="absolute inset-0 pointer-events-none">
                  <BtnActiveBg />
                </div>
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;