import { Suspense } from "react";
import Game from "./Game";

const PlayPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Game />
    </Suspense>
  );
};

export default PlayPage;