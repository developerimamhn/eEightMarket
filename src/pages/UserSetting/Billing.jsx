import { useState } from "react";
import logo2 from "../../assets/img/Billing_Info_Logo.svg";
import bgImage from "../../assets/img/User_bg.png";

const InputField = ({ label, value, onChange, placeholder = "" }) => {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative w-full min-h-13.5">
       
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={lifted ? placeholder : ""}
        className="billing-input w-full min-h-13.5 px-4 rounded-[14px] transition-all duration-300"
        style={{
          border: focused
            ? "1.5px solid rgba(255,255,255,0.35)"
            : "1.5px solid rgba(255,255,255,0.35)",
          background: "transparent",
        }}
      />
      <label
        className="absolute left-4 pointer-events-none transition-all duration-300 ease-in-out"
        style={{
          top: lifted ? "0px" : "50%",
          left: lifted ? "28px" : "16px",
          transform: lifted ? "translateY(-50%)" : "translateY(-50%)",
          fontSize: lifted ? "12px" : "14px",
          // color: lifted ? "rgba(255,255,255,1)" : "rgba(255, 255, 255, 0.7)",
          color: focused
            ? "rgba(255,255,255,1)"
            : lifted
            ? "rgba(255,255,255,0.7)"
            : "rgba(255,255,255,0.7)",
          background: lifted ? "rgba(13,24,20,0.3)" : "transparent",
          padding: lifted ? "0 5px" : "0",
          backdropFilter: lifted ? "blur(10px)" : "none",
          lineHeight: 1.5,
          borderRadius: "3px",
        }}
      >
        {label}
      </label>
    </div>
  );
};

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
    <div className="w-full rotating-border-wrapper relative">
      <div
        className="relative w-full rounded-[20px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 block h-full w-full rounded-[inherit] p-px [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] mask-subtract! [background:linear-gradient(205.84deg,#86B4B4_0.99%,rgba(58,78,78,0.1)_36.61%)] pointer-events-none"
        ></div>
        <div className="relative z-10 p-5">

          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0">
              <img src={logo2} alt="logo" className="w-10 h-10" />
            </div>
            <p className="text-[16px] font-medium text-white leading-[1.6]">
              Billing info
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField label="E-mail" value={form.email} onChange={set("email")} placeholder="" />
              <InputField label="First Name" value={form.firstName} onChange={set("firstName")} placeholder="" />
              <InputField label="Last Name" value={form.lastName} onChange={set("lastName")} placeholder="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField label="Address" value={form.address} onChange={set("address")} placeholder="" />
              <InputField label="City" value={form.city} onChange={set("city")} placeholder="" />
              <InputField label="Zip Code" value={form.zipCode} onChange={set("zipCode")} placeholder="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField label="Country" value={form.country} onChange={set("country")} placeholder="" />
              <InputField label="State/Region" value={form.stateRegion} onChange={set("stateRegion")} placeholder="" />

              <button
                className="w-full min-h-[54px] rounded-2xl text-[16px] text-white transition-all duration-300 hover:brightness-125 hover:shadow-[0_0_20px_rgba(0,232,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  border: "1.5px solid rgba(233,251,255,0.4)",
                  background: "linear-gradient(24.86deg, rgba(0,232,255,0.4) 41%, rgba(3,33,40,0.04) 143%)"
                }}
              >
                Save Changes
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BillingInfo;

