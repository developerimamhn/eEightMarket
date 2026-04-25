


// import { useState } from "react";
// import newsBg from "../assets/NewsBg.png";
// import cardBgTeal from "../assets/cardNews.png";
// import cardBgAmber from "../assets/cardNews_2.png";
// import forexliveLogo from "../assets/forexlive.png";
// import dailyfxLogo from "../assets/dailyfx.png";
// import fxstreetLogo from "../assets/fxstreet.png";

// // ─── Sources ──────────────────────────────────────────────
// const sourceLogos = {
//   forexlive: forexliveLogo,
//   DAILYFX: dailyfxLogo,
//   FXSTREET: fxstreetLogo,
// };

// const sourceBadgeBorder = {
//   forexlive: "border-[#00B8D9]/40",
//   DAILYFX: "border-[#4CAF50]/40",
//   FXSTREET: "border-[#FF9800]/40",
// };

// // ─── Card Background Map ───────────────────────────────────
// const cardBgMap = {
//   forexlive: cardBgTeal,
//   DAILYFX: cardBgTeal,
//   FXSTREET: cardBgAmber,
// };

// // ─── News Data ────────────────────────────────────────────
// const newsData = [
//   {
//     id: 1,
//     source: "forexlive",
//     date: "26/04/2025 18:54:16",
//     title:
//       "Canada votes on Monday. What the polls are saying and what's at stake for the loonie.",
//     body:
//       "At the turn of the year, it looked like a certainty that Conservatives would form a large majority in this year's Canadian election but Trump changed everything. His harsh tariffs on Canada.",
//     body2: "unceasing 51st state talk upended the focus on housing/culture and put it squarely on sovereignty. Conservative leader Pierre Poilievre struggled to strike the right chord on that issue"
//   },
//   {
//     id: 2,
//     source: "FXSTREET",
//     date: "26/04/2025 03:16:20",
//     title:
//       "United Kingdom CFTC GBP NC Net Positions rose from previous E6SK to.",
//     body:
//       "United Kingdom CFTC GBP NC Net Positions rose from previous f6.5K to 20.5K.",

//   },
//   {
//     id: 3,
//     source: "DAILYFX",
//     date: "26/04/2025 12:30:00",
//     title: "EUR/USD holds steady ahead of key ECB decision next week.",
//     body:
//       "The euro held its ground against the dollar as traders positioned ahead of the ECB policy meeting.",

//   },
//   {
//     id: 4,
//     source: "forexlive",
//     date: "26/04/2025 09:15:44",
//     title: "Oil prices surge on supply concerns from Middle East tensions.",
//     body:
//       "Crude oil jumped over 2% on renewed tensions in the Middle East.",

//   },
// ];

// // ─── Source Logo ──────────────────────────────────────────
// <img
//   src={sourceLogos[item.source]}
//   alt={item.source}
//   className="h-[20px] object-contain"
// />
// // ─── News Card ────────────────────────────────────────────
// const NewsCard = ({ source, date, title, body, body2 }) => (
//   <div
//     className="relative rounded-[16px] border border-white/10 overflow-hidden flex flex-col gap-[14px] p-[20px] min-h-[390px]"
//     style={{
//       backgroundImage: `url(${cardBgMap[source]})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}
//   >
//     {/* <div className="absolute inset-0 bg-black/50" /> */}

//     <div className="relative z-10 flex flex-col gap-[14px] h-full">
//       {/* Title */}
//       <h3 className="w-[413px] h-[52px] text-white text-[16px] leading-[160%] font-[500] font-neue-text">
//         {title}
//       </h3>

//       {/* Date + Source */}
//       <div className="flex items-center gap-[10px]">
//         <div className="flex items-center gap-[6px] bg-white/[0.06] rounded-[8px] px-[10px] py-[5px]">
//           <span className="text-[11px] text-white/40">{date}</span>
//         </div>
//         <SourceLogo source={source} />
//       </div>

//       {/* Body */}
//       <p className="w-[471px] h-[63px] text-white/70 text-[14px] leading-[150%] font-[450]">
//         {body}
//       </p>

//       <p className="w-[471px] h-[63px] text-white/70 text-[14px] leading-[150%] font-[450]">
//         {body2}
//       </p>

//       <button className="w-fit px-[18px] py-[9px] rounded-[10px] text-[13px] text-white border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] transition">
//         Read More
//       </button>
//     </div>
//   </div>
// );

