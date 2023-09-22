import { STORESDATA_ACTION_TYPES } from "./storesdata.type"
import { createAction } from "../../utils/reducer/reducer.utils"

const updateStoreDataSettingReducer = (newData) => createAction(STORESDATA_ACTION_TYPES.SET_STORES_DATA, newData)


const setSetting = (storesDataMap, title, setting, value) => {
    let newP = {}
    newP[title] = storesDataMap[title]
    newP[title][setting] = value
    return {...storesDataMap, ...newP };
}

export const setStoreDataSetting = (storesDataMap, title, setting, value) => {
    return updateStoreDataSettingReducer(setSetting(storesDataMap, title, setting, value))
}