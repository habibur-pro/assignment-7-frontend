import { RefreshCcw } from "lucide-react";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

const ErrorBox = () => {
  const navigate = useNavigate();
  return (
    <div className="full-screen w-full flex items-center justify-center">
      <div className=" border p-5 flex flex-col items-center gap-5">
        <p className="text-red-500 text-xl text-center">
          Something went wrong!
        </p>
        <Button onClick={() => navigate(0)} className="inline-flex space-x-1">
          <RefreshCcw />
          <span>Reload</span>
        </Button>
      </div>
    </div>
  );
};

export default ErrorBox;