// // ─── MAIN ────────────────────────────────────────────────
// const NewsFeed = () => {
//   const [activeSource, setActiveSource] = useState(null);

//   const filtered = activeSource
//     ? newsData.filter((n) => n.source === activeSource)
//     : newsData.slice(0, 2);

//   return (
//     <div className="w-full max-w-[1104px] mx-auto flex flex-col gap-[16px]">

//       {/* Banner */}
//       <div
//         className="relative w-full h-[220px] rounded-[24px] overflow-hidden border border-white/10"
//         style={{
//           backgroundImage: `url(${newsBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* <div className="absolute inset-0 bg-black/40" /> */}

//         <div className="relative z-10 flex items-center justify-center h-full">
//           <h1 className="text-white text-[28px] font-bold text-center leading-[1.4]">
//             Latest World News on<br />International Trade
//           </h1>
//         </div>
//       </div>

//       {/* Header */}
//       <div className="flex justify-between items-center h-[48px]">

//         <div className="flex items-center gap-[10px]">
//           <span className="text-white text-[16px] font-semibold">
//             News Feed
//           </span>
//         </div>

//         {/* Filters */}
//         <div className="flex gap-[8px] flex-wrap justify-end">
//           {sources.map((src) => (
//             <button
//               key={src}
//               onClick={() =>
//                 setActiveSource(activeSource === src ? null : src)
//               }
//               className={`px-[12px] py-[7px] rounded-[10px] text-[12px] border transition
//                 ${activeSource === src
//                   ? "bg-white/10 text-white border-white/30"
//                   : `${sourceBadgeBorder[src]} text-white/60 bg-white/5 hover:bg-white/10`
//                 }`}
//             >
//               {src}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Cards GRID (FIXED) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
//         {filtered.map((news) => (
//           <NewsCard key={news.id} {...news} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsFeed;







// import { useState } from "react";
// import newsBg from "../assets/NewsBg.png";
// import cardBgTeal from "../assets/cardNews.png";
// import cardBgAmber from "../assets/cardNews_2.png";
// import forexliveLogo from "../assets/forexlive.png";
// import dailyfxLogo from "../assets/dailyfx.png";
// import fxstreetLogo from "../assets/fxstreet.png";
// import tikIcon from "../assets/tikIcon.png";

// // ─── SOURCES ─────────────────────────────────────────────
// const sources = ["forexlive", "DAILYFX", "FXSTREET"];

// // logos
// const sourceLogos = {
//   forexlive: forexliveLogo,
//   DAILYFX: dailyfxLogo,
//   FXSTREET: fxstreetLogo,
// };

// // borders
// const sourceBadgeBorder = {
//   forexlive: "border-[#00B8D9]/40",
//   DAILYFX: "border-[#4CAF50]/40",
//   FXSTREET: "border-[#FF9800]/40",
// };

// // card bg
// const cardBgMap = {
//   forexlive: cardBgTeal,
//   DAILYFX: cardBgTeal,
//   FXSTREET: cardBgAmber,
// };

// // ─── DATA ────────────────────────────────────────────────
// const newsData = [
//   {
//     id: 1,
//     source: "forexlive",
//     date: "26/04/2025 18:54:16",
//     title:
//       "Canada votes on Monday. What the polls are saying and what's at stake for the loonie.",
//     body:
//       "At the turn of the year, it looked like a certainty that Conservatives would form a large majority.",
//     body2:
//       "Unceasing 51st state talk upended the focus on housing/culture and sovereignty issues.",
//   },
//   {
//     id: 2,
//     source: "FXSTREET",
//     date: "26/04/2025 03:16:20",
//     title: "United Kingdom CFTC GBP NC Net Positions rose.",
//     body: "Net positions increased from previous 6.5K to 20.5K.",
//   },
//   {
//     id: 3,
//     source: "DAILYFX",
//     date: "26/04/2025 12:30:00",
//     title: "EUR/USD holds steady ahead of ECB decision.",
//     body: "Euro remained stable before ECB meeting.",
//   },
// ];

// // ─── CARD ────────────────────────────────────────────────
// const NewsCard = ({ source, date, title, body, body2 }) => {
//   const bg = cardBgMap[source] || cardBgTeal;
//   const logo = sourceLogos[source];

