import React, {FC, useState} from 'react';
import {View, TextInput} from 'react-native';

// project imports
import styles from './styles';

const SkillBox: FC<any> = () => {
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Skills"
      />
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter skill"
      />
    </View>
  );
};

export default SkillBox;
