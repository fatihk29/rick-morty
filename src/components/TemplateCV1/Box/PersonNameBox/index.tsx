import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {Button, VStack} from 'native-base';
import {Controller, useForm} from 'react-hook-form';

// project imports
import styles from './styles';

const defaultValues = {
  yourName: '',
  yourProfession: '',
};

const PersonNameBox: FC<any> = () => {
  const {handleSubmit, control, watch} = useForm({
    defaultValues,
    mode: 'all',
  });

  const onSubmit = () => {
    const data = watch();
    console.log('data :>> ', data);
  };
  console.log('render in PersonNameBox');

  return (
    <View>
      <Controller
        name="yourName"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.yourName}
            onChangeText={onChange}
            value={value}
            placeholder="Your Name"
          />
        )}
      />
      <Controller
        name="yourProfession"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.yourProfession}
            onChangeText={onChange}
            value={value}
            placeholder="Your role or profession"
          />
        )}
      />
      <VStack space={4} alignItems="center">
        <Button variant="subtle" size="xs" onPress={handleSubmit(onSubmit)}>
          Download
        </Button>
      </VStack>

      {/* <TextInput
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
      /> */}
    </View>
  );
};

export default PersonNameBox;
