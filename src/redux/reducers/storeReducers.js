import { storeTypes } from "../types/storeTypes";

const initialState = {
    dataStore: [],
}

export const storeReducers = (state = initialState, action) => {
    switch (action.type) {
        case storeTypes.readAllElements:
            return [...state]
        case storeTypes.setElement:
            return {
                ...state,
                dataStore: state.dataStore.concat(action.payload),
            }
        case storeTypes.deleteElement:
            return state.filter(element => element.id !== action.payload)
        case storeTypes.updateElement:
            return state.map(element => element.id === action.payload.id ? action.payload : element)
        case storeTypes.deleteAllElements:
            return state = []
        default:
            return state
    }
}