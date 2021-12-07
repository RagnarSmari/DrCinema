import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

const RenderGenres = function ({ item }) {
  console.log(item);
  return (
    <View>
      <Text>{item.Name}</Text>
    </View>
  );
};

export default RenderGenres;
