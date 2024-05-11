import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-2 border border-e-2 min-h-screen px-3">
        <Sidebar />
      </div>
      <div className="col-span-10 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
