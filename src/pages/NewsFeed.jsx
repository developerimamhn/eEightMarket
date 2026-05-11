

import { useState } from "react";
import newsBg from "../assets/img/NewsBg.png";
import cardBgTeal from "../assets/img/News1st_card_bg.png";
import cardBgAmber from "../assets/img/News2nd_card_bg.png";
import forexliveLogo from "../assets/img/forexlive.png";
import dailyfxLogo from "../assets/img/dailyfx.png";
import fxstreetLogo from "../assets/img/fxstreet.png";
import tikIcon from "../assets/img/tikIcon.png";
import newsFeedHeaderLogo from "../assets/img/NewsFeedLogoCard.png";
import dateIcon from "../assets/img/DateLogo.png";

const sources = ["forexlive", "DAILYFX", "FXSTREET"];

const sourceLogos = {
  forexlive: forexliveLogo,
  DAILYFX: dailyfxLogo,
  FXSTREET: fxstreetLogo,
};

const cardBgMap = {
  forexlive: cardBgTeal,
  DAILYFX: cardBgTeal,
  FXSTREET: cardBgAmber,
};
const BtnActiveBg = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 130 51"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="39" y1="3.5" x2="115" y2="3.499993" stroke="url(#paint0_linear_11_10)" strokeOpacity="0.9" />
    <path d="M0 27C0 19.5449 0 15.8174 1.21793 12.8771C2.84183 8.95662 5.95662 5.84183 9.87706 4.21793C12.8174 3 16.5449 3 24 3H106C113.455 3 117.183 3 120.123 4.21793C124.043 5.84183 127.158 8.95662 128.782 12.8771C130 15.8174 130 19.5449 130 27C130 34.4551 130 38.1826 128.782 41.1229C127.158 45.0434 124.043 48.1582 120.123 49.7821C117.183 51 113.455 51 106 51H24C16.5449 51 12.8174 51 9.87706 49.7821C5.95662 48.1582 2.84183 45.0434 1.21793 41.1229C0 38.1826 0 34.4551 0 27Z" fill="url(#paint1_linear_11_10)" fillOpacity="0.8" />
    <path d="M24 3.5H106C109.734 3.5 112.51 3.50056 114.721 3.65137C116.926 3.80188 118.533 4.10019 119.932 4.67969C123.73 6.25284 126.747 9.27043 128.32 13.0684C128.9 14.4674 129.198 16.0736 129.349 18.2793C129.499 20.4896 129.5 23.2656 129.5 27C129.5 30.7344 129.499 33.5104 129.349 35.7207C129.198 37.9264 128.9 39.5326 128.32 40.9316C126.747 44.7296 123.73 47.7472 119.932 49.3203C118.533 49.8998 116.926 50.1981 114.721 50.3486C112.51 50.4994 109.734 50.5 106 50.5H24C20.2656 50.5 17.4896 50.4994 15.2793 50.3486C13.0736 50.1981 11.4674 49.8998 10.0684 49.3203C6.27042 47.7472 3.25284 44.7296 1.67969 40.9316C1.1002 39.5326 0.801876 37.9264 0.651367 35.7207C0.500557 33.5104 0.5 30.7344 0.5 27C0.5 23.2656 0.500557 20.4896 0.651367 18.2793C0.801876 16.0736 1.1002 14.4674 1.67969 13.0684C3.25284 9.27042 6.27042 6.25284 10.0684 4.67969C11.4674 4.1002 13.0736 3.80188 15.2793 3.65137C17.4896 3.50056 20.2656 3.5 24 3.5Z" stroke="url(#paint2_linear_11_10)" strokeOpacity="0.5" />
    <defs>
      <linearGradient id="paint0_linear_11_10" x1="39" y1="1.5" x2="115" y2="1.49999" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.49" stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_11_10" x1="61.5" y1="48" x2="168.477" y2="-9.28254" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E8FF" stopOpacity="0.5" />
        <stop offset="1" stopColor="#032128" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="paint2_linear_11_10" x1="127.085" y1="2.99999" x2="0.515033" y2="19.8652" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E9FBFF" stopOpacity="0.4" />
        <stop offset="1" stopColor="white" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
);

