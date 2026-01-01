import Avatar from "@/assets/itachi_dongo-nonbg.png";

import { useAppSelector } from "@/hooks/hooks";

const MainPage = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const language = useAppSelector((state) => state.language.language);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full max-w-6xl gap-x-20">
        {/* LEFT */}
        <div className="flex flex-1 items-center justify-end">
          <div
            className={`flex h-[80%] w-[70%] items-center justify-center overflow-hidden rounded-t-full ${
              theme === "light"
                ? "bg-linear-to-br from-zinc-200 to-zinc-400"
                : "bg-linear-to-br from-zinc-500 to-zinc-300"
            }`}
          >
            <img
              src={Avatar}
              alt="avatar"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 flex-col items-center justify-center gap-y-6">
          <div className="text-2xl">
            {language === "vi"
              ? "Xin chào! Tôi là"
              : "Hello everyone! My name is"}
          </div>
          <div className="text-6xl font-bold">DINHHHIUU</div>
          <div className="text-2xl">
            {language === "vi" ? "KỸ SƯ PHẦN MỀM" : "SOFTWARE ENGINEER"}
          </div>
          <div className="flex gap-x-4">
            {/* Introduce */}
            <button
              className={`rounded-2xl px-6 py-2.5 font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
                theme === "light"
                  ? "border border-zinc-400 text-zinc-800 hover:bg-zinc-200"
                  : "border border-white/70 text-white hover:bg-white/10"
              } `}
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
        </div>
      </div>
    </div>
  );
};

export default MainPage;
