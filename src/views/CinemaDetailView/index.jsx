import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import movieService from '../../services/movieService';

const CinemaDetailView = function (props) {
  const { cinema } = props.route.params;
  const [movies, setMovies] = useState([]);
  const allMovies = useSelector((s) => s.movies);

  useEffect(async () => {
    const biteme = await movieService.getMoviesByCinemaId(cinema.id, allMovies);
    console.log(biteme);
    setMovies(biteme);
  }, []);

  const renderMovie = ({ item }) => {
    const test = item.id;
    return (
      <View>
        <Text>
          {item.id}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={movies} renderItem={renderMovie} keyExtractor={(s) => s.id} />
    </View>
  );
};

export default CinemaDetailView;
