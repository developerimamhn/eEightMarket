import { useState } from "react";
import search from "../../assets/img/searchIcon.png";
import AiBtn from "../../assets/img/AiButton.png";
import userAvatar from "../../assets/img/image.png";
import Bell from "../../assets/img/belIcon.png";
import downArrow from "../../assets/img/Down_Arrow.png";

export default function Navbar({ onMenuClick }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-3 pl-6 sm:px-5 py-3 flex items-center justify-between relative z-50">

        {/* Left: Search Bar — sm+ এ দেখাবে */}
        <div className="hidden sm:flex items-center">
          <div
            className={`flex items-center rounded-lg pl-3 pr-1 py-1 transition-all duration-200 ${
              searchFocused ? "w-70 md:w-[396px]" : "w-[220px] md:w-[396px]"
            }`}
            style={{
              background:
                "linear-gradient(90deg, rgba(14, 31, 37, 0.8) 0%, rgba(13, 30, 33, 0.8) 55.43%)",
            }}
          >
            <img
              src={search}
              alt="search"
              className="object-contain shrink-0 opacity-50 mr-2"
              style={{ width: "16px", height: "16px" }}
            />
            <input
              type="text"
              placeholder="Search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="bg-transparent text-[13px] text-white/50 placeholder:text-lg placeholder:text-white/35 outline-none flex-1"
            />
            <button className="flex items-center justify-center shrink-0 ml-auto">
              <img
                src={AiBtn}
                alt="ai"
                className="object-contain"
                style={{ width: "40px", height: "40px" }}
              />
            </button>
          </div>
        </div>

        {/* Mobile: Search Icon Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="w-10 h-10 flex items-center justify-center"
          >
            <img src={search} alt="search" className="w-5 h-5 object-contain opacity-60" />
          </button>
        </div>

        {/* Right: Bell + Account + User */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Bell */}
          <button className="w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] flex items-center rounded-[16px] justify-center">
            <img
              src={Bell}
              alt="bell"
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
            />
          </button>

          {/* Account Selector — md+ এ দেখাবে */}
          <button className="relative hidden md:flex items-center justify-between w-[200px] lg:w-[242px] h-[48px] rounded-[16px] px-[14px] lg:px-[20px] bg-[#161817] text-white/70">
            <span className="absolute inset-0 rounded-[16px] p-[1px] bg-[linear-gradient(198.73deg,rgba(244,253,255,0.5)_5.95%,rgba(255,255,255,0)_43.28%)] pointer-events-none">
              <span className="w-full h-full block rounded-[16px] bg-[#161817]"></span>
            </span>
            <span className="inline-block text-[13px] lg:text-[16px] leading-[150%] font-normal text-white relative z-10 truncate mr-2">
              E8 Account 2110113586
            </span>
            <img
              src={downArrow}
              alt="arrow"
              className="w-4 h-4 object-contain relative z-10 shrink-0"
            />
          </button>

          {/* User Profile */}
          <button className="flex items-center gap-2 pl-1 pr-2 sm:pr-3  rounded-sm ">
            <img
              src={userAvatar}
              alt="James Carter"
              className="w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] rounded-xl object-cover object-center relative top-[-1px] shadow-[0_-1px_0_rgba(255,255,255,0.8)]"
            />
            <div className="hidden sm:block text-left">
              <div className="text-[12.5px] font-medium text-white/85 leading-tight">James Carter</div>
              <div className="text-[10.5px] text-white/35 leading-tight">james.carter@example.com</div>
            </div>
            <img
              src={downArrow}
              alt="arrow"
              className="hidden sm:block w-4 h-4 object-contain relative z-10"
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
  className="flex lg:hidden items-center justify-center w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.10] transition-all"
  onClick={onMenuClick}
>
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Search Bar Dropdown */}
      {mobileSearchOpen && (
        <div className="sm:hidden w-full bg-[#0a0d11] px-3 pb-3">
          <div
            className="flex items-center justify-between rounded-lg px-3 py-2 w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(14, 31, 37, 0.8) 0%, rgba(13, 30, 33, 0.8) 55.43%)",
            }}
          >
            <div className="flex items-center flex-1">
              <img
                src={search}
                alt="search"
                className="object-contain shrink-0 opacity-50 mr-2"
                style={{ width: "16px", height: "16px" }}
              />
              <input
                type="text"
                placeholder="Search"
                autoFocus
                className="bg-transparent text-[13px] text-white/50 placeholder:text-base placeholder:text-white/35 outline-none w-full"
              />
            </div>
            <button className="flex items-center justify-center shrink-0 ml-3">
              <img src={AiBtn} alt="ai" className="object-contain w-8 h-8" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Dropdown Menu — Account info */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#0f1317] border-t border-white/[0.06] px-4 py-3 flex flex-col gap-3 z-40">
          <button className="relative flex items-center justify-between w-full h-[32px] rounded-[12px] px-4 bg-[#161817] text-white/70">
            <span className="absolute inset-0 rounded-[12px] p-[1px] bg-[linear-gradient(198.73deg,rgba(244,253,255,0.5)_5.95%,rgba(255,255,255,0)_43.28%)] pointer-events-none">
              <span className="w-full h-full block rounded-[12px] bg-[#161817]"></span>
            </span>
            <span className="text-[14px] text-white relative z-10 truncate mr-2">
              E8 Account 2110113586
            </span>
            <img src={downArrow} alt="arrow" className="w-4 h-4 object-contain relative z-10 shrink-0" />
          </button>
        </div>
      )}
    </>
  );
}