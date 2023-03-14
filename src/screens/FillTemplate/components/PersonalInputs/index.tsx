import React, {FC} from 'react';
import {
  Button,
  VStack,
  Icon,
  Input,
  Image,
  Center,
  ScrollView,
  FormControl,
  TextArea,
} from 'native-base';
import {Controller, useForm} from 'react-hook-form';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as Yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';

// project imports
import styles from './styles';

const defaultValues = {
  image: '',
  yourName: '',
  yourProfession: '',
  summaryTitle: 'Summary',
  summaryText: '',
  contactDetails: 'Contact',
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
    console.log('data :>> ', data);
  };

  return (
    <ScrollView style={styles.container}>
      <Center w="100%" style={{}}>
        <Image
          alt="profile"
          style={styles.image}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/assets%2Fzurich1.jpg?alt=media&token=8c900be1-b6d6-427d-9739-1f637d8369e6',
          }}
        />

        <VStack space={4} mt="5">
          <FormControl>
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
                    placeholder="Name Surname"
                    w={{
                      base: inputBase,
                      md: '100%',
                    }}
                    InputLeftElement={
                      <Icon as={<Fontisto name="person" />} size={6} ml="1" />
                    }
                  />
                );
              }}
            />
          </FormControl>
          <FormControl>
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
                    InputLeftElement={
                      <Icon as={<MIcons name="work" />} size={6} ml="1" />
                    }
                  />
                );
              }}
            />
          </FormControl>
          <FormControl>
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
                    InputLeftElement={
                      <Icon as={<MCIcons name="pen" />} size={6} ml="1" />
                    }
                  />
                );
              }}
            />
          </FormControl>
          <FormControl w="100%">
            <Controller
              name="summaryText"
              control={control}
              render={({field: {onChange, value}}) => (
                <TextArea
                  autoCompleteType={true}
                  h={20}
                  w="80%"
                  onChangeText={onChange}
                  value={value}
                  placeholder="Summary"
                />
              )}
            />
          </FormControl>
          <FormControl>
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
                  InputLeftElement={
                    <Icon
                      as={<MCIcons name="card-account-details-outline" />}
                      size={7}
                      ml="1"
                    />
                  }
                />
              )}
            />
          </FormControl>
          <FormControl>
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
                      ml="1"
                      color="#9a3412"
                    />
                  }
                  placeholder="Enter your email"
                />
              )}
            />
          </FormControl>
          <FormControl>
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
                      as={<MIcons name="phone" />}
                      size={7}
                      ml="1"
                      color="#dc2626"
                    />
                  }
                  placeholder="Enter your phone number"
                />
              )}
            />
          </FormControl>
          <FormControl>
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
                      as={<MIcons name="location-pin" />}
                      size={7}
                      color="#16a34a"
                    />
                  }
                  placeholder="Enter your location"
                />
              )}
            />
          </FormControl>
        </VStack>

        <VStack space={2} mt="5">
          <FormControl>
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
                    <Icon
                      as={<MCIcons name="web" />}
                      size={7}
                      color="#047857"
                    />
                  }
                  placeholder="Website"
                />
              )}
            />
          </FormControl>
          <FormControl>
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
          </FormControl>
          <FormControl>
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
                    <Icon
                      as={<MCIcons name="github" />}
                      size={7}
                      color="black"
                    />
                  }
                  placeholder="Github"
                />
              )}
            />
          </FormControl>
        </VStack>
      </Center>
      <VStack space={4} alignItems="center">
        <Button variant="subtle" size="xs" onPress={handleSubmit(onSubmit)}>
          Download
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default PersonalInputs;
