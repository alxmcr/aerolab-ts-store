import React, { Dispatch } from "react";
import { ACTION_TYPES_TOOLBAR_PRODUCTS } from "reducers/toolbarReducer";
import { ProductAPI, UserAPI } from "types";

// Props
export interface ProductProps {
    product: ProductAPI
}

export interface GalleryProductsProps {
    methodSort: string
}

export type MethodSort = "lowest" | "highest" | "recent"

export interface UseProductsHookProps {
    methodSort: string
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

// Reducer: state
export interface ProductsToolbarReducerState {
    methodSort: MethodSort
    products?: ProductAPI[]
}

//  Reducer: Actions Types
export type ACTION_TYPES_TOOLBAR_PRODUCTS =
    | { type: "lowest" }
    | { type: "highest" }
    | { type: "recent" }
    | { type: "changeMethodSort", payload: ProductsToolbarReducerState }

// export interface ProductsToolbarProps {
//     dispatch: React.Dispatch<ACTION_TYPES_TOOLBAR_PRODUCTS>
// }

export interface ProductsToolbarProps {
    setMethodSort: (methodSort: string) => void
}

export interface ProductsHelperProps {
    setProducts: (products: ProductAPI[]) => void
}

export interface SectionProductsProps {
    dispatch: React.Dispatch<ACTION_TYPES_TOOLBAR_PRODUCTS>
}
