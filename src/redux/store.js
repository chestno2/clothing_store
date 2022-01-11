import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from "redux-persist"

import rootReducer from "./rootReducer"

//add middleware to store whenever action gets fired we cacatch them
const middlewares = [logger];
//logger will give you insight

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
//persisted version of store
