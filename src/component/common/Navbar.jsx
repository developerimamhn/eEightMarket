import { useState } from "react";
import search from "../../assets/img/searchIcon.png";
import AiBtn from "../../assets/img/AiButton.png";
import userAvatar from "../../assets/img/image.png";
import Bell from "../../assets/img/belIcon.png";
import downArrow from "../../assets/img/Down_Arrow.png";

export default function Navbar({ onMenuClick }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-4 sm:px-5 py-3 flex items-center justify-between relative z-50">

        {/* LEFT */}
        <div className="hidden sm:flex items-center">
          <div
            className={`flex items-center rounded-[16px] pl-3 pr-1 py-1 transition-all duration-200 ${searchFocused ? "w-[396px]" : "w-[220px] md:w-[396px]"
              }`}
            style={{
              background:
                "linear-gradient(90deg, rgba(14, 31, 37, 0.8) 0%, rgba(13, 30, 33, 0.8) 55.43%)",
            }}
          >
            <img
              src={search}
              alt="search"
              className="w-5 h-5 object-contain opacity-50 mr-2"
            />

            <input
              type="text"
              placeholder="Search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="bg-transparent text-[13px] text-white/50 outline-none flex-1"
            />

            <button className="ml-auto flex items-center justify-center">
              <img
                src={AiBtn}
                alt="ai"
                className="w-10 h-10 rounded-[12px] object-contain"
              />
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="w-10 h-10 flex items-center justify-center"
          >
            <img src={search} className="w-5 h-5 opacity-60" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center">

          {/* Bell */}
          <button className="w-12 h-12 flex items-center justify-center">
            <img src={Bell} className="w-12 h-12 object-contain" />
          </button>

          {/* GAP 16px */}
          <div className="w-4" />

          {/* Account */}
          <button
            className="
                        hidden md:flex items-center justify-between
                        w-[242px] h-[48px]
                        rounded-[16px]
                        bg-[#161817]
                        px-[20px]
                        py-[12px]
                        gap-[12px]
                        border border-transparent
                        [background:linear-gradient(#161817,#161817)_padding-box,linear-gradient(198.73deg,rgba(244,253,255,0.5)_5.95%,rgba(255,255,255,0)_43.28%)_border-box]
                      "
          >
            <span className="E8-Account text-white text-[16px] leading-[150%] z-10">
              E8 Account 2110113586
            </span>

            <img
              src={downArrow}
              className="w-[16px] h-[16px] object-contain z-10"
              alt="arrow"
            />
          </button>

          {/* GAP 16px */}
          <div className="w-4" />

          {/* USER */}
          <button className="flex items-center gap-[12px]">
            <img
              src={userAvatar}
              className="w-[48px] h-[48px] rounded-[16px] object-cover"
            />

            <div className="hidden sm:block text-left">
              <div className="james-name">James Carter</div>
              <div className="gmail text-[10px] leading-[160%] text-white/70">
                james.carter@example.com
              </div>
            </div>

            <img
              src={downArrow}
              className="hidden sm:block h-[20px] object-contain"
              alt="arrow"
            />
          </button>
          {/* MENU */}
          <button
            onClick={onMenuClick}
            className="flex lg:hidden w-9 h-9 ml-2 items-center justify-center rounded-lg bg-white/5"
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
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </nav>

      {/* MOBILE SEARCH */}
      {mobileSearchOpen && (
        <div className="sm:hidden w-full px-3 pb-3">
          <div className="flex items-center rounded-lg px-3 py-2 bg-[#0a0d11]">
            <img src={search} className="w-4 h-4 mr-2 opacity-50" />
            <input className="bg-transparent w-full outline-none text-white/60" />
            <img src={AiBtn} className="w-8 h-8 ml-2" />
          </div>
        </div>
      )}
    </>
  );
}