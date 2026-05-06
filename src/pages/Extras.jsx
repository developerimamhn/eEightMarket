import React, { useState } from 'react'

// Custom components & assets import
import ExactButton from '../component/ui/button/ExactButton';
import Frame_1 from "../assets/img/Frame 427321461.svg";
import icon from "../assets/img/new-job.svg";
import GlowBlob from '../assets/svg/GlowBlob';
import GlowEllipse from '../assets/svg/GlowEllipse';
import icon_1 from "../assets/img/icon_1.png";
import icon_2 from "../assets/img/icon_2.png";
import icon_3 from "../assets/img/icon_3.png";
import icon_4 from "../assets/img/icon_4.png";
import icon_5 from "../assets/img/icon_5.png";
import icon_6 from "../assets/img/icon_6.png";
import icon_7 from "../assets/img/icon_7.png";
import WideButton200 from '../component/ui/button/WideButton200';
import icon_8 from "../assets/img/icon_8.svg";
import Union from "../assets/img/Union.png";
import PurpleGlow from '../assets/svg/PurpleGlow';
import CyanGlow from '../assets/svg/CyanGlow';
import icon_9 from "../assets/img/icon_9.svg";
import icon_10 from "../assets/img/icon_10.svg";
import icon_11 from "../assets/img/icon_11.svg";

// Tabs data
const tabs = [
  { name: "Indices", icon: icon },
  { name: "Forex" },
  { name: "Crypto" },
  { name: "Energies" },
  { name: "Metals" },
];

// Market items
const markets = [
  { id: 1, icon: icon_1, name: "NSDQ" },
  { id: 2, icon: icon_2, name: "SP" },
  { id: 3, icon: icon_3, name: "DOW" },
  { id: 4, icon: icon_4, name: "DAX" },
  { id: 5, icon: icon_5, name: "ASX" },
  { id: 6, icon: icon_6, name: "NIKKEL" },
];

// Trading schedule
const schedule = [
  { day: "Monday", time: "01:05-23:55" },
  { day: "Wednesday", time: "01:05-23:55" },
  { day: "Thursday", time: "01:05-23:55" },
  { day: "Friday", time: "Market is Closed" },
  { day: "Saturday", time: "Market is Closed" },
  { day: "Sunday", time: "Market is Closed" },
];

// Symbol info
const schedule_2 = [
  { day: "Symbol", time: "NSDQ" },
  { day: "Group", time: "Indices" },
  { day: "Leverage", time: "25" },
  { day: "Commission", time: "None" },
  { day: "Contrack Size", time: "05" },
  { day: "Digits", time: "02" },
];

