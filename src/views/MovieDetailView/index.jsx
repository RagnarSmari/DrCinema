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
    console.log(Object.keys(s.cinema));
    if (s.cinema.id === cinemaId) {
      s.schedule.forEach((agust) => {
        tickets.push(agust);
      });
    }
  });

  const renderthetickets = () => tickets.map((s) => (
    <RenderShowtimes item={s} />
  ));

  const renderthegenres = () => movie.genres.map((s) => (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
    }}
    >
      <View style={styles.card}>
        <Text style={styles.text}>{s.Name}</Text>
      </View>
    </View>
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
          <View>
            <FlatList
              numColumns={4}
              data={movie.genres}
              keyExtractor={(id) => movie.id}
              renderItem={({ item }) => (<RenderGenres item={item} />)}
            />
          </View>

        </View>
        {renderthetickets()}
      </View>
    </ScrollView>

  );
};

export default MovieDetail;
