import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { toggleLanguage, toggleEffect, toggleTheme } from "@/store";

import { Sun, Moon, Sparkle, Sparkles } from "lucide-react";
import GraffitiLogo from "@/common/GraffitiLogo";

const HeaderItemsEn = [
  { name: "Home", path: "/" },
  { name: "About me", path: "/about-me" },
  { name: "Project", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const HeaderItemsVi = [
  { name: "Trang chủ", path: "/" },
  { name: "Giới thiệu", path: "/about-me" },
  { name: "Dự án", path: "/project" },
  { name: "Liên hệ", path: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const language = useAppSelector((state) => state.language.language);
  const effect = useAppSelector((state) => state.effect.effect);
  const theme = useAppSelector((state) => state.theme.theme);

  const items = language === "vi" ? HeaderItemsVi : HeaderItemsEn;

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md ${
        theme === "light"
          ? "bg-white text-zinc-800"
          : "bg-zinc-800/80 text-zinc-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
        {/* LOGO */}
        <GraffitiLogo />

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-10">
          {/* MENU */}
          <nav className="flex items-center gap-8 text-sm font-medium">
            {items.map((item) => {
              const active = location.pathname === item.path;

              return (
                <div
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`relative cursor-pointer transition-colors ${
                    active
                      ? theme === "light"
                        ? "text-amber-500"
                        : "text-pink-400"
                      : theme === "light"
                        ? "hover:text-amber-400"
                        : "hover:text-pink-300"
                  }`}
                >
                  {item.name}

                  {/* underline */}
                  {active && (
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full ${
                        theme === "light" ? "bg-amber-400" : "bg-pink-400"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* DIVIDER */}
          <div className="h-6 w-px bg-zinc-400/30" />

          {/* ICONS */}
          <div className="flex items-center gap-5">
            {/* Language */}
            <button
              onClick={() => dispatch(toggleLanguage())}
              className={`cursor-pointer text-sm font-semibold ${theme === "light" ? "hover:text-amber-500" : "hover:text-pink-400"}`}
            >
              {language === "vi" ? "VI" : "EN"}
            </button>

            {/* Theme */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="cursor-pointer transition-colors duration-200"
            >
              {theme === "light" ? (
                <Sun size={20} className="hover:text-amber-500" />
              ) : (
                <Moon size={20} className="hover:text-indigo-400" />
              )}
            </button>

            {/* Effect */}
            <button
              onClick={() => dispatch(toggleEffect())}
              className={`cursor-pointer ${theme === "light" ? "hover:text-amber-500" : "hover:text-pink-400"}`}
            >
              {effect ? <Sparkles size={20} /> : <Sparkle size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
