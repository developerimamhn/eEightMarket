// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import LeaderboardCard from "../components/LeaderboardCard";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// const MainLayout = () => {
//     return (
//         <div className="flex bg-[#000000] text-white min-h-screen">
//             <Sidebar />
//             <div className="flex-1 px-12">
//                 <Navbar />
//                 <LeaderboardCard />
//             </div>
//         </div>
//     );
// };

// export default MainLayout;





const MainLayout = () => {
    return (
        <div className="flex bg-[#000000] text-white min-h-screen">
            <Sidebar />

            <div className="flex-1 px-12">
                <Navbar />

                {/* page render */}
                <div className="mt-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

