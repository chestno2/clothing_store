import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from "./rootReducer"

//add middleware to store whenever action gets fired we ca catch them
const middlewares = [logger];
//logger will give you insight
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;