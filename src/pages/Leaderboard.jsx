import React from 'react'
import Frame_1 from "../assets/Frame 427321461.svg";
import FancySvgButton from '../components/button_svg/FancySvgButton';
import icon from "../assets/new-job.svg";
import Card from '../components/Card';
import Card2 from '../components/Card2';

const Leaderboard = () => {
    return (
        <div className="text-stone-50 max-w-6xl mx-auto px-4 mt-10">
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='flex items-center gap-[7.76px]'>
                    <img src={Frame_1} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11" />
                    <p className='font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[160%] tracking-normal bg-[linear-gradient(180deg,#FFFFFF_28.57%,#999999_100%)] bg-clip-text text-transparent'>
                        Leaderboard
                    </p>
                </div>

                <div className="flex bg-[#FFFFFF0D] rounded-2xl border border-[#FFFFFF1A] p-0.5 md:p-1">
                    {/* First Button (SVG) */}
                    <FancySvgButton>
                        <button className='flex items-center gap-1 font-normal text-[10px] sm:text-[12px] md:text-[13.58px] text-white leading-[150%] tracking-normal'>
                            <img src={icon} alt="icon" className="w-3 h-3 md:w-[15.52px] md:h-[15.52px]" />
                            Global Leaderboard
                        </button>
                    </FancySvgButton>

                    {/* Second Button */}
                    <button className="w-28 md:w-35 lg:w-38.25 flex items-center justify-center font-normal text-[10px] sm:text-[12px] md:text-[13.58px] leading-[150%] text-white/70 rounded-2xl">
                        Analysis of Volume
                    </button>
                </div>
            </div>

            <div>
                <Card />
                <Card2 />
            </div>
        </div>
    )
}

export default Leaderboard 

