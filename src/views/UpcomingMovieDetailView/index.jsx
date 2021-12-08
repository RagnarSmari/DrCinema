import React, { useState, useCallback, useRef } from 'react';
import {
  View, Text, Modal, TouchableOpacity, StyleSheet, Button, Alert,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';
import styles from '../../styles/index';

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
  const moviearr = movie.trailers[0];
  return (
    <View style={[styles.card, styles.shadowProp]}>
      {/* eslint-disable-next-line react/prop-types */}
      <Text style={styles.heading}>{movie.title}</Text>
      <Text style={styles.text}>Trailer</Text>
      <View>
        <YoutubePlayer
          height={305}
          play={playing}
          baseUrlOverride={moviearr.results[0].url}
          onChangeState={onStateChange}
        />
      </View>
    </View>
  );
};

export default UpcomingMovieDetailView;
