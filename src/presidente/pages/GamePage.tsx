import { useEffect, useMemo, useState } from "react";
import { turnoData } from "../../data/presidenteTurno";
import { Jugador, turnoDTO, Carta } from "../../hooks/usePresidenteStore";
import JugadorComponent from "../components/JugadorComponent";

const GamePage = () => {
  //TODO REFACTOR ( WEBSOCKET CALL )
  const [lastCard, setlastCard] = useState<Carta | undefined>(undefined);
  const [last5Cards, setLast5Cards] = useState<Carta[]>([]);

  const data: turnoDTO = turnoData;

  const playerTurn = useMemo(() => {
    return data.jugadores.find(
      (player: Jugador) => Number(player.uid) === data.indexTurnoJugador
    );
  }, [data.indexTurnoJugador]);

  useEffect(() => {
    const [lastElement] = data.mazo.slice(-1);
    setlastCard(lastElement);
  }, [data.mazo]);

  useEffect(() => {
    const indiceInicio = Math.max(0, data.mazo.length - 5 - 1);
    setLast5Cards([...data.mazo.slice(indiceInicio, 4)]);
  }, [lastCard]);

  return (
    <>
      <div className="presidente-container">
        {data.jugadores.map((player) => (
          <div key={player.uid} className="player">
            <JugadorComponent player={player} turno={data?.indexTurnoJugador} />
          </div>
        ))}

        {/* Anuncio de la partida */}
        <div className="annunced">
          <h4>Turno de {playerTurn?.nombre}</h4>
        </div>

        {/* mazo de cartas jugadas */}
        <div className="cards-played">
          <ul>
            {last5Cards.map((card) => (
              <li key={card.orden}>
                {card.numero} de {card.palo}
              </li>
            ))}
          </ul>
        </div>

        {/* ultima carta jugada */}
        <div className="last-card">
          {!!lastCard && (
            <h4>
              {lastCard?.numero} de {lastCard?.palo}
            </h4>
          )}
        </div>
        
      </div>
    </>
  );
};

export default GamePage;
