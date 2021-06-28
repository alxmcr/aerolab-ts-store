import { UserAuthState } from "componentsTypes";
import { UserAPI } from "types";

export const invalidUser: UserAuthState = {
    id: null,
    name: "",
    points: 0,
    redeemHistory: [],
    createDate: new Date()
}

export const isUserAuthenticated = (userAuthState: UserAuthState) => {
    return userAuthState.id !== null
}

export const mapperToUserAuthStateAPI = (userAuthState: UserAuthState) => {
    const userAuthAPI: UserAPI = {
        id: userAuthState.id,
        name: userAuthState.name,
        points: userAuthState.points,
        redeemHistory: userAuthState.redeemHistory,
        createDate: userAuthState.createDate,
    }

    return userAuthAPI;
}