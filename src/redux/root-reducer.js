import { combineReducers } from 'redux'

import { userReducer } from './user/user.reducer'
import { profilesReducer } from './profiles/profile.reducer'
import { settingsReducer } from './settings/settings.reducer'
import { analyticsReducer } from './analytics/analytics.reducer'
import { productsCalendarReducer } from './productscalendar/productscalendar.reducer'
import { storesListReducer } from './storeslist/storeslist.reducer'
import { storesDataReducer } from './storesdata/storesdata.reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    profiles: profilesReducer,
    settings: settingsReducer,
    analytics: analyticsReducer,
    storeslist: storesListReducer,
    storesdata: storesDataReducer,
    productscalendar: productsCalendarReducer,
})