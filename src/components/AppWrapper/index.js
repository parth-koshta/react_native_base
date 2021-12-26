import React from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../../redux/selectors/UserSelector';
import Counter from '../../screens/counter';
import Login from '../../screens/login';

const AppWrapper = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !!isLoggedIn ? <Counter /> : <Login />;
};

export default AppWrapper;
