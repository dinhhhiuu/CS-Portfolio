import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { toggleLanguage, toggleEffect, toggleTheme } from "@/store";

import avatar from "@/assets/favicon-32x32.png";

import { Sun, Moon, Sparkle, Sparkles } from "lucide-react";

const HeaderItemsEn = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About me",
    path: "/about-me",
  },
  {
    name: "Course",
    path: "/course",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const HeaderItemsVi = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Giới thiệu",
    path: "/about-me",
  },
  {
    name: "Môn học",
    path: "/course",
  },
  {
    name: "Liên hệ",
    path: "/contact",
  },
];

let HeaderItemsCur = HeaderItemsEn;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const language = useAppSelector((state) => state.language.language);
  const effect = useAppSelector((state) => state.effect.effect);
  const theme = useAppSelector((state) => state.theme.theme);

  const ChangeLanguage = () => {
    dispatch(toggleLanguage());
    if (language === "vi") {
      HeaderItemsCur = HeaderItemsEn;
    } else {
      HeaderItemsCur = HeaderItemsVi;
    }
  };

  const ChangeEffect = () => {
    dispatch(toggleEffect());
  };

  const ChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="relative flex items-center justify-between bg-zinc-500 p-4">
      {/* LOGO */}
      <img src={avatar} alt="Avatar" width={32} height={32} className="ml-8" />
      {/* MAIN */}
      <div className="mr-8 flex gap-12">
        <div className="mr-8 flex gap-8">
          {HeaderItemsCur.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(item.path);
              }}
              className="cursor-pointer hover:text-blue-500"
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* ICON */}
        <div className="flex cursor-pointer items-center gap-4">
          {/* LANGUAGE */}
          <div
            className="w-6 hover:text-blue-500"
            onClick={ChangeLanguage}
          >{`${language === "vi" ? "Vi" : "En"}`}</div>
          {/* DARK MODE */}
          <div>
            {theme === "light" ? (
              <Sun
                size={20}
                onClick={ChangeTheme}
                className="hover:text-yellow-500"
              />
            ) : (
              <Moon
                size={20}
                onClick={ChangeTheme}
                className="hover:text-blue-400"
              />
            )}
          </div>
          {/* Effect Toggle */}
          <div className={`hover:text-pink-300`} onClick={ChangeEffect}>
            {effect ? <Sparkles size={20} /> : <Sparkle size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
