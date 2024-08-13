import { Navigate } from "react-router-dom";
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
import AuthPage from "../pages/AuthPage";

export const LoginRoutes = [
    {
        index:true,
        path: "login",
        element: <AuthPage/>
    },
    {
        path: "/auth/**",
        element: <Navigate to={"/auth/login"}/>,
    }
]