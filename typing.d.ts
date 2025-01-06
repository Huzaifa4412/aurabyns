// types/cart.ts
export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}

export interface ProductData {
    image: string;
    title: string;
    description: string;
    tags: string[];
    discounted_price: string;
    original_price: string;
    qty: number;
    id: string
}