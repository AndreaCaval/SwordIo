import { ANALYTICS_ACTION_TYPES } from "./analytics.type"
import { createAction } from "../../utils/reducer/reducer.utils";
import { getAnalytics } from '../../utils/database/database.utils'


export const setFilter = (filter) => createAction(ANALYTICS_ACTION_TYPES.SET_FILTER, filter)

export const fetchAnalyticsStart = () => createAction(ANALYTICS_ACTION_TYPES.FETCH_ANALYTICS_START)
export const fetchAnalyticsSuccess = (analytics) => createAction(ANALYTICS_ACTION_TYPES.FETCH_ANALYTICS_SUCCESS, analytics)
export const fetchAnalyticsError = (error) => createAction(ANALYTICS_ACTION_TYPES.FETCH_ANALYTICS_ERROR, error)

export const fetchAnalyticsAsync = () => async(dispatch) => {
    dispatch(fetchAnalyticsStart())

    try {
        const analytics = await getAnalytics()
        dispatch(fetchAnalyticsSuccess(analytics))
    } catch (error) {
        dispatch(fetchAnalyticsError(error))
    }

}