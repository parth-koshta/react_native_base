import {createReducer} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import {UserActionTypes} from '../actions/UserActions';

const initialState = {isLoggedIn: false};

const UserReducer = createReducer(initialState, builder => {
  builder
    .addCase(UserActionTypes.SET_IS_LOGGED_IN, (state, action) => {
      state.isLoggedIn = action.payload;
    })
    .addCase(PURGE, () => {
      return {
        ...initialState,
      };
    });
});

export default UserReducer;
