import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import search from "../../assets/img/searchIcon.png";
import AiBtn from "../../assets/img/AiButton.png";
import userAvatar from "../../assets/img/image.png";
import Bell from "../../assets/img/belIcon.png";
import downArrow from "../../assets/img/Down_Arrow.png";

export default function Navbar({ onMenuClick, sidebarOpen }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      navRef.current,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        searchRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4 },
        "-=0.25"
      )
      .fromTo(
        rightRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4 },
        "-=0.4"
      );
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="hidden md:flex w-full px-5 py-3 items-center justify-between relative z-20"
      >
        <div ref={searchRef} className="flex items-center">
          <div
            className={`flex items-center rounded-2xl pl-3 pr-1 py-1 transition-all duration-300
              ${searchFocused ? "w-70 lg:w-99" : "w-[320px] lg:w-99"}`}
            style={{
              background:
                "linear-gradient(90deg, rgba(14,31,37,0.8) 0%, rgba(13,30,33,0.8) 55.43%)",
            }}
          >
            <img
              src={search}
              alt="search"
              className="w-5 h-5 object-contain shrink-0 mr-2"
            />
            <input
              type="text"
              placeholder="Search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="bg-transparent text-[13px] text-white/50 placeholder:text-white/75
                         placeholder:text-[14px] outline-none flex-1 min-w-0"
            />
            <button className="flex items-center justify-center shrink-0 ml-auto">
              <img
                src={AiBtn}
                alt="AI search"
                className="w-10 h-10 object-contain rounded-[12px]"
              />
            </button>
          </div>
        </div>

        <div ref={rightRef}>
          <DesktopRightActions />
        </div>
      </nav>

      <MobileTopBar onMenuClick={onMenuClick} sidebarOpen={sidebarOpen} />
    </>
  );
}

function DesktopRightActions() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const accountRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target))
        setAccountOpen(false);
      if (userRef.current && !userRef.current.contains(e.target))
        setUserOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <button
        className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/4
                   hover:bg-white/8 transition-colors active:scale-95"
      >
        <img src={Bell} alt="bell" className="w-12 h-12 object-contain" />
      </button>

      <div ref={accountRef} className="relative">
        <button
          onClick={() => setAccountOpen((v) => !v)}
          className="relative flex items-center justify-between
                     w-47.5 lg:w-60.5 h-12 rounded-2xl px-3.5 lg:px-5
                     bg-[#161817] hover:bg-[#1c1f1d] transition-colors"
        >
          <span
            className="absolute inset-0 rounded-2xl p-px pointer-events-none"
            style={{
              background:
                "linear-gradient(198.73deg, rgba(244,253,255,0.5) 5.95%, rgba(255,255,255,0) 43.28%)",
            }}
          >
            <span className="w-full h-full block rounded-2xl bg-[#161817]" />
          </span>
          <span className="gmail text-[13px] lg:text-[15px] font-normal text-white relative z-10 truncate mr-2">
            E8 Account 2110113586
          </span>
          <img
            src={downArrow}
            alt="expand"
            className={`w-4 h-4 object-contain relative z-10 shrink-0 transition-transform duration-200
              ${accountOpen ? "rotate-180" : ""}`}
          />
        </button>

        {accountOpen && (
          <DropdownMenu>
            {["E8 Account 2110113586", "E8 Account 3210024571", "E8 Account 4120987654"].map(
              (acc, i) => (
                <button
                  key={i}
                  className="w-full text-left px-4 py-3 text-[13px] text-white/70
                             hover:bg-white/6 hover:text-white transition-colors"
                >
                  {acc}
                </button>
              )
            )}
          </DropdownMenu>
        )}
      </div>

      <div ref={userRef} className="relative">
        <button
          onClick={() => setUserOpen((v) => !v)}
          className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-[12px]
                     hover:bg-white/[0.05] transition-colors active:scale-[0.98]"
        >
          <img
            src={userAvatar}
            alt="James Carter"
            className="w-[42px] h-[42px] rounded-xl object-cover object-center
                       flex-shrink-0 shadow-[0_-1px_0_rgba(255,255,255,0.8)]"
          />
          <div className="text-left">
            <div className="james-name">James Carter</div>
            <div className="gmail text-[10px] text-white/70 leading-[160%] whitespace-nowrap">
              james.carter@example.com
            </div>
          </div>
          <img
            src={downArrow}
            alt="expand"
            className={`w-4 h-4 object-contain shrink-0 transition-transform duration-200
              ${userOpen ? "rotate-180" : ""}`}
          />
        </button>

        {userOpen && (
          <DropdownMenu align="right">
            {[
              { label: "Profile Settings", icon: "⚙" },
              { label: "Security", icon: "🔒" },
              { label: "Sign Out", icon: "↩", danger: true },
            ].map(({ label, icon, danger }) => (
              <button
                key={label}
                className={`w-full flex items-center gap-3 px-4 py-3 text-[13px] transition-colors
                  ${
                    danger
                      ? "text-red-400/80 hover:bg-red-500/10 hover:text-red-400"
                      : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                  }`}
              >
                <span className="text-[14px]">{icon}</span>
                {label}
              </button>
            ))}
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

function DropdownMenu({ children, align = "left" }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: -8, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute top-[calc(100%+8px)] z-50 min-w-[200px]
                  rounded-[14px] bg-[#161817] border border-white/10
                  shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden
                  ${align === "right" ? "right-0" : "left-0 right-0"}`}
    >
      {children}
    </div>
  );
}

function MobileTopBar({ onMenuClick, sidebarOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
    );
  }, []);

  return (
    <nav
      ref={ref}
      className="md:hidden w-full px-4 py-3 flex items-center justify-between relative z-20"
    >
      <div className="flex items-baseline gap-1.5">
        <span className="logo-e8">E8</span>
        <span className="logo-markets">Markets</span>
      </div>

      <button
        className="flex items-center justify-center w-9 h-9 rounded-[10px]
                   bg-white/[0.05] hover:bg-white/[0.10] transition-colors active:scale-95"
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

export const NavbarStyles = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);