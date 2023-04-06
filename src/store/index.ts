import { configureStore,Store  } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import {setupListeners } from "@reduxjs/toolkit/query"
import { githubReducer } from "./github/github.slice";
import { type } from "os";


export const store = configureStore({
    reducer:{
        [githubApi.reducerPath]:githubApi.reducer,
        github: githubReducer
    },  
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>