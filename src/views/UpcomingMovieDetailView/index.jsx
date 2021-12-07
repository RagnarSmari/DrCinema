import React from 'react';
import { View, Text } from 'react-native';

const UpcomingMovieDetailView = function (props) {
  const movie = props.route.params;
  console.log(movie);
  return (
    <View>
      {/* eslint-disable-next-line react/prop-types */}
      <Text>{movie.title}</Text>
    </View>
  );
};

export default UpcomingMovieDetailView;
