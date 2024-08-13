import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoadingPage.css";


import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Jugador } from "../../hooks/usePresidenteStore";
import { ColorRing } from "react-loader-spinner";

type Props = {
  startGame: () => void;
};

const LoadingPage = ({ startGame }: Props) => {
  const { roomId, turno } = useSelector((state: any) => state.presidente);
  const onStartGame = () => {
    startGame();
  };

  useEffect(() => {
    if (turno.jugadores.length > 1) {
      toast.info(
        `Se conecto un nuevo jugador ${
          turno.jugadores[turno.jugadores.length - 1].nombre
        }`
      );
    }
  }, [turno.jugadores]);

  const Capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const onCopyRoomId = ():void => {

    navigator.clipboard.writeText(roomId);
    toast.info("Copiado exitosamente");

  }

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* TITULO */}
      <div className="title text-center">
        <h5 className="fs-1">Presidente - Loading players...</h5>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>

      {/* BODY */}
      <div className="body-loading d-flex mt-5 px-3">
        <div className="game-info border">
          <div className="list-players border">
            <h3 className="px-3 mt-2">Lista de jugadores:</h3>
            <ul>
              {turno.jugadores.map((jugador: Jugador) => (
                <li className="mt-2 p-0" key={jugador.uid}>
                  {Capitalize(jugador.nombre)}
                </li>
              ))}
            </ul>
            <hr />
          </div>

          <div className="start-game border d-flex justify-content-end">
            <button
              type="button"
              className={`btn btn-primary ${
                turno.jugadores.length < 5 ? "disabled" : ""
              }`}
              onClick={onStartGame}
            >
              Empezar partida
            </button>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="footer-loading">
        <div className="banner-id d-flex justify-content-center gap-3 align-self-center">
          <h4 className="id-title">{roomId}</h4>
          <button className="btn btn-primary" onClick={onCopyRoomId}>Copiar ID</button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoadingPage;
