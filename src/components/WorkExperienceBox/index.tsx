import React, {FC, useState} from 'react';
import {View, TextInput} from 'react-native';

// project imports
import styles from './styles';

const WorkExperienceBox: FC<any> = () => {
  const [number, onChangeNumber] = useState('');

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Work Experience"
      />
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Position"
      />
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Employer"
      />
      <TextInput
        style={styles.workExperience}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="detail"
      />
    </View>
  );
};

export default WorkExperienceBox;
