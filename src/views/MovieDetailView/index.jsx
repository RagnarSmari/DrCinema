import React from 'react';
import { View, Text } from 'react-native';

const MovieDetail = function (props) {
  const test = 'test';
  const { movie } = props.route.params;
  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default MovieDetail;
