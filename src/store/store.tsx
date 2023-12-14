'use client';

import { thunk } from "redux-thunk"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import OfficeReducer from "./reducers/OfficeReducer";
import TrakerReducer from "@/store/reducers/trakerReducer";

let reducers = combineReducers({
    mainPage: TrakerReducer,
    officePage: OfficeReducer,
});

export const store = configureStore({
    reducer: reducers,
    //@ts-ignore
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
