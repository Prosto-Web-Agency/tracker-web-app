'use client';

import thunk from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
    },
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;