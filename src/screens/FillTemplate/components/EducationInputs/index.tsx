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
} from 'native-base';
import {Controller, useForm, FormProvider} from 'react-hook-form';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// project imports
import styles from './styles';

const defaultValues = [
  {
    educationDegree: 'Degree',
    educationSchool: 'School',
  },
  {
    educationDegree: 'Degree',
    educationSchool: 'School',
  },
];

const fieldArrayName = 'array';

const EducationInputs: FC<any> = ({}) => {
  //   const data = useWatch({
  //     control,
  //     name: `${fieldArrayName}.${index}`,
  //   });

  //   const {control, handleSubmit} = useForm();
  //   const {fields, append, update, remove} = useFieldArray({
  //     control,
  //     name: fieldArrayName,
  //     defaultValues: {
  //       [fieldArrayName]: [],
  //     },
  //   });
  //   const onSubmit = data => console.log(data);

  const [education, setEducation] = useState([defaultValues]);

  const methods = useForm({
    // defaultValues,
    mode: 'all',
  });

  const {handleSubmit, control, watch} = methods;

  const onSubmit = () => {
    const data = watch();
    console.log('data :>> ', data);
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable
        onPress={() => {
          setEducation((prev: any) => {
            if (prev?.length >= 3) {
              console.log('if :>> ');
              return prev;
            } else if (prev?.length < 3) {
              return [
                ...prev,
                {
                  educationTitle: 'EDUCATION',
                  educationDegree: 'Degree',
                  educationSchool: 'School',
                  educationProject: '',
                },
              ];
            }
          });
        }}
        position="absolute"
        top="0"
        right="0"
        px="1"
        py="10"
        // bg="violet.500"
        _dark={{
          bg: 'violet.400',
        }}>
        <Icon as={MCIcons} name="plus-thick" size="6" color="secondary.600" />
      </Pressable>
      {education.map((item, i) => {
        const fieldName = `${i}`;
        // console.log('fieldName', fieldName);
        // console.log('item :>> ', item);
        return (
          <Stack
            key={i}
            space={4}
            w="100%"
            alignItems="center"
            style={{marginTop: 40}}>
            {i === 0 || (
              <Pressable
                onPress={() => {
                  setEducation((prev: any) => {
                    prev.splice(i, 1);
                    return [...prev];
                  });
                }}
                position="absolute"
                top="0"
                right="0"
                px="1"
                py="0"
                // bg="violet.500"
                _dark={{
                  bg: 'violet.400',
                }}>
                <Icon
                  as={MCIcons}
                  name="minus-thick"
                  size="6"
                  color="secondary.600"
                />
              </Pressable>
            )}
            <Text>First Name {i}:</Text>
            <FormProvider {...methods}>
              <Controller
                name={`test.${i}.educationDegree`}
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    style={styles.educationTitle}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Degree"
                    w={{
                      base: '70%',
                      md: '100%',
                    }}
                  />
                )}
              />
              <Controller
                name={`test.${i}.educationSchool`}
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    // style={styles.educationSchool}
                    onChangeText={onChange}
                    value={value}
                    placeholder="educationSchool"
                    w={{
                      base: '70%',
                      md: '100%',
                    }}
                  />
                )}
              />
            </FormProvider>
          </Stack>
        );
      })}

      <VStack space={4} alignItems="center">
        <Button variant="subtle" size="xs" onPress={handleSubmit(onSubmit)}>
          Download
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default EducationInputs;
