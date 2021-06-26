import { ProductAPI } from "types";

export interface ProductProps {
    product: ProductAPI
}

export interface GalleryProductsProps {
    products: ProductAPI[]
}

export interface CategoryHeaderProps {
    categoryTitle: string
}