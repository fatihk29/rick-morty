import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// project imports
import style from './styles';

const HeaderMidTitle: FC<any> = ({title}: any) => {
  return (
    <View style={style.midHeader}>
      <Text style={style.midHeaderText}>{title}</Text>
    </View>
  );
};

const HeaderRightTitle: FC<any> = ({icon}: any) => {
  return (
    <TouchableOpacity
      style={style.leftHeader}
      onPress={() => {
        console.log('first');
      }}>
      <View style={style.subContainer}>
        <Icon as={MaterialIcons} name={icon} color="#6495ED" />
      </View>
    </TouchableOpacity>
  );
};

export {HeaderMidTitle, HeaderRightTitle};
