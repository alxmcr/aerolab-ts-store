import React, { Dispatch } from "react";
import { ACTION_TYPES_TOOLBAR_PRODUCTS } from "reducers/toolbarReducer";
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
    dispatch: React.Dispatch<ACTION_TYPES_TOOLBAR_PRODUCTS>
}

export interface ProductsToolbarReducerState {
    methodSort: "lowest" | "highest" | "recent"
    products: ProductAPI[]
}

export interface SectionProductsProps {
    dispatch: React.Dispatch<ACTION_TYPES_TOOLBAR_PRODUCTS>
}

