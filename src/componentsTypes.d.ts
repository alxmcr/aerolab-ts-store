import { ProductAPI } from "types";

export interface ProductProps {
    product: ProductAPI
}

export interface GalleryProductsProps {
    products: ProductAPI[]
}

export interface CategoryBannerProps {
    categoryTitle: string
}