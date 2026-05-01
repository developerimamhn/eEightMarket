import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button - mobile e dekhabe */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#07181c] p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Overlay - mobile e sidebar open hole background dim hobe */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-40 h-screen w-40 md:w-50 lg:w-68 bg-[#07181c] p-5
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:static sm:h-screen
        `}
      >
        <h1 className="text-xl font-bold mb-10 mt-10 sm:mt-0">E8 Markets</h1>

        <ul className="space-y-8">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Dashboard</Link>
          </li>
          <li>
            <Link to="/accountoverview" onClick={() => setIsOpen(false)}>Account Overview</Link>
          </li>
          <li>
            <Link to="/orderlist" onClick={() => setIsOpen(false)}>Order List</Link>
          </li>
          <li>
            <Link to="/usersetting" onClick={() => setIsOpen(false)}>User Setting</Link>
          </li>
          <li>
            <Link to="/leaderboard" onClick={() => setIsOpen(false)}>Leaderboard</Link>
          </li>
          <li>
            <Link to="/accountextras" onClick={() => setIsOpen(false)}>Account Extras</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

