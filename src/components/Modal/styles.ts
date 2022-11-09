import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    display: 'flex',
    flex: 0.8,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addModalHeader: {
    alignSelf: 'flex-end',
    right: 0,
  },
  button: {
    width: 50,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 40,
  },
});

export default styles;
