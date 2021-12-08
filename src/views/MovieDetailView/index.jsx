import React from 'react';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import RenderGenres from '../../components/RenderGenres';
import RenderShowtimes from '../../components/RenderShowtimes';
import styles from '../../styles';

const MovieDetail = function (props) {
  const { movie } = props.route.params;
  console.log(Object.keys(movie));
  const tickets = movie.showtimes[0];
  console.log(`MIÐAR HER PRINTED${tickets.schedule[0]}`);
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
        {' '}
        min.
        {' - '}
        Útgáfudagur:
        {' '}
        {movie.year}
      </Text>
      <Text style={styles.text}>{movie.plot}</Text>
      <FlatList
        numColumns={4}
        data={movie.genres}
        renderItem={({ item }) => (<RenderGenres item={item} />)}
      />
      <FlatList
        numColumns={1}
        data={movie.showtimes}
        renderItem={({ item }) => (<RenderShowtimes item={item} />)}
      />
    </View>
  );
};

export default MovieDetail;
