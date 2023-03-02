import React, {FC} from 'react';
import {View, Image, TextInput} from 'react-native';
import {Button, Icon, Input} from 'native-base';
import {Controller, useForm} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// project imports
import styles from './styles';

const defaultValues = {
  summaryTitle: 'SUMMARY',
  summaryText: '2 years of experience',
  personalDetails: 'PERSONAL DETAILS',
  locationTitle: 'Location',
  locationText: '',
  contactTitle: 'CONTACT',
  email: '',
  phone: '',
};

const PersonalInfoBox: FC<any> = () => {
  const {handleSubmit, control, watch} = useForm({
    defaultValues,
    mode: 'all',
  });

  const onSubmit = () => {
    const data = watch();
    // console.log('data :>> ', data);
  };
  console.log('render in personalInfoBox');

  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/assets%2Fzurich1.jpg?alt=media&token=8c900be1-b6d6-427d-9739-1f637d8369e6',
        }}
      />
      {/* => Summary */}
      <Controller
        name="summaryTitle"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.summaryTitle}
            onChangeText={onChange}
            value={value}
            placeholder="SUMMARY"
          />
        )}
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
            // w={{
            //   base: '75%',
            //   // md: '25%',
            // }}
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

      <Button variant="subtle" size="xs" onPress={handleSubmit(onSubmit)}>
        Download
      </Button>
    </View>
  );
};

export default PersonalInfoBox;
