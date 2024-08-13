// import React from 'react'
import ReactDOM from "react-dom/client";
import { StompProvider } from "usestomp-hook/lib/Provider";

import "./styles.css";
import GamesApp from "./GamesApp.tsx";
import Modal from "react-modal";

Modal.setAppElement("#root");


const SERVER_PRESIDENTE_STOMP_URL = "ws://localhost:3000/presidente";
// const SERVER_CHAT_STOMP_URL = "ws://localhost:3001/chat";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <StompProvider config={{ brokerURL: SERVER_PRESIDENTE_STOMP_URL }}>
    {/* <StompProvider config={{ brokerURL: SERVER_CHAT_STOMP_URL }}> */}
      <GamesApp />
    {/* </StompProvider> */}
  </StompProvider>
  //</React.StrictMode>
);
