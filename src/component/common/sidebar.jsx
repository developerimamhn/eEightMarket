


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





// import { useState, useId } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import bgImage from "../../assets/img/bg_3.png";
// import Dashboard from "../../assets/img/dashboard.png";
// import Analytics from "../../assets/img/analytics.png";
// import Border from "../../assets/img/border_full.png";
// import User from "../../assets/img/user.png";
// import Mmentoring from "../../assets/img/mentoring.png";
// import userStory from "../../assets/img/user_story.png";
// import News from "../../assets/img/news.png";
// import Calendar from "../../assets/img/calendar.png";
// import Help from "../../assets/img/help.png";
// import AiBrs from "../../assets/img/ai_web_browsing.png";
// import Moon from "../../assets/img/moon.png";

// /* ── Icon wrapper ── */
// const Ico = ({ src, alt }) => (
//   <img src={src} alt={alt} className="w-5 h-5 object-contain flex-shrink-0" />
// );

// /* ── Nav data ── */
// const navGroups = [
//   {
//     label: "NAVIGATION",
//     items: [
//       { id: "dashboard",   label: "Dashboard",       src: Dashboard,  route: "/" },
//       { id: "account",     label: "Account Overview", src: Analytics,  route: "/account" },
//       { id: "order",       label: "Order List",       src: Border,     route: "/order" },
//       { id: "user",        label: "User Setting",     src: User,       route: "/settings" },
//       { id: "leaderboard", label: "Leaderboard",      src: Mmentoring, route: "/leaderboard" },
//       { id: "extras",      label: "Account Extras",   src: userStory,  route: "/extras" },
//     ],
//   },
//   {
//     label: "APPS",
//     items: [
//       { id: "news",     label: "News Feed",          src: News,     route: "/news" },
//       { id: "calendar", label: "Economic Calendar",  src: Calendar, route: "/calendar" },
//     ],
//   },
// ];

// const bottomItems = [
//   { id: "help",    label: "Help Center (F&Q)", src: Help,  route: "/help" },
//   { id: "website", label: "Back to Website",   src: AiBrs, route: "/website" },
// ];

// /* ── Animated active border (unique IDs per instance) ── */
// const ActiveBorder = () => {
//   const uid = useId().replace(/:/g, "");
//   const gradId = `grad_${uid}`;

//   return (
//     <svg
//       className="absolute inset-0 w-full h-full pointer-events-none"
//       viewBox="0 0 223 48"
//       fill="none"
//       preserveAspectRatio="none"
//       aria-hidden
//     >
//       <defs>
//         <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="223" y2="0">
//           <stop offset="0%"   stopColor="#00E8FF" stopOpacity="0" />
//           <stop offset="50%"  stopColor="#00E8FF" stopOpacity="1" />
//           <stop offset="100%" stopColor="#00E8FF" stopOpacity="0" />
//         </linearGradient>
//       </defs>

//       {/* Static dim border */}
//       <rect x="0.5" y="0.5" width="222" height="47" rx="15.5" stroke="rgba(255,255,255,0.08)" />

//       {/* Animated glowing stroke */}
//       <rect
//         x="0.5" y="0.5" width="222" height="47" rx="15.5"
//         stroke={`url(#${gradId})`}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         style={{
//           filter: "drop-shadow(0 0 10px rgba(0,232,255,0.7))",
//           strokeDasharray: "580",
//           strokeDashoffset: "580",
//           animation: "sidebarDash 3s ease-in-out forwards",
//         }}
//       />

//       <style>{`
//         @keyframes sidebarDash {
//           to { stroke-dashoffset: 0; }
//         }
//       `}</style>
//     </svg>
//   );
// };

// /* ── Dark mode toggle ── */
// const Toggle = ({ on, onClick }) => (
//   <button
//     onClick={onClick}
//     role="switch"
//     aria-checked={on}
//     className={`relative w-[38px] h-[22px] rounded-full transition-colors duration-300 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E8FF]/50
//       ${on ? "bg-[#00E8FF]" : "bg-white/20"}`}
//   >
//     <span
//       className={`absolute top-[3px] w-4 h-4 rounded-full bg-white shadow transition-all duration-300
//         ${on ? "left-[19px]" : "left-[3px]"}`}
//     />
//   </button>
// );

// /* ── Single nav item ── */
// const NavItem = ({ src, label, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`relative flex items-center gap-[14px] w-full px-[20px] py-[13px] rounded-[16px]
//                 transition-colors duration-150 text-left outline-none
//                 focus-visible:ring-2 focus-visible:ring-[#00E8FF]/40
//                 ${active ? "bg-white/[0.06]" : "hover:bg-white/[0.04] active:bg-white/[0.06]"}`}
//   >
//     {active && <ActiveBorder />}

