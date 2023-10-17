import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ChildrenType } from "./../../types/children";
import { categorySlice } from "../slices/categorySlice";

export const Store = configureStore({
  reducer: {
    [categorySlice.name]: categorySlice.reducer,
  },
});

const StoreProvider = ({ children }: ChildrenType) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StoreProvider;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
