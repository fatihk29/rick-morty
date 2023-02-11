import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';

const CVItem: FC<any> = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={style.itemContainer}
      onPress={() => {
        navigation.navigate('Create CV', {
          item,
        });
      }}>
      <View style={style.subContainer}>
        <Image
          style={style.tinyLogo}
          source={require('./duvar-resimleri-siyah-ve-beyaz-inek-manzara.jpg.jpg')}
        />
        <View style={style.textContainer}>
          <Text style={style.name}>{item.name}</Text>
          <Text style={style.cvTitle}>{item.cvTitle}</Text>
        </View>
      </View>
      {/* <Button gradient={GRADIENTS.dark}>
        <Text transform="uppercase" marginHorizontal={sizes.sm}>
          Save for later
        </Text>
      </Button> */}
      <Text style={style.createdDate}>{item.createdDate}</Text>
    </TouchableOpacity>
  );
};

export default CVItem;