//     {/* Icon */}
//     <span className={`relative z-10 transition-opacity ${active ? "opacity-100" : "opacity-40"}`}>
//       <Ico src={src} alt={label} />
//     </span>

//     {/* Label */}
//     <span className={`relative z-10 text-[13.5px] font-normal leading-[150%] whitespace-nowrap transition-colors
//       ${active ? "text-white" : "text-white/60"}`}>
//       {label}
//     </span>

//     {/* Active left accent bar */}
//     {active && (
//       <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-r-full bg-[#00E8FF]
//                        shadow-[0_0_8px_rgba(0,232,255,0.8)]" />
//     )}
//   </button>
// );

// /* ── Group label ── */
// const GroupLabel = ({ children }) => (
//   <p className="px-[20px] mb-2 text-[10px] font-semibold tracking-[0.14em] text-white/25 uppercase select-none">
//     {children}
//   </p>
// );

// /* ── Sidebar ── */
// const Sidebar = ({ mobileOpen, setMobileOpen }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [darkMode, setDarkMode] = useState(true);

//   const handleNav = (item) => {
//     navigate(item.route);
//     setMobileOpen(false);
//   };

//   return (
//     <>
//       {/* ── Mobile overlay ── */}
//       <div
//         className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden
//                     transition-opacity duration-300
//                     ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//         onClick={() => setMobileOpen(false)}
//         aria-hidden
//       />

//       {/* ── Sidebar panel ── */}
//       <aside
//         className={`
//           fixed top-0 left-0 h-screen w-[240px] z-50
//           lg:relative lg:translate-x-0 lg:flex-shrink-0
//           transform-gpu will-change-transform transition-transform duration-300 ease-in-out
//           ${mobileOpen ? "translate-x-0 shadow-[4px_0_40px_rgba(0,0,0,0.5)]" : "-translate-x-full lg:translate-x-0"}
//         `}
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Dark overlay on bg image */}
//         <div className="absolute inset-0 bg-[#03151A]/90" />

//         {/* ── Content ── */}
//         <div className="relative z-10 flex flex-col h-full">

//           {/* Logo */}
//           <div className="flex items-baseline gap-[6px] px-5 pt-5 pb-4 shrink-0">
//             <span className="logo-e8 text-[22px] font-bold text-white tracking-tight">E8</span>
//             <span className="logo-markets text-[13px] text-white/50 font-medium tracking-wide">Markets</span>

//             {/* Mobile close button */}
//             <button
//               onClick={() => setMobileOpen(false)}
//               className="ml-auto lg:hidden w-7 h-7 flex items-center justify-center
//                          rounded-lg bg-white/[0.06] hover:bg-white/[0.10] transition-colors"
//               aria-label="Close sidebar"
//             >
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//                 stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round">
//                 <path d="M18 6L6 18M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="mx-4 mb-3 h-px bg-white/[0.06] shrink-0" />

//           {/* Nav groups — scrollable */}
//           <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-1
//                           scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10
//                           hover:scrollbar-thumb-white/20">
//             {navGroups.map((group, gi) => (
//               <div key={group.label} className={gi > 0 ? "mt-5" : ""}>
//                 <GroupLabel>{group.label}</GroupLabel>
//                 <div className="flex flex-col gap-0.5">
//                   {group.items.map((item) => (
//                     <NavItem
//                       key={item.id}
//                       {...item}
//                       active={location.pathname === item.route}
//                       onClick={() => handleNav(item)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </nav>

//           {/* Bottom section */}
//           <div className="shrink-0 px-2 pt-2 pb-4">
//             {/* Divider */}
//             <div className="mx-2 mb-3 h-px bg-white/[0.06]" />

//             <div className="flex flex-col gap-0.5">
//               {bottomItems.map((item) => (
//                 <NavItem
//                   key={item.id}
//                   {...item}
//                   active={location.pathname === item.route}
//                   onClick={() => handleNav(item)}
//                 />
//               ))}

//               {/* Dark mode toggle row */}
//               <div className="flex items-center gap-[10px] px-[20px] py-[13px]">
//                 <span className="opacity-40 flex-shrink-0">
//                   <Ico src={Moon} alt="Moon" />
//                 </span>
//                 <span className="text-[13.5px] text-white/50 flex-1 select-none">Dark Mode</span>
//                 <Toggle on={darkMode} onClick={() => setDarkMode((v) => !v)} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
