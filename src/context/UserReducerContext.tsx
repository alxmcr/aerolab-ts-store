import { UserReducerContextProps } from "componentsTypes";
import React from "react";
import { initialUserState } from "reducers/userReducer";

export const UserReducerContext = React.createContext<UserReducerContextProps>(initialUserState)