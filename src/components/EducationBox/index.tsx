import React, {FC, useState} from 'react';
import {View, TextInput} from 'react-native';

// project imports
import styles from './styles';

const EducationBox: FC<any> = () => {
  const [number, onChangeNumber] = useState('');

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Education"
      />
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Degree"
      />
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="School"
      />
    </View>
  );
};

export default EducationBox;
