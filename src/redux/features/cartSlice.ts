// // features/cart/cartSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CartItem, CartState } from '@/../typing';

// const initialState: CartState = {
//     items: [],
//     totalQuantity: 0,
//     totalPrice: 0,
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity' | 'totalPrice'>>) => {
//             const newItem = action.payload;
//             const existingItem = state.items.find(item => item.id === newItem.id);

//             if (existingItem) {
//                 existingItem.quantity += 1;
//                 existingItem.totalPrice += newItem.price;
//             } else {
//                 state.items.push({
//                     ...newItem,
//                     quantity: 1,
//                     totalPrice: newItem.price,
//                 });
//             }

//             state.totalQuantity += 1;
//             state.totalPrice += newItem.price;
//         },
//         removeFromCart: (state, action: PayloadAction<number>) => {
//             const id = action.payload;
//             const item = state.items.find(item => item.id === id);

//             if (item) {
//                 state.totalQuantity -= item.quantity;
//                 state.totalPrice -= item.totalPrice;
//                 state.items = state.items.filter(item => item.id !== id);
//             }
//         },
//         clearCart: (state) => {
//             state.items = [];
//             state.totalQuantity = 0;
//             state.totalPrice = 0;
//         },
//     },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


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