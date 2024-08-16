import { Navigate } from "react-router-dom";
import PrincipalPage from "../layout/pages/PrincipalPage";
// import PresidentePage from "../presidente/pages/PresidentePage";
import TodoPage from "../todo/TodoPage";
import TicTacToePage from "../games/tic-tac-toe/pages/TicTacToePage";
// import { Children } from "react";
import { PresidenteRoutes } from "../presidente/routes/PresidenteRoutes";
import PresidenteRouter from "../auth/routes/LoginRouter";
import LoginRouter from "../auth/routes/LoginRouter";
import { LoginRoutes } from "../auth/routes/LoginRoutes";
import GamePage from "../presidente/pages/GamePage";

export const AppRoutes = [
  {
    path: "/auth/*",
    element: <LoginRouter/>,
    children: LoginRoutes,
    // errorElement: <ErrorPage/>
  },
  {
    path: "/presidente/*",
    element: <PresidenteRouter/>,
    children: PresidenteRoutes,
  },
  {
    path: "/tic-tac-toe/*",
    element: <TicTacToePage />,
  },
  {
    path: "/todo/*",
    element: <TodoPage />,
  },
  //desp eliminar
  {
    path: "/presidente-prueba",
    element: <GamePage />,
  },
  {
    index: true,
    path: "/",
    element: <PrincipalPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />,
  },
];
