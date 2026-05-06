


import { useState, useId } from "react";
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

// ───────── ICON ─────────
const Ico = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-[20px] h-[20px] object-contain" />
);

// ───────── DATA ─────────
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

// ───────── ACTIVE BORDER ─────────
const BtnActiveBg = () => {
  const uid = useId().replace(/:/g, "");
  const gradId = `grad${uid}`;

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="20 0 200 48" fill="none">
      <defs>
        <linearGradient id={gradId}>
          <stop offset="0%" stopColor="#00E8FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00E8FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00E8FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0H199C206.455 0 210.183 0 213.123 1.21793C217.043 2.84183 220.158 5.95662 221.782 9.87706C223 12.8174 223 16.5449 223 24C223 31.4551 223 35.1826 221.782 38.1229C220.158 42.0434 217.043 45.1582 213.123 46.7821C210.183 48 206.455 48 199 48H24C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
        stroke="rgba(255,255,255,0.1)"
      />

      <path
        d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0H199C206.455 0 210.183 0 213.123 1.21793C217.043 2.84183 220.158 5.95662 221.782 9.87706C223 12.8174 223 16.5449 223 24C223 31.4551 223 35.1826 221.782 38.1229C220.158 42.0434 217.043 45.1582 213.123 46.7821C210.183 48 206.455 48 199 48H24C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
        stroke={`url(#${gradId})`}
        strokeWidth="4"
        strokeLinecap="round"
        style={{
          filter: "drop-shadow(0 0 16px #00E8FF)",
          strokeDasharray: "300 300",
          animation: "dash 6s linear infinite",
        }}
      />

      <style>{`
        @keyframes dash {
          0% { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
};

// ───────── TOGGLE ─────────
const Toggle = ({ on, onClick }) => (
  <button
    onClick={onClick}
    className={`relative w-[38px] h-[22px] rounded-full transition-colors duration-300 shrink-0 ${on ? "bg-[#00E8FF]" : "bg-white/20"}`}
  >
    <span className={`absolute top-[3px] w-4 h-4 rounded-full bg-white transition-all duration-300 ${on ? "left-[19px]" : "left-[3px]"}`} />
  </button>
);

// ───────── NAV ITEM ─────────
const NavItem = ({ src, label, active, onClick }) => (
  <button onClick={onClick} className="nav-item ">
    {active && <BtnActiveBg />}

    <span
      className={`relative z-10 shrink-0 text-white transition ${
        active ? "brightness-0 invert" : "opacity-40"
      }`}
    >
      <Ico src={src} alt={label} />
    </span>

    <span
      className={`label-span whitespace-nowrap transition ${
        active ? "text-white" : "text-white/70"
      }`}
    >
      {label}
    </span>
  </button>
);

// ───────── SIDEBAR ─────────
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
    sidebar fixed top-0 left-0 h-screen w-[240px] z-50
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
          <div className="flex items-baseline gap-[6px] mb-[15px]">
            <span className="logo-e8">E8</span>
            <span className="logo-markets">Markets</span>
          </div>

          {/* NO SCROLL */}
          <div className="flex-1 space-y-4 overflow-hidden">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="group-label mb-[12px] px-[20px]">{group.label}</p>

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
              <span className="opacity-50"><Ico src={Moon} alt="Moon" /></span>
              <span className="text-[13.5px] text-white/50 flex-1">Dark Mode</span>
              <Toggle on={darkMode} onClick={() => setDarkMode(!darkMode)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;