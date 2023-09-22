import { USER_ACTION_TYPES } from "./user.type"

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.FETCH_CURRENT_USER_START:
            return {...state, isLoading: true }
        case USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS:
            return {...state, currentUser: payload, isLoading: false }
        case USER_ACTION_TYPES.FETCH_CURRENT_USER_ERROR:
            return {...state, error: payload, isLoading: false }
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {...state, currentUser: payload }
        default:
            return state
    }
}