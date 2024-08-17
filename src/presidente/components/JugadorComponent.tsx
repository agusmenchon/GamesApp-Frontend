import { useEffect, useState } from "react";
import { Carta, Jugador } from "../../hooks/usePresidenteStore";
import { useAuthStore } from "../../hooks";

type JugadorComponentProps = {
  player: Jugador;
  turno: number | null;
};

const JugadorComponent = ({ player, turno }: JugadorComponentProps) => {

  const getPosImg = (card:Carta):string => {

    const cardWidth = 208; // Ancho de cada carta
    const cardHeight = 319; // Altura de cada carta
      
    const row = ((card.palo ));
    const column = (card.numero - 1);
    
    const xOffset = -column * cardWidth;
    const yOffset = -row * cardHeight;
    
    return `${xOffset}px ${yOffset}px`;
  }

  const { user } = useAuthStore();

  const [btnPlay, setBtnPlay] = useState(false);

  useEffect(() => {
    if (turno === Number(player.uid)) {
      setBtnPlay(!btnPlay);
    }
  }, [turno]);

  return (
    <>
      <div className="player-name">
        <h1>{player?.nombre}</h1>
      </div>

      <div className="game-player-play">
        <div className="list-cards">
          {/* <ul> */}
            {/* //TODO COMPONENTE NUEVO */}
            {player?.cartas.map((carta: Carta) => (
              <span key={carta.orden} className="card" style={{backgroundPosition: getPosImg(carta)}}></span>
              // <li key={carta.orden}>
              //   {carta.numero} de {carta.palo}
              // </li>
            ))}
          {/* </ul> */}
        </div>
        <div className="btn-play-turn">
          {user.uid === Number(player.uid) && (
            <button
              className={`btn btn-primary btn-sm ${!btnPlay && "disabled"}`}
            >
              Tirar cartas
            </button>
          )
          }
        </div>

        <div>
        </div>
      </div>
    </>
  );
};

export default JugadorComponent;
