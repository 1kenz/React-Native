import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function App() {
  const sayHello = name => {
    console.log('Hello ' + name);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text>Hello World!!</Text>
        <Text>Hello New World!!</Text>
      </View>
      <Button
        title="Click Me"
        onPress={() => sayHello('Kenan')}
        color="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
});

export default App;
