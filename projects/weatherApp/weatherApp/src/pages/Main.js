import React from 'react';
import { View, Text, Button } from 'react-native';

const Main = (props) => {
  return (
    <View>
      <Text>Main Page</Text>
      <Button
        title="Go"
        onPress={() => props.navigation.navigate('Favorite')}
      />
    </View>
  );
};

export { Main };
