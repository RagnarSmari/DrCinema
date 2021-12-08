import React from 'react';
import { View, Text } from 'react-native';

const RenderShowtimes = function ({ item }) {
  console.log(item['schedule']);
  );
  console.log(Object.keys(item));
  return (
    <View>
      <Text>{item.showtimes}</Text>
    </View>
  );
};

export default RenderShowtimes;
