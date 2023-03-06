import React, {FC, useState} from 'react';
import {
  Button,
  Icon,
  Box,
  Text,
  Stack,
  Image,
  Heading,
  HStack,
  Pressable,
  Center,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationProp} from '@react-navigation/native';

// project imports
import {APP_ROUTER} from '../../navigation/app-router';
import DeleteCVModal from '../../screens/Modal/DeleteCVModal';
import style from './style';
import generatePDF from '../../helpers/generatePDF';

interface CVItemProps {
  item: any;
  navigation: NavigationProp<any>;
}

const CVItem: FC<CVItemProps> = ({item, navigation}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable alignItems="center" style={style.itemContainer}>
      <Box
        maxW="88%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box justifyContent="flex-start">
          <Box
            justifyContent="center"
            // alignSelf="flex-start"
            style={{backgroundColor: '', margin: 5}}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
              size={120}
              borderRadius={60}
            />
          </Box>

          <Pressable
            onPress={() => {
              navigation.navigate(APP_ROUTER.SCREEN.fillTemplate.path, {
                item,
              });
            }}
            position="absolute"
            top="0"
            right="0"
            px="6"
            py="2"
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}>
            <Center
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'md',
              }}>
              Edit
            </Center>
          </Pressable>
          <Pressable
            onPress={() => setIsOpen((prev: boolean) => !prev)}
            position="absolute"
            bottom="0"
            right="0"
            px="2"
            py="2"
            _dark={{
              bg: 'white',
            }}>
            <Icon as={MIcons} name="delete" size="6" color="secondary.600" />
          </Pressable>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.name}
            </Heading>
            <Text
              fontSize="md"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500">
              {item.cvTitle}
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bangalore is the center of India's high-tech industry. The city is
            also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" justifyContent="space-between">
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              {item.createdDate}
            </Text>
            <Button
              _pressed={{backgroundColor: '#fff'}}
              variant="ghost"
              style={{
                marginRight: -14,
              }}
              onPress={() => {
                generatePDF(1001);
                navigation.navigate(APP_ROUTER.SCREEN.seepdf.path, {
                  item: 'as',
                });
              }}
              endIcon={
                <Icon
                  as={MCIcons}
                  name="file-pdf-box"
                  size="12"
                  color="tertiary.500"
                />
              }>
              {/* See */}
            </Button>
          </HStack>
          <Button
            _pressed={{backgroundColor: '#fff'}}
            // onPress={() => generatePDF(1001)}
            variant="subtle"
            endIcon={
              <Icon as={Ionicons} name="cloud-download-outline" size="6" />
            }>
            Download PDF
          </Button>
        </Stack>
      </Box>
      {/* MODALS => */}
      {isOpen && <DeleteCVModal setIsOpen={setIsOpen} />}
      {/* <= MODALS */}
    </Pressable>
  );
};

export default CVItem;
