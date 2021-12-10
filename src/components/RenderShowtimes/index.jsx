import React from 'react';

import {
  View, Text, Linking, Button,
} from 'react-native';
import styles from '../../styles';

const RenderShowtimes = function ({ item }) {
  const website = item.purchase_url;
  return (
    <View style={{ width: '50%', marginBottom: 10 }}>
      <Text style={styles.text}>{item.time}</Text>
      <View>
        <Button style={{ backgroundColor: 'black', borderRadius: 20 }} title="Kaupa Miða 🎞️ " onPress={() => { Linking.openURL(website); }} />
      </View>
    </View>
  );
};

export default RenderShowtimes;
