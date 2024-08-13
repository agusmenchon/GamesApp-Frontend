import { createSlice } from '@reduxjs/toolkit';
import { turnoDTO } from '../../hooks/usePresidenteStore';

interface PresidenteType {
    ok: boolean,
    roomId: string,
    turno: turnoDTO,
    msg: string,
}

const _initialState: PresidenteType = { 
    ok: false,
    roomId: '',
    turno: {
        idMano: null,
        indexTurnoJugador:null,
        mazo:null,
        cantCartas:null,
        escalera:null,
        primero:null,
        status:'',
        idGame:'',
        jugadores: []
    },
    msg: ''
 }

export const presidenteSlice = createSlice(
    {
    name: 'presidente',
    initialState: _initialState,
    reducers: {
        joinRoom:(state, {payload})=>{
            state.ok = payload.ok,
            state.roomId = payload.roomId,
            state.msg = payload.msg
            
        },
        onMessage:(state, {payload})=>{
            state.turno = payload;
            // state = {...state,turno:payload}
        }
    }
}
);


// Action creators are generated for each case reducer function
export const { joinRoom, onMessage } = presidenteSlice.actions;