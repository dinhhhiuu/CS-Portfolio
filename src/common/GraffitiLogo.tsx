const GraffitiLogo = () => {
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
        fill="black"
        stroke="black"
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
        fill="#fff"
        stroke="white"
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
