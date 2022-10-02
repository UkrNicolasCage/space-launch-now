import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { eventReducer } from "./event-slice";
import { launchReducer } from "./launch-slice";
import { timerReducer } from "./timer-slice";
import { uiReducer } from "./ui-slice";

export const store = configureStore({
  reducer: {
    event: eventReducer,
    launch: launchReducer,
    ui: uiReducer,
    timer: timerReducer
  },
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
