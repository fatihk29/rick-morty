import React, {FC} from 'react';
import {View, Image, TextInput} from 'react-native';

import styles from './styles';

const PersonalInfoBox: FC<any> = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/assets%2Fzurich1.jpg?alt=media&token=8c900be1-b6d6-427d-9739-1f637d8369e6',
        }}
      />
      <TextInput
        style={styles.summaryTitle}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="summary title"
      />
      <TextInput
        style={styles.summaryText}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Summary Text"
      />
      <TextInput
        style={styles.personalDetails}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Personal Details"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.location}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="address"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.contact}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Contact"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.location}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your email"
        keyboardType="numeric"
      />
    </View>
  );
};

export default PersonalInfoBox;
