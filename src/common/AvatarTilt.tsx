import { useRef } from "react";
import { useAppSelector } from "@/hooks/hooks";

interface AvatarTiltProps {
  image: string;
}

const AvatarTilt = ({ image }: AvatarTiltProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((state) => state.theme.theme);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 22;
    const rotateY = (x - rect.width / 2) / 22;

    el.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.025)
    `;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      className="relative h-100 w-100"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Soft ambient blob */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-full blur-[160px] ${
          theme === "light" ? "bg-[#F5EBDD]" : "bg-indigo-500/25"
        }`}
      />

      {/* Avatar */}
      <div
        ref={ref}
        className={`relative h-full w-full rounded-full bg-cover bg-center transition-transform duration-200 ease-out ${
          theme === "light"
            ? "shadow-[0_25px_70px_-25px_rgba(120,90,60,0.35)]"
            : "shadow-2xl"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

export default AvatarTilt;
