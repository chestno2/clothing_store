// Combine all the reducer in the root reducer overal  reducer

import {combineReducers} from "redux"
import userReducer from "./User/userReducer"

export default   combineReducers({
    user:userReducer,

    // it gives the key of user to userReducer and gives the key to 
    // the reducer
})
