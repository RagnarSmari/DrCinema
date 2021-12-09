import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, Linking,
} from 'react-native';
import { useSelector } from 'react-redux';
import movieService from '../../services/movieService';
import RenderGenres from '../../components/RenderGenres';
import styles from '../../styles';
import * as cinemaLogos from '../../resources';

const CinemaDetailView = function (props) {
  const { cinema } = props.route.params;
  const newCinema = JSON.parse(JSON.stringify(cinema).replace('\\t', ''));
  const [movies, setMovies] = useState([]);
  const [noMovies, setNoMovies] = useState(false);
  const allMovies = useSelector((s) => s.movies);

  useEffect(async () => {
    const myMovies = movieService.getMoviesByCinemaId(cinema.id, allMovies);
    setMovies(myMovies);
    if (movies.length === 0) {
      setNoMovies(true);
    }
  }, []);

  const renderMovie = ({ item }) => (
    <View style={[styles.card, styles.shadowProp]}>
      <TouchableOpacity onPress={() => props.navigation.navigate('MovieDetailView', {
        movie: item,
        cinemaId: newCinema.id,
      })}
      >
        <View>
          <Image style={styles.moviePoster} source={{ uri: item.poster }} />
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>
        {item.title}
      </Text>
      <Text style={styles.text}>
        Útgáfudagur:
        {' '}
        {item.year}
      </Text>
      <View style={{
        flexDirection: 'row', flex: 1, justifyContent: 'center', marginBottom: 20,
      }}
      >
        <FlatList
          numColumns={4}
          data={item.genres}
          keyExtractor={(id) => item.id}
          renderItem={({ item }) => (<RenderGenres item={item} />)}
        />
      </View>
    </View>
  );
  const { website, phone, description } = newCinema;
  let thirdReplace;
  if (!noMovies) {
    if (cinema.description === null) {
      thirdReplace = '';
    } else {
      const someText = newCinema.description;
      const secondReplace = someText.replace('<br>', '');
      thirdReplace = secondReplace.replace('<b>', '');
    }
  }
  if (newCinema.description === null) {
    thirdReplace = '';
  } else {
    const someText = newCinema.description;
    const secondReplace = someText.replace('<br>', '');
    thirdReplace = secondReplace.replace('<b>', '');
  }

  const renderTheMovies = () => {
    if (!noMovies) {
      console.log('no movies');
      return (
        <View style={{ height: 150 }}>
          <Text style={{ fontSize: 35 }}>Oh nooo no movies</Text>
        </View>

      );
    }

    return (
      <FlatList
        data={movies}
        renderItem={renderMovie}
        numColumns={1}
        nestedScrollEnabled
        vertical
        keyExtractor={(s) => s.id}
        ListHeaderComponent={() => (
          <>
            <View style={[styles.card, styles.shadowProp]}>
              <Image
                style={styles.cinemaLogo}
                source={cinema.logo}
              />
              <Text style={styles.text}>{thirdReplace}</Text>
              <Text
                style={styles.text}
                onPress={() => { Linking.openURL(`https://${website}`); }}
              >
                {cinema.website}
              </Text>
              <Text
                style={styles.text}
                onPress={() => Linking.openURL(`tel://${phone}`)}
              >
                {newCinema.phone}
                {newCinema.phone}
              </Text>

              <Text style={styles.text}>
                {newCinema.address}
                {' '}
                -
                {' '}
                {newCinema.city}

              </Text>
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.heading}>Movies</Text>
            </View>
          </>

        )}
      />
    );
  };

  return (
    <View>
      {renderTheMovies()}
    </View>

  );
};

export default CinemaDetailView;
