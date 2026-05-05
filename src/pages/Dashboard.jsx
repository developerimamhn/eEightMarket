import React from 'react'

import icon from "../assets/trade-up.png"
import icon2 from "../assets/trade-down.png"
import icon3 from "../assets/exchange-02.png"
import icon4 from "../assets/medal-01.png"
import icon5 from "../assets/analysis-text-link.png"
import icon6 from "../assets/auto-conversations.png"
import icon7 from "../assets/profit.png"
import icon8 from "../assets/auto-conversations (1).png"

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


const Dashboard = () => {
  return (
    <div className='p-10'>

      <div className="flex items-center justify-center gap-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 relative w-[264px] h-[155px] rounded-[16px] bg-[#FFFFFF08] p-5 overflow-hidden"
          >
            {/* Gradient border */}
            <div className='absolute inset-0 p-px rounded-2xl stat-card-border' />

            {/* top center glowing line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-[167px] h-[1px] bg-gradient-to-r from-transparent via-[#E3FAFF] to-transparent opacity-95" />
            </div>

            {/* grid background */}
            <div className='absolute inset-0'>
              <svg width="264" height="155" viewBox="0 0 264 155" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="flex items-center justify-center relative w-[44px] h-[44px] rounded-[16px] p-[7.75px] bg-[#FFFFFF08]">

                {/* icon gradient border */}
                <div className='absolute inset-0 rounded-2xl p-px icon-box-border' />

                {/* icon top glowing line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-[16px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
                </div>

                <img src={item.icon} alt="icon" className="w-5 h-5" />
              </div>

              <p className="font-medium text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#FFFFFF_42.31%,#999999_100%)] bg-clip-text text-transparent">
                {item.title}
              </p>
            </div>

            <div className="z-10">
              <p className="font-bold text-[32px] leading-[160%] tracking-[0%] text-[#FFFFFF]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main card 2 */}
      <div className='max-w-[1104px] mx-auto h-[282px] rounded-[24px] bg-[#121212] opacity-100 mt-10 p-5'>
        <div className='flex items-center gap-[7.75px]'>
          <div className='flex items-center justify-center relative w-[44px] h-[44px] rounded-[16px] bg-[#FFFFFF12] overflow-hidden'>
            {/* Gradient border */}
            <div className="gradient-border-fade" />

            {/* icon top glowing line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-[22px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
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
            <p className='font-medium text-[16px] leading-[160%] tracking-[0%] text-[#FFFFFF]'>
              Goal Overview
            </p>
          </div>
        </div>

        <div className='flex items-center justify-between mt-5'>
          {cards.map((item) => (
            <div
              key={item.id}
              className='relative w-[344px] h-[178px] rounded-[16px] bg-[#FFFFFF08] overflow-hidden'>

              {/* Gradient border */}
              <div className="gradient-border-card" />

              {/* Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                <svg width="344" height="156" viewBox="0 0 344 156" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <div className="flex items-center justify-center relative w-[44px] h-[44px] rounded-[16px] p-[7.75px] bg-[#FFFFFF08]">

                    {/* icon gradient border */}
                    <div className='absolute inset-0 rounded-2xl p-px icon-box-border' />

                    {/* icon top glowing line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-[16px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    </div>

                    <img src={item.icon} alt="icon" className="w-5 h-5" />
                  </div>

                  {/* title */}
                  <p className="font-medium text-[16px] leading-[160%] tracking-[0%] text-[#FFFFFF]">
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
                    <p className='font-medium text-[20px] leading-[150%] tracking-[0%] text-[#FFFFFF]'>
                      {item.minValue}
                    </p>
                  </div>

                  <div className='flex flex-col items-end gap-1.5'>
                    <p className='font-normal text-[12px] leading-[150%] tracking-[0%] text-[#FFFFFFB2]'>
                      {item.currentLabel}
                    </p>
                    <p className='font-medium text-[20px] leading-[150%] tracking-[0%] text-[#FFFFFF]'>
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

