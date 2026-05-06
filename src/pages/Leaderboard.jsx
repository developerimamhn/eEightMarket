import React from 'react'
import Frame_1 from "../assets/img/Frame 427321461.svg";
import FancySvgButton from '../component/ui/button/FancySvgButton';
import icon from "../assets/img/new-job.svg";
import GlowBlob from '../assets/svg/GlowBlob'
import GlowEllipse from '../assets/svg/GlowEllipse'
import GradientButton from '../component/ui/button/GradientButton'
import Frame_3 from "../assets/img/Frame 427321461 (2).svg";
import Group_9 from "../assets/img/Group 9.svg";
import Group_10 from "../assets/img/Group 10.svg";
import Group_11 from "../assets/img/Group 11.svg";
import Group_12 from "../assets/img/Group 12.svg";
import image from "../assets/img/Frame 427321475.svg";
import Group_26 from "../assets/img/Group 26.svg";
import circle from "../assets/img/circle-flags_de.svg";
import circle2 from "../assets/img/Mask group.svg";
import circle3 from "../assets/img/Mask group1.svg";
import circle4 from "../assets/img/circle_flags_us.svg";
import man_image from "../assets/img/man_image.png";
import man_image1 from "../assets/img/man_image1.png";
import man_image2 from "../assets/img/man_image2.png";
import man_image3 from "../assets/img/man_image3.png";
import Group_1 from "../assets/img/Frame 427321454.svg";
import man_image4 from "../assets/img/man_image4.png";
import man_image5 from "../assets/img/man_image5.png";
import man_image6 from "../assets/img/man_image6.png";
import man_image7 from "../assets/img/man_image7.png";
import man_image8 from "../assets/img/man_image8.png";
import man_image9 from "../assets/img/man_image9.png";

const cardData = [
    {
        name: "Toni S.",
        profit: "$66,262.25",
        account: "E8TRACK",
        size: "$266,262.25",
        country: "DE",
        bg: Group_9,
        flag: circle,
        image: man_image,
    },
    {
        name: "Aashish G.",
        profit: "$49,056.00",
        account: "E8ONE",
        size: "$500,000.00",
        country: "IN",
        bg: Group_10,
        flag: circle2,
        image: man_image1,
    },
    {
        name: "Nathan H.",
        profit: "$48,596.34",
        account: "E8FTURES1",
        size: "$100,000.00",
        country: "GB",
        bg: Group_11,
        flag: circle3,
        image: man_image2,
    },
    {
        name: "Artur Z.",
        profit: "$40,635.53",
        account: "E8ONE",
        size: "$500,000.00",
        country: "US",
        bg: Group_12,
        flag: circle4,
        image: man_image3,
    },
];

const users = [
    {
        id: 1,
        name: "Pamela D.",
        time: "14 min. 36 sec",
        profile: man_image4,
        image: man_image7,
        account: "US$5,000.00 E8",
        country: "US",
    },
    {
        id: 2,
        name: "Samuel F.",
        time: "13 min. 55 sec",
        profile: man_image5,
        image: man_image8,
        account: "US$25,000.00 E8",
        country: "US",
    },
    {
        id: 3,
        name: "Pamela D.",
        time: "20 min. 2 sec",
        profile: man_image6,
        image: man_image9,
        account: "US$5,000.00 E8",
        country: "US",
    },
];

