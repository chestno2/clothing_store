// it gets a state object  which reprsents a last state and current state 

const INITIAL_STATE = {
    currentUser: null
}
// if state is undefined then it will fallback to initial state  if the state 
// is null then it will pass the null value
const userReducer = (state = INITIAL_STATE, action) => {

    // it is a function that gets the state object and action 
    // depending upon the switch statements if action.type matches to set current user
    // the case it is given then we return the state  if none of these action 
    // types matches then we return the default state that is currentuser null
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state
        // if noen of the action type matches we return the state 
    }


}
export default userReducer