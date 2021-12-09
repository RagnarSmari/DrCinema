import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const RenderGenres = function ({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>{item.Name}</Text>
      </View>
    </View>
  );
};

export default RenderGenres;
