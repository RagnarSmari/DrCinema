import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cinemas from '../views/CinemasView';
import CinemaDetailView from '../views/CinemaDetailView';
import MovieDetailView from '../views/MovieDetailView';
import upcomingMovies from '../views/UpcomingMoviesView';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cinemas">
        <Stack.Screen name="Cinemas" component={Cinemas} />
        <Stack.Screen name="CinemaDetail" component={CinemaDetailView} />
        <Stack.Screen name="MovieDetailView" component={MovieDetailView} />
        <Stack.Screen name="upcomingMovies" component={upcomingMovies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
