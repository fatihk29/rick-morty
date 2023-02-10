import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
// import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
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
    <TouchableOpacity style={style.leftHeader}>
      <View style={style.subContainer}>
        <MaterialIcons name={icon} size={30} color="#6495ED" />
      </View>
    </TouchableOpacity>
  );
};

export {HeaderMidTitle, HeaderRightTitle};
