import { handlerSortHighest, handlerSortLowest, handlerSortRecent } from "helpers/toolbarProductsHelpers";
import { ProductAPI } from "types";


export interface ProductsToolbarReducerState {
    methodSort: "lowest" | "highest" | "recent"
    products: ProductAPI[]
}

// Actions Types
export type ACTION_TYPES_TOOLBAR_PRODUCTS =
    | { type: "lowest" }
    | { type: "highest" }
    | { type: "recent" }
    | { type: "changeMethodSort", payload: ProductsToolbarReducerState }

export interface ProductsToolbarProps {
    dispatch: React.Dispatch<ACTION_TYPES_TOOLBAR_PRODUCTS>
}

export interface SectionProductsProps {
    dispatch: React.Dispatch<ACTION_TYPES_TOOLBAR_PRODUCTS>
}

// Initial state
export const initialStateToolbarReducer: ProductsToolbarReducerState = {
    methodSort: "recent",
    products: []
}

// Toolbar reducer
export const toolbarReducer = (state: ProductsToolbarReducerState, action: ACTION_TYPES_TOOLBAR_PRODUCTS) => {
    const currentProducts = state?.products ? [...state?.products] : []
    switch (action.type) {
        case "changeMethodSort":
            return { methodSort: action.payload.methodSort, products: currentProducts }
        case "lowest":
            return { ...state, products: [...currentProducts].sort(handlerSortLowest) }
        case "highest":
            return { ...state, products: [...currentProducts].sort(handlerSortHighest) }
        case "recent":
            return { ...state, products: [...currentProducts].sort(handlerSortRecent) }
        default:
            throw new Error("Action wasn't valid.")
    }
}