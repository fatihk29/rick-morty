import React, {FC} from 'react';
import {View} from 'react-native';
import {
  Button,
  VStack,
  Icon,
  Input,
  Image,
  Stack,
  ScrollView,
  FormControl,
  InputGroup,
} from 'native-base';
import {Controller, useForm} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

// project imports
import styles from './styles';

const defaultValues = {
  image: '',
  yourName: '',
  yourProfession: '',
  summaryTitle: 'SUMMARY',
  summaryText: '2 years of experience',
  personalDetails: 'PERSONAL DETAILS',
  locationTitle: 'Location',
  locationText: '',
  contactTitle: 'CONTACT',
  email: '',
  phone: '',
};

const inputBase = '80%';

const validationSchema = Yup.object().shape({
  yourName: Yup.string().required('validationMessages:email:required').min(5),
});

const PersonNameInputs: FC<any> = () => {
  const {handleSubmit, control, watch, register, formState} = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    const data = watch();
    console.log('data :>> ', data);
  };

  return (
    <ScrollView style={{padding: 10}}>
      <Stack space={4} alignItems="center">
        <Image
          alt="profile"
          style={styles.image}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/assets%2Fzurich1.jpg?alt=media&token=8c900be1-b6d6-427d-9739-1f637d8369e6',
          }}
        />
        <View>
          <FormControl
            w="100%"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 5,
              borderWidth: 0.7,
              borderColor: 'blue',
              height: 200,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <FormControl.Label>Personal Informations</FormControl.Label>
            <Controller
              name="yourName"
              control={control}
              render={item => {
                const {field} = item;
                return (
                  <Input
                    style={[styles.yourName]}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="Name"
                    w={{
                      base: inputBase,
                      md: '100%',
                    }}
                  />
                );
              }}
            />
            <Controller
              name="yourProfession"
              control={control}
              render={item => {
                const {field} = item;
                return (
                  <Input
                    style={styles.yourName}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="Your Profession"
                    w={{
                      base: inputBase,
                      md: '100%',
                    }}
                  />
                );
              }}
            />
          </FormControl>
          {/* => Summary */}
        </View>
        <Controller
          name="summaryTitle"
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <Input
                style={styles.summaryTitle}
                onChangeText={onChange}
                value={value}
                placeholder="SUMMARY"
                w={{
                  base: inputBase,
                  md: '100%',
                }}
              />
            );
          }}
        />

        <Controller
          name="summaryText"
          control={control}
          render={({field: {onChange, value}}) => (
            <InputGroup>
              <Input
                style={styles.summaryText}
                multiline={true}
                onChangeText={onChange}
                value={value}
                placeholder="Summary"
                w={{
                  base: inputBase,
                  md: '100%',
                }}
              />
            </InputGroup>
          )}
        />
        {/* <= Summary */}

        {/* => Personal Details */}
        <Controller
          name="personalDetails"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.personalDetails}
              onChangeText={onChange}
              value={value}
              placeholder="personalDetails"
              w={{
                base: inputBase,
                md: '100%',
              }}
            />
          )}
        />
        <Controller
          name="locationTitle"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.locationTitle}
              onChangeText={onChange}
              value={value}
              placeholder="locationTitle"
              w={{
                base: inputBase,
                md: '100%',
              }}
            />
          )}
        />
        <Controller
          name="locationText"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.locationText}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your city"
              w={{
                base: inputBase,
                md: '100%',
              }}
            />
          )}
        />
        {/* <= Personal Details */}

        {/* => Contact  */}
        <Controller
          name="contactTitle"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.contactTitle}
              onChangeText={onChange}
              value={value}
              placeholder="contactTitle"
              w={{
                base: inputBase,
                md: '100%',
              }}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.emailText}
              // variant="unstyled"
              onChangeText={onChange}
              value={value}
              w={{
                base: inputBase,
                md: '100%',
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={6}
                  ml="0"
                  color="muted.400"
                />
              }
              placeholder="Enter your email"
            />
          )}
        />
        <Controller
          name="locationText"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.phoneText}
              // variant="unstyled"
              onChangeText={onChange}
              value={value}
              w={{
                base: inputBase,
                md: '100%',
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="phone" />}
                  size={6}
                  ml="0"
                  // style={{backgroundColor: 'red'}}
                  color="muted.400"
                />
              }
              placeholder="Enter your phone number"
            />
          )}
        />
        {/* <= Contact */}
      </Stack>

      <VStack space={4} alignItems="center">
        <Button variant="subtle" size="xs" onPress={handleSubmit(onSubmit)}>
          Download
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default PersonNameInputs;
