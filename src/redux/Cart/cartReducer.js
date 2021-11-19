import CartActionTypes from "./cartTypes";
import { addItemToCart } from "./cart.utils";
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEMS:
            return {
                ...state,

                cartItems: addItemToCart(state.cartItems, action.payload)
                //action payload are new iems
                //spreading all the arrays value new will appear at the end

            }
        default:
            return state;
    }
};

export default cartReducer;