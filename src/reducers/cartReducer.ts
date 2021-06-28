import { ACTION_TYPES_CART, CartReducerState } from "componentsTypes";

export const initialCartState: CartReducerState = {
    cart: []
}

export const cartReducer = (state: CartReducerState, action: ACTION_TYPES_CART) => {
    switch (action.type) {
        case "addProduct":
            const newElement = action.payload.product;
            const newState = { ...state, cart: [...state.cart, newElement] }
            return newState
        case "removeProduct":
            const productToRemove = action.payload.product;
            return { ...state, cart: state.cart.filter((product) => product._id !== productToRemove._id) }
        default:
            throw new Error("Action is bad")
    }
}