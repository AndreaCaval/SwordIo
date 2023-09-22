import { createStore, compose, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from './root-reducer'

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [logger, thunk]
const composedEnhancers = compose(applyMiddleware(...middleWares))

export const ext = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(ext)