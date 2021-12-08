import React, { useState } from 'react';
import {
  View, Text, Modal, TouchableOpacity, StyleSheet,
} from 'react-native';

import { WebView } from 'react-native-webview';

const UpcomingMovieDetailView = function (props) {
  const [trailer, setTrailer] = useState(false);
  const { movie } = props.route.params;
  console.log(Object.keys(movie));
  return (
    <View>
      {/* eslint-disable-next-line react/prop-types */}
      <Text>{movie.title}</Text>
      <Text>Here are the genres</Text>
      <Text>Here come the trailer</Text>
      <View style={{ flex: 1 }}>
        <WebView
          androidHardwareAccelerationDisabled
          javaScriptEnabled
          allowsFullscreenVideo
          source={{ uri: 'https://www.youtube.com/embed/S0tPMLOwyYw' }}
        />
      </View>
    </View>
  );
};

export default UpcomingMovieDetailView;
