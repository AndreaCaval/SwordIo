import { PRODUCTSCALENDAR_ACTION_TYPES } from "./productscalendar.type"
import { createAction } from "../../utils/reducer/reducer.utils";
import { getProductsCalendar } from '../../utils/database/database.utils'

export const fetchProductsCalendarStart = () => createAction(PRODUCTSCALENDAR_ACTION_TYPES.FETCH_PRODUCTSCALENDAR_START)
export const fetchProductsCalendarSuccess = (products) => createAction(PRODUCTSCALENDAR_ACTION_TYPES.FETCH_PRODUCTSCALENDAR_SUCCESS, products)
export const fetchProductsCalendarError = (error) => createAction(PRODUCTSCALENDAR_ACTION_TYPES.FETCH_PRODUCTSCALENDAR_ERROR, error)

export const fetchProductsCalendarAsync = () => async(dispatch) => {
    dispatch(fetchProductsCalendarStart())

    try {
        const products = await getProductsCalendar()
        dispatch(fetchProductsCalendarSuccess(products))
    } catch (error) {
        dispatch(fetchProductsCalendarError(error))
    }

}