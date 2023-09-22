import { createSelector } from 'reselect';

export const selectCurrentUserReducer = (state) => state.user

export const selectCurrentUser = createSelector(
    [selectCurrentUserReducer],
    (currentUserSlice) => currentUserSlice.currentUser
);

export const selectCurrentUserIsLoading = createSelector(
    [selectCurrentUserReducer],
    (currentUserSlice) => currentUserSlice.isLoading
);