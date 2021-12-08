import React, { useState, useCallback, useRef } from 'react';
import {
  View, Text, Modal, TouchableOpacity, StyleSheet, Button, Alert,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import { WebView } from 'react-native-webview';

const UpcomingMovieDetailView = function (props) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const [trailer, setTrailer] = useState(false);
  const { movie } = props.route.params;
  console.log(Object.keys(movie));
  return (
    <View>
      {/* eslint-disable-next-line react/prop-types */}
      <Text>{movie.title}</Text>
      <Text>Here are the genres</Text>
      <Text>Here come the trailer</Text>
      <View>
        <YoutubePlayer
          height={305}
          play={playing}
          videoId="iee2TATGMyI"
          onChangeState={onStateChange}
        />
        <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
      </View>
    </View>
  );
};

export default UpcomingMovieDetailView;
