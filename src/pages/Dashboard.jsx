import { useState, useRef, useCallback } from "react";

import icon from "../assets/img/trade-up.svg"
import icon2 from "../assets/img/trade-down.svg"
import icon3 from "../assets/img/exchange-02.svg"
import icon4 from "../assets/img/medal-01.svg"
import icon5 from "../assets/img/analysis-text-link.svg"
import icon6 from "../assets/img/auto-conversations.svg"
import icon7 from "../assets/img/profit.svg"
import icon8 from "../assets/img/auto-conversations (1).svg"
import icon9 from "../assets/img/chart-down.svg"
import Group_26 from "../assets/img/Group 26.svg";

const stats = [
  {
    id: 1,
    title: "Average Win",
    value: "$987.47",
    icon: icon,
  },
  {
    id: 2,
    title: "Average Loss",
    value: "-$781.70",
    icon: icon2,
  },
  {
    id: 3,
    title: "Win Ratio",
    value: "66%",
    icon: icon3,
  },
  {
    id: 4,
    title: "Risk Reward",
    value: "66%",
    icon: icon4,
  },
];

const cards = [
  {
    id: 1,
    icon: icon6,
    title: "Minimum Trading Days",
    badge: "Passes",
    minLabel: "Minimum",
    minLabel2: "Result",
    minValue: "1 Days",
    currentLabel: "Current Result",
    currentValue: "1 Days",
    glowColor: "#00E8FF",
  },
  {
    id: 2,
    icon: icon7,
    title: "Profit Target",
    badge: "Passes",
    minLabel: "Minimum",
    minLabel2: "Result",
    minValue: "US$400.00",
    currentLabel: "Current Result",
    currentValue: "US$411.18",
    glowColor: "#BF0CFF",
  },
  {
    id: 3,
    icon: icon8,
    title: "Initial Balance Loss",
    badge: "Passes",
    minLabel: "Minimum",
    minLabel2: "Result",
    minValue: "US$400.00",
    currentLabel: "Current Result",
    currentValue: "US$0.00",
    glowColor: "#EEEEEE",
  },
];

