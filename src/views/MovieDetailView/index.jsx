import React from 'react';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import RenderGenres from '../../components/RenderGenres';
import styles from '../../styles';

const MovieDetail = function (props) {
  const { movie } = props.route.params;
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.posterWrapper}>
        <Image style={styles.image} source={{ uri: movie.poster }} />
      </View>

      <Text style={styles.heading}>{movie.title}</Text>
      <Text style={styles.text}>
        Lengd:
        {' '}
        {movie.durationMinutes}
        {' - '}
        Útgáfudagur:
        {' '}
        {movie.year}
      </Text>
      <Text style={styles.text}>{movie.plot}</Text>
      <FlatList
        data={movie.genres}
        renderItem={({ item }) => (<RenderGenres item={item} />)}
      />
    </View>
  );
};

export default MovieDetail;
