import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectCollections = createSelector([selectShop], shop => shop.collections)
//jo yaha naam rahega whi selector mein rahega ja pull r rhe hain
