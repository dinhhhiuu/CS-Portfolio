import Avatar from "@/assets/itachi_dongo-nonbg.png";
import { useAppSelector } from "@/hooks/hooks";

const AboutMePage = () => {
  const language = useAppSelector((state) => state.language.language);
  const theme = useAppSelector((state) => state.theme.theme);

  const accentColor = theme === "light" ? "text-amber-600" : "text-pink-400";

  return (
    <div className="flex h-full w-full items-center justify-center px-6">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-16 md:flex-row">
        {/* LEFT – AVATAR */}
        <div className="flex justify-center">
          <div
            className={`rounded-full p-4 ${
              theme === "light" ? "bg-zinc-400" : "bg-zinc-700"
            }`}
          >
            <img
              src={Avatar}
              alt="Avatar"
              className="h-64 w-64 rounded-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="flex max-w-xl flex-col gap-4 text-center md:text-left">
          {/* NAME */}
          <h1 className="text-3xl font-bold tracking-tight">
            {language === "vi" ? "Tôi là Dinhhhiuu" : "I'm Dinhhhiuu"}
          </h1>

          {/* ROLE */}
          <h2 className={`text-lg font-semibold ${accentColor}`}>
            {language === "vi"
              ? "Nhà phát triển phần mềm"
              : "Software Developer"}
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`leading-relaxed ${theme === "light" ? "text-zinc-600" : "text-zinc-300"}`}
          >
            {language === "vi"
              ? "Tôi là một lập trình viên phần mềm sống tại Thành phố Hồ Chí Minh, Việt Nam. Tôi đang là sinh viên ngành Khoa học Máy tính tại Đại học Bách Khoa Thành phố Hồ Chí Minh (HCMUT). Tôi đam mê nâng cao kỹ năng lập trình và phát triển ứng dụng, website và game. Tôi xây dựng WebApp bằng MERN Stack và phát triển game bằng Unity."
              : "I am a software developer based in Ho Chi Minh City, Vietnam. I am a Computer Science student from HCMUT. I am passionate about improving my coding skills and developing applications, websites, and games. I build WebApps using the MERN Stack and develop games with Unity."}
          </p>

          {/* INFO */}
          <div className="mt-4 flex flex-col gap-1 text-sm">
            <span className="text-zinc-500 dark:text-zinc-400">
              Email:{" "}
              <span className={`font-medium ${accentColor}`}>
                dinhtanhieu2005@gmail.com
              </span>
            </span>

            <span className="text-zinc-500 dark:text-zinc-400">
              {language === "vi" ? "Địa chỉ:" : "Location:"}{" "}
              <span className={`font-medium ${accentColor}`}>
                Hồ Chí Minh, Việt Nam
              </span>
            </span>
          </div>

          {/* DOWNLOAD CV */}
          <button
            className={`mt-3 w-fit rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:cursor-pointer active:scale-95 ${
              theme === "light"
                ? "bg-zinc-800 text-white hover:bg-zinc-700"
                : "bg-white text-zinc-900 hover:bg-zinc-200"
            }`}
          >
            {language === "vi" ? "Tải CV" : "Download CV"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
