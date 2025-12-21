import { Outlet } from "react-router-dom";

import Header from "@/components/Header";

import { useAppSelector } from "@/hooks/hooks";

const Layout = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* <div className="flex-1 bg-zinc-50 text-black"> */}
      <div
        className={`flex-1 ${theme === "light" ? "bg-zinc-50 text-black" : "bg-zinc-800 text-white"}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
