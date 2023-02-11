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
    height: height - 50,
    width: width - 20,
  },
});

export default styles;
