import {createReducer} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import {CounterActionTypes} from '../actions/CounterActions';

const initialState = {value: 0};

const CounterReducer = createReducer(initialState, builder => {
  builder
    .addCase(CounterActionTypes.INCREMENT, state => {
      state.value++;
    })
    .addCase(CounterActionTypes.DECREMENT, state => {
      state.value--;
    })
    .addCase(PURGE, () => {
      return {
        ...initialState,
      };
    });
});

export default CounterReducer;
