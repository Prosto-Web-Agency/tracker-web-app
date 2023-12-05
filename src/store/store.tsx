'use client';

import { thunk } from "redux-thunk"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MainPageReducer from "./reducers/MainPagereducer";

let reducers = combineReducers({
    mainPage: MainPageReducer,
});

export const store = configureStore({
    reducer: reducers,
    //@ts-ignore
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;