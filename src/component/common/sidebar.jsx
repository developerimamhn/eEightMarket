import { useState, useId, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bgImage from "../../assets/img/bg_3.png";
import Dashboard from "../../assets/img/dashboard.png";
import Analytics from "../../assets/img/analytics.png";
import Border from "../../assets/img/border_full.png";
import User from "../../assets/img/user.png";
import Mmentoring from "../../assets/img/mentoring.png";
import userStory from "../../assets/img/user_story.png";
import News from "../../assets/img/news.png";
import Calendar from "../../assets/img/calendar.png";
import Help from "../../assets/img/help.png";
import AiBrs from "../../assets/img/ai_web_browsing.png";
import Moon from "../../assets/img/moon.png";
import searchIcon from "../../assets/img/searchIcon.png";
import AiBtn from "../../assets/img/AiButton.png";
import userAvatar from "../../assets/img/image.png";
import Bell from "../../assets/img/belIcon.png";
import downArrow from "../../assets/img/Down_Arrow.png";

const Ico = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-[20px] h-[20px] object-contain" />
);
const navGroups = [
  {
    label: "NAVIGATION",
    items: [
      { id: "dashboard", label: "Dashboard", src: Dashboard, route: "/" },
      { id: "account", label: "Account Overview", src: Analytics, route: "/account" },
      { id: "order", label: "Order List", src: Border, route: "/order" },
      { id: "user", label: "User Setting", src: User, route: "/settings" },
      { id: "leaderboard", label: "Leaderboard", src: Mmentoring, route: "/leaderboard" },
      { id: "extras", label: "Account Extras", src: userStory, route: "/extras" },
    ],
  },
  {
    label: "APPS",
    items: [
      { id: "news", label: "News Feed", src: News, route: "/news" },
      { id: "calendar", label: "Economic Calendar", src: Calendar, route: "/calendar" },
    ],
  },
];

