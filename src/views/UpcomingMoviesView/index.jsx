import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Text, View } from 'react-native';

const UpcomingMoviesView = function () {
  const movies = useSelector((s) => s.upcomingMovies);
  console.log(movies);

  const renderMovie = ({ item }) => {
    console.log(item);
    const test = 'test';
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={movies} renderItem={renderMovie} />
    </View>
  );
};
export default UpcomingMoviesView;
