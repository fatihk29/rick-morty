import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {Button, VStack} from 'native-base';
import {Controller, useForm} from 'react-hook-form';

// project imports
import styles from './styles';

const defaultValues = {
  educationTitle: 'EDUCATION',
  educationDegree: 'Degree',
  educationSchool: 'School',
};

const EducationBox: FC<any> = () => {
  const {handleSubmit, control, watch} = useForm({
    defaultValues,
    mode: 'all',
  });

  const onSubmit = () => {
    const data = watch();
    // console.log('data :>> ', data);
  };
  console.log('render in Education Box');

  return (
    <View style={styles.container}>
      <Controller
        name="educationTitle"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.educationTitle}
            onChangeText={onChange}
            value={value}
            placeholder="EDUCATION"
          />
        )}
      />
      <Controller
        name="educationDegree"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            // style={styles.educationTitle}
            onChangeText={onChange}
            value={value}
            placeholder="Degree"
          />
        )}
      />
      <Controller
        name="educationSchool"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            // style={styles.educationSchool}
            onChangeText={onChange}
            value={value}
            placeholder="educationSchool"
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

export default EducationBox;
