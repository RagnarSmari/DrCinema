import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  FlatList, Image, Text, TouchableOpacity, View,
} from 'react-native';
import styles from '../../styles';

const UpcomingMoviesView = function () {
  const movies = useSelector((s) => s.upcomingMovies);
  const renderMovie = ({ item }) => (
    <View style={[styles.card, styles.shadowProp]}>
      <TouchableOpacity onPress={console.log(item)}>
        <View style={styles.imgContainer}>
          <Image style={styles.moviePoster} source={{ uri: item.poster }} />
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>
        {item.title}
      </Text>
      <Text style={styles.text}>
        {item['release-dateIS']}
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
export default UpcomingMoviesView;
