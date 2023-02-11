import React, {FC} from 'react';
import {View, Dimensions} from 'react-native';
import {ScrollView} from 'native-base';

// project imports
import EducationBox from './Box/EducationBox';
import PersonalInfoBox from './Box/PersonalInfoBox';
import PersonNameBox from './Box/PersonNameBox';
import SkillBox from './Box/SkillBox';
import WorkExperienceBox from './Box/WorkExperienceBox';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const EditCV: FC<any> = () => {
  return (
    <ScrollView w={[width, height]}>
      <View style={styles.container}>
        <View style={styles.personalInfoBox}>
          <PersonalInfoBox />
        </View>
        <View style={styles.experienceBox}>
          <PersonNameBox />
          <WorkExperienceBox />
          <EducationBox />
          <SkillBox />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditCV;
