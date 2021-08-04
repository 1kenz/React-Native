import React from 'react';
import { View, Text, Button } from 'react-native';

const Favorite = (props) => {
  return (
    <View>
      <Text>Favorite page</Text>
      <Button title="Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export { Favorite };