// SVG Diagonal Hatch Pattern Background
const HatchPattern = () => (
  <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 276 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M9.56641 16H8C7.92584 16 7.85199 15.9961 7.77832 15.9941L24.416 0H26.2109L9.56641 16ZM12.9727 16H11.1709L27.8145 0H29.6172L12.9727 16ZM16.375 16H14.5771L31.2207 0H33.0195L16.375 16ZM19.7773 16H17.9795L34.623 0H36.4219L19.7773 16ZM23.1836 16H21.3818L38.0254 0H39.8281L23.1836 16ZM26.582 16H24.7881L41.4316 0H43.2266L26.582 16ZM29.9883 16H28.1865L44.8301 0H46.6328L29.9883 16ZM33.3867 16H31.5928L48.2363 0H50.0312L33.3867 16ZM36.793 16H34.9912L51.6348 0H53.4375L36.793 16ZM40.1914 16H38.3975L55.041 0H56.8359L40.1914 16ZM43.5977 16H41.7959L58.4395 0H60.2422L43.5977 16ZM46.9961 16H45.2021L61.8457 0H63.6406L46.9961 16ZM50.4023 16H48.6006L65.2441 0H67.0469L50.4023 16ZM53.8086 16H52.0068L68.6504 0H70.4531L53.8086 16ZM57.207 16H55.4131L72.0566 0H73.8516L57.207 16ZM60.6133 16H58.8115L75.4551 0H77.2578L60.6133 16ZM64.0117 16H62.2178L78.8613 0H80.6562L64.0117 16ZM67.418 16H65.6162L82.2598 0H84.0625L67.418 16ZM70.8164 16H69.0225L85.666 0H87.4609L70.8164 16ZM74.2227 16H72.4209L89.0645 0H90.8672L74.2227 16ZM77.6211 16H75.8271L92.4707 0H94.2656L77.6211 16ZM81.0273 16H79.2256L95.8691 0H97.6719L81.0273 16ZM84.4297 16H82.6318L99.2754 0H101.074L84.4297 16ZM87.832 16H86.0342L102.678 0H104.477L87.832 16ZM91.2344 16H89.4365L106.08 0H107.879L91.2344 16ZM94.6367 16H92.8389L109.482 0H111.281L94.6367 16ZM98.0391 16H96.2412L112.885 0H114.684L98.0391 16ZM101.441 16H99.6436L116.287 0H118.086L101.441 16ZM104.844 16H103.046L119.689 0H121.488L104.844 16ZM108.246 16H106.448L123.092 0H124.891L108.246 16ZM111.652 16H109.851L126.494 0H128.297L111.652 16ZM115.055 16H113.257L129.9 0H131.699L115.055 16ZM118.264 16H116.659L133.303 0H135.09L118.264 16ZM121.666 16H119.875L136.701 0H138.492L121.666 16ZM125.068 16H123.277L140.104 0H141.895L125.068 16ZM128.471 16H126.68L143.506 0H145.297L128.471 16ZM131.873 16H130.082L146.908 0H148.699L131.873 16ZM135.469 16H133.484L150.311 0H152.113L135.469 16ZM138.871 16H137.073L153.717 0H155.516L138.871 16ZM142.273 16H140.476L157.119 0H158.918L142.273 16ZM145.68 16H143.878L160.521 0H162.324L145.68 16ZM149.078 16H147.284L163.928 0H165.723L149.078 16ZM152.484 16H150.683L167.326 0H169.129L152.484 16ZM155.883 16H154.089L170.732 0H172.527L155.883 16ZM159.289 16H157.487L174.131 0H175.934L159.289 16ZM162.688 16H160.894L177.537 0H179.332L162.688 16ZM166.145 15.8945L166.27 16H164.292L180.936 0H182.86L166.145 15.8945ZM169.496 16H167.646L184.473 0H186.141L169.496 16ZM172.898 16H171.101L187.744 0H189.543L172.898 16ZM176.305 16H174.503L191.146 0H192.949L176.305 16ZM179.703 16H177.909L194.553 0H196.348L179.703 16ZM183.109 16H181.308L197.951 0H199.754L183.109 16ZM186.508 16H184.714L201.357 0H203.152L186.508 16ZM189.914 16H188.112L204.756 0H206.559L189.914 16ZM193.312 16H191.519L208.162 0H209.957L193.312 16ZM196.719 16H194.917L211.561 0H213.363L196.719 16ZM200.117 16H198.323L214.967 0H216.762L200.117 16ZM203.523 16H201.722L218.365 0H220.168L203.523 16ZM206.93 16H205.128L221.771 0H223.574L206.93 16ZM210.328 16H208.534L225.178 0H226.973L210.328 16ZM213.734 16H211.933L228.576 0H230.379L213.734 16ZM217.133 16H215.339L231.982 0H233.777L217.133 16ZM220.539 16H218.737L235.381 0H237.184L220.539 16ZM223.938 16H222.144L238.787 0H240.582L223.938 16ZM227.344 16H225.542L242.186 0H243.988L227.344 16ZM230.742 16H228.948L245.592 0H247.387L230.742 16ZM234.148 16H232.347L248.99 0H250.793L234.148 16ZM237.551 16H235.753L252.396 0H254.195L237.551 16ZM240.953 16H239.155L255.799 0H257.598L240.953 16ZM244.355 16H242.558L259.201 0H261L244.355 16ZM247.758 16H245.96L262.604 0H264.402L247.758 16ZM251.16 16H249.362L266.006 0H267.805L251.16 16ZM269.298 0.105469C269.786 0.185072 270.26 0.308763 270.715 0.472656L254.562 16H252.765L269.298 0.105469ZM271.809 0.961914C272.186 1.16624 272.543 1.40107 272.881 1.66113L257.965 16H256.167L271.809 0.961914ZM273.715 2.40137C273.996 2.68855 274.255 2.99738 274.491 3.32422L261.306 16H259.569L273.715 2.40137ZM275.09 4.29102C275.295 4.68205 275.469 5.09179 275.607 5.51758L264.704 16H262.909L275.09 4.29102ZM275.908 6.77051C275.966 7.14723 275.996 7.53266 276 7.9248L272.78 11.2275H272.781L267.886 16H266.308L275.908 6.77051ZM6.3457 15.8281C6.00055 15.7555 5.66412 15.6595 5.33691 15.5439L21.6865 0H22.8125L6.3457 15.8281ZM275.816 9.70996C275.149 12.7746 272.727 15.1828 269.654 15.8281L273.646 11.9365L273.656 11.9268L275.816 9.70996ZM4.26953 15.0283L4.41602 15.1514C4.00866 14.9468 3.62075 14.7098 3.25684 14.4414L18.4463 0H20.0752L4.26953 15.0283ZM2.40723 13.7178C2.13624 13.4527 1.8846 13.1683 1.65332 12.8672L15.1865 0H16.835L2.40723 13.7178ZM1.03027 11.9268C0.8639 11.6321 0.715485 11.3261 0.586914 11.0098L12.167 0H13.5752L1.03027 11.9268ZM0.212891 9.83301C0.0748369 9.24425 3.67973e-08 8.63086 0 8C0 7.90223 0.00335799 7.80493 0.00683594 7.70801L4.34766 3.70801L8.60645 0H10.5557L0.212891 9.83301ZM3.52441 2.96582L3.51758 2.9707L3.51172 2.97656L0.259766 5.97266C1.06143 2.90351 3.63951 0.55249 6.83008 0.0849609L3.52441 2.96582Z" fill="white" fill-opacity="0.3" />
  </svg>

);

