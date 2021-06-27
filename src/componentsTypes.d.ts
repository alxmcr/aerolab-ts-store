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
}

export interface UserContextProps {
    me: UserAPI | null
}

export interface PointsPillProps {
    children: React.ReactNode
    variant: string
}

export interface ProductsToolbarProps {
    setMethodSort: (methodSort: string) => void
}

export interface ProductsToolbarState {
    methodSort?: string | undefined
}