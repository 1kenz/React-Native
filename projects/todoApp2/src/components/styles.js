/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Dimensions } from 'react-native';

const AddTodoStyles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#00a8ff',
    color: '#e2e2e2',
    textDecorationColor: '#e2e2e2',
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: '#ff3f34',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#e2e2e2',
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  complete: {
    backgroundColor: '#27ae60',
    color: '#e2e2e2',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
  remain: {
    backgroundColor: '#3498db',
    color: '#e2e2e2',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    width: Dimensions.get('window').width * 0.4,
    marginRight: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export { AddTodoStyles };

const HeaderStyles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffa801',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todo_count: {
    fontSize: 35,
    color: '#e2e2e2',
    alignSelf: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 10,
  },
});

export { HeaderStyles };

const TodoItemStyles = StyleSheet.create({
  todos: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#485460',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 5,
    paddingLeft: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    color: '#e2e2e2',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    width: 25,
    height: 25,
    margin: 5,
  },
});

export { TodoItemStyles };
