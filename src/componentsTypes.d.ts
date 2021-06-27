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
export type ACTION_TYPES =
    | { type: "lowest" }
    | { type: "highest" }
    | { type: "recent" }

export interface ToolbarReducerState {
    methodSort?: string | undefined
}

export interface ToolbarReducerProps {
    dispatch: React.Dispatch<ACTION_TYPES>
}