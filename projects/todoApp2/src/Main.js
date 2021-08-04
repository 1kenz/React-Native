/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';

import { Header, AddTodo, TodoItem } from './components';
import styles from './styles';
const initialTodos = [
  {
    key: 8,
    todo: 'Happy new year 😎',
    isDone: false,
  },
  {
    key: 7,
    todo: 'Happy coding !!!',
    isDone: false,
  },
  {
    key: 6,
    todo: 'Show your completed and remain todos !',
    isDone: false,
  },
  {
    key: 5,
    todo: 'When you finish your action, press todo item and it is change done!',
    isDone: false,
  },
  {
    key: 4,
    todo: 'Todo-app ver 2.0 has new features!',
    isDone: false,
  },
  {
    key: 3,
    todo: 'Several bugs fixed!',
    isDone: false,
  },
  {
    key: 2,
    todo: 'Release Todo-app ver 2.0 !!!',
    isDone: false,
  },
  {
    key: 1,
    todo: 'Be ready for other Project',
    isDone: false,
  },
  {
    key: 0,
    todo: 'Load The Project ver 0.95',
    isDone: true,
  },
];
const Main = () => {
  const [todos, setTodos] = useState(initialTodos);

  const todo_num = todos.length;

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length < 3) {
      Alert.alert('DNZ Security & Software Todo App', 'Please enter todo!!');
    } else {
      setTodos((prevTodos) => {
        return [
          {
            key: Math.random().toString(),
            todo: text,
            isDone: false,
          },
          ...prevTodos,
        ];
      });
    }
  };

  const pressCheck = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todos) =>
        todos.key == key ? { ...todos, isDone: !todos.isDone } : todos,
      );
    });
  };

  useEffect(() => {
    Alert.alert('DNZ Security & Software', 'Welcome to 2021 !!!');
  }, []);

  return (
    <View style={styles.container}>
      <Header todoCounter={todo_num} />
      <AddTodo submitHandler={submitHandler} todosItem={todos} />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={todos}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nothing to do..</Text>
        )}
        renderItem={({ item }) => (
          <TodoItem
            todoItem={item}
            pressCheck={pressCheck}
            pressHandler={pressHandler}
          />
        )}
      />
    </View>
  );
};

export default Main;