const bottomItems = [
  { id: "help", label: "Help Center (F&Q)", src: Help, route: "/help" },
  { id: "website", label: "Back to Website", src: AiBrs, route: "/website" },
];
const BtnActiveBg = () => {
  const uid = useId().replace(/:/g, "");
  const gradId = `grad${uid}`;

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 223 48" fill="none">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E8FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00E8FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00E8FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0H199C206.455 0 210.183 0 213.123 1.21793C217.043 2.84183 220.158 5.95662 221.782 9.87706C223 12.8174 223 16.5449 223 24C223 31.4551 223 35.1826 221.782 38.1229C220.158 42.0434 217.043 45.1582 213.123 46.7821C210.183 48 206.455 48 199 48H24C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      <path
        d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0H199C206.455 0 210.183 0 213.123 1.21793C217.043 2.84183 220.158 5.95662 221.782 9.87706C223 12.8174 223 16.5449 223 24C223 31.4551 223 35.1826 221.782 38.1229C220.158 42.0434 217.043 45.1582 213.123 46.7821C210.183 48 206.455 48 199 48H24C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          strokeDasharray: "310 310",
          strokeDashoffset: "620",
          animation: "btnDash 4s linear infinite",
        }}
      />
      <style>{`
        @keyframes btnDash {
          0%   { stroke-dashoffset: 620; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
};
const Toggle = ({ on, onClick }) => (
  <div
    onClick={onClick}
    className="w-[36px] h-[20px] p-[2px] rounded-[120px] border border-[#00858C] cursor-pointer flex items-center"
  >
    <div
      className={`w-3.5 h-3.5 rounded-full bg-[#00E8FF] transition-all duration-300
        ${on ? "ml-auto" : "ml-0"}`}
    />
  </div>
);
const NavItem = ({ src, label, active, onClick }) => (
  <button
  onClick={onClick}
  className={`nav-item ${active ? "active" : ""}`}
>
  <span className={`relative z-10 shrink-0 text-white transition ${active ? "brightness-0 invert" : "opacity-40"}`}>
    <Ico src={src} alt={label} />
  </span>
  <span className={`relative z-10 whitespace-nowrap transition ${active ? "text-white" : "text-white/70"}`}>
    {label}
  </span>
</button>
);
const MobileSidebarHeader = () => {
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
    <div className="md:hidden flex flex-col gap-2.5 mb-4">
      <div className="flex items-center gap-2">
        <div
          className="flex items-center flex-1 bg-[#080A0B] rounded-[14px] px-2 py-1.5 md:px-3 md:py-2.5"
         style={{
  background: `
    radial-gradient(ellipse at 20% 30%, rgba(0, 235, 255, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 80%, rgba(0, 235, 255, 0.08) 0%, transparent 50%),
    #080A0B
  `
}}
        >
          <img src={searchIcon} alt="search" className="w-4 h-4 object-contain opacity-50 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-[13px] text-white/50 placeholder:text-white/35
                       placeholder:text-[13px] outline-none flex-1 min-w-0"
          />
          <button className="shrink-0 ml-2">
            <img src={AiBtn} alt="AI" className="w-8 h-8 object-contain rounded-[10px]" />
          </button>
        </div>
        <button
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/4
                     hover:bg-white/8 transition-colors active:scale-95 shrink-0"
          aria-label="Notifications"
        >
          <img src={Bell} alt="bell" className="w-9 h-9 object-contain" />
        </button>
      </div>
      <div ref={accountRef} className="relative">
        <button
          onClick={() => setAccountOpen((v) => !v)}
          className="relative flex items-center justify-between w-full h-11 rounded-[14px] px-4
                     bg-[#161817] hover:bg-[#1c1f1d] transition-colors"
        >
          <span
            className="absolute inset-0 rounded-[14px] p-px pointer-events-none"
            style={{ background: "linear-gradient(198.73deg, rgba(244,253,255,0.5) 5.95%, rgba(255,255,255,0) 43.28%)" }}
          >
            <span className="w-full h-full block rounded-[14px] bg-[#161817]" />
          </span>
          <span className="gmail text-[13px] font-normal text-white relative z-10 truncate mr-2">
            E8 Account 2110113586
          </span>
          <img
            src={downArrow} alt="expand"
            className={`w-4 h-4 object-contain relative z-10 shrink-0 transition-transform duration-200
              ${accountOpen ? "rotate-180" : ""}`}
          />
        </button>

        {accountOpen && (
          <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-50
                          rounded-[14px] bg-[#161817] border border-white/10
                          shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden
                          animate-[fadeIn_0.15s_ease]">
            {["E8 Account 2110113586", "E8 Account 3210024571", "E8 Account 4120987654"].map((acc, i) => (
              <button key={i}
                className="w-full text-left px-4 py-3 text-[13px] text-white/70
                           hover:bg-white/6 hover:text-white transition-colors">
                {acc}
              </button>
            ))}
          </div>
        )}
      </div>
      <div ref={userRef} className="relative">
        <button
          onClick={() => setUserOpen((v) => !v)}
          className="relative flex items-center w-full gap-3 px-3 py-2.5 rounded-[14px] bg-[#161817]
                     hover:bg-[#1c1f1d] transition-colors"
        >
          <span
            className="absolute inset-0 rounded-[14px] p-[1px] pointer-events-none"
            style={{ background: "linear-gradient(198.73deg, rgba(244,253,255,0.3) 5.95%, rgba(255,255,255,0) 43.28%)" }}
          >
            <span className="w-full h-full block rounded-[14px] bg-[#161817]" />
          </span>

          <img
            src={userAvatar} alt="James Carter"
            className="w-9 h-9 rounded-[10px] object-cover object-center flex-shrink-0
                       relative z-10 shadow-[0_-1px_0_rgba(255,255,255,0.8)]"
          />
          <div className="flex-1 text-left relative z-10 min-w-0">
            <div className="user text-[13px] font-medium text-white/90 leading-[150%] truncate">James Carter</div>
            <div className="gmail text-[11px] text-white/30 leading-[160%] truncate">james.carter@example.com</div>
          </div>
          <div className="flex items-center gap-2 relative z-10 shrink-0">
            <img
              src={downArrow} alt="expand"
              className={`w-4 h-4 object-contain transition-transform duration-200
                ${userOpen ? "rotate-180" : ""}`}
            />
          </div>
        </button>
        {userOpen && (
          <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-50 min-w-full
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

      <div className="w-full h-[1px] bg-white/[0.06] mt-1" />
    </div>
  );
};

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = (item) => {
    navigate(item.route);
    setMobileOpen(false);
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`
          sidebar fixed top-0 left-0 h-screen w-full md:w-60 z-50
          md:static
          transform-gpu will-change-transform
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#03151A]/90" />
        <div className="relative z-10 flex flex-col h-full p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-3.75">
            <div className="flex items-baseline gap-1.5">
              <span className="logo-e8">E8</span>
              <span className="logo-markets">Markets</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.12] transition-colors active:scale-95"
              aria-label="Close menu"
            >
              <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <MobileSidebarHeader />
          <div className="flex-1 space-y-4 overflow-hidden">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="group-label mb-3 px-5">{group.label}</p>
                {group.items.map((item) => (
                  <NavItem
                    key={item.id}
                    {...item}
                    active={location.pathname === item.route}
                    onClick={() => handleClick(item)}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-4">
            {bottomItems.map((item) => (
              <NavItem
                key={item.id}
                {...item}
                active={location.pathname === item.route}
                onClick={() => handleClick(item)}
              />
            ))}
            <div className="flex items-center gap-[10px] px-[28px] py-[10px]">
              <span className="opacity-50">
                <Ico src={Moon} alt="Moon" />
              </span>
              <span
                className="w-[82px] h-[24px] flex items-center text-[16px] leading-[150%]"
                style={{
                  fontFamily: "Neue Haas Grotesk Text Pro",
                  fontWeight: 400,
                  color: "#FFFFFFB2",
                }}
              >
                Dark Mode
              </span>
              <Toggle on={darkMode} onClick={() => setDarkMode(!darkMode)} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
