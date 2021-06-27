import { ProductAPI, UserAPI } from "types";

export interface ProductProps {
    product: ProductAPI
}

export interface GalleryProductsProps {
    products: ProductAPI[]
}

export interface CategoryBannerProps {
    categoryTitle: string
}

export interface AppHeaderProps {
    me: UserAPI | null
    error: Error | null
    loading: boolean
}

export interface UserContextProps {
    me: UserAPI | null
}