import React, {FC} from 'react';
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
import {Controller, useForm, useFieldArray} from 'react-hook-form';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// project imports
import styles from './styles';

interface WorkExperienceBoxProps {}

const defaultValues = {
  workTitle: 'Work Title',
  workPosition: '',
  workCompany: '',
  workExplanation: '',
};

const fieldArrayName = 'array';

const WorkExperienceInputs: FC<WorkExperienceBoxProps> = () => {
  const {handleSubmit, control} = useForm();

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
  console.log('render in Work Experience');

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
        <Text>Work Title</Text>
        <Controller
          name="workTitle"
          // name={`${fieldArrayName}.${0}.educationTitle`}
          control={control}
          render={a => {
            const {field} = a;
            return (
              <Input
                ref={field.ref}
                // style={styles.educationTitle}
                onChangeText={field.onChange}
                value={field.value}
                placeholder="Work Title"
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

              <Text>Your Work Experience Nu: {i + 1}</Text>
              <Controller
                name={`${fieldArrayName}.${i}.workPosition`}
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    // style={styles.educationTitle}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Work Position"
                    w={{
                      base: '75%',
                      md: '100%',
                    }}
                  />
                )}
              />
              <Controller
                name={`${fieldArrayName}.${i}.workCompany`}
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    // style={styles.educationSchool}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Company Name"
                    w={{
                      base: '75%',
                      md: '100%',
                    }}
                  />
                )}
              />

              <Controller
                name={`${fieldArrayName}.${i}.workExplanation`}
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
      </VStack>
    </ScrollView>
  );
};

export default WorkExperienceInputs;
