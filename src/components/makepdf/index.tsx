import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import Pdf from 'react-native-pdf';

const MakePDF = () => {
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };
  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf' };
  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
  //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
  //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

  return (
    <View style={styles.container}>
      <Text>sadadsasd</Text>
      <Pdf
        trustAllCerts={false}
        source={{
          uri: source.uri,
          cache: true,
        }}
        onLoadComplete={numberOfPages => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={page => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MakePDF;