const BtnAmberBg = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 130 51"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="39" y1="3.5" x2="115" y2="3.499993" stroke="url(#paint0_amber)" strokeOpacity="0.9" />
    <path d="M0 27C0 19.5449 0 15.8174 1.21793 12.8771C2.84183 8.95662 5.95662 5.84183 9.87706 4.21793C12.8174 3 16.5449 3 24 3H106C113.455 3 117.183 3 120.123 4.21793C124.043 5.84183 127.158 8.95662 128.782 12.8771C130 15.8174 130 19.5449 130 27C130 34.4551 130 38.1826 128.782 41.1229C127.158 45.0434 124.043 48.1582 120.123 49.7821C117.183 51 113.455 51 106 51H24C16.5449 51 12.8174 51 9.87706 49.7821C5.95662 48.1582 2.84183 45.0434 1.21793 41.1229C0 38.1826 0 34.4551 0 27Z" fill="url(#paint1_amber)" fillOpacity="0.8" />
    <path d="M24 3.5H106C109.734 3.5 112.51 3.50056 114.721 3.65137C116.926 3.80188 118.533 4.10019 119.932 4.67969C123.73 6.25284 126.747 9.27043 128.32 13.0684C128.9 14.4674 129.198 16.0736 129.349 18.2793C129.499 20.4896 129.5 23.2656 129.5 27C129.5 30.7344 129.499 33.5104 129.349 35.7207C129.198 37.9264 128.9 39.5326 128.32 40.9316C126.747 44.7296 123.73 47.7472 119.932 49.3203C118.533 49.8998 116.926 50.1981 114.721 50.3486C112.51 50.4994 109.734 50.5 106 50.5H24C20.2656 50.5 17.4896 50.4994 15.2793 50.3486C13.0736 50.1981 11.4674 49.8998 10.0684 49.3203C6.27042 47.7472 3.25284 44.7296 1.67969 40.9316C1.1002 39.5326 0.801876 37.9264 0.651367 35.7207C0.500557 33.5104 0.5 30.7344 0.5 27C0.5 23.2656 0.500557 20.4896 0.651367 18.2793C0.801876 16.0736 1.1002 14.4674 1.67969 13.0684C3.25284 9.27042 6.27042 6.25284 10.0684 4.67969C11.4674 4.1002 13.0736 3.80188 15.2793 3.65137C17.4896 3.50056 20.2656 3.5 24 3.5Z" stroke="url(#paint2_amber)" strokeOpacity="0.5" />
    <defs>
      <linearGradient id="paint0_amber" x1="39" y1="1.5" x2="115" y2="1.49999" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.49" stopColor="#FFB347" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_amber" x1="61.5" y1="48" x2="168.477" y2="-9.28254" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF9800" stopOpacity="0.5" />
        <stop offset="1" stopColor="#281400" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="paint2_amber" x1="127.085" y1="2.99999" x2="0.515033" y2="19.8652" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF3E0" stopOpacity="0.4" />
        <stop offset="1" stopColor="#FFB347" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
);