//   return (
//     <div
//       className="relative rounded-[16px] border border-white/10 overflow-hidden flex flex-col p-[20px] min-h-[390px]"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* CONTENT */}
//       <div className="flex flex-col gap-[14px] flex-1">
//         <h3 className="text-white text-[16px] leading-[160%] font-[500]">
//           {title}
//         </h3>

//         {/* date + logo */}
//         <div className="flex items-center gap-[10px]">
//           <div className="flex items-center gap-[6px] bg-white/[0.06] rounded-[8px] px-[10px] py-[5px]">
//             <span className="text-[11px] text-white/40">{date}</span>
//           </div>

//           {logo && (
//             <img
//               src={logo}
//               className="w-[110px] h-[16px] object-contain"
//               alt="logo"
//             />
//           )}
//         </div>

//         <p className="text-white/70 text-[14px] leading-[150%]">
//           {body}
//         </p>

//         {body2 && (
//           <p className="text-white/70 text-[14px] leading-[150%]">
//             {body2}
//           </p>
//         )}
//       </div>

//       {/* BUTTON */}
//       <div className="mt-auto pt-[16px]">
//         <button className="w-[130px] h-[48px] rounded-[16px] relative overflow-hidden">

//           <div className="absolute inset-0 bg-[linear-gradient(78.82deg,rgba(0,232,255,0.4)_40.53%,rgba(3,33,40,0.04)_128.94%)]" />

//           <div className="absolute inset-0 rounded-[16px] p-[1px] bg-[linear-gradient(267deg,rgba(233,251,255,0.2),rgba(255,255,255,0.15))]">
//             <div className="w-full h-full rounded-[16px]" />
//           </div>

//           <span className="relative z-10 flex items-center justify-center w-full h-full text-white text-[13px]">
//             Read More
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// // ─── MAIN ───────────────────────────────────────────────
// export default function NewsFeed() {
//   const [activeSource, setActiveSource] = useState(null);

//   const filtered =
//     activeSource
//       ? newsData.filter((n) => n.source === activeSource)
//       : newsData.slice(0, 2); // শুধু 2 card

//   return (
//     <div className="w-full max-w-[1104px] mx-auto flex flex-col gap-[16px]">

//       {/* BANNER */}
//       <div
//         className="h-[220px] rounded-[24px] overflow-hidden"
//         style={{
//           backgroundImage: `url(${newsBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="h-full flex items-center justify-center">
//           <h1 className="text-white font-medium text-[34px] leading-[120%] text-center">
//             Latest World News on <br /> International Trade
//           </h1>
//         </div>
//       </div>

//       {/* FILTERS */}
//       <div className="flex justify-between items-center">
//         <span className="text-white text-[16px] font-semibold">
//           News Feed
//         </span>

//         <div className="flex gap-[8px]">
//           {sources.map((src) => (
//             <button
//               key={src}
//               onClick={() =>
//                 setActiveSource(activeSource === src ? null : src)
//               }
//               className={`flex items-center gap-[8px] px-[12px] py-[7px] rounded-[10px] border text-[12px]
//               ${
//                 activeSource === src
//                   ? "bg-white/10 border-white/30 text-white"
//                   : `${sourceBadgeBorder[src]} bg-white/5 text-white/60`
//               }`}
//             >
//               <img src={tikIcon} className="h-[20px]" />
//               <img src={sourceLogos[src]} className="h-[12px]" />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
//         {filtered.map((n) => (
//           <NewsCard key={n.id} {...n} />
//         ))}
//       </div>

//     </div>
//   );
// }






import { useState } from "react";
import newsBg from "../assets/NewsBg.png";
import cardBgTeal from "../assets/cardNews.png";
import cardBgAmber from "../assets/cardNews_2.png";
import forexliveLogo from "../assets/forexlive.png";
import dailyfxLogo from "../assets/dailyfx.png";
import fxstreetLogo from "../assets/fxstreet.png";
import tikIcon from "../assets/tikIcon.png";

const sources = ["forexlive", "DAILYFX", "FXSTREET"];

const sourceLogos = {
  forexlive: forexliveLogo,
  DAILYFX: dailyfxLogo,
  FXSTREET: fxstreetLogo,
};

const sourceBadgeBorder = {
  forexlive: "border-[#00B8D9]/40",
  DAILYFX: "border-[#4CAF50]/40",
  FXSTREET: "border-[#FF9800]/40",
};

const cardBgMap = {
  forexlive: cardBgTeal,
  DAILYFX: cardBgTeal,
  FXSTREET: cardBgAmber,
};

