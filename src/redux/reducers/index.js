import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';

const Reducers = combineReducers({
    user: UserReducer,
    counter: CounterReducer
});

export default Reducers;
