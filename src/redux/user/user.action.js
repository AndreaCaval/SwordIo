import { USER_ACTION_TYPES } from "./user.type"
import { createAction } from "../../utils/reducer/reducer.utils";
import { retrieveLicense } from '../../utils/hyper/hyper.utils'

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const fetchCurrentUserStart = () => createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_START)
export const fetchCurrentUserSuccess = (user) => createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS, user)
export const fetchCurrentUserError = (error) => createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_ERROR, error)

export const fetchCurrentUserAsync = (key) => async(dispatch) => {
    dispatch(fetchCurrentUserStart())

    try {
        const user = await retrieveLicense(key)
        console.log(user);
        dispatch(fetchCurrentUserSuccess(user))
    } catch (error) {
        dispatch(fetchCurrentUserError(error))
    }

}