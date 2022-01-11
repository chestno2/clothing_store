import { createSelector } from 'reselect';

const selectUser = state => state.user;
console.log(selectUser);
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser

);
