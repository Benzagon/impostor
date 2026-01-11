"use client";
const Jugando = ({startingPlayer}: {startingPlayer: number}) => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-6 text-center w-full">
            
            <h1 className="text-3xl font-extrabold mb-2">
            ¡A jugar!
            </h1>

            <h2 className="text-lg text-zinc-400 mb-10">
            Comienza el jugador{" "}
            <span className="text-white font-semibold">
                {startingPlayer}
            </span>
            </h2>

            <button
            onClick={() => location.reload()}
            className="
                text-sm text-zinc-400
                hover:text-white
                transition-colors
                underline underline-offset-4
            "
            >
            Jugar de nuevo
            </button>
        </div>
  )
}

export default Jugando