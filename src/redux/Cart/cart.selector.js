import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems)

export const selectCartItemscount =
    createSelector([selectCartItems], cartItems =>
        cartItems.reduce((accumulateQuantity, cartItem) =>
            accumulateQuantity + cartItem.quantity, 0))

export const selectCarthidden =
    createSelector([selectCart], cart => cart.hidden)

export const selectCartTotal =
    createSelector([selectCartItems],
        cartItems => cartItems.reduce((accumulateQuantity, cartItem) =>
            accumulateQuantity + cartItem.quantity * cartItem.price, 0))