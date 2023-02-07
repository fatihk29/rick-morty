import React, {FC} from 'react';
import {View, Image, TextInput} from 'react-native';

// project imports
import EducationBox from '../EducationBox';
import SkillBox from '../SkillBox';
import WorkExperienceBox from '../WorkExperienceBox';

import styles from './styles';

const EditCV: FC<any> = () => {
  const SIZE = 70;
  const [number, onChangeNumber] = React.useState('');

  return (
    <View
      style={{flex: 1, borderWidth: 1, width: 400, height: 600, padding: 10}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            borderColor: 'green',
            borderWidth: 0.5,
          }}>
          <Image
            style={{
              width: SIZE,
              height: SIZE,
              resizeMode: 'contain',
              borderRadius: SIZE / 2,
            }}
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
        <View style={{flex: 3, flexDirection: 'column'}}>
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
          <WorkExperienceBox />
          <EducationBox />
          <SkillBox />
        </View>
      </View>
    </View>
  );
};

export default EditCV;
