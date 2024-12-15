import { PropsWithChildren } from "react";
import Navbar from "./_components/Navbar";

const ProtectedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-full gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 to-orange-400">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
