import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Restaurant, RestaurantDetail} from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{title: 'Bir şehir seçiniz'}}
        />
        <Stack.Screen name="SecondPage" component={Restaurant} />
        <Stack.Screen name="ThirdPage" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
