import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  animated: {
    borderWidth: 1,
    flexShrink: 1,
    height: height - 250,
    width: width - 20,
  },

  image: {
    widht: 200,
    height: 300,
  },

  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default styles;
