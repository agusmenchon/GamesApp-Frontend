import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";
import authApi from "../api/authApi";
import { registerDTO } from "../auth/pages/RegisterPage";
import { loginDTO } from '../auth/pages/LoginPage';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( (state:any) => state.auth);

    const dispatch = useDispatch();

    const startLogin = async(loginRequest:loginDTO) => {
        dispatch(onChecking());
        try{

            const {data} = await authApi.post('/login', loginRequest, {
                headers:{
                    'Access-Control-Allow-Origin': '*'
                }
            });
            dispatch(onLogin({username: data.username, uid: data.id, email: data.email, rol: data.rol }));
            //TODO COOKIES LOGIN
            localStorage.setItem('token', data.jwtoken);
            localStorage.setItem('token-init-date', new Date().getTime().toString());

        }catch(error){
            // console.log(error);
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async(payload:registerDTO) => {
        dispatch(onChecking());
        try{

            const user = {
                "username": payload.username,
                "email": payload.email,
                "password": payload.password,
                "rol": "USER"
            };

            const {data} = await authApi.post('/register', user, {
                headers:{
                    'Access-Control-Allow-Origin': '*'
                }
            });
            console.log(data);
            localStorage.setItem('token', data.jwtoken);
            localStorage.setItem('token-init-date', new Date().getTime().toString());

            dispatch(onLogin({username: data.username, uid: data.id, email: data.email, rol: data.rol }));

        }catch(error){
            console.log(error);
        }
    }

    const checkAuthToken = async() =>{}

    const startLogout = () => {}

    return {
        status,
        user,
        errorMessage,


        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}