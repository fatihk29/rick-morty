import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';

// project imports
import styles from './style';

interface SeePDFProps {
  route: any;
}

const SeePDF: FC<SeePDFProps> = ({route}) => {
  useEffect(() => {
    if (route) {
      console.log('route', route?.params?.item);
    }
  }, [route]);

  const source = {
    uri: '/storage/emulated/0/Android/data/com.rickandmorty/files/Invoices/invoice111.pdf',
    cache: true,
  };

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={{
          uri: source.uri,
          cache: true,
        }}
        onLoadComplete={numberOfPages => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        // onPageChanged={page => {
        //   console.log(`Current page: ${page}`);
        // }}
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

export default SeePDF;
