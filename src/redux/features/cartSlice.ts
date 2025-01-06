

import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../../typing";

const initialState = {
    cart: [] as ProductData[],
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {

        // Add to Cart Slice
        addToCart: (state, action) => {
            const itemIdx = state.cart.findIndex((item) => item.id === action.payload.id);

            if (itemIdx >= 0) {
                state.cart[itemIdx].qty += 1
            }
            else {
                const temp = { ...action.payload, qty: 1 }
                state.cart.push(temp);
            }
        },

        // Delete From Cart
        delFromCart: (state, action) => {
            const tempData = state.cart.filter((item: ProductData) => item.id !== action.payload);
            state.cart = tempData

        },

        // Decrease Quantity
        desQuantity: (state, action) => {
            const itemIdx = state.cart.findIndex((item) => item.id === action.payload.id);

            console.log(itemIdx)
            if (state.cart[itemIdx].qty >= 1) {

                state.cart[itemIdx].qty -= 1;
            }

        }

    }
})

export default cartSlice.reducer;
export const { addToCart, delFromCart, desQuantity } = cartSlice.actions;