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
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as Yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';

// project imports
import styles from './styles';

const defaultValues = {
  image: '',
  yourName: '',
  yourProfession: '',
  summaryTitle: '',
  summaryText: '',
  contactDetails: 'Contact Details',
  locationText: '',

  //
  email: '',
  phone: '',
  location: '',
  website: '',
  linkedin: '',
  github: '',
};

const inputBase = '80%';

// const validationSchema = Yup.object().shape({
//   yourName: Yup.string().required('validationMessages:email:required').min(5),
// });

const PersonalInputs: FC<any> = () => {
  const {handleSubmit, control} = useForm({
    defaultValues,
    mode: 'onChange',
    // resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log('rtrtr :>> ');
    // const data = watch();
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
          name="contactDetails"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.personalDetails}
              onChangeText={onChange}
              value={value}
              placeholder="Contact Details"
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
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.emailText}
              onChangeText={onChange}
              value={value}
              w={{
                base: inputBase,
                md: '100%',
              }}
              InputLeftElement={
                <Icon
                  as={<MCIcons name="email-outline" />}
                  size={7}
                  ml="0"
                  color="#9a3412"
                />
              }
              placeholder="Enter your email"
            />
          )}
        />
        <Controller
          name="location"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.phoneText}
              onChangeText={onChange}
              value={value}
              w={{
                base: inputBase,
                md: '100%',
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="phone" />}
                  size={7}
                  ml="0"
                  color="#dc2626"
                />
              }
              placeholder="Enter your phone number"
            />
          )}
        />
        <Controller
          name="locationText"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.phoneText}
              onChangeText={onChange}
              value={value}
              w={{
                base: inputBase,
                md: '100%',
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="location-pin" />}
                  size={7}
                  color="#16a34a"
                />
              }
              placeholder="Enter your location"
            />
          )}
        />
        <Controller
          name="website"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.phoneText}
              onChangeText={onChange}
              value={value}
              w={{
                base: inputBase,
                md: '100%',
              }}
              InputLeftElement={
                <Icon as={<MCIcons name="web" />} size={7} color="#047857" />
              }
              placeholder="Website"
            />
          )}
        />
        <Controller
          name="linkedin"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.phoneText}
              onChangeText={onChange}
              value={value}
              w={{
                base: inputBase,
                md: '100%',
              }}
              InputLeftElement={
                <Icon
                  as={<MCIcons name="linkedin" />}
                  size={7}
                  color="#0072b1"
                />
              }
              placeholder="Linkedin"
            />
          )}
        />
        <Controller
          name="github"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              style={styles.phoneText}
              onChangeText={onChange}
              value={value}
              w={{
                base: inputBase,
                md: '100%',
              }}
              InputLeftElement={
                <Icon as={<MCIcons name="github" />} size={7} color="black" />
              }
              placeholder="Github"
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

export default PersonalInputs;
