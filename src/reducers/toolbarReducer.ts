import { ACTION_TYPES_TOOLBAR_PRODUCTS, ProductsToolbarReducerState } from "componentsTypes";
import { handlerSortHighest, handlerSortLowest, handlerSortRecent } from "helpers/toolbarProductsHelpers";

export const toolbarReducer = (state: ProductsToolbarReducerState, action: ACTION_TYPES_TOOLBAR_PRODUCTS) => {
    const currentProducts = state?.products ? [...state?.products] : []
    switch (action.type) {
        case "changeMethodSort":
            return { methodSort: action.payload.methodSort }
        case "lowest":
            return { products: [...currentProducts].sort(handlerSortLowest) }
        case "highest":
            return { products: [...currentProducts].sort(handlerSortHighest) }
        case "recent":
            return { products: [...currentProducts].sort(handlerSortRecent) }
        default:
            throw new Error("Action wasn't valid.")
    }
}