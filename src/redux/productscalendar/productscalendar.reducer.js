import { PRODUCTSCALENDAR_ACTION_TYPES } from "./productscalendar.type"

const INITIAL_STATE = {
    productsCalendar: [],
    isLoading: null,
    error: null
}

export const productsCalendarReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case PRODUCTSCALENDAR_ACTION_TYPES.FETCH_PRODUCTSCALENDAR_START:
            return {...state, isLoading: true }
        case PRODUCTSCALENDAR_ACTION_TYPES.FETCH_PRODUCTSCALENDAR_SUCCESS:
            return {...state, productsCalendar: payload, isLoading: false }
        case PRODUCTSCALENDAR_ACTION_TYPES.FETCH_PRODUCTSCALENDAR_ERROR:
            return {...state, error: payload, isLoading: false }
        default:
            return state
    }
}