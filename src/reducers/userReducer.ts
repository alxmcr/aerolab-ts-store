import { ACTION_TYPES_USER, UserReducerState } from "componentsTypes";
import { invalidUser } from "helpers/userHelpers";

export const initialUserState: UserReducerState = {
    me: invalidUser
}
// reducer
export const userReducer = (
    state: UserReducerState,
    action: ACTION_TYPES_USER
) => {
    const currentUser = state.me;

    if (currentUser === null) return state;

    switch (action.type) {
        case "incrementPoints":
            const userUpdated = {
                ...currentUser,
                points: currentUser.points + action.payload.points
            }
            return { ...state, me: userUpdated }
        case "decrementPoints":
            if (currentUser.points - action.payload.points >= 0) {
                const userUpdated = {
                    ...currentUser,
                    points: currentUser.points - action.payload.points
                }
                return { ...state, me: userUpdated }
            }
            return state;
        default:
            throw new Error("Action wasn't valid.")

    }
}
