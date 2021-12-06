import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cinemas from '../views/CinemasView';
import CinemaDetailView from '../views/CinemaDetailView';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cinemas">
        <Stack.Screen name="Cinemas" component={Cinemas} />
        <Stack.Screen name="CinemaDetail" component={CinemaDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
