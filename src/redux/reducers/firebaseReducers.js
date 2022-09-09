import { firebaseTypes } from "../types/firebaseTypes"

const initialState = {
    up: [],
    proteins: []

}

export const firebaseReducers = (state = initialState, action) => {
    switch (action.type) {
        case firebaseTypes.read:
            return {
                proteins: [...action.payload]
            }
        case firebaseTypes.readUp:
            return {
                up:  [...action.payload]
            }
            default:
                return state
        }
    }
    