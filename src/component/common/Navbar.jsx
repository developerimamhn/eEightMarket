

import search from "../../assets/img/searchIcon.png";
import AiBtn from "../../assets/img/AiButton.png";
import userAvatar from "../../assets/img/image.png";
import Bell from "../../assets/img/belIcon.png";
import downArrow from "../../assets/img/Down_Arrow.png";

export default function Navbar({ onMenuClick, sidebarOpen }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const accountRef = useRef(null);
  const userRef = useRef(null);
  const mobileInputRef = useRef(null);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) setAccountOpen(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Auto-focus mobile search input */
  useEffect(() => {
    if (mobileSearchOpen && mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, [mobileSearchOpen]);

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav className="w-full px-3 sm:px-5 py-3 flex items-center justify-between relative z-50">

        {/* ────── LEFT: Search ────── */}
        {/* Desktop search — sm+ */}
        <div className="hidden sm:flex items-center">
          <div
            className={`flex items-center rounded-[16px] pl-3 pr-1 py-1 transition-all duration-300
              ${searchFocused ? "w-[280px] md:w-[396px]" : "w-[200px] md:w-[320px] lg:w-[396px]"}`}
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

        {/* Mobile search toggle — xs only */}
        <button
          onClick={() => setMobileSearchOpen((v) => !v)}
          className="flex sm:hidden items-center justify-center w-10 h-10 rounded-[12px]
                     bg-white/[0.05] hover:bg-white/[0.10] transition-colors active:scale-95"
          aria-label="Toggle search"
        >
          <img src={search} alt="search" className="w-5 h-5 object-contain opacity-60" />
        </button>

        {/* ────── RIGHT: Actions ────── */}
        <div className="flex items-center gap-1.5 sm:gap-3">

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
            <img src={Bell} alt="bell" className="w-8 h-8 sm:w-[48px] sm:h-[48px] object-cover" />
          </button>

          {/* Account Selector — md+ */}
          <div ref={accountRef} className="hidden md:block relative">
            <button
              onClick={() => setAccountOpen((v) => !v)}
              className="relative flex items-center justify-between
                         w-[190px] lg:w-[242px] h-[48px] rounded-[16px] px-[14px] lg:px-[20px]
                         bg-[#161817] hover:bg-[#1c1f1d] transition-colors"
            >
              {/* gradient border */}
              <span className="absolute inset-0 rounded-[16px] p-[1px] pointer-events-none"
                style={{ background: "linear-gradient(198.73deg, rgba(244,253,255,0.5) 5.95%, rgba(255,255,255,0) 43.28%)" }}>
                <span className="w-full h-full block rounded-[16px] bg-[#161817]" />
              </span>
              <span className="user leading-[150%] text-[13px] lg:text-[16px] font-normal text-white relative z-10 truncate mr-2">
                E8 Account 2110113586
              </span>
              <img
                src={downArrow} alt="expand"
                className={`w-4 h-4 object-contain relative z-10 shrink-0 transition-transform duration-200
                  ${accountOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Account dropdown */}
            {accountOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50
                              rounded-[14px] bg-[#161817] border border-white/10
                              shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden
                              animate-[fadeIn_0.15s_ease]">
                {["E8 Account 2110113586", "E8 Account 3210024571", "E8 Account 4120987654"].map((acc, i) => (
                  <button key={i}
                    className="w-full text-left px-4 py-3 text-[13px] text-white/70
                               hover:bg-white/[0.06] hover:text-white transition-colors first:pt-3.5 last:pb-3.5">
                    {acc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Profile */}
          <div ref={userRef} className="relative">
            <button
              onClick={() => setUserOpen((v) => !v)}
              className="flex items-center gap-2 pl-1 pr-2 sm:pr-3 py-1 rounded-[12px]
                         hover:bg-white/[0.05] transition-colors active:scale-[0.98]"
            >
              <img
                src={userAvatar} alt="James Carter"
                className="w-8 h-8 sm:w-[42px] sm:h-[42px] rounded-[16px] object-cover object-center
                           flex-shrink-0 shadow-[0_-1px_0_rgba(255,255,255,0.8)]"
              />
              <div className="hidden sm:block text-left">
                <div className="user text-[16px] text-white/85 leading-[150%] whitespace-nowrap">James Carter</div>
                <div className="user text-[10px] text-white/35 leading-[160%] whitespace-nowrap">james.carter@example.com</div>
              </div>
              <img
                src={downArrow} alt="expand"
                className={`hidden sm:block w-[20px] h-[20px] object-contain shrink-0 transition-transform duration-200
                  ${userOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* User dropdown */}
            {userOpen && (
              <div className="absolute top-[calc(100%+8px)] right-0 z-50 min-w-[200px]
                              rounded-[14px] bg-[#161817] border border-white/10
                              shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden
                              animate-[fadeIn_0.15s_ease]">

                {/* Mobile account info header */}
                <div className="md:hidden px-4 py-3 border-b border-white/10">
                  <div className="text-[12px] font-medium text-white/80 truncate">E8 Account 2110113586</div>
                </div>

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

          {/* Hamburger — lg से hide */}
          <button
            className="flex lg:hidden items-center justify-center w-9 h-9 rounded-[10px]
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
        </div>
      </nav>

      {/* ── Mobile Search Bar — slide down ── */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${mobileSearchOpen ? "max-h-[72px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="w-full bg-[#0a0d11] px-3 pb-3">
          <div
            className="flex items-center rounded-[14px] px-3 py-2.5 w-full"
            style={{ background: "linear-gradient(90deg, rgba(14,31,37,0.8) 0%, rgba(13,30,33,0.8) 55.43%)" }}
          >
            <img src={search} alt="" className="w-4 h-4 object-contain opacity-50 mr-2 shrink-0" />
            <input
              ref={mobileInputRef}
              type="text"
              placeholder="Search..."
              className="bg-transparent text-[13px] text-white/50 placeholder:text-white/30
                         outline-none flex-1 min-w-0"
            />
            <button className="shrink-0 ml-2">
              <img src={AiBtn} alt="AI" className="w-8 h-8 object-contain rounded-[10px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Keyframe animation for dropdowns */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

