import { CartReducerProps } from "componentsTypes";
import React from "react";

export const CartReducerContext = React.createContext<CartReducerProps | null>(null)