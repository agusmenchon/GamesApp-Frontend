import { useEffect, useMemo, useState } from "react";
import { turnoData } from "../../data/presidenteTurno";
import { Jugador, turnoDTO, Carta } from "../../hooks/usePresidenteStore";
import JugadorComponent from "../components/JugadorComponent";
import "./GamePage.css";

const GamePage = () => {
  //TODO REFACTOR ( WEBSOCKET CALL )
  const [lastCard, setlastCard] = useState<Carta | undefined>(undefined);
  const [last5Cards, setLast5Cards] = useState<Carta[]>([]);

  const getPosImg = (card: Carta): string => {
    const cardWidth = 208; // Ancho de cada carta
    const cardHeight = 319; // Altura de cada carta

    const row = card.palo;
    const column = card.numero - 1;

    const xOffset = -column * cardWidth;
    const yOffset = -row * cardHeight;

    return `${xOffset}px ${yOffset}px`;
  };

  const data: turnoDTO = turnoData;

  const playerTurn = useMemo(() => {
    return data.jugadores.find(
      (player: Jugador) => Number(player.uid) === data.indexTurnoJugador
    );
  }, [data.indexTurnoJugador]);

  useEffect(() => {
    const [lastElement] = data.mazo.slice(-1);
    setlastCard(lastElement);
    setLast5Cards([...data.mazo.slice(-6)]);
  }, [data.mazo]);

  useEffect(() => {
    const indiceInicio = Math.max(0, data.mazo.length - 5 - 1);
    setLast5Cards([...data.mazo.slice(indiceInicio, 4)]);
  }, [lastCard]);

  return (
    <>
      <div className="presidente-container">
        {data.jugadores.map((player, index) => (
          <div key={player.uid} className={`players player-${index + 1}`}>
            <JugadorComponent player={player} turno={data?.indexTurnoJugador} />
          </div>
        ))}

        <div className="info-game">
          
          <div className="last-card">
            {
              <span
                className="card"
                style={{ backgroundPosition: getPosImg(data.mazo[1]) }}
              ></span>
            }
          </div>

          {/* Anuncio de la partida */}
          <div className="title-annunced">
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
          {/* <div className="last-card">
            {!!lastCard && (
              <h4>
                {lastCard?.numero} de {lastCard?.palo}
              </h4>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default GamePage;
