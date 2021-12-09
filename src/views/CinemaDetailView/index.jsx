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
      })}
      >
        <View>
          <Image style={styles.moviePoster} source={{ uri: item.poster }} />
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>
        {item.title}
      </Text>
      <FlatList
        numColumns={4}
        data={item.genres}
        renderItem={({ item }) => (<RenderGenres item={item} />)}
      />
      <Text>
        {item.year}
      </Text>
    </View>
  );
  const { website, phone, description } = cinema;
  let thirdReplace;
  if (!noMovies) {
    if (cinema.description === null) {
      thirdReplace = '';
    } else {
      const someText = cinema.description;
      const secondReplace = someText.replace('<br>', '');
      thirdReplace = secondReplace.replace('<b>', '');
    }
  }

  return (
    <View>
      {!noMovies ? <Text>Condition True = no list</Text>
        : (
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
                    {cinema.phone}
                  </Text>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <Text style={styles.heading}>Movies</Text>
                </View>
              </>

            )}
          />
        )}
    </View>

  );
};

export default CinemaDetailView;
