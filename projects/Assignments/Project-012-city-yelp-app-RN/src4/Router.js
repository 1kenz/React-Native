import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Restaurant, RestaurantDetail, Home} from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Home}
          title="Bir şehir seçiniz"
        />
        <Stack.Screen name="SecondPage" component={Restaurant} />
        <Stack.Screen name="ThirdPage" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
