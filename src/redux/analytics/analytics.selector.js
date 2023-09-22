import { createSelector } from 'reselect';

export const selectAnalyticsReducer = (state) => state.analytics

export const selectAnalytics = createSelector(
    [selectAnalyticsReducer],
    (analyticsSlice) => analyticsSlice.analytics
);

export const selectAnalyticsIsLoading = createSelector(
    [selectAnalyticsReducer],
    (analyticsSlice) => analyticsSlice.isLoading
);

export const selectAnalyticsFilter = createSelector(
    [selectAnalyticsReducer],
    (analyticsSlice) => analyticsSlice.filter
);