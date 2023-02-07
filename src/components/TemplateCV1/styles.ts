import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    width: 400,
    height: 600,
    padding: 10,
  },
  personalInfoBox: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'green',
    borderWidth: 0.5,
  },
  experienceBox: {
    flex: 3,
    flexDirection: 'column',
  },
});

export default styles;
