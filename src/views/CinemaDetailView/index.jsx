import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import movieService from '../../services/movieService';
import styles from '../../styles';

const CinemaDetailView = function (props) {
  const { cinema } = props.route.params;
  const [movies, setMovies] = useState([]);
  const allMovies = useSelector((s) => s.movies);
  console.log(props);
  useEffect(async () => {
    const myMovies = movieService.getMoviesByCinemaId(cinema.id, allMovies);
    setMovies(myMovies);
  }, []);

  const renderMovie = ({ item }) => (
    <View style={[styles.card, styles.shadowProp]}>
      <TouchableOpacity onPress={() => props.navigation.navigate('MovieDetailView', {
        movie: item,
      })}
      >
        <View style={styles.imgContainer}>
          <Image style={styles.moviePoster} source={{ uri: item.poster }} />
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        numColumns={1}
        nestedScrollEnabled
        vertical
        keyExtractor={(s) => s.id}
      />
    </View>
  );
};

export default CinemaDetailView;
