import React, { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Frame_1 from "../assets/img/mentoring.svg";
import Frame_2 from "../assets/img/credit-card-validation.svg";
import FancySvgButton from '../component/ui/button/FancySvgButton';
import icon from "../assets/img/new-job.svg";
import GlowBlob from '../assets/svg/GlowBlob'
import GlowEllipse from '../assets/svg/GlowEllipse'
import GradientButton from '../component/ui/button/GradientButton'
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
        profit: "66,262.25",
        account: "E8TRACK",
        size: "266,262.25",
        country: "DE",
        flag: circle,
        image: man_image,
        glowColor: "#00E8FF",
    },
    {
        name: "Aashish G.",
        profit: "49,056.00",
        account: "E8ONE",
        size: "500,000.00",
        country: "IN",
        flag: circle2,
        image: man_image1,
        glowColor: "#BF0CFF",
    },
    {
        name: "Nathan H.",
        profit: "48,596.34",
        account: "E8FTURES1",
        size: "100,000.00",
        country: "GB",
        flag: circle3,
        image: man_image2,
        glowColor: "#EEEEEE",
    },
    {
        name: "Artur Z.",
        profit: "40,635.53",
        account: "E8ONE",
        size: "500,000.00",
        country: "US",
        flag: circle4,
        image: man_image3,
        glowColor: "#00FFE1",
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
    const [active, setActive] = useState("left");
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 3D card animations
            tl.fromTo('.card-3d', {
                rotationY: -90,
                opacity: 0,
                transformOrigin: 'left center'
            }, {
                rotationY: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            });

            // Text animations
            tl.fromTo('.text-subtle', {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1
            }, '-=0.5');

            // Count animations
            gsap.fromTo('.count-number', {
                innerText: 0
            }, {
                innerText: (i, target) => parseFloat(target.dataset.target),
                duration: 2,
                ease: 'power2.out',
                snap: { innerText: 1 },
                stagger: 0.2,
                modifiers: {
                    innerText: function(value) {
                        const num = parseFloat(value);
                        if (isNaN(num)) return value;
                        return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    }
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="text-stone-50 mx-auto px-" ref={containerRef}>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
                <div className='relative flex items-center gap-[7.75px] z-10'>
                    <div className='flex items-center justify-center relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#FFFFFF12] overflow-hidden'>
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
                        <img src={Frame_1} alt="icon" className="w-3 h-3 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                    </div>
                    <div>
                        <p className='user text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[160%] tracking-normal bg-[linear-gradient(180deg,#FFFFFF_28.57%,#999999_100%)] bg-clip-text text-transparent'>
                            Leaderboard
                        </p>
                    </div>
                </div>

                {/* Toggle switch */}
                <div className="relative flex items-center rounded-xl md:rounded-2xl border border-[#FFFFFF33] p-px md:p-[2.91px] bg-[#172020]">
                    <div
                        className={`flex items-center justify-center absolute  transition-all duration-300`}
                        style={{
                            left: active === "left" ? "2.91px" : "50%",
                        }}
                    >
                        <FancySvgButton />
                    </div>
                    <button
                        onClick={() => setActive("left")}
                        className={`relative z-10 w-34 h-8 md:w-42 md:h-9 lg:w-45.25 lg:h-10 flex items-center justify-center gap-1 gmail text-[10px] sm:text-[12px] md:text-[13.58px] leading-[150%] cursor-pointer
                      ${active === "left" ? "text-white" : "text-[#FFFFFFB2]"}`}
                    >
                        <img src={icon} alt="icon" className="w-3 h-3 md:w-[15.52px] md:h-[15.52px]" />
                        Global Leaderboard
                    </button>
                    <button
                        onClick={() => setActive("right")}
                        className={`z-10 w-34 h-8 md:w-42 md:h-9 lg:w-45.25 lg:h-10 flex items-center justify-center gmail text-[10px] sm:text-[12px] md:text-[13.58px] leading-[150%] rounded-2xl cursor-pointer
                      ${active === "right" ? "text-white" : "text-[#FFFFFFB2]"}`}
                    >
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
                        <div className='p-4 sm:p-5 md:p-6'>
                            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-2'>
                                <div className='relative flex items-center gap-[7.75px] z-10'>
                                    <div className='flex items-center justify-center relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl md:rounded-[14px] bg-[#FFFFFF12] overflow-hidden'>
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
                                        <img src={Frame_2} alt="icon" className="w-3 h-3 md:w-4 md:h-4" />
                                    </div>
                                    <div>
                                        <p className='user text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[160%] tracking-normal bg-[linear-gradient(180deg,#FFFFFF_30.77%,#999999_100%)] bg-clip-text text-transparent'>
                                            Highest Payout
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <GradientButton>
                                        <span className='gmail flex text-[10px] sm:text-[12px] md:text-[13.58px] text-white leading-[150%] '>
                                            In past 30 days
                                        </span>
                                    </GradientButton>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 mt-6'>
                                {cardData.map((item, index) => (
                                    <div className='card-3d relative w-full h-full  rounded-2xl bg-[#FFFFFF08]'>
                                        {/* Gradient border */}
                                        <div className='gradient-border-card' />
                                        {/* Top Section */}
                                        <div className="relative z-10 p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex gap-2 items-center">
                                                    <div className="p-px rounded-lg bg-linear-to-b from-white to-white/10">
                                                        <div className="w-6 h-6 rounded-[7px] bg-[#FFFFFF08] flex items-center justify-center overflow-hidden">
                                                            <img
                                                                src={item.image}
                                                                alt="logo"
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h3 className="user leading-[160%] text-[12px] text-white">
                                                        {item.name}
                                                    </h3>
                                                </div>
                                                <div className="w-6 h-6">
                                                    <img src={Group_26} alt="icon" className="w-full h-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='relative w-full h-48 sm:h-53.75 rounded-2xl border border-transparent bg-[#FFFFFF08] overflow-hidden'>
                                            {/* Gradient border */}
                                            <div className='gradient-border-card' />
                                            {/* Grid / background SVG */}
                                            <div className="relative inset-0 z-0">
                                                <svg className='w-full h-full object-cover' viewBox="0 0 254 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.7" d="M-26.9018 23.752H-4.3764V1.48145H-3.14789V23.752H19.3775V1.48145H20.606V23.752H43.1314V1.48145H44.3599V23.752H66.8775V1.48145H68.106V23.752H90.6314V1.48145H91.8599V23.752H114.385V1.48145H115.614V23.752H138.139V1.48145H139.368V23.752H161.889V1.48145H163.118V23.752H185.643V1.48145H186.872V23.752H209.155V1.48145H210.383V23.752H232.909V1.48145H234.137V23.752H256.659V1.48145H257.887V23.752H280.245V24.9805H257.887V47.5039H280.245V48.7324H257.887V71.2568H280.245V72.4854H257.887V95.0098H280.245V96.2383H257.887V118.762H280.245V119.99H257.887V142.514H280.245V143.742H257.887V166.267H280.245V167.495H257.887V190.019H280.245V191.247H257.887V213.771H280.245V215H-27.8745V214.748H-28.1303V1.48145H-26.9018V23.752ZM281.641 214.748H280.413V1.48145H281.641V214.748ZM-26.9018 213.771H-4.3764V191.247H-26.9018V213.771ZM-3.14789 213.771H19.3775V191.247H-3.14789V213.771ZM20.606 213.771H43.1314V191.247H20.606V213.771ZM44.3599 213.771H66.8775V191.247H44.3599V213.771ZM68.106 213.771H90.6314V191.247H68.106V213.771ZM91.8599 213.771H114.385V191.247H91.8599V213.771ZM115.614 213.771H138.139V191.247H115.614V213.771ZM139.368 213.771H161.889V191.247H139.368V213.771ZM163.118 213.771H185.643V191.247H163.118V213.771ZM186.872 213.771H209.155V191.247H186.872V213.771ZM210.383 213.771H232.909V191.247H210.383V213.771ZM234.137 213.771H256.659V191.247H234.137V213.771ZM-26.9018 190.019H-4.3764V167.495H-26.9018V190.019ZM-3.14789 190.019H19.3775V167.495H-3.14789V190.019ZM20.606 190.019H43.1314V167.495H20.606V190.019ZM44.3599 190.019H66.8775V167.495H44.3599V190.019ZM68.106 190.019H90.6314V167.495H68.106V190.019ZM91.8599 190.019H114.385V167.495H91.8599V190.019ZM115.614 190.019H138.139V167.495H115.614V190.019ZM139.368 190.019H161.889V167.495H139.368V190.019ZM163.118 190.019H185.643V167.495H163.118V190.019ZM186.872 190.019H209.155V167.495H186.872V190.019ZM210.383 190.019H232.909V167.495H210.383V190.019ZM234.137 190.019H256.659V167.495H234.137V190.019ZM-26.9018 166.267H-4.3764V143.742H-26.9018V166.267ZM-3.14789 166.267H19.3775V143.742H-3.14789V166.267ZM20.606 166.267H43.1314V143.742H20.606V166.267ZM44.3599 166.267H66.8775V143.742H44.3599V166.267ZM68.106 166.267H90.6314V143.742H68.106V166.267ZM91.8599 166.267H114.385V143.742H91.8599V166.267ZM115.614 166.267H138.139V143.742H115.614V166.267ZM139.368 166.267H161.889V143.742H139.368V166.267ZM163.118 166.267H185.643V143.742H163.118V166.267ZM186.872 166.267H209.155V143.742H186.872V166.267ZM210.383 166.267H232.909V143.742H210.383V166.267ZM234.137 166.267H256.659V143.742H234.137V166.267ZM-26.9018 142.514H-4.3764V119.99H-26.9018V142.514ZM-3.14789 142.514H19.3775V119.99H-3.14789V142.514ZM20.606 142.514H43.1314V119.99H20.606V142.514ZM44.3599 142.514H66.8775V119.99H44.3599V142.514ZM68.106 142.514H90.6314V119.99H68.106V142.514ZM91.8599 142.514H114.385V119.99H91.8599V142.514ZM115.614 142.514H138.139V119.99H115.614V142.514ZM139.368 142.514H161.889V119.99H139.368V142.514ZM163.118 142.514H185.643V119.99H163.118V142.514ZM186.872 142.514H209.155V119.99H186.872V142.514ZM210.383 142.514H232.909V119.99H210.383V142.514ZM234.137 142.514H256.659V119.99H234.137V142.514ZM-26.9018 118.762H-4.3764V96.2383H-26.9018V118.762ZM-3.14789 118.762H19.3775V96.2383H-3.14789V118.762ZM20.606 118.762H43.1314V96.2383H20.606V118.762ZM44.3599 118.762H66.8775V96.2383H44.3599V118.762ZM68.106 118.762H90.6314V96.2383H68.106V118.762ZM91.8599 118.762H114.385V96.2383H91.8599V118.762ZM115.614 118.762H138.139V96.2383H115.614V118.762ZM139.368 118.762H161.889V96.2383H139.368V118.762ZM163.118 118.762H185.643V96.2383H163.118V118.762ZM186.872 118.762H209.155V96.2383H186.872V118.762ZM210.383 118.762H232.909V96.2383H210.383V118.762ZM234.137 118.762H256.659V96.2383H234.137V118.762ZM-26.9018 95.0098H-4.3764V72.4854H-26.9018V95.0098ZM-3.14789 95.0098H19.3775V72.4854H-3.14789V95.0098ZM20.606 95.0098H43.1314V72.4854H20.606V95.0098ZM44.3599 95.0098H66.8775V72.4854H44.3599V95.0098ZM68.106 95.0098H90.6314V72.4854H68.106V95.0098ZM91.8599 95.0098H114.385V72.4854H91.8599V95.0098ZM115.614 95.0098H138.139V72.4854H115.614V95.0098ZM139.368 95.0098H161.889V72.4854H139.368V95.0098ZM163.118 95.0098H185.643V72.4854H163.118V95.0098ZM186.872 95.0098H209.155V72.4854H186.872V95.0098ZM210.383 95.0098H232.909V72.4854H210.383V95.0098ZM234.137 95.0098H256.659V72.4854H234.137V95.0098ZM-26.9018 71.2568H-4.3764V48.7324H-26.9018V71.2568ZM-3.14789 71.2568H19.3775V48.7324H-3.14789V71.2568ZM20.606 71.2568H43.1314V48.7324H20.606V71.2568ZM44.3599 71.2568H66.8775V48.7324H44.3599V71.2568ZM68.106 71.2568H90.6314V48.7324H68.106V71.2568ZM91.8599 71.2568H114.385V48.7324H91.8599V71.2568ZM115.614 71.2568H138.139V48.7324H115.614V71.2568ZM139.368 71.2568H161.889V48.7324H139.368V71.2568ZM163.118 71.2568H185.643V48.7324H163.118V71.2568ZM186.872 71.2568H209.155V48.7324H186.872V71.2568ZM210.383 71.2568H232.909V48.7324H210.383V71.2568ZM234.137 71.2568H256.659V48.7324H234.137V71.2568ZM-26.9018 47.5039H-4.3764V24.9805H-26.9018V47.5039ZM-3.14789 47.5039H19.3775V24.9805H-3.14789V47.5039ZM20.606 47.5039H43.1314V24.9805H20.606V47.5039ZM44.3599 47.5039H66.8775V24.9805H44.3599V47.5039ZM68.106 47.5039H90.6314V24.9805H68.106V47.5039ZM91.8599 47.5039H114.385V24.9805H91.8599V47.5039ZM115.614 47.5039H138.139V24.9805H115.614V47.5039ZM139.368 47.5039H161.889V24.9805H139.368V47.5039ZM163.118 47.5039H185.643V24.9805H163.118V47.5039ZM186.872 47.5039H209.155V24.9805H186.872V47.5039ZM210.383 47.5039H232.909V24.9805H210.383V47.5039ZM234.137 47.5039H256.659V24.9805H234.137V47.5039ZM280.245 1.22852H-27.8745V0H280.245V1.22852Z" fill="url(#paint0_linear_1318_1548)" fill-opacity="0.07" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1318_1548" x1="157.499" y1="118.5" x2="239.502" y2="35.0036" gradientUnits="userSpaceOnUse">
                                                            <stop stop-opacity="0" />
                                                            <stop offset="0.915503" stop-color="white" stop-opacity="0.85" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className='absolute inset-0 overflow-hidden'>
                                                <svg className='w-full h-full object-cover' viewBox="0 0 254 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_f_1318_1547)">
                                                        <path d="M294.501 -25.9999C307.659 -16.8448 305.856 80.0602 256.499 151C207.142 221.94 137.985 266.627 124.826 257.472C111.668 248.317 141.012 183.388 190.369 112.448C201 -101.5 281.343 -35.155 294.501 -25.9999Z" fill={item.glowColor} fill-opacity="0.8" />
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_f_1318_1547" x="-8.31821" y="-172.846" width="439.789" height="561.504" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                            <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur_1318_1547" />
                                                        </filter>
                                                    </defs>
                                                </svg>
                                            </div>
                                            {/* Bottom Section */}
                                            <div className="flex flex-col justify-between absolute inset-0 z-20 p-4">
                                                <div className="flex flex-col gap-1.5">
                                                    <p className="text-subtle gmail text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#FFFFFFB2]">Profit</p>
                                                    <p className="count-number text-white user leading-[150%] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[28px] xl:text-[24px] 2xl:text-[28px]" data-target={parseFloat(item.profit.replace(/[$,]/g, ''))} data-type="profit">
                                                        0
                                                    </p>
                                                </div>
                                                <div className="flex flex-col gap-3 ">
                                                    <div className="flex justify-between">
                                                        <p className="text-subtle gmail text-[#FFFFFFB2] text-[12px] md:text-[13px] lg:text-[14px]">Account</p>
                                                        <p className="user leading-[150%] text-white text-[12px] md:text-[13px] lg:text-[14px]">{item.account}</p>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-subtle gmail leading-[150%] text-[#FFFFFFB2] text-[12px] md:text-[13px] lg:text-[14px]">Size</p>
                                                        <p className="count-number user leading-[150%] text-white text-[12px] md:text-[13px] lg:text-[14px]" data-target={parseFloat(item.size.replace(/[$,]/g, ''))} data-type="profit">
                                                            0
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-subtle gmail leading-[150%] text-[#FFFFFFB2] text-[12px] md:text-[13px] lg:text-[14px]">Country</p>
                                                        <div className="flex items-center gap-1.5">
                                                            <img src={item.flag} alt="flag" className="w-4 h-4" />
                                                            <p className="gamil leading-[150%] text-white text-[10px] md:text-[12px] lg:text-[12px]">{item.country}</p>
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
                            className="card-3d relative w-full rounded-2xl overflow-hidden flex flex-col"
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
                                    <div className="w-6 md:w-8 lg:w-9 xl:w-10 2xl:w-11 h-6 md:h-8 lg:h-9 xl:h-10 2xl:h-11 p-px rounded-[7px] md:rounded-[11px] lg:rounded-[15px] bg-linear-to-b from-white/60 to-white/10">
                                        <div className="w-full h-full rounded-[7px] md:rounded-[11px] lg:rounded-[15px] bg-[#FFFFFF08] flex items-center justify-center overflow-hidden">
                                            <img
                                                src={user.profile}
                                                alt="profile"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="gmail text-[9px] sm:text-[10px] text-[#FFFFFFB2] leading-[160%]">
                                            {user.name}
                                        </p>
                                        <h3 className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16x] xl:text-[16px] 2xl:text-[16px] text-white user leading-[160%]">
                                            {user.time}
                                        </h3>
                                    </div>
                                </div>
                                {/* Main Image */}
                                <div className="relative rounded-2xl overflow-hidden aspect-4/3">
                                    <img
                                        src={user.image}
                                        alt="main"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                                {/* Info Section */}
                                <div className="flex flex-col gap-3 grow">
                                    <div className="flex justify-between">
                                        <p className="text-subtle gmail leading-[150%] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#FFFFFFB2]">Account Size</p>
                                        <p className="user leading-[150%] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-white">
                                            {user.account}
                                        </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-subtle gmail leading-[150%] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#FFFFFFB2]">Country</p>
                                        <div className="flex items-center gap-1.5">
                                            <img src={circle} alt="flag" className="w-4 h-4" />
                                            <p className="gmail leading-[150%] text-white text-[11px] sm:text-[12px]">{user.country}</p>
                                        </div>
                                    </div>
                                    {/* Button bottom aligned */}
                                    <div className="mt-auto relative">
                                        {/* Top center border glow */}
                                        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-36 h-px bg-linear-to-r from-transparent via-white/70 to-transparent z-10" />
                                        <button className="w-full h-12 rounded-2xl border border-white/20 bg-[linear-gradient(73deg,rgba(0,232,255,0.4)_40%,rgba(3,33,40,0.1)_140%)] gmail leading-[150%] text-white text-[11px] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[15px] 2xl:text-[16px] cursor-pointer">
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