import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cartSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => configureStore({
    reducer: {
        allCart: CartReducer
    }

})

export const store = makeStore();
export const wrapper = createWrapper(makeStore);
export type RootState = ReturnType<typeof store.getState>;