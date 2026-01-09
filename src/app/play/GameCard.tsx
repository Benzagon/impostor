"use client";
import { useState } from 'react'

const GameCard = ({curr, nextPlayer, isImpostor, playerNumber, palabra}: {curr: number, nextPlayer: () => void, isImpostor: boolean, playerNumber: number, palabra: string}) => {
    if(curr !== playerNumber) return;

    const [viewRole, setViewRole] = useState(false);
    
    if(!viewRole) {
        return (
            <div>
                <h1>{`Pasarle el telefono al jugador ${playerNumber}!`}</h1>
                <button onClick={() => setViewRole(true)}>Ver rol!</button>
            </div>
        )
    }

    return (
        <div className={`${isImpostor && "bg-red-500"}`}>
            {!isImpostor ? <h1>{`La palabra es ${palabra}`}</h1> : <h1>IMPOSTOR</h1>}
            <button onClick={() => nextPlayer()}>Entendido</button>
        </div>
    )
}

export default GameCard