import TypingLoopText from "@/common/TypingLoopText";
import { useAppSelector } from "@/hooks/hooks";

const IntroText = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const language = useAppSelector((state) => state.language.language);

  const texts =
    language === "vi"
      ? ["phát triển web", "phát triển game"]
      : ["web development", "game development"];

  const longestTextLength = Math.max(...texts.map((t) => t.length));

  return (
    <div className="space-y-5 text-left">
      {/* Greeting */}
      <p className="text-lg text-zinc-500">
        {language === "vi" ? "Xin chào!" : "Hi there!"}
      </p>

      {/* Name */}
      <h1 className="text-5xl leading-tight font-bold">
        {language === "vi" ? "Tôi là " : "I'm "}
        <span
          className={`bg-clip-text text-transparent ${
            theme === "light"
              ? "bg-linear-to-r from-amber-500 via-orange-400 to-yellow-400"
              : "bg-linear-to-r from-indigo-400 to-pink-400"
          }`}
        >
          DINHHHIUU
        </span>
      </h1>

      {/* Typing line */}
      <div className="flex items-center gap-3 text-3xl">
        <span className="text-zinc-500">
          {language === "vi" ? "Tôi đam mê" : "I am into"}
        </span>

        {/* Fixed-width container để không bị giật chữ */}
        <span
          className={`inline-block font-semibold ${
            theme === "light" ? "text-amber-500" : "text-indigo-400"
          }`}
          style={{
            minWidth: `${longestTextLength}ch`,
          }}
        >
          <TypingLoopText texts={texts} />
        </span>
      </div>
    </div>
  );
};

export default IntroText;
