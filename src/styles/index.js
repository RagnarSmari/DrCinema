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

  testCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 30,
    width: '100%',
    marginVertical: 10,
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
    marginTop: 20,
    backgroundColor: '#17e17c',
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
  },

  textPilot: {
    fontSize: 15,
    textAlign: 'left',
    margin: 10,
  },

  moviePoster: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1.5,
  },

  posterWrapper: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },

  image: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1,

  },
});
