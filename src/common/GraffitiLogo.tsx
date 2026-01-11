import { useAppSelector } from "@/hooks/hooks";

const GraffitiLogo = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <svg
      width="200"
      height="50"
      viewBox="0 0 600 200"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:cursor-default"
    >
      {/* Viền đen */}
      <text
        x="50%"
        y="65%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="90"
        fontWeight="400"
        fill={theme === "light" ? "#f2d897" : "#7d345c"}
        stroke={theme === "light" ? "#f2d897" : "#7d345c"}
        strokeWidth="12"
        style={{
          fontFamily: "'Comic Sans MS', 'Baloo', cursive",
        }}
        transform="skewX(-8)"
      >
        dinhhhiuu
      </text>

      {/* Chữ chính */}
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="90"
        fontWeight="400"
        fill={theme === "light" ? "#3e3a3c" : "#fff"}
        stroke={theme === "light" ? "#3e3a3c" : "#fff"}
        strokeWidth="4"
        style={{
          fontFamily: "'Comic Sans MS', 'Baloo', cursive",
        }}
        transform="skewX(-8)"
      >
        dinhhhiuu
      </text>
    </svg>
  );
};

export default GraffitiLogo;
