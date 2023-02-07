import React, {FC} from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

const PersonNameBox: FC<any> = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.yourName}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Your Name"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.yourProfession}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Your Profession"
        keyboardType="numeric"
      />
    </View>
  );
};

export default PersonNameBox;
