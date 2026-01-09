"use client";
import { useState } from "react";

const GameCard = ({
  curr,
  nextPlayer,
  isImpostor,
  playerNumber,
  palabra,
}: {
  curr: number;
  nextPlayer: () => void;
  isImpostor: boolean;
  playerNumber: number;
  palabra: string;
}) => {
  if (curr !== playerNumber) return null;

  const [viewRole, setViewRole] = useState(false);

  if (!viewRole) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-6 text-center w-full">
        <h1 className="text-2xl font-bold mb-4">
          Pasá el teléfono al jugador <span className="font-semibold text-white">{playerNumber}</span>
        </h1>

        <p className="text-zinc-400 mb-8">
          Es tu turno
        </p>

        <button
          onClick={() => setViewRole(true)}
          className="
            w-full max-w-xs rounded-xl
            bg-blue-600 hover:bg-blue-700
            transition-colors
            py-3 text-lg font-semibold
          "
        >
          Ver rol
        </button>
      </div>
    );
  }

  return (
    <div
      className={`
        min-h-screen flex flex-col items-center justify-center
        px-6 text-center text-white w-full
        ${isImpostor ? "bg-red-700" : "bg-emerald-700"}
      `}
    >
      {isImpostor ? (
        <h1 className="text-4xl font-extrabold mb-6">
          IMPOSTOR
        </h1>
      ) : (
        <h1 className="text-3xl font-bold mb-6">
          La palabra es
          <span className="block text-4xl mt-2 underline underline-offset-2">
            {palabra.toLocaleUpperCase()}
          </span>
        </h1>
      )}

      <button
        onClick={() => {
          setViewRole(false);
          nextPlayer();
        }}
        className="
          w-full max-w-xs rounded-xl
          bg-black/30 hover:bg-black/40
          transition-colors
          py-3 text-lg font-semibold
        "
      >
        Entendido
      </button>
    </div>
  );
};

export default GameCard;