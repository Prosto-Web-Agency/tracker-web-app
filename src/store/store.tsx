'use client';

import { thunk } from 'redux-thunk';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import OfficeReducer from './reducers/OfficeReducer';
import TrakerReducer from '@/store/reducers/trakerReducer';
import UserReducer from '@/store/reducers/userReducer';
import BalanceWheelReducer from './reducers/balanceWheelReducer';

const reducers = combineReducers({
  mainPage: TrakerReducer,
  officePage: OfficeReducer,
  user: UserReducer,
  balanceWheel: BalanceWheelReducer,
});

export const store = configureStore({
  reducer: reducers,
  //@ts-ignore
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
