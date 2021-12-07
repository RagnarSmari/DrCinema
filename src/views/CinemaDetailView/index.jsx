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

  useEffect(async () => {
    const myMovies = movieService.getMoviesByCinemaId(cinema.id, allMovies);
    setMovies(myMovies);
  }, []);

  const renderMovie = ({ item }) => (
    <View style={[styles.card, styles.shadowProp]}>
      <Text>
        {item.title}
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('MovieDetailView')}>
        <Image style={{ width: '70%', height: '70%' }} source={{ uri: item.poster }} />
      </TouchableOpacity>

    </View>
  );

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(s) => s.id}
        numColumns={1}
        nestedScrollEnabled
        vertical
      />
    </View>
  );
};

export default CinemaDetailView;
