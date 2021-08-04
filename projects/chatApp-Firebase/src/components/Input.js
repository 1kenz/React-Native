/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TextInput } from 'react-native';

import { input } from './styles';

const Input = (props) => {
  return (
    <View style={input.container}>
      <TextInput
        style={input.textInput}
        {...props.inputProps}
        onChangeText={props.onType}
      />
    </View>
  );
};

export { Input };
