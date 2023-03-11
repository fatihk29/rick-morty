import React, {FC, useState} from 'react';
import {
  Pressable,
  Icon,
  Stack,
  Input,
  ScrollView,
  Text,
  View,
  Button,
} from 'native-base';
import {useForm, useFieldArray, useWatch} from 'react-hook-form';

let renderCount = 0;

const fieldArrayName = 'array';

const Display = ({control, index}) => {
  const data = useWatch({
    control,
    name: `${fieldArrayName}.${index}`,
  });

  if (!data?.firstName) return null;

  return (
    <View>
      <Text>Submitted Data</Text>
      <Text>
        {data?.firstName} {data?.lastName}
      </Text>
      <Text>{Boolean(data?.working) && data?.working && 'I am working.'}</Text>
    </View>
  );
};

const Edit = ({update, index, value, control}) => {
  const {register, handleSubmit} = useForm({
    defaultValues: value,
  });

  return (
    <View>
      <Display control={control} index={index} />

      <Input
        placeholder="first name"
        {...register(`firstName`, {required: true})}
      />
      <Input
        placeholder="last name"
        {...register(`lastName`, {required: true})}
      />
    </View>
  );
};

export default function App() {
  const {control, handleSubmit} = useForm();
  const {fields, append, update, remove} = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: [],
    },
  });
  const onSubmit = data => console.log(data);
  renderCount++;

  return (
    <View>
      <View onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <View key={field.id}>
            <Edit
              control={control}
              update={update}
              index={index}
              value={field}
            />
            <Button onPress={() => remove(index)}>Remove</Button>
          </View>
        ))}

        <Button
          onPress={() => {
            append({
              firstName: '',
              lastName: '',
              working: false,
            });
          }}>
          append
        </Button>
      </View>
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
}
////

import React, {FC, useState} from 'react';
import {
  // Pressable,
  // Icon,
  // Stack,
  Input,
  View,
  ScrollView,
  Text,
  VStack,
  Button,
} from 'native-base';
import {Controller, useForm, useFieldArray, useWatch} from 'react-hook-form';
// import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// project imports
import styles from './styles';

const fieldArrayName = 'array';

const DisplayA: FC<any> = ({update, index, val, control, remove}) => {
  const {register, handleSubmit} = useForm({
    defaultValues: val,
  });

  const data = useWatch({
    control,
    name: `${fieldArrayName}.${index}`,
  });
  console.log('data :>> ', data);

  return (
    <View>
      <Text>s</Text>

      <Controller
        control={control}
        name={`test.${index}.lastName`}
        render={({field}) => {
          console.log('field', field);
          return <Input {...register(`firstName`, {required: true})} />;
        }}
        // defaultValue={fields.firstName}
      />

      {/* <Input
        placeholder="first name"
        {...register(`firstName`, {required: true})}
      /> */}
      <Input
        placeholder="last name"
        {...register(`lastName`, {required: true})}
      />
      <Button onPress={() => remove(index)}>Remove</Button>
    </View>
  );
};

const EducationInputs: FC<any> = () => {
  const {control, handleSubmit} = useForm();

  const {fields, append, update, remove} = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: [],
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView style={styles.container}>
      {fields.map((field, index) => {
        return (
          <DisplayA
            key={index}
            control={control}
            update={update}
            index={index}
            val={field}
            remove={remove}
          />
        );
      })}
      <Text>s1</Text>

      <Button
        onPress={() => {
          append({
            firstName: '',
            lastName: '',
          });
        }}>
        append
      </Button>
      <VStack space={4} alignItems="center">
        <Button variant="subtle" size="xs" onPress={handleSubmit(onSubmit)}>
          Download
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default EducationInputs;
