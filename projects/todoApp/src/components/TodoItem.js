/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { TodoItemStyles as styles } from './styles';

const TodoItem = ({ todoItem, pressHandler, pressCheck }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.todos,
          { backgroundColor: todoItem.isDone ? '#263238' : '#485460' },
        ]}
        onPress={() => {
          return pressCheck(todoItem.key);
        }}>
        <Text
          style={[
            styles.text,
            {
              textDecorationLine: todoItem.isDone ? 'line-through' : null,
              fontWeight: todoItem.isDone ? 'normal' : 'bold',
              color: todoItem.isDone ? '#bbb' : '#e2e2e2',
            },
          ]}>
          {todoItem.todo}
        </Text>
        <TouchableOpacity onPress={() => pressHandler(todoItem.key)}>
          <View>
            <Image
              style={styles.image}
              source={require('../img/del-circle.png')}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export { TodoItem };
