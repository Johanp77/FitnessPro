import { authTypes } from "../types/authTypes";

const initialState = {
    userData: []
}

export const authReducers = (state = {}, action) => {
    switch (action.type) {
        case authTypes.login:
            return {
                user: action.payload.user,
                pass: action.payload.pass
            }
        case authTypes.register:
            return {
                email: action.payload.email,
                name: action.payload.name,
                pass: action.payload.pass
            }
        case authTypes.authStatus:
            return {
                userData: [...action.payload]
            }
        case authTypes.logout:
            return []
        default:
            return state;
    }
}

export const userInfo = (state = {}, action) => {}