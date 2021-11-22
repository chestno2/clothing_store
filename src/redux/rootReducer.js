// Combine all the reducer in the root reducer overal  reducer
import { combineReducers } from "redux"
import userReducer from "./User/userReducer"
import cartReducer from "./Cart/cartReducer"
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./Shop/shopReducer";

// it gives the key of user to userReducer and gives the key to 
// the reducer is cart 
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer

});

export default persistReducer(persistConfig, rootReducer);
