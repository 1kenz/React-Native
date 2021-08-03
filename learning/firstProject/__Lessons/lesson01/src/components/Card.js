/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './Card.style';

const Card = props => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert('It is good :)');
          }}
        >
          <Text styles={styles.button_title}>LIKED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
