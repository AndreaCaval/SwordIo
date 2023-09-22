import { ANALYTICS_ACTION_TYPES } from './analytics.type'

const INITIAL_STATE = {
    analytics: {
        Total: 0,
        Declines: 0,
        Carts: 0,
        Checkouts: []
    },
    filter: "all",
    isLoading: false,
    error: null
}

export const analyticsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case ANALYTICS_ACTION_TYPES.SET_FILTER:
            return { ...state, filter: payload }
        case ANALYTICS_ACTION_TYPES.FETCH_ANALYTICS_START:
            return { ...state, isLoading: true }
        case ANALYTICS_ACTION_TYPES.FETCH_ANALYTICS_SUCCESS:
            return { ...state, analytics: payload, isLoading: false }
        case ANALYTICS_ACTION_TYPES.FETCH_ANALYTICS_ERROR:
            return { ...state, error: payload, isLoading: false }
        default:
            return state
    }
}