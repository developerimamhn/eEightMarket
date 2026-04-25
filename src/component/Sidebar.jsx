
import { useState, useId } from "react";
import logo from "../assets/E8_Markets.png";
import bgImage from "../assets/bg_3.png";
import Dashboard from "../assets/dashboard.png";
import Analytics from "../assets/analytics.png";
import Border from "../assets/border_full.png";
import User from "../assets/user.png";
import Mmentoring from "../assets/mentoring.png";
import userStory from "../assets/user_story.png";
import News from "../assets/news.png";
import Calendar from "../assets/calendar.png";
import Help from "../assets/help.png";
import AiBrs from "../assets/ai_web_browsing.png";
import Moon from "../assets/moon.png";

const Ico = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-[20px] h-[20px] object-contain" />
);

const IconDashboard = () => <Ico src={Dashboard} alt="Dashboard" />;
const IconAccount = () => <Ico src={Analytics} alt="Analytics" />;
const IconOrder = () => <Ico src={Border} alt="Border" />;
const IconUser = () => <Ico src={User} alt="User" />;
const IconLeaderboard = () => <Ico src={Mmentoring} alt="Mentoring" />;
const IconExtras = () => <Ico src={userStory} alt="User Story" />;
const IconNews = () => <Ico src={News} alt="News" />;
const IconCalendar = () => <Ico src={Calendar} alt="Calendar" />;
const IconHelp = () => <Ico src={Help} alt="Help" />;
const IconWebsite = () => <Ico src={AiBrs} alt="AI Browse" />;
const IconMoon = () => <Ico src={Moon} alt="Moon" />;

const IconClose = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const BtnActiveBg = () => {
  const uid = useId().replace(/:/g, "");
  const p0 = `p0${uid}`;
  const p1 = `p1${uid}`;
  const p2 = `p2${uid}`;

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 223 48"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0H199C206.455 0 210.183 0 213.123 1.21793C217.043 2.84183 220.158 5.95662 221.782 9.87706C223 12.8174 223 16.5449 223 24C223 31.4551 223 35.1826 221.782 38.1229C220.158 42.0434 217.043 45.1582 213.123 46.7821C210.183 48 206.455 48 199 48H24C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z" fill={`url(#${p0})`} fillOpacity="0.8"/>
      <path d="M24 0.5H199C202.734 0.5 205.51 0.500557 207.721 0.651367C209.926 0.801876 211.533 1.1002 212.932 1.67969C216.73 3.25284 219.747 6.27043 221.32 10.0684C221.9 11.4674 222.198 13.0736 222.349 15.2793C222.499 17.4896 222.5 20.2656 222.5 24C222.5 27.7344 222.499 30.5104 222.349 32.7207C222.198 34.9264 221.9 36.5326 221.32 37.9316C219.747 41.7296 216.73 44.7472 212.932 46.3203C211.533 46.8998 209.926 47.1981 207.721 47.3486C205.51 47.4994 202.734 47.5 199 47.5H24C20.2656 47.5 17.4896 47.4994 15.2793 47.3486C13.0736 47.1981 11.4674 46.8998 10.0684 46.3203C6.27042 44.7472 3.25284 41.7296 1.67969 37.9316C1.1002 36.5326 0.801876 34.9264 0.651367 32.7207C0.500557 30.5104 0.5 27.7344 0.5 24C0.5 20.2656 0.500557 17.4896 0.651367 15.2793C0.801876 13.0736 1.1002 11.4674 1.67969 10.0684C3.25284 6.27042 6.27042 3.25284 10.0684 1.67969C11.4674 1.1002 13.0736 0.801876 15.2793 0.651367C17.4896 0.500557 20.2656 0.5 24 0.5Z" stroke={`url(#${p1})`} strokeOpacity="0.5"/>
      <line x1="69" y1="0.5" x2="209" y2="0.499988" stroke={`url(#${p2})`} strokeOpacity="0.7"/>
      <defs>
        <linearGradient id={p0} x1="80" y1="86" x2="128.5" y2="5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E8FF" stopOpacity="0.5"/>
          <stop offset="1" stopColor="#032128" stopOpacity="0.05"/>
        </linearGradient>
        <linearGradient id={p1} x1="218" y1="-6.69233e-06" x2="8.00001" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E9FBFF" stopOpacity="0.4"/>
          <stop offset="1" stopColor="white" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id={p2} x1="69" y1="1.5" x2="209" y2="1.49999" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.49" stopColor="#9DEEFF"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const navGroups = [
  {
    label: "NAVIGATION",
    items: [
      { id: "dashboard", label: "Dashboard", icon: IconDashboard },
      { id: "account", label: "Account Overview", icon: IconAccount },
      { id: "order", label: "Order List", icon: IconOrder },
      { id: "user", label: "User Setting", icon: IconUser },
      { id: "leaderboard", label: "Leaderboard", icon: IconLeaderboard },
      { id: "extras", label: "Account Extras", icon: IconExtras },
    ],
  },
  {
    label: "APPS",
    items: [
      { id: "news", label: "News Feed", icon: IconNews },
      { id: "calendar", label: "Economic Calender", icon: IconCalendar },
    ],
  },
];

