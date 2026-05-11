
import { useState, useRef, useEffect } from "react";
import search from "../../assets/img/searchIcon.png";
import AiBtn from "../../assets/img/AiButton.png";
import userAvatar from "../../assets/img/image.png";
import Bell from "../../assets/img/belIcon.png";
import downArrow from "../../assets/img/Down_Arrow.png";

export default function Navbar({ onMenuClick, sidebarOpen }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <>
      {/* ── Main nav bar — desktop only (md+) ── */}
      <nav className="hidden md:flex w-full px-5 py-3 items-center justify-between relative z-20">

        {/* ── LEFT: Search ── */}
        <div className="flex items-center">
          <div
            className={`flex items-center rounded-2xl pl-3 pr-1 py-1 transition-all duration-300
              ${searchFocused ? "w-70 lg:w-99" : "w-[320px] lg:w-99"}`}
            style={{
              background: "linear-gradient(90deg, rgba(14,31,37,0.8) 0%, rgba(13,30,33,0.8) 55.43%)",
            }}
          >
            <img src={search} alt="search" className="w-5 h-5 object-contain shrink-0 opacity-50 mr-2" />
            <input
              type="text"
              placeholder="Search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="bg-transparent text-[13px] text-white/50 placeholder:text-white/35
                         placeholder:text-[14px] outline-none flex-1 min-w-0"
            />
            <button className="flex items-center justify-center shrink-0 ml-auto">
              <img src={AiBtn} alt="AI search" className="w-10 h-10 object-contain rounded-[12px]" />
            </button>
          </div>
        </div>

        {/* ── RIGHT: Actions ── */}
        <DesktopRightActions />
      </nav>

      {/* ── Mobile top bar — hamburger only (xs–sm) ── */}
      <MobileTopBar onMenuClick={onMenuClick} sidebarOpen={sidebarOpen} />
    </>
  );
}

/* ─── Desktop Right Actions ─── */
function DesktopRightActions() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const accountRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) setAccountOpen(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex items-center gap-3">
      {/* Bell */}
      <button
        className="flex items-center justify-center w-12 h-12 rounded-[16px] bg-white/[0.04]
                   hover:bg-white/[0.08] transition-colors active:scale-95"
        aria-label="Notifications"
      >
        <img src={Bell} alt="bell" className="w-12 h-12 object-contain" />
      </button>

      {/* Account Selector */}
      <div ref={accountRef} className="relative">
        <button
          onClick={() => setAccountOpen((v) => !v)}
          className="relative flex items-center justify-between
                     w-[190px] lg:w-[242px] h-[48px] rounded-[16px] px-[14px] lg:px-[20px]
                     bg-[#161817] hover:bg-[#1c1f1d] transition-colors"
        >
          <span className="absolute inset-0 rounded-[16px] p-[1px] pointer-events-none"
            style={{ background: "linear-gradient(198.73deg, rgba(244,253,255,0.5) 5.95%, rgba(255,255,255,0) 43.28%)" }}>
            <span className="w-full h-full block rounded-[16px] bg-[#161817]" />
          </span>
          <span className="user-koma text-[13px] lg:text-[15px] font-normal text-white relative z-10 truncate mr-2">
            E8 Account 2110113586
          </span>
          <img src={downArrow} alt="expand"
            className={`w-4 h-4 object-contain relative z-10 shrink-0 transition-transform duration-200
              ${accountOpen ? "rotate-180" : ""}`}
          />
        </button>
        {accountOpen && (
          <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50
                          rounded-[14px] bg-[#161817] border border-white/10
                          shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden
                          animate-[fadeIn_0.15s_ease]">
            {["E8 Account 2110113586", "E8 Account 3210024571", "E8 Account 4120987654"].map((acc, i) => (
              <button key={i}
                className="w-full text-left px-4 py-3 text-[13px] text-white/70
                           hover:bg-white/[0.06] hover:text-white transition-colors">
                {acc}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* User Profile */}
<svg className="absolute top-1 right-0" width="419" height="274" viewBox="0 0 419 274" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_f_74_376)">
    <circle cx="286.5" cy="-12.5" r="56.5" fill="#7DFFE9" fillOpacity="0.8"/>
  </g>
  <defs>
    <filter id="filter0_f_74_376" x="0" y="-299" width="573" height="573" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="115" result="effect1_foregroundBlur_74_376"/>
    </filter>
  </defs>
</svg>



      <div ref={userRef} className="relative">
        <button
          onClick={() => setUserOpen((v) => !v)}
          className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-[12px]
                     hover:bg-white/[0.05] transition-colors active:scale-[0.98]"
        >
          <img src={userAvatar} alt="James Carter"
            className="w-[42px] h-[42px] rounded-xl object-cover object-center
                       flex-shrink-0 shadow-[0_-1px_0_rgba(255,255,255,0.8)]"
          />
          <div className="text-left">
            <div className="user text-[12.5px] text-white/85 leading-[150%] whitespace-nowrap">James Carter</div>
            <div className="user-koma text-[10.5px] text-white/35 leading-[160%] whitespace-nowrap">james.carter@example.com</div>
          </div>
          <img src={downArrow} alt="expand"
            className={`w-4 h-4 object-contain shrink-0 transition-transform duration-200
              ${userOpen ? "rotate-180" : ""}`}
          />
        </button>
        {userOpen && (
          <div className="absolute top-[calc(100%+8px)] right-0 z-50 min-w-[200px]
                          rounded-[14px] bg-[#161817] border border-white/10
                          shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden
                          animate-[fadeIn_0.15s_ease]">
            {[
              { label: "Profile Settings", icon: "⚙" },
              { label: "Security", icon: "🔒" },
              { label: "Sign Out", icon: "↩", danger: true },
            ].map(({ label, icon, danger }) => (
              <button key={label}
                className={`w-full flex items-center gap-3 px-4 py-3 text-[13px] transition-colors
                  ${danger
                    ? "text-red-400/80 hover:bg-red-500/10 hover:text-red-400"
                    : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                  }`}
              >
                <span className="text-[14px]">{icon}</span>
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Mobile Top Bar ─── */
function MobileTopBar({ onMenuClick, sidebarOpen }) {
  return (
    <nav className="md:hidden w-full px-4 py-3 flex items-center justify-between relative z-20">
      {/* Logo */}
      <div className="flex items-baseline gap-1.5">
        <span className="logo-e8">E8</span>
        <span className="logo-markets">Markets</span>
      </div>

      {/* Hamburger */}
      <button
        className="flex items-center justify-center w-9 h-9 rounded-[10px]
                   bg-white/[0.05] hover:bg-white/[0.10] transition-colors active:scale-95"
        onClick={onMenuClick}
        aria-label={sidebarOpen ? "Close menu" : "Open menu"}
      >
        <svg width="18" height="18" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </nav>
  );
}

/* ─── Keyframe ─── */
export const NavbarStyles = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);
