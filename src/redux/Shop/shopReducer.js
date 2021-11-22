import shopdata from "../../Pages/shop/shopdata"

const INITIAL_STATE = {
    collections: shopdata
}
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.types) {
        default:
            return state
    }
}
export default shopReducer