const bottomItems = [
  { id: "help", label: "Help Center (F&Q)", icon: IconHelp },
  { id: "website", label: "Back to Website", icon: IconWebsite },
];

const NavItem = ({ icon: Icon, label, active, onClick, collapsed }) => (
  <button
    onClick={onClick}
    title={collapsed ? label : undefined}
    className={`relative w-full flex items-center gap-[10px] px-[12px] py-[10px] rounded-[10px] text-left overflow-hidden  outline-none
      ${collapsed ? "justify-center" : ""}
      ${active ? "text-white" : "border border-transparent text-white/60 hover:text-white/80"}`}
  >
    {active && <BtnActiveBg />}
    <span className={`shrink-0 relative z-10   ${active ? "opacity-100 brightness-0 invert" : "opacity-40"}`}>
      <Icon />
    </span>
    {!collapsed && (
      <span className="relative z-10 text-[13.5px] font-medium leading-[1.5] whitespace-nowrap">
        {label}
      </span>
    )}
  </button>
);

const Toggle = ({ on, onClick }) => (
  <button
    onClick={onClick}
    className={`relative w-[38px] h-[22px] rounded-full transition-colors duration-300 shrink-0
      ${on ? "bg-[#00E8FF]" : "bg-white/20"}`}
  >
    <span className={`absolute top-[3px] w-[16px] h-[16px] rounded-full bg-white transition-all duration-300 ${on ? "left-[19px]" : "left-[3px]"}`} />
  </button>
);

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const [active, setActive] = useState("user");
  const [darkMode, setDarkMode] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const sidebarContent = (isMobile = false) => (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#03151A]/92" />
      <div className="relative z-10 flex flex-col h-full py-[20px] px-[14px]">

        <div className={`flex items-center mb-[28px] px-[4px] ${collapsed && !isMobile ? "justify-center" : "justify-between"}`}>
          {(!collapsed || isMobile) && (
            <img src={logo} alt="E8 Markets" className="h-[24px]" />
          )}
          {!isMobile && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-white/40 hover:text-white transition p-1 rounded-lg hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {collapsed
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                }
              </svg>
            </button>
          )}
          {isMobile && (
            <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white p-1">
              <IconClose />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-[20px] flex-1 overflow-y-auto scrollbar-none">
          {navGroups.map((group) => (
            <div key={group.label}>
              {(!collapsed || isMobile) && (
                <p className="text-[10px] text-white/30 px-[12px] mb-[6px]">{group.label}</p>
              )}
              {group.items.map((item) => (
                <NavItem
                  key={item.id}
                  {...item}
                  active={active === item.id}
                  collapsed={collapsed && !isMobile}
                  onClick={() => {
                    setActive(item.id);
                    if (isMobile) setMobileOpen(false);
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-[16px] flex flex-col gap-[2px]">
          {bottomItems.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              active={active === item.id}
              collapsed={collapsed && !isMobile}
              onClick={() => {
                setActive(item.id);
                if (isMobile) setMobileOpen(false);
              }}
            />
          ))}
          {(!collapsed || isMobile) && (
            <div className="flex items-center gap-[10px] px-[12px] py-[10px]">
              <span className="opacity-50"><IconMoon /></span>
              <span className="text-[13.5px] text-white/50 flex-1">Dark Mode</span>
              <Toggle on={darkMode} onClick={() => setDarkMode(!darkMode)} />
            </div>
          )}
          {collapsed && !isMobile && (
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex justify-center px-[12px] py-[10px] opacity-50 hover:opacity-80"
              title="Dark Mode"
            >
              <IconMoon />
            </button>
          )}
        </div>

      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes borderRotate { to { --angle: 360deg; } }
        .sb-border { position: relative; border-radius: 22px; padding: 1.5px; }
        .sb-border::before {
          content: ''; position: absolute; inset: 0; border-radius: 22px;
          background: conic-gradient(from var(--angle),
            transparent 0deg, transparent 260deg,
            rgba(0,232,255,0.15) 290deg, rgba(0,232,255,0.9) 320deg,
            #86b4b4 340deg, rgba(0,232,255,0.9) 355deg, transparent 360deg);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          animation: borderRotate 6s linear infinite;
          pointer-events: none;
        }
      `}</style>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className={`lg:hidden fixed top-0 left-0 z-50 h-full w-[260px] transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="sb-border w-full h-full">
          {sidebarContent(true)}
        </div>
      </div>

      <div className={`hidden lg:block sb-border h-screen shrink-0 transition-all duration-300
        ${collapsed ? "w-[68px]" : "w-[240px]"}`}>
        {sidebarContent(false)}
      </div>
    </>
  );
};

export default Sidebar;