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



export interface PointsPillProps {
    children: React.ReactNode
    variant: string
}

// Payloads
export interface PointsPayload {
    points: number
}

export interface ProductPayload {
    product: ProductAPI
}

// Reducer: state
export interface ProductsToolbarReducerState {
    methodSort: MethodSort
    products?: ProductAPI[]
}

export interface UserReducerState {
    me: UserAPI
}

export interface CartReducerState {
    cart: ProductAPI[]
}

export interface GridProductsProps {
    products: ProductAPI[]
}

//  Reducer: Actions Types
export type ACTION_TYPES_TOOLBAR_PRODUCTS =
    | { type: "lowest" }
    | { type: "highest" }
    | { type: "recent" }
    | { type: "changeMethodSort", payload: ProductsToolbarReducerState }

export type ACTION_TYPES_USER =
    | { type: "incrementPoints", payload: PointsPayload }
    | { type: "decrementPoints", payload: PointsPayload }

export type ACTION_TYPES_CART =
    | { type: "addProduct", payload: ProductPayload }
    | { type: "removeProduct", payload: ProductPayload }

export interface ProductsToolbarProps {
    methodSort: string
    setMethodSort: (methodSort: string) => void
}

export interface ProductsHelperProps {
    setProducts: (products: ProductAPI[]) => void
}

export interface SectionProductsProps {
    dispatch: React.Dispatch<ACTION_TYPES_TOOLBAR_PRODUCTS>
}

// Context
export interface UserAuthState {
    id: string | null
    name: string
    points: number
    redeemHistory: RedeemAPI[]
    createDate: Date
}

export interface UserContextProps {
    me: UserAuthState
}

export interface UserReducerContextProps {
    me: UserAuthState
    dispatch?: React.Dispatch<ACTION_TYPES_USER>
}

export interface SwitchRoutesAppProps {
    isAuthenticated: boolean
}

export interface PublicRouteAppProps {
    isAuthenticated: boolean
}

export interface CartReducerProps {
    cart: ProductAPI[]
    dispatch?: React.Dispatch<ACTION_TYPES_CART>
}
