import React from 'react';
import {
  View, Text, Linking, Button,
} from 'react-native';

const RenderShowtimes = function ({ item }) {
  console.log('im here');
  console.log(item.time);
  console.log(Object.keys(item));
  const website = item.purchase_url;
  return (
    <View>
      <Text>{item.time}</Text>
      <View>
        <Button title="Kaupa Miða 🎞️ " onPress={() => { Linking.openURL(`https://${website}`); }} />
      </View>
    </View>
  );
};

export default RenderShowtimes;
