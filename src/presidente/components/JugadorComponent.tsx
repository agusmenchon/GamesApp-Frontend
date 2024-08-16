import { useEffect, useState } from "react";
import { Carta, Jugador } from "../../hooks/usePresidenteStore";
import { useAuthStore } from "../../hooks";

type JugadorComponentProps = {
  player: Jugador;
  turno: number | null;
};

const JugadorComponent = ({ player, turno }: JugadorComponentProps) => {
  const { user } = useAuthStore();

  const [btnPlay, setBtnPlay] = useState(false);

  useEffect(() => {
    if (turno === Number(player.uid)) {
      setBtnPlay(!btnPlay);
    }
  }, [turno]);

  return (
    <>
      <h1>{player?.nombre}</h1>
      <ul>
        {/* //TODO COMPONENTE NUEVO */}
        {player?.cartas.map((carta: Carta) => (
          <li key={carta.orden}>
            {carta.numero} de {carta.palo}{" "}
          </li>
        ))}
      </ul>
      {user.uid === Number(player.uid) && (
        <button className={`btn btn-primary btn-sm ${!btnPlay && "disabled"}`}>
          Tirar cartas
        </button>
      )}
    </>
  );
};

export default JugadorComponent;
