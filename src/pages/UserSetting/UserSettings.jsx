import Hero from "../UserSetting/Hero";
import BillingInfo from "../UserSetting/Billing";

const UserSetting = () => {
  return (
    <div className="space-y-6">
      <Hero />
      <BillingInfo />
    </div>
  );
};

export default UserSetting;