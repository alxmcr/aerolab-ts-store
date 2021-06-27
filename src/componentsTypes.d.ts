import React, { Dispatch } from "react";
import { ProductAPI, UserAPI } from "types";

// Props
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

// Reducers: Action types
export type ACTION_TYPES_TOOLBAR_PRODUCTS =
    | { type: "lowest" }
    | { type: "highest" }
    | { type: "recent" }
    | { type: "changeMethodSort", payload: ProductsToolbarReducerState }

export interface ProductsToolbarReducerState {
    methodSort?: "lowest" | "highest" | "recent" | undefined
    products: ProductAPI[]
}

export interface SectionProductsProps {
    dispatch: React.Dispatch<ACTION_TYPES_TOOLBAR_PRODUCTS>
}

