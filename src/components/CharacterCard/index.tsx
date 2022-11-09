import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ICharacterItem} from '../../types';
import styles from './styles';

interface CharacterCardProps {
  item: ICharacterItem;
  onPress: Function;
}

const CharacterCard: FC<CharacterCardProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      testID="CharacterCard"
      style={styles.card}
      // activeOpacity={ACTIVE_OPCITY}
      onPress={() => onPress(item)}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text>{item.name}</Text>
      </View>

      <View>
        <Text>{item.gender}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {CharacterCard};
