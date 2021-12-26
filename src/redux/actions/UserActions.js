import {createAction} from '@reduxjs/toolkit';

export const UserActionTypes = {
  SET_IS_LOGGED_IN: 'SET_IS_LOGGED_IN',
};

export const setIsLoggedIn = createAction(UserActionTypes.SET_IS_LOGGED_IN);
