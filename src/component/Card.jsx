import GlowBlob from '../assets/svg//GlowEllipse'
import GlowEllipse from '../assets/svg/GlowBlob'
import GradientButton from '../component/ui/button/GradientButton'
import Frame_3 from "../assets/img/Frame 427321461 (2).svg";
import Group_9 from "../assets/img/Group 9.svg";
import Group_10 from "../assets/img/Group 10.svg";
import Group_11 from "../assets/img/Group 11.svg";
import Group_12 from "../assets/img/Group 12.svg";
import Group_26 from "../assets/img/Group 26.svg";
import circle from "../assets/img/circle-flags_de.svg";
import circle2 from "../assets/img/Mask group.svg";
import circle3 from "../assets/img/Mask group1.svg";
import circle4 from "../assets/img/circle_flags_us.svg";
import man_image from "../assets/img/man_image.png";
import man_image1 from "../assets/img/man_image1.png";
import man_image2 from "../assets/img/man_image2.png";
import man_image3 from "../assets/img/man_image3.png";

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

const Card = () => {
    return (
        <div>
            <div className="p-px rounded-[20px] w-full h-full bg-[linear-gradient(252.84deg,#86B4B4_0.99%,rgba(58,78,78,0.1)_36.61%)] mt-10">
                <div className="relative w-full h-full rounded-[20px] bg-[linear-gradient(180deg,#011314_0%,#011515_85%,rgba(9,42,45,0.7)_100%)]">
                    {/* Background Effects */}
                    <div className='absolute inset-0 flex justify-end h-full'>
                        <GlowBlob />
                        <GlowEllipse />
                    </div>
                    {/* Content */}
                    <div className='p-6'>
                        <div className='flex items-center justify-between'>
                            <div className="relative z-10 flex items-center gap-2">
                                <img src={Frame_3} alt="logo" className="w-9 h-9" />
                                <p className='font-medium text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#FFFFFF_30.77%,#999999_100%)] bg-clip-text text-transparent'>
                                    Highest Payout
                                </p>
                            </div>

                            <div className="">
                                <GradientButton
                                    text="In past 30 days"
                                    className="w-1/2 font-normal text-[13.58px] leading-[150%]"
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-6 mt-6'>
                            {cardData.map((item, index) => (
                                <div key={index} className="relative rounded-2xl overflow-hidden">

                                    {/* Image */}
                                    <img
                                        src={item.bg}
                                        alt="bg"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Top Overlay */}
                                    <div className="absolute inset-0 flex items-start px-3 py-3">
                                        <div className="w-full flex items-center justify-between">

                                            {/* Left */}
                                            <div className="flex gap-2 items-center">

                                                <div className="p-px rounded-lg bg-linear-to-b from-white to-white/10">
                                                    <div className="w-6 h-6 rounded-[7px] bg-[#FFFFFF08] flex items-center justify-center">
                                                        <img
                                                            src={item.image}
                                                            alt="logo"
                                                            className="w-6 h-6 rounded-[7px] object-contain"
                                                        />
                                                    </div>
                                                </div>
                                                <h3 className="font-medium text-[12px] text-white">
                                                    {item.name}
                                                </h3>
                                            </div>

                                            {/* Right Icon */}
                                            <div className="w-6 h-6">
                                                <img src={Group_26} alt="icon" className="w-full h-full" />
                                            </div>

                                        </div>
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="absolute inset-0 pt-18 p-5">

                                        <div className='flex flex-col gap-1.5'>
                                            <p className='text-[16px] text-[#FFFFFFB2]'>Profit</p>
                                            <p className='text-white font-medium text-[28px]'>
                                                {item.profit}
                                            </p>
                                        </div>

                                        <div className='flex flex-col gap-3 mt-4'>

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

                                                <div className='flex items-center gap-1.5'>
                                                    <img src={item.flag} alt="flag" className="w-4 h-4" />
                                                    <p className="text-white text-[14px]">{item.country}</p>
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
        </div>
    )
}

export default Card
