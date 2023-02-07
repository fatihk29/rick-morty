import {StyleSheet} from 'react-native';
const SIZE = 70;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: SIZE,
    height: SIZE,
    resizeMode: 'contain',
    borderRadius: SIZE / 2,
  },
  summaryTitle: {
    height: 30,
    width: 90,
    margin: 6,
    borderWidth: 0,
    padding: 6,
  },
  summaryText: {
    height: 30,
    width: 90,
    margin: 6,
    borderWidth: 0,
    padding: 6,
  },
  personalDetails: {
    height: 30,
    width: 90,
    margin: 6,
    borderWidth: 0,
    padding: 6,
  },
  location: {
    height: 30,
    width: 100,
    margin: 6,
    borderWidth: 0,
    padding: 6,
    // backgroundColor: '#ccc',
  },
  contact: {
    height: 30,
    width: 100,
    margin: 6,
    borderWidth: 0,
    padding: 6,
    // backgroundColor: '#ccc',
  },
});

export default styles;
