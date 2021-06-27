import * as React from "react";
import { UserAPI } from "types";

export const AuthContext = React.createContext<UserAPI | null>(null);