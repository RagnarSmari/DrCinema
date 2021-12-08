import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cinemaContainer: {
  },
  container: {
  },
  renderCinema: {
  },
  cinemaLogo: {
    resizeMode: 'contain',
    width: '100%',
  },

  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 30,
    width: '100%',
    marginVertical: 10,

  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -5, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  Upcoming: {
    backgroundColor: '#0dbcd4',
    marginTop: 20,
  },

  UpcommingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,

  },

  text: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },

  moviePoster: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1.5,
  },

  posterWrapper: {
    flex: 1,
    alignItems: 'center',
  },

  image: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1,
  },
});
