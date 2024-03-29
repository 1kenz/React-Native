/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './components/Card';

const App = props => {
  return (
    <View style={styles.container}>
      <Card title="Edward Stark" text="Winter is coming..." />
      <Card
        title={'Arif Işık'}
        text={'Uzaylılar tarafından kaçırıldım. Evet tarafından...'}
      />
      <Card
        title={'Serbest'}
        text={'İlhami abi sen söyle, ben başka bir ilde miyim?'}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