const Dashboard = () => {
  const [active, setActive] = useState("max");

  const [value, setValue] = useState(0.6);
  const trackRef = useRef(null);
  const dragging = useRef(false);

  const getVal = useCallback((clientX) => {
    const rect = trackRef.current.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  }, []);

  const onMouseDown = (e) => {
    dragging.current = true;
    setValue(getVal(e.clientX));
  };

  const onMouseMove = (e) => {
    if (dragging.current) setValue(getVal(e.clientX));
  };

  const onMouseUp = () => { dragging.current = false; };

  return (
    <div className=''>

      <div className='flex flex-col justify-between relative z-0 w-[340px] h-[406px] rounded-[20px] bg-[#121212] opacity-100 mb-10 overflow-hidden p-5'>
        {/* SVG Right Side */}
        <div className='absolute top-0 right-0 z-0 pointer-events-none'>
          <svg width="276" height="288" viewBox="0 0 276 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1318_639)">
              <path d="M302.258 -95.5001C217.758 64.9999 127.258 164.5 105.258 187.5C84.3829 178.63 127.869 34.6383 196.755 -127.473C265.641 -289.584 338.409 -413.809 359.283 -404.939C380.158 -396.069 371.144 -257.611 302.258 -95.5001Z" fill="#99FFEE" fill-opacity="0.2" />
            </g>
            <defs>
              <filter id="filter0_f_1318_639" x="0" y="-505.386" width="469.192" height="792.886" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1318_639" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className='relative flex items-center gap-[7.75px] z-10'>
          <div className='flex items-center justify-center relative w-11 h-11 rounded-2xl bg-[#FFFFFF12] overflow-hidden'>
            {/* Gradient border */}
            <div className="gradient-border-fade" />

            {/* icon top glowing line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-5.5 h-px bg-linear-to-r from-transparent via-white to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
              <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1318_841)">
                  <ellipse cx="22.5" cy="14" rx="14.5" ry="4" fill="#CCF2F0" fill-opacity="0.65" />
                </g>
                <defs>
                  <filter id="filter0_f_1318_841" x="-2" y="0" width="49" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_1318_841" />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* content */}
            <img src={icon9} alt="icon" className="w-5 h-5" />
          </div>
          <div>
            <p className='font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[160%] tracking-[0%] text-[#FFFFFF]'>
              Account Loss Analysis
            </p>
          </div>
        </div>

        <div className="flex rounded-2xl border border-[#FFFFFF1A] p-0.75 bg-[#FFFFFF08]">
          {/* Max Recorded Button */}
          <button
            onClick={() => setActive("max")}
            className={`relative flex items-center justify-center w-[147px] h-[38px] rounded-[14px] gap-1.5 font-normal text-[12px] leading-[150%] transition-colors cursor-pointer
              ${active === "max" ? "btn-cyan text-[#FFFFFF]" : "text-[#FFFFFFB2]"}
            `}
          >
            {/* Gradient border max active */}
            {active === "max" && (
              <div className="btn-cyan__border absolute inset-0 rounded-[14px] p-px" />
            )}
            {/* Top glowing line  max active */}
            {active === "max" && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[96px] h-[1px] bg-gradient-to-r from-transparent via-[#9DEEFF] to-transparent opacity-70" />
            )}
            <img src={icon} alt="icon" className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Max Recorded</span>
          </button>

          {/* Current Button */}
          <button
            onClick={() => setActive("current")}
            className={`relative flex items-center justify-center w-[147px] h-[38px] rounded-[14px] font-normal text-[12px] leading-[150%] transition-colors cursor-pointer
              ${active === "current" ? "btn-cyan text-[#FFFFFF]" : "text-[#FFFFFFB2]"}
           `}
          >
            {/* Gradient border current active */}
            {active === "current" && (
              <div className="btn-cyan__border absolute inset-0 rounded-[14px] p-px" />
            )}
            {/* Top glowing line current active */}
            {active === "current" && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[96px] h-px bg-linear-to-r from-transparent via-[#9DEEFF] to-transparent opacity-70" />
            )}
            <span className="relative z-10">Current</span>
          </button>

        </div>

        <div className='relative w-[300px] h-[94px] rounded-[16px] bg-[#FFFFFF08] p-3'>
          {/* Gradient border */}
          <div className='gradient-border-panel absolute inset-0 rounded-2xl p-px' />
          {/* icon top glowing line */}
          <div className="absolute top-0 ml-10 left-1/2 -translate-x-1/2 z-10">
            <div className="w-[167px] h-[1px] bg-gradient-to-r from-transparent via-[#9DEEFF] to-transparent opacity-70"></div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <p className='font-medium text-[14px] leading-[160%] text-[#FFFFFF]'>
                  Initial Deposit Limit Level
                </p>
                <img src={Group_26} alt="icon" className="w-5 h-5" />
              </div>

              {/* <DraggableSlider /> */}
              <div className="flex flex-col items-start gap-2 bg-[#1a1a1a] rounded-xl">

                {/* Track */}
                <div
                  ref={trackRef}
                  className="relative w-[276px] h-[19px] rounded-full bg-[#2b2b2b] overflow-hidden cursor-pointer select-none"
                  onMouseDown={onMouseDown}
                  onMouseMove={onMouseMove}
                  onMouseUp={onMouseUp}
                  onMouseLeave={onMouseUp}
                >

                  {/* SVG Hatch Background */}
                  <HatchPattern />

                  {/* Red Fill */}
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-[#CC0414] rounded-full z-10"
                    style={{ width: `${value * 100}%` }}
                  />

                  {/* Thumb */}
                  <div
                    className="absolute backdrop-blur-[4.47px] bg-[#14FCF21A] -ml-1.5 top-1/2 z-20 w-[19px] h-[19px] rounded-full flex items-center justify-center gap-[2px] cursor-grab active:cursor-grabbing"
                    style={{
                      left: `${value * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-0.5 h-0.5 rounded-full bg-white" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-normal text-[10px] leading-[150%] tracking-[0%] text-[#FFFFFFB2]">
                Entry Equity: $25,000.0
              </p>
              <p className="font-medium text-[10px] leading-[150%] tracking-[0%] text-[#FFFFFF]">
                Loss Level: $230,000.00
              </p>
            </div>
          </div>
        </div>

        <div className='relative w-[300px] h-[94px] rounded-[16px] bg-[#FFFFFF08] p-3'>
          {/* Gradient border */}
          <div className='gradient-border-panel absolute inset-0 rounded-2xl p-px' />
          {/* icon top glowing line */}
          <div className="absolute top-0 ml-10 left-1/2 -translate-x-1/2 z-10">
            <div className="w-[167px] h-[1px] bg-gradient-to-r from-transparent via-[#9DEEFF] to-transparent opacity-70"></div>
          </div>

          {/* content */}
          <div className=" flex flex-col gap-1.5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className='font-medium text-[14px] leading-[160%] text-[#FFFFFF]'>
                  Daily Loss Limit Level
                </p>
                <img src={Group_26} alt="icon" className="w-5 h-5" />
              </div>
              <div>
                <svg width="276" height="16" viewBox="0 0 276 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M9.56641 16H8C7.92584 16 7.85199 15.9961 7.77832 15.9941L24.416 0H26.2109L9.56641 16ZM12.9727 16H11.1709L27.8145 0H29.6172L12.9727 16ZM16.375 16H14.5771L31.2207 0H33.0195L16.375 16ZM19.7773 16H17.9795L34.623 0H36.4219L19.7773 16ZM23.1836 16H21.3818L38.0254 0H39.8281L23.1836 16ZM26.582 16H24.7881L41.4316 0H43.2266L26.582 16ZM29.9883 16H28.1865L44.8301 0H46.6328L29.9883 16ZM33.3867 16H31.5928L48.2363 0H50.0312L33.3867 16ZM36.793 16H34.9912L51.6348 0H53.4375L36.793 16ZM40.1914 16H38.3975L55.041 0H56.8359L40.1914 16ZM43.5977 16H41.7959L58.4395 0H60.2422L43.5977 16ZM46.9961 16H45.2021L61.8457 0H63.6406L46.9961 16ZM50.4023 16H48.6006L65.2441 0H67.0469L50.4023 16ZM53.8086 16H52.0068L68.6504 0H70.4531L53.8086 16ZM57.207 16H55.4131L72.0566 0H73.8516L57.207 16ZM60.6133 16H58.8115L75.4551 0H77.2578L60.6133 16ZM64.0117 16H62.2178L78.8613 0H80.6562L64.0117 16ZM67.418 16H65.6162L82.2598 0H84.0625L67.418 16ZM70.8164 16H69.0225L85.666 0H87.4609L70.8164 16ZM74.2227 16H72.4209L89.0645 0H90.8672L74.2227 16ZM77.6211 16H75.8271L92.4707 0H94.2656L77.6211 16ZM81.0273 16H79.2256L95.8691 0H97.6719L81.0273 16ZM84.4297 16H82.6318L99.2754 0H101.074L84.4297 16ZM87.832 16H86.0342L102.678 0H104.477L87.832 16ZM91.2344 16H89.4365L106.08 0H107.879L91.2344 16ZM94.6367 16H92.8389L109.482 0H111.281L94.6367 16ZM98.0391 16H96.2412L112.885 0H114.684L98.0391 16ZM101.441 16H99.6436L116.287 0H118.086L101.441 16ZM104.844 16H103.046L119.689 0H121.488L104.844 16ZM108.246 16H106.448L123.092 0H124.891L108.246 16ZM111.652 16H109.851L126.494 0H128.297L111.652 16ZM115.055 16H113.257L129.9 0H131.699L115.055 16ZM118.264 16H116.659L133.303 0H135.09L118.264 16ZM121.666 16H119.875L136.701 0H138.492L121.666 16ZM125.068 16H123.277L140.104 0H141.895L125.068 16ZM128.471 16H126.68L143.506 0H145.297L128.471 16ZM131.873 16H130.082L146.908 0H148.699L131.873 16ZM135.469 16H133.484L150.311 0H152.113L135.469 16ZM138.871 16H137.073L153.717 0H155.516L138.871 16ZM142.273 16H140.476L157.119 0H158.918L142.273 16ZM145.68 16H143.878L160.521 0H162.324L145.68 16ZM149.078 16H147.284L163.928 0H165.723L149.078 16ZM152.484 16H150.683L167.326 0H169.129L152.484 16ZM155.883 16H154.089L170.732 0H172.527L155.883 16ZM159.289 16H157.487L174.131 0H175.934L159.289 16ZM162.688 16H160.894L177.537 0H179.332L162.688 16ZM166.145 15.8945L166.27 16H164.292L180.936 0H182.86L166.145 15.8945ZM169.496 16H167.646L184.473 0H186.141L169.496 16ZM172.898 16H171.101L187.744 0H189.543L172.898 16ZM176.305 16H174.503L191.146 0H192.949L176.305 16ZM179.703 16H177.909L194.553 0H196.348L179.703 16ZM183.109 16H181.308L197.951 0H199.754L183.109 16ZM186.508 16H184.714L201.357 0H203.152L186.508 16ZM189.914 16H188.112L204.756 0H206.559L189.914 16ZM193.312 16H191.519L208.162 0H209.957L193.312 16ZM196.719 16H194.917L211.561 0H213.363L196.719 16ZM200.117 16H198.323L214.967 0H216.762L200.117 16ZM203.523 16H201.722L218.365 0H220.168L203.523 16ZM206.93 16H205.128L221.771 0H223.574L206.93 16ZM210.328 16H208.534L225.178 0H226.973L210.328 16ZM213.734 16H211.933L228.576 0H230.379L213.734 16ZM217.133 16H215.339L231.982 0H233.777L217.133 16ZM220.539 16H218.737L235.381 0H237.184L220.539 16ZM223.938 16H222.144L238.787 0H240.582L223.938 16ZM227.344 16H225.542L242.186 0H243.988L227.344 16ZM230.742 16H228.948L245.592 0H247.387L230.742 16ZM234.148 16H232.347L248.99 0H250.793L234.148 16ZM237.551 16H235.753L252.396 0H254.195L237.551 16ZM240.953 16H239.155L255.799 0H257.598L240.953 16ZM244.355 16H242.558L259.201 0H261L244.355 16ZM247.758 16H245.96L262.604 0H264.402L247.758 16ZM251.16 16H249.362L266.006 0H267.805L251.16 16ZM269.298 0.105469C269.786 0.185072 270.26 0.308763 270.715 0.472656L254.562 16H252.765L269.298 0.105469ZM271.809 0.961914C272.186 1.16624 272.543 1.40107 272.881 1.66113L257.965 16H256.167L271.809 0.961914ZM273.715 2.40137C273.996 2.68855 274.255 2.99738 274.491 3.32422L261.306 16H259.569L273.715 2.40137ZM275.09 4.29102C275.295 4.68205 275.469 5.09179 275.607 5.51758L264.704 16H262.909L275.09 4.29102ZM275.908 6.77051C275.966 7.14723 275.996 7.53266 276 7.9248L272.78 11.2275H272.781L267.886 16H266.308L275.908 6.77051ZM6.3457 15.8281C6.00055 15.7555 5.66412 15.6595 5.33691 15.5439L21.6865 0H22.8125L6.3457 15.8281ZM275.816 9.70996C275.149 12.7746 272.727 15.1828 269.654 15.8281L273.646 11.9365L273.656 11.9268L275.816 9.70996ZM4.26953 15.0283L4.41602 15.1514C4.00866 14.9468 3.62075 14.7098 3.25684 14.4414L18.4463 0H20.0752L4.26953 15.0283ZM2.40723 13.7178C2.13624 13.4527 1.8846 13.1683 1.65332 12.8672L15.1865 0H16.835L2.40723 13.7178ZM1.03027 11.9268C0.8639 11.6321 0.715485 11.3261 0.586914 11.0098L12.167 0H13.5752L1.03027 11.9268ZM0.212891 9.83301C0.0748369 9.24425 3.67973e-08 8.63086 0 8C0 7.90223 0.00335799 7.80493 0.00683594 7.70801L4.34766 3.70801L8.60645 0H10.5557L0.212891 9.83301ZM3.52441 2.96582L3.51758 2.9707L3.51172 2.97656L0.259766 5.97266C1.06143 2.90351 3.63951 0.55249 6.83008 0.0849609L3.52441 2.96582Z" fill="white" fill-opacity="0.3" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-normal text-[10px] leading-[150%] tracking-[0%] text-[#FFFFFFB2]">
                Entry Equity: $25,000.0
              </p>
              <p className="font-medium text-[10px] leading-[150%] tracking-[0%] text-[#FFFFFF]">
                Loss Level: $237,000.00
              </p>
            </div>
          </div>

        </div>

        <div className='flex items-center justify-center gap-3'>
          <p className='font-normal text-[14px] leading-[150%] tracking-[0%] text-[#FFFFFF]'>
            Next Daily Loss Reset in
          </p>
          <p className='rounded-[8px] py-[5px] px-[10px] bg-[#FFFFFF08] opacity-100 font-normal text-[12px] leading-[150%] text-[#FFFFFF]'>
            12:36:36
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 relative w-full h-full rounded-2xl bg-[#FFFFFF08] p-5 overflow-hidden"
          >
            {/* Gradient border */}
            <div className='absolute inset-0 p-px rounded-2xl stat-card-border' />

            {/* top center glowing line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-41.75 h-px bg-linear-to-r from-transparent via-[#E3FAFF] to-transparent opacity-95" />
            </div>

            {/* grid background */}
            <div className='absolute inset-0 w-full h-full'>
              <svg className="w-full h-full" viewBox="0 0 264 155" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" d="M-4.42285 -14.0273H15.4648V-33.6924H16.5498V-14.0273H36.4414V-33.6924H37.5264V-14.0273H57.4141V-33.6924H58.499V-14.0273H78.3818V-33.6924H79.4668V-14.0273H99.3584V-33.6924H100.443V-14.0273H120.33V-33.6924H121.415V-14.0273H141.303V-33.6924H142.388V-14.0273H162.274V-33.6924H163.359V-14.0273H183.247V-33.6924H184.332V-14.0273H204V-33.6924H205.085V-14.0273H224.972V-33.6924H226.057V-14.0273H245.944V-33.6924H247.029V-14.0273H266.776V-12.9424H247.029V6.94434H266.776V8.0293H247.029V27.917H266.776V29.002H247.029V48.8896H266.776V49.9746H247.029V69.8623H266.776V70.9473H247.029V90.835H266.776V91.9199H247.029V111.808H266.776V112.893H247.029V132.779H266.776V133.864H247.029V153.752H266.776V154.837H-5.28125V154.614H-5.50781V-33.6924H-4.42285V-14.0273ZM268.001 154.614H266.916V-33.6924H268.001V154.614ZM-4.42285 153.752H15.4648V133.864H-4.42285V153.752ZM16.5498 153.752H36.4414V133.864H16.5498V153.752ZM37.5264 153.752H57.4141V133.864H37.5264V153.752ZM58.499 153.752H78.3818V133.864H58.499V153.752ZM79.4668 153.752H99.3584V133.864H79.4668V153.752ZM100.443 153.752H120.33V133.864H100.443V153.752ZM121.415 153.752H141.303V133.864H121.415V153.752ZM142.388 153.752H162.274V133.864H142.388V153.752ZM163.359 153.752H183.247V133.864H163.359V153.752ZM184.332 153.752H204V133.864H184.332V153.752ZM205.085 153.752H224.972V133.864H205.085V153.752ZM226.057 153.752H245.944V133.864H226.057V153.752ZM-4.42285 132.779H15.4648V112.893H-4.42285V132.779ZM16.5498 132.779H36.4414V112.893H16.5498V132.779ZM37.5264 132.779H57.4141V112.893H37.5264V132.779ZM58.499 132.779H78.3818V112.893H58.499V132.779ZM79.4668 132.779H99.3584V112.893H79.4668V132.779ZM100.443 132.779H120.33V112.893H100.443V132.779ZM121.415 132.779H141.303V112.893H121.415V132.779ZM142.388 132.779H162.274V112.893H142.388V132.779ZM163.359 132.779H183.247V112.893H163.359V132.779ZM184.332 132.779H204V112.893H184.332V132.779ZM205.085 132.779H224.972V112.893H205.085V132.779ZM226.057 132.779H245.944V112.893H226.057V132.779ZM-4.42285 111.808H15.4648V91.9199H-4.42285V111.808ZM16.5498 111.808H36.4414V91.9199H16.5498V111.808ZM37.5264 111.808H57.4141V91.9199H37.5264V111.808ZM58.499 111.808H78.3818V91.9199H58.499V111.808ZM79.4668 111.808H99.3584V91.9199H79.4668V111.808ZM100.443 111.808H120.33V91.9199H100.443V111.808ZM121.415 111.808H141.303V91.9199H121.415V111.808ZM142.388 111.808H162.274V91.9199H142.388V111.808ZM163.359 111.808H183.247V91.9199H163.359V111.808ZM184.332 111.808H204V91.9199H184.332V111.808ZM205.085 111.808H224.972V91.9199H205.085V111.808ZM226.057 111.808H245.944V91.9199H226.057V111.808ZM-4.42285 90.835H15.4648V70.9473H-4.42285V90.835ZM16.5498 90.835H36.4414V70.9473H16.5498V90.835ZM37.5264 90.835H57.4141V70.9473H37.5264V90.835ZM58.499 90.835H78.3818V70.9473H58.499V90.835ZM79.4668 90.835H99.3584V70.9473H79.4668V90.835ZM100.443 90.835H120.33V70.9473H100.443V90.835ZM121.415 90.835H141.303V70.9473H121.415V90.835ZM142.388 90.835H162.274V70.9473H142.388V90.835ZM163.359 90.835H183.247V70.9473H163.359V90.835ZM184.332 90.835H204V70.9473H184.332V90.835ZM205.085 90.835H224.972V70.9473H205.085V90.835ZM226.057 90.835H245.944V70.9473H226.057V90.835ZM-4.42285 69.8623H15.4648V49.9746H-4.42285V69.8623ZM16.5498 69.8623H36.4414V49.9746H16.5498V69.8623ZM37.5264 69.8623H57.4141V49.9746H37.5264V69.8623ZM58.499 69.8623H78.3818V49.9746H58.499V69.8623ZM79.4668 69.8623H99.3584V49.9746H79.4668V69.8623ZM100.443 69.8623H120.33V49.9746H100.443V69.8623ZM121.415 69.8623H141.303V49.9746H121.415V69.8623ZM142.388 69.8623H162.274V49.9746H142.388V69.8623ZM163.359 69.8623H183.247V49.9746H163.359V69.8623ZM184.332 69.8623H204V49.9746H184.332V69.8623ZM205.085 69.8623H224.972V49.9746H205.085V69.8623ZM226.057 69.8623H245.944V49.9746H226.057V69.8623ZM-4.42285 48.8896H15.4648V29.002H-4.42285V48.8896ZM16.5498 48.8896H36.4414V29.002H16.5498V48.8896ZM37.5264 48.8896H57.4141V29.002H37.5264V48.8896ZM58.499 48.8896H78.3818V29.002H58.499V48.8896ZM79.4668 48.8896H99.3584V29.002H79.4668V48.8896ZM100.443 48.8896H120.33V29.002H100.443V48.8896ZM121.415 48.8896H141.303V29.002H121.415V48.8896ZM142.388 48.8896H162.274V29.002H142.388V48.8896ZM163.359 48.8896H183.247V29.002H163.359V48.8896ZM184.332 48.8896H204V29.002H184.332V48.8896ZM205.085 48.8896H224.972V29.002H205.085V48.8896ZM226.057 48.8896H245.944V29.002H226.057V48.8896ZM-4.42285 27.917H15.4648V8.0293H-4.42285V27.917ZM16.5498 27.917H36.4414V8.0293H16.5498V27.917ZM37.5264 27.917H57.4141V8.0293H37.5264V27.917ZM58.499 27.917H78.3818V8.0293H58.499V27.917ZM79.4668 27.917H99.3584V8.0293H79.4668V27.917ZM100.443 27.917H120.33V8.0293H100.443V27.917ZM121.415 27.917H141.303V8.0293H121.415V27.917ZM142.388 27.917H162.274V8.0293H142.388V27.917ZM163.359 27.917H183.247V8.0293H163.359V27.917ZM184.332 27.917H204V8.0293H184.332V27.917ZM205.085 27.917H224.972V8.0293H205.085V27.917ZM226.057 27.917H245.944V8.0293H226.057V27.917ZM-4.42285 6.94434H15.4648V-12.9424H-4.42285V6.94434ZM16.5498 6.94434H36.4414V-12.9424H16.5498V6.94434ZM37.5264 6.94434H57.4141V-12.9424H37.5264V6.94434ZM58.499 6.94434H78.3818V-12.9424H58.499V6.94434ZM79.4668 6.94434H99.3584V-12.9424H79.4668V6.94434ZM100.443 6.94434H120.33V-12.9424H100.443V6.94434ZM121.415 6.94434H141.303V-12.9424H121.415V6.94434ZM142.388 6.94434H162.274V-12.9424H142.388V6.94434ZM163.359 6.94434H183.247V-12.9424H163.359V6.94434ZM184.332 6.94434H204V-12.9424H184.332V6.94434ZM205.085 6.94434H224.972V-12.9424H205.085V6.94434ZM226.057 6.94434H245.944V-12.9424H226.057V6.94434ZM266.776 -33.915H-5.28125V-35H266.776V-33.915Z" fill="url(#paint0_linear_1318_680)" fill-opacity="0.07" />
                <defs>
                  <linearGradient id="paint0_linear_1318_680" x1="102" y1="4.5" x2="241.998" y2="125.502" gradientUnits="userSpaceOnUse">
                    <stop stop-opacity="0" />
                    <stop offset="0.915503" stop-color="white" stop-opacity="0.85" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* background blur glow */}
            <div className='absolute inset-0'>
              <svg width="228" height="155" viewBox="0 0 228 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1318_717)">
                  <ellipse cx="113.728" cy="-0.251356" rx="16.6376" ry="93.7052" transform="rotate(23.0221 113.728 -0.251356)" fill="white" fill-opacity="0.13" />
                </g>
                <defs>
                  <filter id="filter0_f_1318_717" x="0" y="-160.742" width="227.455" height="320.982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="37" result="effect1_foregroundBlur_1318_717" />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* content */}
            <div className="flex items-center gap-3 z-10">
              <div className="flex items-center justify-center relative w-9 md:w-10 lg:w-11 h-9 md:h-10 lg:h-11 rounded-2xl p-[7.75px] bg-[#FFFFFF08]">

                {/* icon gradient border */}
                <div className='absolute inset-0 rounded-2xl p-px icon-box-border' />

                {/* icon top glowing line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-px bg-linear-to-r from-transparent via-white to-transparent"></div>
                </div>

                <img src={item.icon} alt="icon" className="w-5 h-5" />
              </div>

              <p className="font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#FFFFFF_42.31%,#999999_100%)] bg-clip-text text-transparent">
                {item.title}
              </p>
            </div>

            <div className="z-10">
              <p className="font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[160%] tracking-[0%] text-[#FFFFFF]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main card 2 */}
      <div className='w-full h-full rounded-3xl bg-[#121212] opacity-100 mt-10 p-5'>
        <div className='flex items-center gap-[7.75px]'>
          <div className='flex items-center justify-center relative w-11 h-11 rounded-2xl bg-[#FFFFFF12] overflow-hidden'>
            {/* Gradient border */}
            <div className="gradient-border-fade" />

            {/* icon top glowing line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-5.5 h-px bg-linear-to-r from-transparent via-white to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
              <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1318_841)">
                  <ellipse cx="22.5" cy="14" rx="14.5" ry="4" fill="#CCF2F0" fill-opacity="0.65" />
                </g>
                <defs>
                  <filter id="filter0_f_1318_841" x="-2" y="0" width="49" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_1318_841" />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* content */}
            <img src={icon5} alt="icon" className="w-5 h-5" />
          </div>

          <div>
            <p className='font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[160%] tracking-[0%] text-[#FFFFFF]'>
              Goal Overview
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5'>
          {cards.map((item) => (
            <div
              key={item.id}
              className='relative w-full h-full rounded-2xl bg-[#FFFFFF08] overflow-hidden'>

              {/* Gradient border */}
              <div className="gradient-border-card" />

              {/* Glow */}
              <div className="w-full h-full absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 344 156" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_f_1318_865)">
                    <ellipse cx="165.5" cy="152" rx="94.5" ry="22" fill={item.glowColor} />
                  </g>
                  <defs>
                    <filter id="filter0_f_1318_865" x="-59" y="0" width="449" height="304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur_1318_865" />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* content */}
              <div className='relative flex flex-col gap-8 p-5 z-10'>

                {/* TOP */}
                <div className="flex items-center justify-between">

                  {/* icon */}
                  <div className="flex items-center justify-center relative w-9 md:w-10 lg:w-11 h-9 md:h-10 lg:h-11 rounded-2xl p-[7.75px] bg-[#FFFFFF08]">
                    {/* icon gradient border */}
                    <div className='absolute inset-0 rounded-2xl p-px icon-box-border' />
                    {/* icon top glowing line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-4 h-px bg-linear-to-r from-transparent via-white to-transparent"></div>
                    </div>
                    <img src={item.icon} alt="icon" className="w-5 h-5" />
                  </div>

                  {/* title */}
                  <p className="font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[160%] tracking-[0%] text-[#FFFFFF]">
                    {item.title}
                  </p>

                  {/* badge */}
                  <div className='rounded-lg py-1.25 px-3 bg-[#FFFFFF08] shadow-[inset_0px_0px_1px_0px_#FFFFFF40] opacity-100'>
                    <p className='font-normal text-[12px] leading-[150%] tracking-[0%] text-[#FFFFFF]'>
                      {item.badge}
                    </p>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className='flex items-center justify-between'>

                  <div className='flex flex-col gap-1.5'>
                    <div className='font-normal text-[12px] leading-[150%] tracking-[0%] text-[#FFFFFFB2]'>
                      <p>{item.minLabel}</p>
                      <p>{item.minLabel2}</p>
                    </div>
                    <p className='font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] leading-[150%] tracking-[0%] text-[#FFFFFF]'>
                      {item.minValue}
                    </p>
                  </div>

                  <div className='flex flex-col items-end gap-1.5'>
                    <p className='font-normal text-[12px] leading-[150%] tracking-[0%] text-[#FFFFFFB2]'>
                      {item.currentLabel}
                    </p>
                    <p className='font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] leading-[150%] tracking-[0%] text-[#FFFFFF]'>
                      {item.currentValue}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Dashboard

