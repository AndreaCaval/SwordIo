import { createSelector } from 'reselect';

export const selectProductsCalendarReducer = (state) => state.productscalendar

export const selectProductsCalendar = createSelector(
    [selectProductsCalendarReducer],
    (productscalendarSlice) => productscalendarSlice.productsCalendar
);

export const selectProductsCalendarIsLoading = createSelector(
    [selectProductsCalendarReducer],
    (productscalendarSlice) => productscalendarSlice.isLoading
);