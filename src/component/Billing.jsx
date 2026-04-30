

import { useState } from "react";
import logo2 from "../assets/logo2.png";
import bgImage from "../assets/Background_1.png";

const InputField = ({ label, value, onChange, placeholder = "" }) => (
  <fieldset className="w-full border border-white/15 rounded-xl px-5 py-3.5">

    <legend className="text-[12px] text-white/90 px-1.5">
      {label}
    </legend>

    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full  bg-transparent outline-none text-[14px] text-white/70 leading-[100%] placeholder:text-white/25"
    />

  </fieldset>
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

      <div className="rotating-border-wrapper w-full">
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
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-white/6 border border-white/10">
                <img
                  src={logo2}
                  alt="logo"
                  className="object-contain h-9 sm:h-11"
                />
              </div>
              <p className="text-[16px] font-medium text-white leading-[1.6]">
                Billing info
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-3 gap-4">
                <InputField label="E-mail" value={form.email} onChange={set("email")} placeholder="" />
                <InputField label="First Name" value={form.firstName} onChange={set("firstName")} placeholder="Naimur" />
                <InputField label="Last Name" value={form.lastName} onChange={set("lastName")} placeholder="Rahman" />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-3 gap-4">
                <InputField label="Address" value={form.address} onChange={set("address")} placeholder="Kaligonj, Satkhira" />
                <InputField label="City" value={form.city} onChange={set("city")} placeholder="Satkhira" />
                <InputField label="Zip Code" value={form.zipCode} onChange={set("zipCode")} placeholder="9440" />
              </div>

              {/* Row 3 */}
              {/* Row 3 */}
              <div className="grid md:grid-cols-3 gap-4">
                <InputField label="Country" value={form.country} onChange={set("country")} placeholder="Bangladesh" />
                <InputField label="State/Region" value={form.stateRegion} onChange={set("stateRegion")} placeholder="Dhaka Division" />

                <button className="w-full h-full rounded-2xl text-[16px] text-white border border-[rgba(233,251,255,0.4)] bg-[linear-gradient(24.86deg,rgba(0,232,255,0.4)_41%,rgba(3,33,40,0.04)_143%)] transition-all duration-300 hover:brightness-125 hover:shadow-[0_0_20px_rgba(0,232,255,0.3)] hover:scale-[1.02] active:scale-[0.98]">
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