import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Signup from "@/pages/Signup";
import SignIn from "@/pages/SignIn";
import AllSupplies from "@/pages/AllSupplies";
import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import AllSuppliesDashboard from "@/pages/AllSuppliesDashboard";
import CreateSupply from "@/pages/CreateSupply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "all-supply",
        element: <AllSuppliesDashboard />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
]);
export default router;
