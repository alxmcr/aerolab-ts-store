import { UserContextProps } from "componentsTypes";
import { invalidUser } from "helpers/userHelpers";
import * as React from "react";

export const AuthContext = React.createContext<UserContextProps>({ me: invalidUser });