import { Navigate } from "react-router-dom";
import LobbyPage from "../pages/LobbyPage";
import FormPage from "../pages/FormPage";

export const PresidenteRoutes = [
    {
        index:true,
        path: "lobby",
        element: <FormPage/>
    },
    {
        path: "game/:id",
        element: <LobbyPage/>
    },
    {
        path: "/presidente/**",
        element: <Navigate to={"/presidente/lobby"}/>,
    }
]