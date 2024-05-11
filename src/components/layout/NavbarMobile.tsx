import { ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavLink } from "react-router-dom";

export type TMobileNavProps = { children: ReactNode };

export default function NavbarMobile({ children }: TMobileNavProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side="left" className="mt-14 z-50 ">
          <div className="w-full">
            <ul className="flex flex-col justify-center items-center gap-3 w-full">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-green-700 " : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/supplies"
                  className={({ isActive }) =>
                    isActive ? "text-purple-500" : ""
                  }
                >
                  All supplies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-purple-500" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
