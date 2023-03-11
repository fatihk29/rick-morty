import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {Button, VStack} from 'native-base';
import {Controller, useForm} from 'react-hook-form';

// project imports
import styles from './styles';

interface WorkExperienceBoxProps {}

const defaultValues = {
  workExperience: 'Work Experience',
  workPosition: '',
  workCompany: '',
  workDecription: '',
};

const WorkExperienceInputs: FC<WorkExperienceBoxProps> = () => {
  const {handleSubmit, control, watch} = useForm({
    defaultValues,
    mode: 'all',
  });

  const onSubmit = () => {
    const data = watch();
    console.log('data :>> ', data);
  };
  console.log('render in Work Experience');

  return (
    <View style={styles.container}>
      <Controller
        name="workExperience"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.workExperience}
            onChangeText={onChange}
            value={value}
            placeholder="Work Experience"
          />
        )}
      />
      <Controller
        name="workPosition"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.workPosition}
            onChangeText={onChange}
            value={value}
            placeholder="Work Position"
          />
        )}
      />
      <Controller
        name="workCompany"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.workCompany}
            onChangeText={onChange}
            value={value}
            placeholder="Work Company"
          />
        )}
      />
      <Controller
        name="workDecription"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.workDecription}
            onChangeText={onChange}
            value={value}
            placeholder="Work Decription"
          />
        )}
      />
      <VStack space={4} alignItems="center">
        <Button variant="subtle" size="xs" onPress={handleSubmit(onSubmit)}>
          Download
        </Button>
      </VStack>
    </View>
  );
};

export default WorkExperienceInputs;
