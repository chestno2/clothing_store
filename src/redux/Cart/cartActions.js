import CartActionTypes from "./cartTypes";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN

});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEMS,
    payload: item,

})
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})