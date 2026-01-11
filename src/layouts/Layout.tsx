import { Outlet } from "react-router-dom";

import Header from "@/components/Header";

import { useAppSelector } from "@/hooks/hooks";

const Layout = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div
        className={`flex flex-1 overflow-hidden ${
          theme === "light"
            ? "bg-stone-100 text-black"
            : "bg-zinc-800 text-white"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
