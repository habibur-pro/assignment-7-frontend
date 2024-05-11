import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 px-3">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
