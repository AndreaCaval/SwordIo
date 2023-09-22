import { createSelector } from 'reselect';

export const selectSettingsReducer = (state) => state.settings

export const selectWebhookUrl = createSelector(
    [selectSettingsReducer],
    (settingsSlice) => settingsSlice.webhook_url
);

export const selectBoxPosition = createSelector(
    [selectSettingsReducer],
    (settingsSlice) => settingsSlice.box_position
);