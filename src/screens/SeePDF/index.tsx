import React, {FC, useEffect} from 'react';
import {Text} from 'native-base';

interface SeePDFProps {
  route: any;
}

const SeePDF: FC<SeePDFProps> = ({route}) => {
  useEffect(() => {
    if (route) {
      console.log('route', route?.params?.item);
    }
  }, [route]);
  return <Text>s</Text>;
};

export default SeePDF;
