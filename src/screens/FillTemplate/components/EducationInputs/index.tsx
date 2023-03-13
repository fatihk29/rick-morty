import React, {FC, useState} from 'react';
import {
  Pressable,
  Icon,
  Stack,
  Input,
  ScrollView,
  Text,
  VStack,
  Button,
  View,
} from 'native-base';
import {Platform} from 'react-native';
import {Controller, useForm, useFieldArray} from 'react-hook-form';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNDateTimePicker from '@react-native-community/datetimepicker';

// project imports
import styles from './styles';

const defaultValues = {
  educationDegree: 'Degree',
  educationSchool: 'School',
  educationTitle: '',
  educationExplanation: '',
  educationStart: new Date(),
};

const fieldArrayName = 'array';

const EducationInputs: FC<any> = () => {
  const {handleSubmit, control, reset} = useForm();

  const {fields, append, remove} = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      fieldArrayName: [],
    },
  });

  const onSubmit = (data: any) => {
    // if (!data.educationTitle) {
    //   data.educationTitle = defaultValues.educationTitle;
    // }
    console.log('data :>> ', data);
  };

  const [datePicker, setDatePicker] = useState(false);

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event: any, value: any) {
    console.log('aa :>> ', value);
    setDatePicker(false);
  }

  console.log('fields :>> ', fields);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Pressable
          onPress={() => {
            if (fields.length > 2) {
              return;
            }
            append(defaultValues);
          }}
          position="absolute"
          top="0"
          right="0"
          px="0"
          py="2"
          _dark={{
            bg: 'violet.400',
          }}>
          <Icon as={MCIcons} name="plus-thick" size="6" color="secondary.600" />
        </Pressable>
      </View>
      <Stack space={3} alignItems="center">
        <Text>Education Title</Text>
        <Controller
          name="educationTitle"
          // name={`${fieldArrayName}.${0}.educationTitle`}
          control={control}
          render={a => {
            const {field} = a;
            // console.log('a', a);
            return (
              <Input
                ref={field.ref}
                style={styles.educationTitle}
                onChangeText={field.onChange}
                value={field.value}
                placeholder="Education"
                w={{
                  base: '75%',
                  md: '100%',
                }}
              />
            );
          }}
        />
      </Stack>
      <Stack space={4} alignItems="center">
        {fields.map((item, i) => {
          // console.log('item :>> ', item);
          return (
            <Stack key={i} space={4} w="100%" alignItems="center">
              <Pressable
                onPress={() => {
                  remove(i);
                }}
                position="absolute"
                top="0"
                right="0"
                px="1"
                py="0">
                <Icon
                  as={MCIcons}
                  name="minus-thick"
                  size="6"
                  color="secondary.600"
                />
              </Pressable>

              <Text>Your Education Nu: {i + 1}</Text>
              <Controller
                name={`${fieldArrayName}.${i}.educationDegree`}
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    style={styles.educationTitle}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Degree"
                    w={{
                      base: '75%',
                      md: '100%',
                    }}
                  />
                )}
              />
              <Controller
                name={`${fieldArrayName}.${i}.educationSchool`}
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    // style={styles.educationSchool}
                    onChangeText={onChange}
                    value={value}
                    placeholder="educationSchool"
                    w={{
                      base: '75%',
                      md: '100%',
                    }}
                  />
                )}
              />

              <Controller
                name={`${fieldArrayName}.${i}.educationExplanation`}
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    // style={styles.educationSchool}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Explanation"
                    w={{
                      base: '75%',
                      md: '100%',
                    }}
                  />
                )}
              />

              {datePicker && (
                <Controller
                  name={`${fieldArrayName}.${i}.educationStart`}
                  control={control}
                  render={({field: {onChange, value}}) => {
                    console.log('value :>> ', value);
                    return (
                      <RNDateTimePicker
                        value={value}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={(e, v) => {
                          console.log('e :>> ', e, v);
                          onDateSelected(e, v);
                          onChange(v);
                        }}
                      />
                    );
                  }}
                />
              )}
              {/* <Text>{item?.educationStart.toString()}</Text> */}
              {!datePicker && (
                <View style={{margin: 10}}>
                  <Button color="green" onPress={showDatePicker}>
                    From
                  </Button>
                </View>
              )}

              {/* {datePicker && (
                <DateTimePicker
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onDateSelected}
                />
              )} */}
            </Stack>
          );
        })}
      </Stack>
      <VStack space={4} alignItems="center">
        <Button variant="subtle" size="xs" onPress={handleSubmit(onSubmit)}>
          Download
        </Button>
        <Button variant="subtle" size="xs" onPress={reset}>
          Reset
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default EducationInputs;
