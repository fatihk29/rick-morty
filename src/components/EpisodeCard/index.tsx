import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {IEpisodeCard} from '../../types';
import styles from './styles';

interface EpisodeCardProps {
  item: IEpisodeCard;
  onPress: Function;
}

const EpisodeCard: FC<EpisodeCardProps> = ({item, onPress}) => {
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
