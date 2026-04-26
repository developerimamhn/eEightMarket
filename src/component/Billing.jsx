

import { useState } from "react";
import logo2 from "../assets/Logo2.png";
import bgImage from "../assets/Background_1.png";

const InputField = ({ label, value, onChange, placeholder = "" }) => (
  <div className="relative w-full">
    <label className="absolute px-[6px] left-[14px] -top-[9px] z-10 text-[12px] text-white/90 leading-[1.5] bg-transparent">
      {label}
    </label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-[48px] px-[20px] bg-transparent outline-none rounded-[12px] text-[14px] text-white/70 leading-[1.5] border border-white/15 placeholder:text-white/25"
    />
  </div>
);

const BillingInfo = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    stateRegion: "",
  });

  const set = (key) => (val) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <>
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes borderRotate {
          to { --angle: 360deg; }
        }
        .rotating-border-wrapper {
          position: relative;
          border-radius: 22px;
          padding: 1.5px;
        }
        .rotating-border-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 1.5px;
          background: conic-gradient(
            from var(--angle),
            transparent 0deg,
            transparent 260deg,
            rgba(0,232,255,0.15) 290deg,
            rgba(0,232,255,0.9) 320deg,
            #86b4b4 340deg,
            rgba(0,232,255,0.9) 355deg,
            transparent 360deg
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderRotate 3s linear infinite;
          pointer-events: none;
        }
      `}</style>

      <div className="rotating-border-wrapper w-full h-[307px]">
        {/* Inner card with background image + dark overlay */}
        <div
          className="relative w-full rounded-[20px] overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
         
          {/* Content */}
          <div className="relative z-10 p-[20px]">

            {/* Header */}
            <div className="flex items-center gap-[8px] mb-[32px]">
              <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 bg-white/[0.06] border border-white/10">
                <img
                  src={logo2}
                  alt="logo"
                  className="object-contain h-[36px] sm:h-[44px]"
                />
              </div>
              <p className="text-[16px] font-medium text-white leading-[1.6]">
                Billing info
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-[24px]">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-[16px]">
                <InputField label="E-mail" value={form.email} onChange={set("email")} placeholder="naimurrahman3262@gmail.com" />
                <InputField label="First Name" value={form.firstName} onChange={set("firstName")} placeholder="Naimur" />
                <InputField label="Last Name" value={form.lastName} onChange={set("lastName")} placeholder="Rahman" />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row gap-[16px]">
                <InputField label="Address" value={form.address} onChange={set("address")} placeholder="Kaligonj, Satkhira" />
                <InputField label="City" value={form.city} onChange={set("city")} placeholder="Satkhira" />
                <InputField label="Zip Code" value={form.zipCode} onChange={set("zipCode")} placeholder="9440" />
              </div>

              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row gap-[16px]">
                <InputField label="Country" value={form.country} onChange={set("country")} placeholder="Bangladesh" />
                <InputField label="State/Region" value={form.stateRegion} onChange={set("stateRegion")} placeholder="Dhaka Division" />

                <button className="w-full h-[48px] rounded-[16px] text-[16px] text-white border border-[rgba(233,251,255,0.4)] bg-[linear-gradient(24.86deg,rgba(0,232,255,0.4)_41%,rgba(3,33,40,0.04)_143%)] transition-opacity duration-200 hover:opacity-90">
                  Save Changes
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BillingInfo;