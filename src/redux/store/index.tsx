import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ChildrenType } from "./../../types/children";
import { categorySlice } from "../slices/categorySlice";
import authReducer from "../slices/authSlice";

export const Store = configureStore({
  reducer: {
    [categorySlice.name]: categorySlice.reducer,
    auth: authReducer,
  },
});

const StoreProvider = ({ children }: ChildrenType) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StoreProvider;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
