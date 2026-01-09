"use client";
import { palabras } from "@/lib/palabras";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import GameCard from "./GameCard";
import Jugando from "./Jugando";

const Game = () => {
    const searchParams = useSearchParams();
    const playersParam = searchParams.get("players");
    const players = Number(playersParam);
    const isPlayersValid = playersParam && Number(playersParam) >= 2 && Number(playersParam) <= 7;

    const [palabra] = useState(() => palabras[Math.floor(Math.random() * palabras.length)]);
    const [impostor] = useState(() => isPlayersValid ? Math.floor(Math.random() * players + 1) : 0);
    const [startingPlayer] = useState(() => isPlayersValid ? Math.floor(Math.random() * players + 1) : 0);
    
    const [currPlayer, setCurrPlayer] = useState<number>(1); 


    if (!isPlayersValid) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h1 className="text-2xl font-bold">
                    Ha ingresado una cantidad inválida de jugadores.
                </h1>
            </div>
        )
    }

    if (!palabra) return null;

    const playerArr = Array.from({ length: players }, (_, index) => index + 1);

    const nextPlayer = () => {
        setCurrPlayer(curr => curr += 1);
    }

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            {playerArr.map((val, index) => (
                <GameCard
                    curr={currPlayer}
                    nextPlayer={nextPlayer}
                    playerNumber={val}
                    isImpostor={val === impostor}
                    palabra={palabra}
                    key={index}
                />
            ))}
            {currPlayer > players && 
                <Jugando 
                    startingPlayer={startingPlayer}
                />
            }
        </div>
    );
};

export default Game;