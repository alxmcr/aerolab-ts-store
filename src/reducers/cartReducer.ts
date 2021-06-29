import { ACTION_TYPES_CART, CartReducerState } from "componentsTypes";

export const initialCartState: CartReducerState = {
    cart: []
}

export const cartReducer = (state: CartReducerState, action: ACTION_TYPES_CART) => {
    switch (action.type) {
        case "addProduct":
            console.log(state.cart)
            const quantity = action.payload.quantity;
            const newProduct = action.payload.product;
            const indexProductCurrentInCart = state.cart.findIndex(product => product._id === newProduct._id)

            if (indexProductCurrentInCart === -1) {
                const newElement = { ...newProduct, quantity };
                return { ...state, cart: [...state.cart, newElement] }
            }

            let currentProductInCart = { ...state.cart[indexProductCurrentInCart] }
            const quantityUpdated = currentProductInCart.quantity + quantity;
            currentProductInCart.quantity = quantityUpdated;
            state.cart[indexProductCurrentInCart] = currentProductInCart;
            return state;

        case "removeProduct":
            const productToRemove = action.payload.product;
            return { ...state, cart: state.cart.filter((product) => product._id !== productToRemove._id) }
        default:
            throw new Error("Action is bad")
    }
}