const NewsCard = ({ source, date, title, body, body2 }) => {
  const isAmber = source === "FXSTREET";

  return (
    <div
     className={`relative rounded-2xl border ${isAmber ? "border-[rgba(255,152,0,0.12)]" : "border-[rgba(0,235,255,0.12)]"} overflow-hidden flex flex-col p-4 sm:p-5 min-h-70 sm:min-h-90 lg:min-h-97.5 transition-transform duration-300 h-px`}
      style={{
        backgroundImage: `url(${cardBgMap[source]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-2.5 sm:gap-3.5 flex-1">
        <h3 className="user text-white text-[14px] sm:text-[15px] lg:text-[16px] leading-[160%]">
          {title}
        </h3>

        {/* Meta row: date + source logo */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-10">
          <div className="flex items-center gap-1.5">
            <img
              src={dateIcon}
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-xl object-contain flex-shrink-0"
              alt="date icon"
            />
            <span className="News_Date text-[10px] sm:text-[11px] lg:text-[12px] text-white/70 whitespace-nowrap">
              {date}
            </span>
          </div>
          <img
            src={sourceLogos[source]}
            className="h-2.5 sm:h-3 lg:h-4 object-contain"
            alt={source}
          />
        </div>

        {/* Body text */}
        <p className="News_p text-[12px] sm:text-[13px] lg:text-[14px] leading-[170%] text-white/70">
          {body}
        </p>

        {body2 && (
          <p className="News_p text-[12px] sm:text-[13px] lg:text-[14px] leading-[170%] text-white/70">
            {body2}
          </p>
        )}
      </div>

      {/* Read More button — fluid width on mobile, fixed on larger screens */}
      <div className="mt-auto pt-4">
        <button
          className="group relative h-11 sm:h-12 w-full sm:w-[130px] rounded-2xl overflow-hidden
                     active:scale-95 transition-transform"
        >
          {isAmber ? <BtnAmberBg /> : <BtnActiveBg />}
          <span className="relative z-10 flex items-center justify-center w-full h-full
                           text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] text-white font-normal
                           group-hover:scale-[1.03] transition-transform">
            Read More
          </span>
        </button>
      </div>
    </div>
  );
};

/* ── Filter pill for each source ── */
const FilterPill = ({ src, onClick }) => (
  <button
    onClick={onClick}
    className='flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg
                text-[11px] sm:text-[12px] shrink-0 transition-all duration-200'
                
  >
    <img
      src={tikIcon}
      className={`h-3 sm:h-4 flex-shrink-0 transition-opacity `}
      alt=""
    />
    <img
      src={sourceLogos[src]}
      className="h-2.5 sm:h-3 lg:h-3.5 object-contain flex-shrink-0"
      alt={src}
    />
  </button>
);

const newsData = [
  {
    id: 1,
    source: "forexlive",
    date: "26/04/2025 18:54:16",
    title: "Canada votes on Monday. What the polls are saying and what's at stake for the loonie.",
    body: "At the turn of the year, it looked like a certainty that Conservatives would form a large majority in this year's Canadian election but Trump changed everything. His harsh tariffs on Canada.",
    body2: "unceasing 51st state talk upended the focus on housing/culture and put it squarely on sovereignty. Conservative leader Pierre Poilievre struggled to strike the right chord on that issue",
  },
  {
    id: 2,
    source: "FXSTREET",
    date: "26/04/2025 03:16:20",
    title: "United Kingdom CFTC GBP NC Net Positions rose.",
    body: "United Kingdom CFTC GBP NC Net Positions rose from previous f6.5K to 20.5K...",
  },
  {
    id: 3,
    source: "DAILYFX",
    date: "26/04/2025 12:30:00",
    title: "EUR/USD holds steady ahead of ECB decision.",
    body: "Euro remained stable before ECB meeting.",
  },
];

/* ── Main component ── */
export default function NewsFeed() {
  const [activeSource, setActiveSource] = useState(null);

  const filtered = activeSource
    ? newsData.filter((n) => n.source === activeSource)
    : newsData.slice(0, 2);

  const toggleSource = (src) =>
    setActiveSource((prev) => (prev === src ? null : src));

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4 px-3 sm:px-4 lg:px-0 relative">
      
      
      <div
        className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative 
        min-h-40 sm:min-h-55 md:min-h-65 lg:min-h-70 border-[#ffffff33] border-px border"
        style={{
          backgroundImage: `url(${newsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >     
        <svg className="absolute top-0 right-0 w-1/2 h-px " viewBox="0 0 437 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="-4.37114e-08" y1="0.5" x2="437" y2="0.499962" stroke="url(#paint0_linear_2043_7469)"/>
        <defs>
        <linearGradient id="paint0_linear_2043_7469" x1="4.37114e-08" y1="1.5" x2="437" y2="1.49996" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0"/>
        <stop offset="0.49" stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        </defs>
        </svg>
        <div className="absolute inset-0  flex items-center justify-center px-4 py-8 sm:py-12">
          <h1 className="user text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px]
            leading-[130%] sm:leading-[120%] text-center">
            Latest World News on <br className="hidden sm:block" /> International Trade
          </h1>
        </div>

        {/* Source logos — bottom-right */}
        <div className="absolute bottom-3 right-3 sm:bottom-4.75 sm:right-4.75
                        flex items-center gap-2 sm:gap-3">
          <img src={forexliveLogo} className="h-2 sm:h-2.5 object-contain" alt="forexlive" />
          <img src={dailyfxLogo}   className="h-2 sm:h-2.5 object-contain" alt="dailyfx" />
          <img src={fxstreetLogo}  className="h-2 sm:h-2.5 object-contain" alt="fxstreet" />
        </div>
      </div>

      {/* ── FILTER BAR ── */}
     
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-3 sm:py-6">

        {/* Label */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src={newsFeedHeaderLogo}
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10.75 lg:h-10.75 rounded-[14px] object-contain shrink-0"
            alt="news feed icon"
          />
          <span className="user text-white text-[15px] sm:text-[16px] lg:text-[17.46px] leading-[160%] tracking-normal">
            News Feed
          </span>
        </div>

        {/* Filter pills container — scrollable on xs, wraps on sm+ */}
        <div
          className="flex items-center gap-1.5 sm:gap-2
                     rounded-[10px] border border-white/10 bg-white/5
                     px-3 sm:px-5 py-2 sm:py-3
                     overflow-x-auto scrollbar-none
                     w-full sm:w-auto"
        >
          {sources.map((src) => (
            <FilterPill
              key={src}
              src={src}
              isActive={activeSource === src}
              onClick={() => toggleSource(src)}
            />
          ))}
          
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {filtered.length > 0 ? (
          filtered.map((n) => <NewsCard key={n.id} {...n} />)
        ) : (
          <div className="col-span-full text-center py-16 text-white/30 text-sm">
            No news found for this source.
          </div>
        )}
      </div>

      
    </div>
  );
}



