import React, { useEffect } from 'react';
import {
  View, Text, FlatList, Animated, Linking, Image, TouchableOpacity, ScrollView, SafeAreaView,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getAllCinemas from '../../redux/actions/cinemaActions';
import getAllMovies, { getAllUpComingMovies } from '../../redux/actions/movieActions';
import styles from '../../styles';
import * as cinemaLogos from '../../resources';
import starwars from '../../resources/star-wars-poster.png';

// eslint-disable-next-line func-names,react/prop-types
const Cinemas = function ({ navigation: { navigate } }) {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getAllCinemas());
    dispatch(getAllMovies());
    dispatch(getAllUpComingMovies());
  }, []);
  const allCinemas = useSelector((s) => s.cinemas);

  const renderCinema = ({ item }) => (
    <View style={[styles.card, styles.shadowProp]}>
      <TouchableOpacity
        onPress={() => navigate('CinemaDetail', {
          cinema: item,
        })}
      >
        <View>
          <Image
            style={styles.cinemaLogo}
            source={item.logo}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <FlatList
        data={allCinemas}
        renderItem={renderCinema}
        numColumns={1}
        nestedScrollEnabled
        vertical
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <>
            <TouchableOpacity onPress={() => navigate('upcomingMovies')}>
              <View style={[styles.card, styles.shadowProp, styles.Upcoming]}>
                <Text style={styles.UpcommingText}>Upcoming Movies</Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.heading}>Cinemas</Text>
            </View>
          </>

        )}
      />
    </View>
  );
};

export default Cinemas;
