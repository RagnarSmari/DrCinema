import React, { useEffect } from 'react';
import {
  View, Text, FlatList, Animated, Linking, Image, TouchableOpacity, ScrollView, SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getAllCinemas from '../../redux/actions/cinemaActions';
import getAllMovies from '../../redux/actions/movieActions';
import styles from '../../styles';
import * as cinemaLogos from '../../resources';
import logo from '../../resources/logo_sambioakureyri.png';

// eslint-disable-next-line func-names,react/prop-types
const Cinemas = function ({ navigation: { navigate } }) {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getAllCinemas());
    dispatch(getAllMovies());
  }, []);
  const allCinemas = useSelector((s) => s.cinemas);

  const renderCinema = ({ item }) =>
    // console.log(item);
    (
      <View style={{ width: '100%' }}>
        <TouchableOpacity onPress={() => navigate('CinemaDetail')}>
          <Text>hello</Text>
          <Image
            style={styles.cinemaLogo}
            source={item.logo}
          />
        </TouchableOpacity>
      </View>

    );
  return (
    <View styles={{ flex: 1 }}>
      <FlatList
        data={allCinemas}
        renderItem={renderCinema}
        numColumns={1}
        // contentContainerStyle={{ height: '100%' }}
        nestedScrollEnabled
        initialNumToRender={11}
      />
    </View>

  );
};

export default Cinemas;
