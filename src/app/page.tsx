"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState(2);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-900 to-zinc-800 text-white">
      <div className="w-full max-w-sm rounded-2xl bg-zinc-900 p-6 shadow-xl border border-zinc-800">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Juego Impostor
        </h1>

        <div className="flex flex-col gap-2 mb-6">
          <label className="text-sm text-zinc-400">
            Cantidad de jugadores
          </label>

          <select
            value={players}
            onChange={(e) => setPlayers(Number(e.target.value))}
            className="
              w-full rounded-lg bg-zinc-800 border border-zinc-700
              px-4 py-2 text-white
              focus:outline-none focus:ring-2 focus:ring-red-500
              cursor-pointer
            "
          >
            {[2, 3, 4, 5, 6, 7].map((count) => (
              <option key={count} value={count} className="bg-zinc-900">
                {count} jugadores
              </option>
            ))}
          </select>

          <p className="text-xs text-zinc-500">
            Mínimo 2 · Máximo 7 jugadores
          </p>
        </div>

        <Link
          href={`/play?players=${players}`}
          className="
            block w-full text-center rounded-lg
            bg-red-600 hover:bg-red-700
            transition-colors
            py-2 font-semibold
          "
        >
          Jugar
        </Link>
      </div>
    </div>
  );
}
