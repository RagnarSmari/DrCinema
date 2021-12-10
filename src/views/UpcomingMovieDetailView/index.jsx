import React, { useState, useCallback, useRef } from 'react';
import {
  View, Text, Modal, TouchableOpacity, StyleSheet, Button, Alert, Image,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from '../../styles/index';
import trailerImage from '../../resources/no-trailer-oh-noooo.jpg';

const UpcomingMovieDetailView = function (props) {
  const [playing, setPlaying] = useState(false);
  let noTrailer = false;
  const { movie } = props.route.params;
  let moviearr;
  // eslint-disable-next-line react/prop-types
  if (movie.trailers.length === 0 || movie.trailers[0].results.length === 0) {
    noTrailer = true;
  } else {
    // eslint-disable-next-line prefer-destructuring
    moviearr = movie.trailers[0];
  }

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const someTrailer = () => {
    if (noTrailer) {
      return (
        <View>
          <Image
            style={{
              width: '90%', height: '80%', marginTop: 50, justifyContent: 'center', alignItems: 'center',
            }}
            source={trailerImage}
          />
        </View>
      );
    }

    return (
      <View>
        <YoutubePlayer
          height={305}
          play={playing}
          baseUrlOverride={moviearr.results[0].url}
          onChangeState={onStateChange}
        />
      </View>
    );
  };
  return (
    <View style={[styles.card, styles.shadowProp]}>
      {/* eslint-disable-next-line react/prop-types */}
      <Text style={styles.heading}>{movie.title}</Text>
      {someTrailer()}
    </View>
  );
};

export default UpcomingMovieDetailView;