const newsData = [
  {
    id: 1,
    source: "forexlive",
    date: "26/04/2025 18:54:16",
    title:
      "Canada votes on Monday. What the polls are saying and what's at stake for the loonie.",
    body:
      "At the turn of the year, it looked like a certainty that Conservatives would form a large majority.",
    body2:
      "Unceasing 51st state talk shifted focus to sovereignty and economy pressure.",
  },
  {
    id: 2,
    source: "FXSTREET",
    date: "26/04/2025 03:16:20",
    title: "United Kingdom CFTC GBP NC Net Positions rose.",
    body: "Net positions increased from previous 6.5K to 20.5K.",
  },
  {
    id: 3,
    source: "DAILYFX",
    date: "26/04/2025 12:30:00",
    title: "EUR/USD holds steady ahead of ECB decision.",
    body: "Euro remained stable before ECB meeting.",
  },
];

const NewsCard = ({ source, date, title, body, body2 }) => {
  return (
    <div
      className="relative rounded-[16px] border border-white/10 overflow-hidden flex flex-col p-[20px] min-h-[390px]
      transition-transform duration-300 hover:scale-[1.01]"
      style={{
        backgroundImage: `url(${cardBgMap[source]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CONTENT */}
      <div className="flex flex-col gap-[14px] flex-1">
        <h3 className="text-white text-[16px] leading-[160%] font-[500]">
          {title}
        </h3>

        {/* date + logo */}
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[6px] bg-white/[0.06] rounded-[8px] px-[10px] py-[5px]">
            <span className="text-[11px] text-white/40">{date}</span>
          </div>

          <img
            src={sourceLogos[source]}
            className="w-[110px] h-[16px] object-contain"
            alt=""
          />
        </div>

        <p className="text-white/70 text-[14px] leading-[150%]">
          {body}
        </p>

        {body2 && (
          <p className="text-white/70 text-[14px] leading-[150%]">
            {body2}
          </p>
        )}
      </div>

      {/* BUTTON */}
      <div className="mt-auto pt-[16px]">
        <button className="group relative w-[130px] h-[48px] rounded-[16px] overflow-hidden">

          {/* bg */}
          <div className="absolute inset-0 bg-[linear-gradient(78deg,rgba(0,232,255,0.35),rgba(3,33,40,0.05))] group-hover:opacity-90 transition" />

          {/* border */}
          <div className="absolute inset-0 rounded-[16px] p-[1px] bg-[linear-gradient(267deg,rgba(233,251,255,0.2),rgba(255,255,255,0.15))]">
            <div className="w-full h-full rounded-[16px]" />
          </div>

          {/* text */}
          <span className="relative z-10 flex items-center justify-center w-full h-full text-[13px] text-white group-hover:scale-[1.05] transition">
            Read More
          </span>
        </button>
      </div>
    </div>
  );
};

export default function NewsFeed() {
  const [activeSource, setActiveSource] = useState(null);

  const filtered = activeSource
    ? newsData.filter((n) => n.source === activeSource)
    : newsData.slice(0, 2);

  return (
    <div className="w-full max-w-[1104px] mx-auto flex flex-col gap-[16px]">

      {/* BANNER */}
      <div
        className="h-[220px] rounded-[24px] overflow-hidden"
        style={{
          backgroundImage: `url(${newsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full flex items-center justify-center">
          <h1 className="w-[362px] text-white font-medium text-[34px] leading-[120%] text-center">
            Latest World News on <br /> International Trade
          </h1>
        </div>
      </div>

      {/* FILTER */}
      <div className="flex justify-between items-center">
        <span className="text-white text-[16px] font-semibold">
          News Feed
        </span>

        <div className="flex gap-[8px]">
          {sources.map((src) => (
            <button
              key={src}
              onClick={() =>
                setActiveSource(activeSource === src ? null : src)
              }
              className={`flex items-center gap-[8px] px-[12px] py-[7px] rounded-[10px] border text-[12px] transition
              ${
                activeSource === src
                  ? "bg-white/10 border-white/30 text-white"
                  : `${sourceBadgeBorder[src]} bg-white/5 text-white/60 hover:bg-white/10`
              }`}
            >
              <img src={tikIcon} className="h-[20px]" />
              <img src={sourceLogos[src]} className="h-[12px]" />
            </button>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {filtered.map((n) => (
          <NewsCard key={n.id} {...n} />
        ))}
      </div>
    </div>
  );
}