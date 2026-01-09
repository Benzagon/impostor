"use client";
import { palabras } from "@/lib/palabras";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Play = () => {
    const searchParams = useSearchParams();
    const playersParam = searchParams.get("players");

    const players = playersParam ? Number(playersParam) : null;

    const isPlayersValid = playersParam && Number(playersParam) >= 2 && Number(playersParam) <= 7;

    if (!isPlayersValid) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h1 className="text-2xl font-bold">
                    Ha ingresado una cantidad inválida de jugadores.
                </h1>
            </div>
        )
    }
    const [palabra, setPalabra] = useState<string | null>(null);

    useEffect(() => {
        const random =
        palabras[Math.floor(Math.random() * palabras.length)];
        setPalabra(random);
    }, []);

  if (!palabra) return null;

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <h1 className="text-2xl font-bold">
            Jugadores: {players}
            </h1>
            <h1 className="text-2xl font-bold">
             {palabra}
            </h1>
            
        </div>
    );
};

export default Play;