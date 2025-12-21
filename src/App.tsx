import { AppRoutes } from "./routes/Routes";

import { useAppSelector } from "./hooks/hooks";

import Snowfall from "react-snowfall";

import snow16 from "@/assets/favicon-16x16.png";
import snow32 from "@/assets/favicon-32x32.png";

const img16 = new Image();
img16.src = snow16;

const img32 = new Image();
img32.src = snow32;

const images: CanvasImageSource[] = [img16, img32];

function App() {
  const effect = useAppSelector((state) => state.effect.effect);
  return (
    <>
      <AppRoutes />
      {effect ? (
        <Snowfall snowflakeCount={100} images={images} radius={[5, 10]} />
      ) : null}
    </>
  );
}

export default App;
