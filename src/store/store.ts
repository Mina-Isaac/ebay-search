import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import initialDataFetchReducer from "./dataSlice";
import settingsReducer from "./settingsSlice";

export const store = configureStore({
  reducer: {
    data: initialDataFetchReducer,
    settings: settingsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
