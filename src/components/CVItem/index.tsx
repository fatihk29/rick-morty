import React, {FC, useState} from 'react';
import {
  Button,
  Icon,
  AspectRatio,
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// project imports
import style from './style';
import {APP_ROUTER} from '../../navigation/app-router';
import DeleteCVModal from '../../screens/Modal/DeleteCVModal';

interface CVItemProps {
  item: any;
  navigation: any;
}

const CVItem: FC<CVItemProps> = ({item, navigation}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable alignItems="center" style={style.itemContainer}>
      <Box
        maxW="80"
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
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
              // size={160}
              borderRadius={10}
            />
          </AspectRatio>
          <Pressable
            onPress={() => {
              navigation.navigate(APP_ROUTER.SCREEN.createcv.path, {
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
            top="0"
            left="0"
            px="2"
            py="2"
            _dark={{
              bg: 'violet.400',
            }}>
            <Icon as={MaterialIcons} name="delete" size={22} color="#2F4F4F" />
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
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
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
              variant="subtle"
              endIcon={
                <Icon as={Ionicons} name="cloud-download-outline" size="sm" />
              }>
              Download
            </Button>
          </HStack>
        </Stack>
      </Box>
      {/* MODALS => */}
      {isOpen && <DeleteCVModal setIsOpen={setIsOpen} />}
      {/* <= MODALS */}
    </Pressable>
  );
};

export default CVItem;
