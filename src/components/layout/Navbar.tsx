import { Menubar } from "../ui/menubar";
import logo from "@/assets/images/logo.png";
import Container from "./Contaienr";
import { NavLink } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
const Navbar = () => {
  return (
    <div>
      <Menubar className="fixed top-0 left-0 right-0 w-full rounded-none h-16 mb-16 z-[99999999] ">
        <Container>
          <div className="flex justify-between items-center  ">
            <div className="flex gap-5 items-center">
              <img className="size-12" src={logo} alt="" />
              <p className="font-bold text-xl">
                CARE<span className="text-green-700">food</span>
              </p>
            </div>
            <ul className="hidden lg:flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-green-700" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/supplies"
                  className={({ isActive }) =>
                    isActive ? "text-green-700" : ""
                  }
                >
                  All supplies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-green-700" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
            <span className="lg:hidden">
              <NavbarMobile>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </NavbarMobile>
            </span>
          </div>
        </Container>
      </Menubar>
    </div>
  );
};

export default Navbar;