const Leaderboard = () => {
    return (
        <div className="text-stone-50 mx-auto px-4 mt-10">
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='flex items-center gap-[7.76px]'>
                    <img src={Frame_1} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11" />
                    <p className='font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[160%] tracking-normal bg-[linear-gradient(180deg,#FFFFFF_28.57%,#999999_100%)] bg-clip-text text-transparent'>
                        Leaderboard
                    </p>
                </div>

                <div className="flex bg-[#FFFFFF0D] rounded-2xl border border-[#FFFFFF1A] p-0.5 md:p-1">
                    {/* First Button (SVG) */}
                    <button className='flex items-center gap-1 font-normal text-[10px] sm:text-[12px] md:text-[13.58px] text-white leading-[150%] tracking-normal cursor-pointer'>
                        <FancySvgButton>
                            <img src={icon} alt="icon" className="w-3 h-3 md:w-[15.52px] md:h-[15.52px]" />
                            Global Leaderboard
                        </FancySvgButton>
                    </button>

                    {/* Second Button */}
                    <button className="w-28 md:w-35 lg:w-38.25 flex items-center justify-center font-normal text-[10px] sm:text-[12px] md:text-[13.58px] leading-[150%] text-white/70 rounded-2xl cursor-pointer">
                        Analysis of Volume
                    </button>
                </div>
            </div>

            <div>
                <div className="p-px rounded-[20px] w-full h-full bg-[linear-gradient(252.84deg,#86B4B4_0.99%,rgba(58,78,78,0.1)_36.61%)] mt-10">
                    <div className="relative w-full h-full rounded-[20px] bg-[linear-gradient(180deg,#011314_0%,#011515_85%,rgba(9,42,45,0.7)_100%)]">
                        <div className='absolute inset-0 flex justify-end h-full'>
                            <GlowBlob />
                            <GlowEllipse />
                        </div>
                        <div className='p-6'>
                            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-2'>
                                <div className="relative z-10 flex items-center gap-2">
                                    <img src={Frame_3} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                                    <p className='font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#FFFFFF_30.77%,#999999_100%)] bg-clip-text text-transparent'>
                                        Highest Payout
                                    </p>
                                </div>

                                <div className="">
                                    <GradientButton>
                                        <span className='font-normal text-[10px] sm:text-[12px] md:text-[13.58px] text-white leading-[150%]'>
                                            In past 30 days
                                        </span>
                                    </GradientButton>
                                </div>
                            </div>

                            {/* <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6'> */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6">
                                {cardData.map((item, index) => (
                                    <div
                                    key={index}
                                    className="relative w-full rounded-2xl overflow-hidden"
                                    >
                                    {/* Background Image */}
                                    <img
                                        src={item.bg}
                                        alt="bg"
                                        className="w-full h-fit object-cover"
                                    />

                                    {/* Overlay Container */}
                                    <div className="absolute inset-0 flex flex-col justify-between p-4">

                                        {/* Top Section */}
                                        <div className="flex items-center justify-between">
                                        <div className="flex gap-2 items-center">
                                            <div className="p-px rounded-lg bg-gradient-to-b from-white to-white/10">
                                            <div className="w-6 h-6 rounded-[7px] bg-[#FFFFFF08] flex items-center justify-center overflow-hidden">
                                                <img
                                                src={item.image}
                                                alt="logo"
                                                className="w-full h-full object-contain"
                                                />
                                            </div>
                                            </div>

                                            <h3 className="font-medium text-[12px] text-white">
                                            {item.name}
                                            </h3>
                                        </div>

                                        <div className="w-6 h-6">
                                            <img src={Group_26} alt="icon" className="w-full h-full" />
                                        </div>
                                        </div>

                                        {/* Bottom Section */}
                                        <div>
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-[16px] text-[#FFFFFFB2]">Profit</p>
                                            <p className="text-white font-medium text-[28px]">
                                            {item.profit}
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-3 mt-4">
                                            <div className="flex justify-between">
                                            <p className="text-[#FFFFFFB2] text-[14px]">Account</p>
                                            <p className="text-white text-[14px]">{item.account}</p>
                                            </div>

                                            <div className="flex justify-between">
                                            <p className="text-[#FFFFFFB2] text-[14px]">Size</p>
                                            <p className="text-white text-[14px]">{item.size}</p>
                                            </div>

                                            <div className="flex justify-between">
                                            <p className="text-[#FFFFFFB2] text-[14px]">Country</p>
                                            <div className="flex items-center gap-1.5">
                                                <img src={item.flag} alt="flag" className="w-4 h-4" />
                                                <p className="text-white text-[14px]">{item.country}</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>

                                    </div>
                                    </div>
                                ))}
                                </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 mb-20 w-full">
                    {users.map((user) => (
                        <div
                        key={user.id}
                        className="relative w-full rounded-2xl overflow-hidden flex flex-col"
                        >
                        {/* Background Image */}
                        <img
                            src={Group_1}
                            alt="Group"
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />

                        {/* Overlay Content */}
                        <div className="relative z-10 flex flex-col gap-4 p-4 h-full">
                            
                            {/* Top User Info */}
                            <div className="flex items-center gap-2">
                            <div className="w-11 h-11 p-px rounded-2xl bg-linear-to-b from-white/60 to-white/10">
                                <div className="w-full h-full rounded-[15px] bg-[#FFFFFF08] flex items-center justify-center overflow-hidden">
                                <img
                                    src={user.profile}
                                    alt="profile"
                                    className="w-full h-full object-cover"
                                />
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] text-[#FFFFFFB2] leading-[160%]">
                                {user.name}
                                </p>
                                <h3 className="text-[16px] text-white font-medium leading-[160%]">
                                {user.time}
                                </h3>
                            </div>
                            </div>

                            {/* Main Image */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                            <img
                                src={user.image}
                                alt="main"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            </div>

                            {/* Info Section */}
                            <div className="flex flex-col gap-3 flex-grow">
                            <div className="flex justify-between">
                                <p className="text-[14px] text-[#FFFFFFB2]">Account Size</p>
                                <p className="text-[14px] text-white font-medium">
                                {user.account}
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-[14px] text-[#FFFFFFB2]">Country</p>
                                <div className="flex items-center gap-1.5">
                                <img src={circle} alt="flag" className="w-4 h-4" />
                                <p className="text-white text-[12px]">{user.country}</p>
                                </div>
                            </div>

                            {/* Button bottom aligned */}
                            <div className="mt-auto">
                                <button className="w-full h-12 rounded-2xl border border-white/20 bg-[linear-gradient(73deg,rgba(0,232,255,0.4)_40%,rgba(3,33,40,0.1)_140%)] text-white text-[16px]">
                                View Dashboard
                                </button>
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

export default Leaderboard
