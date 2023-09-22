import { SETTINGS_ACTION_TYPES } from "./settings.type"

const INITIAL_STATE = {
    webhook_url: "",
    box_position: "top-left",
}

export const settingsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case SETTINGS_ACTION_TYPES.SET_BOX_POSITION:
            return {...state, box_position: payload }
        case SETTINGS_ACTION_TYPES.SET_WEBHOOK_URL:
            return {...state, webhook_url: payload }
        default:
            return state
    }
}