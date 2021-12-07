import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import movieService from '../../services/movieService';

const CinemaDetailView = function (props) {
  const { cinema } = props.route.params;
  const [movies, setMovies] = useState([]);
  const allMovies = useSelector((s) => s.movies);

  useEffect(async () => {
    const myMovies = movieService.getMoviesByCinemaId(cinema.id, allMovies);
    setMovies(myMovies);
  }, []);

  const renderMovie = ({ item }) => (
    <View>
      <Image source={{
        uri: item.poster.toString(),
      }}
      />
      <Text>
        {item.title}
      </Text>
      <Text />
    </View>
  );

  return (
    <View>
      <FlatList data={movies} renderItem={renderMovie} keyExtractor={(s) => s.id} />
    </View>
  );
};

export default CinemaDetailView;
