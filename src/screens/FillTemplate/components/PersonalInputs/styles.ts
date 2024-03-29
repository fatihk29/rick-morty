import {StyleSheet} from 'react-native';

const SIZE = 70;

// const fontSizeSM = 12;
// const fontSizeMD = 14;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffffd',
  },
  personalInfoContainer: {},

  yourName: {},
  yourProfession: {},
  image: {
    width: SIZE,
    height: SIZE,
    resizeMode: 'contain',
    borderRadius: SIZE / 2,
  },
  summaryTitle: {},
  summaryText: {},
  personalDetails: {},
  locationTitle: {},
  locationText: {},
  contactTitle: {},
  emailText: {},
  phoneText: {},
});

export default styles;
