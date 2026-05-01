import React from 'react'
import Group_1 from "../assets/Frame 427321454.svg";
import man_image4 from "../assets/man_image4.png";
import man_image5 from "../assets/man_image5.png";
import man_image6 from "../assets/man_image6.png";
import man_image7 from "../assets/man_image7.png";
import man_image8 from "../assets/man_image8.png";
import man_image9 from "../assets/man_image9.png";
import circle from "../assets/circle-flags_us.svg";

const Card2 = () => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 mb-20 justify-items-center">
      {users.map((user) => (
        <div key={user.id} className="relative w-full max-w-89.25 items-center justify-between rounded-2xl overflow-hidden">

          {/* Background Image */}
          <img
            src={Group_1}
            alt="Group"
            className="w-89.25 h-105 object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col gap-3 p-4">

            {/* Top Overlay */}
            <div className="flex items-center gap-2">
              <div className="w-11 h-11 p-px rounded-2xl bg-linear-to-b from-white/60 to-white/4">
                <div className="w-full h-full rounded-[15px] bg-[#FFFFFF08] flex items-center justify-center">
                  <img
                    src={user.profile}
                    alt="profile"
                    className="w-full h-full rounded-[15px] object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="font-normal text-[10px] leading-[160%] text-[#FFFFFFB2]">
                  {user.name}
                </p>

                <h3 className="font-medium text-[16px] leading-[160%] text-[#FFFFFF]">
                  {user.time}
                </h3>
              </div>
            </div>

            {/* Middle Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={user.image}
                alt="main"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#33333333]" />
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">

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
                    <p className="text-white text-[12px]">
                      {user.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center mb-2">
                <button className="w-full h-12 rounded-2xl border border-white/20 bg-[linear-gradient(73.24deg,rgba(0,232,255,0.4)_41.01%,rgba(3,33,40,0.04)_143.13%)] text-white text-[16px]">
                  View Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card2

