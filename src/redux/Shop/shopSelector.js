import { createSelector } from "reselect"

const CATEGORY_ID_MAP = {
    //because id is number and category is a string so we map category with the the id

    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5

}
const selectShop = state => state.shop

export const selectCollections = createSelector([selectShop], shop => shop.collections)
//jo yaha naam rahega whi selector mein rahega ja pull r rhe hain

export const selectCategory = categoryUrlParam => createSelector([selectCollections],
    categories => categories.find(categories => categories.id === CATEGORY_ID_MAP[categoryUrlParam]))

    //id aayegi categoryurl patam