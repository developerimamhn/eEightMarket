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
  return (
    <div
      className="relative rounded-[16px] border border-white/10 overflow-hidden flex flex-col p-[16px] sm:p-[20px] min-h-[320px] sm:min-h-[390px] transition-transform duration-300 "
      style={{
        backgroundImage: `url(${cardBgMap[source]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-[12px] sm:gap-[14px] flex-1">
        <h3 className="user text-white text-[16px] sm:text-[16px] leading-[160%]">
          {title}
        </h3>

        <div className="flex flex-wrap items-center gap-[8px] sm:gap-[40px]">
          <div className="flex items-center gap-[7px]">
            <img src={dateIcon} className="w-[28px] h-[28px] rounded-[14px] sm:w-[36px] sm:h-[36px] object-contain" alt="date icon" />
            <span className="News_Date">
              {date}
            </span>
          </div>
          <img src={sourceLogos[source]} className="h-[12px] sm:h-[16px] object-contain" alt={source} />
        </div>

        <p className="News_p">
          {body}
        </p>

        {body2 && (
           <p className="News_p">
          {body2}
        </p>
        )}
      </div>

      <div className="mt-auto pt-[16px]">
        <button className="group relative w-[130px] h-[48px] rounded-[16px]  overflow-hidden">
  {source === "FXSTREET" ? <BtnAmberBg /> : <BtnActiveBg />}

  <span className="relative z-10 flex items-center justify-center w-full h-full text-[16px] leading-[150%] text-white font-normal group-hover:scale-[1.05] transition">
    Read More
  </span>
</button>
      </div>
    </div>
  );
};

const newsData = [
  {
    id: 1,
    source: "forexlive",
    date: "26/04/2025 18:54:16",
    title: "Canada votes on Monday. What the polls are saying and what's at stake for the loonie.",
    body: "At the turn of the year, it looked like a certainty that Conservatives would form a large majority in this year's Canadian election but Trump changedeverything. His harsh tariffs on Canada .",
    body2: "unceasing 51st state talk upended the focus on housing/culture and put it squarely on sovereignty. Conservative leader Pierre Poilievre struggled to strike theright chord on that issue",
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

export default function NewsFeed() {
  const [activeSource, setActiveSource] = useState(null);

  const filtered = activeSource
    ? newsData.filter((n) => n.source === activeSource)
    : newsData.slice(0, 2);

  return (
    <div className="w-full  flex flex-col gap-[12px]  sm:gap-[16px] px-[12px] sm:px-[16px] lg:px-0">

      {/* BANNER */}
      <div
        className="h-[160px] sm:h-[200px] md:h-[220px]  rounded-[16px] sm:rounded-[24px] overflow-hidden relative"
        style={{
          backgroundImage: `url(${newsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full flex items-center justify-center ">
          <h1 className="user text-white text-[34px] sm:text-[34px] md:text-[34px] leading-[120%] text-center">
            Latest World News on <br /> International Trade
          </h1>
        </div>

        <div className="absolute bottom-[19px] right-[19px] flex items-center gap-[8px] sm:gap-[12px]">
          <img src={forexliveLogo} className="h-[7px] sm:h-[10px] object-contain" alt="forexlive" />
          <img src={dailyfxLogo} className="h-[7px] sm:h-[10px] object-contain" alt="dailyfx" />
          <img src={fxstreetLogo} className="h-[7px] sm:h-[10px] object-contain" alt="fxstreet" />
        </div>
      </div>

      {/* FILTER */}
      <div className="flex justify-between items-center gap-[12px] py-[24px] ">

        <div className="flex items-center gap-[8px] shrink-0">
          <img src={newsFeedHeaderLogo} className="w-[32px] h-[32px] rounded-[14px] sm:w-[43px] sm:h-[43px] object-contain" alt="news feed icon" />
          <span className="user text-white text-[15px] sm:text-[17.46px] font-medium leading-[160%] tracking-normal opacity-100">
            News Feed
          </span>
        </div>

        <div className="flex items-center gap-[8px] rounded-[10px] border border-white/10 bg-white/5 px-[20px] py-[12px] overflow-x-auto scrollbar-hide max-w-[60%] sm:max-w-none">
          {sources.map((src) => (
            <button
              key={src}
              onClick={() => setActiveSource(activeSource === src ? null : src)}
              className="flex items-center shrink-0 gap-[6px] sm:gap-[8px] px-[8px] sm:px-[12px] py-[5px] rounded-[6px] text-[11px] sm:text-[12px] transition"
            >
              <img src={tikIcon} className="h-[12px] sm:h-[20px]" alt="" />
              <img src={sourceLogos[src]} className="h-[8px] sm:h-[12px]" alt={src} />
            </button>
          ))}
        </div>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] sm:gap-[16px]">
        {filtered.map((n) => (
          <NewsCard key={n.id} {...n} />
        ))}
      </div>
    </div>
  );
}