import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementCount,
  incrementCount,
} from '../../redux/actions/CounterActions';
import {selectCounterValue} from '../../redux/selectors/CounterSelector';
import {persistor} from '../../redux/store';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);

  const onIncrement = () => {
    dispatch(incrementCount());
  };

  const onDecrement = () => {
    if (counterValue > 0) {
      dispatch(decrementCount());
    }
  };

  const onLogout = () => {
    persistor.purge();
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
          Counter
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#835151',
            overflow: 'hidden',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#835151',
              width: 40,
            }}
            onPress={onDecrement}>
            <Text style={{fontSize: 30, color: '#FFEACA'}}>–</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24, color: '#835151', fontWeight: 'bold'}}>
              {counterValue}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#835151',
              width: 40,
            }}
            onPress={onIncrement}>
            <Text style={{fontSize: 30, color: '#FFEACA'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: '#835151',
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 4,
          width: '70%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onLogout}>
        <Text style={{fontSize: 22, fontWeight: '500', color: '#835151'}}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
