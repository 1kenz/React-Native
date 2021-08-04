import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Component_A = () => {
  const myCounter = useSelector((globalState) => globalState.counter);
  const dispatch = useDispatch;

  return (
    <View style={{ backgroundColor: '#ececff', flex: 1 }}>
      <Text>Component_A</Text>
      <Text>Counter: {myCounter}</Text>
      <Button
        title="Artır"
        onPress={() => dispatch({ type: 'INCREASE_COUNTER' })}></Button>
      <Button
        title="Azalt"
        onPress={() => dispatch({ type: 'DECREASE_COUNTER' })}></Button>
    </View>
  );
};

export default Component_A;
