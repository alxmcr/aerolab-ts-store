import { UserAuthState, UserContextProps } from "componentsTypes";
import * as React from "react";

const invalidUser: UserAuthState = {
    id: null,
    name: "",
    points: 0,
    redeemHistory: [],
    createDate: new Date()
}

export const AuthContext = React.createContext<UserContextProps>({ me: invalidUser });