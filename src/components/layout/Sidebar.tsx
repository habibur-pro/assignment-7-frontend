import { Grid2X2, LayoutDashboard, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <div>
      <ul className="w-full">
        <li>
          <Link
            to="/dashboard"
            className={`flex gap-x-3 my-3 items-center p-2 cursor-pointer hover:bg-main rounded-lg ${
              currentRoute === "/dashboard" ? "bg-slate-300" : ""
            }`}
          >
            <span className="text-2xl">
              <LayoutDashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/all-supply"
            className={`flex gap-x-3 my-3 items-center p-2 cursor-pointer hover:bg-main rounded-lg ${
              currentRoute === "/dashboard/all-supply" ? "bg-slate-300" : ""
            }`}
          >
            <span className="text-2xl">
              <Grid2X2 />
            </span>
            <span className="">All Supply</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/create-supply"
            className={`flex gap-x-3 my-3 items-center p-2 cursor-pointer hover:bg-main rounded-lg ${
              currentRoute === "/dashboard/create-supply" ? "bg-slate-300" : ""
            }`}
          >
            <span className="text-2xl">
              <Plus />
            </span>
            <span>Create Supply</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
