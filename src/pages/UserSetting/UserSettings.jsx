import { useState } from "react";
import Hero from "../UserSetting/Hero";
import BillingInfo from "../UserSetting/Billing";

const UserSetting = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="space-y-6">
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "General" && <BillingInfo />}
    </div>
  );
};

export default UserSetting;