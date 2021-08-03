/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Edward Stark</Text>
          <Text style={styles.card_text}>Winter is coming...</Text>
        </View>
        <TouchableOpacity style={styles.card_button}>
          <Text styles={styles.card_button_title}>LIKED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card_container: {
    backgroundColor: '#fff',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  card_body: {
    padding: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  card_text: {
    fontSize: 16,
    marginTop: 10,
    margin: 10,
  },
  card_button: {
    backgroundColor: '#00c2ff',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  card_button_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
