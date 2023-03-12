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
  // Slider,
} from 'native-base';
import {Controller, useForm, useFieldArray} from 'react-hook-form';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// project imports
import styles from './styles';

const defaultValues = {
  languageTitle: 'Languages',
  languageText: '',
  // skillPercentage: '',
};

const fieldArrayName = 'array';

const LanguageInputs: FC<any> = () => {
  const {handleSubmit, control} = useForm();

  const {fields, append, remove} = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      fieldArrayName: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log('data :>> ', data);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Pressable
          onPress={() => {
            if (fields.length > 7) {
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
        <Text>Skill Title</Text>
        <Controller
          name="languageTitle"
          // name={`${fieldArrayName}.${0}.educationTitle`}
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              // style={styles.educationTitle}
              onChangeText={onChange}
              value={value}
              placeholder="Skills"
              w={{
                base: '75%',
                md: '100%',
              }}
            />
          )}
        />
      </Stack>

      <Stack space={4} alignItems="center">
        {fields.map((item, i) => {
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

              <Text>Your Skills Nu: {i + 1}</Text>
              <Controller
                name={`${fieldArrayName}.${i}.languageText`}
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    onChangeText={onChange}
                    value={value}
                    placeholder="Skills"
                    w={{
                      base: '75%',
                      md: '100%',
                    }}
                  />
                )}
              />
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

export default LanguageInputs;
