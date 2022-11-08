import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const EpisodeCard: FC<any> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      testID="CharacterCard"
      style={styles.card}
      // activeOpacity={ACTIVE_OPCITY}
      onPress={() => onPress(item)}>
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>{item.name}</Text>
        <Text>{item.episode}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {EpisodeCard};
