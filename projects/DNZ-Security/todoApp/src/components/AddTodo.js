/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { AddTodoStyles as styles } from './styles';

const AddTodo = ({ submitHandler, todosItem }) => {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  function keyPress(e) {
    if (e.keyCode == 13) {
      e.target.changeHandler;
    }
  }

  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        keyboardType="default"
        placeholder="new todo..."
        placeholderTextColor="#777"
        onSubmitEditing={() => {
          submitHandler(text);
          setText('');
        }}
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          submitHandler(text);
          setText('');
        }}>
        <Text style={styles.buttonText}>ADD TODO</Text>
      </TouchableOpacity>
      <View style={styles.status}>
        <Text style={styles.complete}>
          Completed: {todosItem.filter((todo) => todo.isDone).length}
        </Text>
        <Text style={styles.remain}>
          Remain: {todosItem.filter((todo) => !todo.isDone).length}
        </Text>
      </View>
    </View>
  );
};

export { AddTodo };
