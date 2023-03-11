import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {Button, VStack, Icon, Input, Image} from 'native-base';
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

const validationSchema = Yup.object().shape({
  yourName: Yup.string().required('validationMessages:email:required').min(5),
});

const PersonNameInputs: FC<any> = () => {
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
    <View style={{padding: 10}}>
      <Image
        alt="profile"
        style={styles.image}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/assets%2Fzurich1.jpg?alt=media&token=8c900be1-b6d6-427d-9739-1f637d8369e6',
        }}
      />

      <Controller
        name="yourName"
        control={control}
        render={item => {
          const {field} = item;

          return (
            <TextInput
              // {...register('yourName')}
              ref={field.ref}
              style={[
                styles.yourName,
                {
                  // color: 'white',
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

      {/* => Summary */}
      <Controller
        name="summaryTitle"
        control={control}
        render={({field: {onChange, value}}) => {
          return (
            <TextInput
              style={styles.summaryTitle}
              onChangeText={onChange}
              value={value}
              placeholder="SUMMARY"
            />
          );
        }}
      />
      <Controller
        name="summaryText"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.summaryText}
            onChangeText={onChange}
            value={value}
            placeholder="Summary"
          />
        )}
      />
      {/* <= Summary */}

      {/* => Personal Details */}
      <Controller
        name="personalDetails"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.personalDetails}
            onChangeText={onChange}
            value={value}
            placeholder="personalDetails"
          />
        )}
      />
      <Controller
        name="locationTitle"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.locationTitle}
            onChangeText={onChange}
            value={value}
            placeholder="locationTitle"
          />
        )}
      />
      <Controller
        name="locationText"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.locationText}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your city"
          />
        )}
      />
      {/* <= Personal Details */}

      {/* => Contact  */}
      <Controller
        name="contactTitle"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.contactTitle}
            onChangeText={onChange}
            value={value}
            placeholder="contactTitle"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            style={styles.emailText}
            variant="unstyled"
            onChangeText={onChange}
            value={value}
            w={{
              base: '75%',
              // md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={4}
                ml="0"
                color="muted.400"
              />
            }
            placeholder="Entr your email"
          />
        )}
      />
      <Controller
        name="locationText"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            style={styles.phoneText}
            variant="unstyled"
            onChangeText={onChange}
            value={value}
            // w={{
            //   base: '75%',
            //   // md: '25%',
            // }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="phone" />}
                size={4}
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

export default PersonNameInputs;
