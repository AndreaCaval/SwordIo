import { PROFILES_ACTION_TYPES } from "./profiles.type"
import PROFILES from '../../data/data.json'

const INITIAL_STATE = {
    profiles: PROFILES.profiles
}

export const profilesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case PROFILES_ACTION_TYPES.SET_PROFILES:
            return {...state, profiles: payload }
        default:
            return state
    }
}