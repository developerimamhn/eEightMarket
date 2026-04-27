import React from 'react'
import Frame_1 from "../assets/Frame 427321461.svg";
import FancySvgButton from './button/FancySvgButton';
import Card from './Card';
import Card2 from './Card2';

const LeaderboardCard = () => {
    return (
        <div className="text-stone-50 max-w-6xl mx-auto">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[7.76px]'>
                    <img src={Frame_1} alt="logo" className="w-11 h-11" />
                    <p className='font-medium text-[17.46px] leading-[160%] tracking-normal bg-[linear-gradient(180deg,#FFFFFF_28.57%,#999999_100%)] bg-clip-text text-transparent'>Leaderboard</p>
                </div>

                <div className="flex w-84.75 h-11.5 bg-[#FFFFFF0D] rounded-2xl border border-[#FFFFFF1A] p-0.75">
                    {/* First Button (SVG) */}
                    <FancySvgButton
                        text="Global Leaderboard"
                        className="w-1/2 font-normal text-[13.58px] leading-[150%]"

                    />

                    {/* Second Button */}
                    <button className="w-1/2 flex items-center justify-center font-normal text-[13.58px] leading-[150%] text-white/70 rounded-2xl">
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

export default LeaderboardCard
