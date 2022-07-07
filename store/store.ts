import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cart from "./cart/slice";
import prodact from "./prodacts/slice";

export const store = configureStore({
  reducer: {
    prodact,
    cart,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
