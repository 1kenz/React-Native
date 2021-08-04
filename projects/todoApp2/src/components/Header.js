/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';

import { HeaderStyles as styles } from './styles';

const Header = ({ todoCounter }) => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require('../img/2.png')} />
      <Text style={styles.header}>My Todos</Text>
      <Text style={styles.todo_count}>{todoCounter}</Text>
    </View>
  );
};

export { Header };
