import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return (
        <div className="flex bg-[#000000] text-white min-h-screen">
            <Sidebar />

            <div className="flex-1">
                <Navbar />

                {/* page render */}
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

