import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '../../redux/actions/UserActions';

const Login = () => {
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(setIsLoggedIn(true));
  };
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFEACA',
      }}>
      <View>
        <Text
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            color: '#835151',
            paddingHorizontal: 40,
            textAlign: 'center',
          }}>
          Welcome to
        </Text>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#835151',
            paddingHorizontal: 40,
            textAlign: 'center',
          }}>
          Login Screen
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#835151',
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 4,
          width: '70%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onLogin}>
        <Text style={{fontSize: 22, fontWeight: '500', color: '#FFEACA'}}>
          Click to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
