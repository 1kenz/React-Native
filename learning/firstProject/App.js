import React from 'react';
import { View, Text, Button } from 'react-native';

function App() {
  const sayHello = () => {
    console.log('Hello');
  };

  return (
    <View>
      <View style={{ backgroundColor: 'red' }}>
        <Text>Hello World!!</Text>
        <Text>Hello New World!!</Text>
      </View>
      <Button title="Click Me" onPress={sayHello} />
    </View>
  );
}

export default App;
