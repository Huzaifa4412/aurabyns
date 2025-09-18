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

export interface Category {
    name: string;
    id: string;
}

export interface Product {
    name: string;
    mainImage: string;
    relatedImages: string[];
    description: string;
    price: number;
    discountedPrice: number;
    tags: string[];
    category: Category;
}