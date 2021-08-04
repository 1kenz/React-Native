import React from 'react';
import { View } from 'react-native';
import { provider } from 'react-native';
import { createStore } from 'redux';

import Component_A from './pages/Component_A';
import Component_B from './pages/Component_B';

import { reducer, initialState } from './context';
import { Provider } from 'react-redux';

const store = createStore(reducer, initialState);

const Main = (props) => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Component_A />
        <Component_B />
      </View>
    </Provider>
  );
};

export default Main;
