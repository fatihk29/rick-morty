import {StyleSheet} from 'react-native';
const SIZE = 70;

const fontSizeSM = 6;
const fontSizeMD = 9;

const styles = StyleSheet.create({
  image: {
    width: SIZE,
    height: SIZE,
    resizeMode: 'contain',
    borderRadius: SIZE / 2,
  },
  summaryTitle: {
    height: 30,
    width: 90,
    borderWidth: 0,
    fontSize: fontSizeMD,
  },
  summaryText: {
    height: 30,
    width: 90,
    borderWidth: 0,
    fontSize: fontSizeSM,
  },
  personalDetails: {
    height: 30,
    width: 90,
    // margin: 6,
    borderWidth: 0,
    fontSize: fontSizeMD - 1,
  },
  locationTitle: {
    height: 30,
    width: 90,
    marginHorizontal: 6,
    borderWidth: 0,
    fontSize: fontSizeMD,
  },
  locationText: {
    height: 30,
    width: 100,
    margin: 6,
    borderWidth: 0,
    padding: 6,
    fontSize: fontSizeSM,
  },
  contactTitle: {
    height: 30,
    width: 100,
    margin: 6,
    borderWidth: 0,
    padding: 6,
    fontSize: fontSizeSM,
  },
  emailText: {
    height: 30,
    width: 100,
    margin: 6,
    borderWidth: 0,
    padding: 6,
    fontSize: fontSizeSM,
  },
  phoneText: {
    height: 30,
    width: 10,
    borderWidth: 0,
    paddingLeft: 0,
    fontSize: fontSizeSM,
    // backgroundColor: 'yellow',
  },
});

export default styles;
