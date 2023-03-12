import React from 'react';
import {View} from 'native-base';

// project imports
import RightFooter from '../../layout/RightFooter';
import LeftFooter from '../../layout/LeftFooter';
import styles from './styles';

const TemplateCV = () => {
  return (
    <View style={styles.container}>
      <RightFooter />
      <LeftFooter />
    </View>
  );
};

export default TemplateCV;
