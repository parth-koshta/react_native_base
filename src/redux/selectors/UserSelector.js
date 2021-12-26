import { createSelector } from 'reselect';

export const selectIsLoggedIn = createSelector(
  (state) => state.user,
  (user) => user.isLoggedIn,
);
