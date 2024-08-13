import { createSlice } from '@reduxjs/toolkit';

// interface authDTO {
//     status: string,
//     user: userDTO,
//     errorMessage: string | undefined
// }

export interface userDTO {
    "uid": number,
    "username": string,
    "email": string,
    "rol": string,
    "jwt": string
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // o 'authenticated'
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            // state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        onSetErrorMessage: (state,{payload}) => {
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage, onSetErrorMessage } = authSlice.actions;