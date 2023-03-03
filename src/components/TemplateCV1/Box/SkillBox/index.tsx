import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {Button, VStack} from 'native-base';
import {Controller, useForm} from 'react-hook-form';

// project imports
import styles from './styles';

const defaultValues = {
  workExperience: 'Work Experience',
  workPosition: '',
};

const SkillBox: FC<any> = () => {
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
            style={styles.skillsTitle}
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
            style={styles.skillsText}
            onChangeText={onChange}
            value={value}
            placeholder="Work Experience"
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

export default SkillBox;
