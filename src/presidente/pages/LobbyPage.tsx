import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useStomp } from "usestomp-hook/lib";

import GamePage from "./GamePage";
import LoadingPage from "./LoadingPage";
import { turnoDTO } from "../../hooks/usePresidenteStore";
import { onMessage } from "../../store/presidente/presidenteSlice";
import { useAuthStore } from "../../hooks/useAuthStore";
import ChatModal from "../components/ChatModal";

const LobbyPage = () => {
  // const { connect, isConnected, turno } = usePresidenteStore();
  const [active, setActive] = useState(true);

  const {
    disconnect,
    subscribe,
    unsubscribe,
    subscriptions,
    send,
    isConnected,
  } = useStomp();

  const dispatch = useDispatch();

  const { roomId, turno } = useSelector((state: any) => state.presidente);
  const { user } = useAuthStore();

  const navigate = useNavigate();

  const onStartGame = () => {
    send("/app/play/game", roomId, {});
  };

  useEffect(() => {
    if (roomId == "" && !isConnected) {
      navigate("/presidente/lobby");
      return;
    }

    send(
      "/app/join",
      { uid: user.uid, sala: roomId, nombre: user.username },
      {}
    );

    subscribe(`/topic/game/${roomId}`, (message: turnoDTO) => {
      const turno = message;
      dispatch(onMessage(turno));
    });

    return () => {
      // Make sure you're subscribed
      if (subscriptions[`/topic/game/${roomId}`]) {
        unsubscribe(`/topic/game/${roomId}`);
        disconnect;
      }
    };
  }, []);

  const onOpenChat = () =>{
    setActive(!active);
  }

  return (
    <>
      {turno.status == "GAME_INPROGRESS" || turno.status == "FINISHED" ? (
        <GamePage />
      ) : (
        <LoadingPage startGame={onStartGame} />
      )}

      <div className="position-absolute bottom-0 end-0 border mb-5 mx-3">
        <button className={`btn btn-primary`} style={{display: active ? "none" : '' }} onClick={onOpenChat}>
          Abrir Chat
        </button>
        <ChatModal active={active} setActive={setActive} />
      </div>
    </>
  );
};
export default LobbyPage;
