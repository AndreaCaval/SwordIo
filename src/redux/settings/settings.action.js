import { SETTINGS_ACTION_TYPES } from "./settings.type"
import { createAction } from "../../utils/reducer/reducer.utils"

export const setWebhookUrl = (webhook_url) => createAction(SETTINGS_ACTION_TYPES.SET_WEBHOOK_URL, webhook_url)

export const setBoxPosition = (box_position) => createAction(SETTINGS_ACTION_TYPES.SET_BOX_POSITION, box_position)