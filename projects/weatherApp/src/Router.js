import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Main, Detail, Favorite } from './pages/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainComponent() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

function App(props) {
  return (
    <NavigationContainer>
      <Tab.Navigation>
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{ title: 'Favoriler' }}
        />
        <Tab.Screen
          name="Main"
          component={MainComponent}
          options={{ title: 'Ana Sayfa' }}
        />
      </Tab.Navigation>
    </NavigationContainer>
  );
}

export default App;
