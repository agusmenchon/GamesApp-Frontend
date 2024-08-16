import presidenteApi from '../api/presidenteApi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinRoom} from '../store/presidente/presidenteSlice';

export interface turnoDTO{
    idGame: string,
    idMano: number | null,
    indexTurnoJugador: number | null,
    jugadores: Jugador[],
    mazo: Carta[],
    cantCartas: number | null,
    escalera: boolean | null,
    status: string,
    primero: boolean | null,
}

export interface Jugador{
    uid: string;
    cartas: Carta[];
    nombre: string;
    puntos: number;
}

export interface Carta{
    numero: number,
    palo: string,
    orden: number
}

export interface conexion{
    roomId: string
}

export interface connectResponseDTO{
    ok: boolean,
    msg: string,
    roomId: string
}

// const url:string = 'http://localhost:3000/presidente'

export const usePresidenteStore = () => {
    
    const dispatch = useDispatch();
    
    const { ok, roomId, turno } = useSelector( (state:any) => state.presidente);

    // const { user } = useAuthStore();

    const [isConnected, setisConnected] = useState(false);

    // const [client, setClient] = useState<Stomp.Client>();
    
    // useEffect(() => {
    // }, [])
    
    // const connect = async() => {
    //     try{
    //         localStorage.setItem("nombre" , user.username);
    //         localStorage.setItem("sala" , roomId);
            
    //         client?.connect({}, () => {
    //             const userConnect = {
    //                 "uid": user.uid,
    //                 "sala": roomId,
    //                 "nombre": user.username
    //             }

    //             client.send("/app/join", {}, JSON.stringify(userConnect));

    //             client.subscribe(`/topic/game/${roomId}`, (message: { body: string; }) => {
    //                 const turno:turnoDTO  = JSON.parse(message.body);
    //                 try{
    //                     dispatch(onMessage(turno));
    //                 } catch(e){
    //                     console.log(e)
    //                 }
    //             })
                
    //             console.log(client.connected);
    //             if(client.connected){
    //                 setisConnected(true);
    //             }
    //         })
    //     } catch(error){
    //         console.log(error)
    //     }
    // }

    const createRoom = async() => {
        const res = await presidenteApi.get('/presidente/createRoom');
        const { body } = res.data;
        if(body.ok){
            dispatch(joinRoom(body));
            setisConnected(true);
        }
    }

    const onJoinRoom = async(roomId:string) => {
        const res = await presidenteApi.get(`/presidente/connect/${roomId}`);
        const {body} = res.data;
        if(body.ok){
            dispatch(joinRoom(body));
            setisConnected(true);
        }
    }

  return {
    //states
    ok, 
    roomId,
    turno,
    isConnected,

    // methods
    // connect,
    createRoom,
    onJoinRoom,
    // startGame,
    // disconnectWebSocket
  }
}
