import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type TContainerProps = {
  className?: string;
  children: ReactNode;
};
const Container = ({ className, children }: TContainerProps) => {
  return (
    <div className={twMerge("w-full max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
