import React, {FC, useRef} from 'react';
import {View, TextInput} from 'react-native';
import {Button, VStack} from 'native-base';
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

// project imports
import styles from './styles';
// import {background} from 'native-base/lib/typescript/theme/styled-system';

const defaultValues = {
  yourName: '',
  yourProfession: '',
};

const validationSchema = Yup.object().shape({
  yourName: Yup.string().required('validationMessages:email:required').min(5),
});

const PersonNameBox: FC<any> = () => {
  const {handleSubmit, control, watch, register, formState} = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  const m = formState;

  const onSubmit = () => {
    const data = watch();
    console.log('data :>> ', data);
  };
  // console.log('render in PersonNameBox');

  return (
    <View>
      <Controller
        name="yourName"
        control={control}
        render={item => {
          const {field, fieldState, formState} = item;
          // console.log('33 field :>> ', field);
          // const a = register('yourName');
          // console.log('name', a);
          // console.log('formState :>> ', touchedFields);
          // console.log('m :>> ', m.dirtyFields);
          console.log('fieldState :>> ', formState);

          return (
            <TextInput
              // {...register('yourName')}
              ref={field.ref}
              style={[
                styles.yourName,
                {
                  backgroundColor: fieldState.isDirty ? 'yeow' : 'blue',
                  color: 'white',
                },
              ]}
              onChangeText={field.onChange}
              onBlur={() => {
                console.log('onblur');
              }}
              value={field.value}
              placeholder="Your Name"
              onFocus={() => {}}
            />
          );
        }}
      />
      <Controller
        name="yourProfession"
        control={control}
        render={item => {
          const {field} = item;
          // console.log('49 field :>> ', field);

          return (
            <TextInput
              style={styles.yourName}
              onChangeText={field.onChange}
              value={field.value}
              placeholder="Your Name"
            />
          );
        }}
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
