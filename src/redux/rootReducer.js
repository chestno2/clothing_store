// Combine all the reducer in the root reducer overal  reducer

import { combineReducers } from "redux"
import userReducer from "./User/userReducer"
import cartReducer from "./Cart/cartReducer"
export default combineReducers({
    user: userReducer,
    cart: cartReducer

    // it gives the key of user to userReducer and gives the key to 
    // the reducer
})
