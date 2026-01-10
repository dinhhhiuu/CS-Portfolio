import { useEffect, useState } from "react";

interface TypingLoopTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypingLoopText = ({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 1500,
}: TypingLoopTextProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayed.length < currentText.length) {
            setDisplayed(currentText.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          // Deleting
          if (displayed.length > 0) {
            setDisplayed(currentText.slice(0, displayed.length - 1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span className="relative inline-block">
      <span className="whitespace-nowrap">{displayed}</span>
      {/* Cursor FIX KHÔNG ĐẨY CHỮ */}
      <span className="absolute top-0 -right-3 animate-pulse">|</span>
    </span>
  );
};

export default TypingLoopText;
