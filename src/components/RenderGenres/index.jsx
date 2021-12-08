import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const RenderGenres = function ({ item }) {
  const randomcolor = item.ID / 57;
  const colortest = item.ID ** 45;

  const generateColor = () => {
    const randomColor = Math.floor(randomcolor * 1677215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{ backgroundColor: generateColor() }}>{item.Name}</Text>
      </View>
    </View>
  );
};

export default RenderGenres;
