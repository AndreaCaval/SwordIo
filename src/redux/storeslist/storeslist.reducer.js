import STORESLIST from '../../data/storeList.json'
import STORESVALUE from '../../data/storesSetting.json'

const INITIAL_STATE = {
    storesListMap: STORESLIST,
    storesSettingMap: STORESVALUE
}

export const storesListReducer = (state = INITIAL_STATE, action = {}) => {
    return state
}