import React, { useState } from 'react'
import ExactButton from '../components/button_svg/ExactButton';
import Frame_1 from "../assets/Frame 427321461.svg";
import icon from "../assets/new-job.svg";

const tabs = [
  { name: "Indices", icon: icon },
  { name: "Forex" },
  { name: "Crypto" },
  { name: "Energies" },
  { name: "Metals" },
];

const AccountExtras = () => {
  const [activeTab, setActiveTab] = useState("Indices");

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex items-center justify-between mt-6'>

        <div className='flex items-center gap-[7.76px]'>
          <img src={Frame_1} alt="logo" className="w-11 h-11" />
          <p className='font-medium text-[17.46px] leading-[160%] text-white'>
            Leaderboard
          </p>
        </div>

        <div className="flex gap-2 rounded-2xl border border-[#FFFFFF1A] px-1 py-1 bg-[#FFFFFF0D]">

          {tabs.map((item) => {
            const isActive = activeTab === item.name;

            const button = (
              <button
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center gap-0.5 px-3 py-2 rounded-xl text-[13.58px] leading-[150%] cursor-pointer 
                  ${isActive ? "text-white" : "text-[#FFFFFFB2]"}`}
              >
                {item.icon && (
                  <img src={item.icon} alt="icon" className="w-[15.52px] h-[15.52px]" />
                )}
                {item.name}
              </button>
            );

            return (
              <div key={item.name} className="flex">
                {isActive ? <ExactButton>{button}</ExactButton> : button}
              </div>
            );
          })}

        </div>

      </div>

      <div className="max-w-6xl mx-auto h-202.75 p-px rounded-3xl bg-[linear-gradient(252.84deg,#86B4B4_0.99%,rgba(58,78,78,0.1)_36.61%)] mt-16 mb-10">
        <div className="w-full h-full rounded-[23px] bg-[linear-gradient(180deg,#011314_0%,#011515_85%,rgba(9,42,45,0.65)_100%)]">

        </div>
      </div>

    </div>
  )
}

export default AccountExtras

