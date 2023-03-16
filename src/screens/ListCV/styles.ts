import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#66D3FA',
    height: 140,
    paddingVertical: 10,
    paddingHorizontal: 3,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  subContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  textContainer: {
    flex: 0.9,
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    marginBottom: 5,
    fontSize: 23,
  },
  cvTitle: {
    marginBottom: 5,
    fontSize: 14,
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  createdDate: {
    fontSize: 14,
    paddingLeft: 5,
  },
});

export default styles;
