import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { layoutSlice } from "./layout/layoutSlice";
import { presidenteSlice } from "./presidente/presidenteSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        layout: layoutSlice.reducer,
        presidente: presidenteSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']