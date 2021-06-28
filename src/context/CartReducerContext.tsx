import { CartReducerProps } from "componentsTypes";
import React from "react";
import { initialCartState } from "reducers/cartReducer";

export const CartReducerContext = React.createContext<CartReducerProps>(initialCartState)