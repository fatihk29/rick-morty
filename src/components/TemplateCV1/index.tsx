import React, {FC} from 'react';
import {View} from 'react-native';

// project imports
import EducationBox from './Box/EducationBox';
import PersonalInfoBox from './Box/PersonalInfoBox';
import PersonNameBox from './Box/PersonNameBox';
import SkillBox from './Box/SkillBox';
import WorkExperienceBox from './Box/WorkExperienceBox';
import styles from './styles';

const EditCV: FC<any> = () => {
  return (
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
  );
};

export default EditCV;
