import React from 'react';
import {View} from 'native-base';

import RightFooter from '../../layout/RightFooter';
import LeftFooter from '../../layout/LeftFooter';

const DoCV = () => {
  return (
    <View style={{flex: 1, backgroundColor: ''}}>
      <RightFooter />
      <LeftFooter />
    </View>
  );
};

export default DoCV;