const Extras = () => {
  const [activeTab, setActiveTab] = useState("Indices");
  const [active, setActive] = useState("left");

  return (
    <div className='mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 px-4 mt-6'>
        <div className='flex items-center gap-1 md:gap-[7.76px]'>
          <img src={Frame_1} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11" />
          <p className='font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[160%] text-white'>
            Leaderboard
          </p>
        </div>
        <div className="flex gap-1 md:gap-2 rounded-2xl border border-[#FFFFFF1A] p-1 pr-2 bg-[#FFFFFF0D]">
          {tabs.map((item) => {
            const isActive = activeTab === item.name;
            const button = (
              <button
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center justify-center gap-0.5 px-1 sm:px-2 md:px-3 rounded-xl text-[10px] sm:text-[12px] md:text-[13.58px] leading-[150%] cursor-pointer 
                  ${isActive ? "text-white" : "text-[#FFFFFFB2]"}`}
              >
                {item.icon && (
                  <img src={item.icon} alt="icon" className="w-[15.52px] h-[15.52px]" />
                )}
                {item.name}
              </button>
            );
            return (
              <div key={item.name} className="flex items-center justify-center">
                {isActive ? <ExactButton>{button}</ExactButton> : button}
              </div>
            );
          })}
        </div>
      </div>
      <div className='px-4 2xl:px-0'>
        <div className="w-full mx-auto p-px rounded-3xl bg-[linear-gradient(252.84deg,#86B4B4_0.99%,rgba(58,78,78,0.1)_36.61%)] mt-16 mb-10">
          <div className="p-4 sm:p-5 relative w-full h-full rounded-[23px] bg-[linear-gradient(180deg,#011314_0%,#011515_85%,rgba(9,42,45,0.65)_100%)]">
            <div className='absolute inset-0 flex justify-end h-full'>
              <GlowBlob />
              <GlowEllipse />
            </div>
            <div>
              <div className='flex flex-col md:flex-row items-start sm:items-center justify-between gap-4 md:gap-0'>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {markets.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-center rounded-[14px] border-[0.97px] border-[#FFFFFF1A] p-2 md:p-2.5 gap-[5.82px] bg-[#FFFFFF08] backdrop-blur-xs"
                    >
                      <img src={item.icon} alt="logo" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span className="font-normal text-[10px] sm:text-[12px] md:text-[13.58px] leading-[150%] text-[#FFFFFF]">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative w-full sm:w-75 h-10 md:h-12">
                  <input
                    type="text"
                    placeholder="Search Symbol"
                    className="w-full h-full rounded-2xl border border-[#FFFFFF1A] bg-[#FDFFFF0D] font-normal text-[16px] leading-[150%] tracking-[0%] text-[#FFFFFFB2] px-4 outline-none backdrop-blur-xs"
                  />
                  <div className="absolute right-1 top-1/2 -translate-y-1/2">
                    <img src={icon_7} alt="icon" className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-5 mt-6'>
                <h3 className='font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] leading-[160%] tracking-[0%] text-center text-[#FFFFFF]'>
                  Nasdaq 100 Index
                </h3>

                {/* Toggle switch */}
                <div className="relative flex items-center w-full max-w-[405.82px] h-[45.22px] rounded-2xl border border-[#FFFFFF33] p-[2.91px] bg-[#172020]">

                  {/* Sliding Background */}
                  <div
                    className={`flex items-center justify-center absolute h-10 w-1/2 transition-all duration-300`}
                    style={{
                      left: active === "left" ? "2.91px" : "50%",
                    }}
                  >
                    <WideButton200 />
                  </div>

                  {/* Left Button */}
                  <button
                    onClick={() => setActive("left")}
                    className={`relative z-10 w-1/2 h-10 flex items-center justify-center gap-1 text-[10px] sm:text-[12px] md:text-[13.58px]
                      ${active === "left" ? "text-white" : "text-[#FFFFFFB2]"}`}
                  >
                    <img src={icon_8} className="w-[15.52px] h-[15.52px]" />
                    No Commissions
                  </button>

                  {/* Right Button */}
                  <button
                    onClick={() => setActive("right")}
                    className={`relative z-10 w-1/2 h-10 flex items-center justify-center text-[10px] sm:text-[12px] md:text-[13.58px]
                      ${active === "right" ? "text-white" : "text-[#FFFFFFB2]"}`}
                  >
                    Raw Spreads
                  </button>

                </div>
              </div>

              {/* Bottom section (two cards) */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-10'>

                {/* Trading Hours card */}
                <div className="w-full p-px rounded-2xl bg-[linear-gradient(180.85deg,rgba(255,255,255,0.3)_0.88%,rgba(255,255,255,0.18)_17.77%,rgba(255,255,255,0.03)_49.68%)]">
                  <div className="relative w-full h-full rounded-[15px] bg-[#091A1B] overflow-hidden">

                    {/* Background */}
                    <img
                      src={Union}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Purple Glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <PurpleGlow className="w-full h-full object-cover" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 p-5">

                      {/* Content */}
                      <div className='flex items-center gap-[7.76px]'>
                        <img src={icon_9} alt="icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                        <p className='font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[160%] tracking-[0%] text-[#FFFFFF]'>
                          Trading Hours
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-5">

                        {/* Schedule list */}
                        {schedule.map((item, index) => (
                          <div
                            key={index}
                            className="w-full h-11 md:h-12 lg:h-13 rounded-2xl relative overflow-hidden flex items-center justify-between"
                            style={{
                              background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(153,153,153,0.03) 100%)",
                              backdropFilter: "blur(10px)",
                              padding: "1px",
                              borderRadius: "16px",
                            }}
                          >
                            {/* Gradient border wrapper */}
                            <div
                              className="absolute inset-0"
                              style={{
                                borderRadius: "16px",
                                padding: "1px",
                                background: "linear-gradient(241.32deg, rgba(255,255,255,0.3) 38.81%, rgba(255,255,255,0.18) 51.82%, rgba(255,255,255,0.03) 76.42%)",
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                              }}
                            />

                            <p className="relative z-10 p-4 font-normal text-[13px]  sm:text-[14px]  md:text-[15px]  lg:text-[16px] leading-[150%] text-[#FFFFFFB2]">
                              {item.day}
                            </p>

                            <p className="relative z-10 p-4 font-medium text-[13px]  sm:text-[14px]  md:text-[15px]  lg:text-[16px] leading-[150%] text-[#FFFFFF]">
                              {item.time}
                            </p>
                          </div>
                        ))}

                        {/* Footer note */}
                        <div className="flex items-center gap-1 mt-2">
                          <img src={icon_11} alt="icon" className="w-6 h-6" />
                          <p className="font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[150%] text-[#FFFFFFB2]">
                            All times are in UTC timezone
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                {/* Info card */}
                <div className="w-full p-px rounded-2xl bg-[linear-gradient(180.85deg,rgba(255,255,255,0.3)_0.88%,rgba(255,255,255,0.18)_17.77%,rgba(255,255,255,0.03)_49.68%)]">
                  <div className="relative w-full h-full rounded-[15px] bg-[#091A1B] overflow-hidden">

                    {/* Background Image */}
                    <img
                      src={Union}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Purple Glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <CyanGlow className="w-full h-full object-cover" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 p-5">
                      <div className='flex items-center gap-[7.76px]'>
                        <img src={icon_10} alt="icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                        <p className='font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[160%] tracking-[0%] text-[#FFFFFF]'>
                          Information
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-5">

                        {/* Info list */}
                        {schedule_2.map((item, index) => (
                          <div
                            key={index}
                            className="w-full h-11 md:h-12 lg:h-13 rounded-2xl relative overflow-hidden flex items-center justify-between"
                            style={{
                              background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(153,153,153,0.03) 100%)",
                              backdropFilter: "blur(10px)",
                              padding: "1px",
                              borderRadius: "16px",
                            }}
                          >
                            {/* Gradient border wrapper */}
                            <div
                              className="absolute inset-0"
                              style={{
                                borderRadius: "16px",
                                padding: "1px",
                                background: "linear-gradient(241.32deg, rgba(255,255,255,0.3) 38.81%, rgba(255,255,255,0.18) 51.82%, rgba(255,255,255,0.03) 76.42%)",
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                              }}
                            />

                            <p className="relative z-10 p-4 font-normal text-[13px]  sm:text-[14px]  md:text-[15px]  lg:text-[16px] leading-[150%] text-[#FFFFFFB2]">
                              {item.day}
                            </p>

                            <p className="relative z-10 p-4 font-medium text-[13px]  sm:text-[14px]  md:text-[15px]  lg:text-[16px] leading-[150%] text-[#FFFFFF]">
                              {item.time}
                            </p>
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Extras