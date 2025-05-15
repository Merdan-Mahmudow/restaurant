export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
}

export interface FavouriteItem {
    product_id: string
}