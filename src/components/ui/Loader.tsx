import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="full-screen w-full flex items-center justify-center">
      <Loader2 className="animate-spin" size="35" />
    </div>
  );
};

export default Loader;
