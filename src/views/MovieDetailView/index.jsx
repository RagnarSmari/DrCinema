import React from 'react';
import {
  View, Text, FlatList, Image, ScrollView, SafeAreaView,
} from 'react-native';
import RenderGenres from '../../components/RenderGenres';
import RenderShowtimes from '../../components/RenderShowtimes';
import styles from '../../styles';
import nativeStyle from './styles';

const MovieDetail = function (props) {
  const { movie, cinemaId } = props.route.params;
  const tickets = [];
  movie.showtimes.forEach((s) => {
    if (s.cinema.id === cinemaId) {
      s.schedule.forEach((agust) => {
        tickets.push(agust);
      });
    }
  });

  const renderthetickets = () => tickets.map((s) => (
    <RenderShowtimes key={Math.random() * 1998549} item={s} />
  ));

  const renderthegenres = () => movie.genres.map((s) => (
    <RenderGenres key={Math.random() * 1998549} item={s} />
  ));
  return (
    <ScrollView>
      <View style={nativeStyle.mainContainer}>
        <View>
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
        <Text style={styles.textPilot}>{movie.plot}</Text>
        <View style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          marginBottom: 20,
        }}
        >
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap',
          }}
          >
            {renderthegenres()}
          </View>

        </View>
        <View style={{
          flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
        }}
        >
          {renderthetickets()}
        </View>

      </View>
    </ScrollView>

  );
};

export default MovieDetail;
