import { UserContextProps } from "componentsTypes";
import * as React from "react";

export const AuthContext = React.createContext<UserContextProps | null>(null);