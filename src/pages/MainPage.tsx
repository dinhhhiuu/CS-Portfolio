import Avatar from "@/assets/itachi_dongo-nonbg.png";

import { Linkedin, Github, Facebook, Instagram } from "lucide-react";

import { useAppSelector } from "@/hooks/hooks";

import AvatarTilt from "@/common/AvatarTilt";
import IntroText from "@/components/Intro";

const MainPage = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const language = useAppSelector((state) => state.language.language);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full max-w-6xl gap-x-20">
        {/* LEFT */}
        <div className="flex flex-1 flex-col items-start justify-center gap-y-8 pl-6">
          <IntroText />

          <div className="flex gap-x-4">
            {/* Introduce */}
            <button
              className={`rounded-2xl px-6 py-2.5 font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 ${
                theme === "light"
                  ? "border border-zinc-400 text-zinc-800 hover:bg-zinc-200"
                  : "border border-white/70 text-white hover:bg-white/10"
              }`}
            >
              {language === "vi" ? "Giới thiệu" : "Introduce"}
            </button>

            {/* Download CV */}
            <button
              className={`rounded-2xl px-6 py-2.5 font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
                theme === "light"
                  ? "bg-zinc-800 text-white hover:bg-zinc-700"
                  : "bg-white text-zinc-900 hover:bg-zinc-200"
              } `}
            >
              {language === "vi" ? "Tải CV" : "Download CV"}
            </button>
          </div>
          {/* Icon */}
          <div className="flex gap-4 pt-2">
            {[
              { Icon: Linkedin, hover: "hover:text-blue-500" },
              { Icon: Github, hover: "hover:text-gray-500" },
              { Icon: Facebook, hover: "hover:text-blue-600" },
              { Icon: Instagram, hover: "hover:text-pink-500" },
            ].map(({ Icon, hover }, i) => (
              <a
                key={i}
                href="#"
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md ${
                  theme === "dark"
                    ? "border border-white/10 bg-white/5 text-white backdrop-blur hover:bg-white/10"
                    : "border border-black/10 bg-black/5 text-black hover:bg-black/10"
                } ${hover}`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex flex-1 items-center justify-center">
          <AvatarTilt image={Avatar} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
