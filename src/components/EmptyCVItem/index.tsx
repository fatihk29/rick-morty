import React, {FC} from 'react';
import {
  Icon,
  AspectRatio,
  Box,
  Text,
  Stack,
  Heading,
  Pressable,
  Center,
} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';

// project imports
import {APP_ROUTER} from '../../navigation/app-router';
import style from './style';

interface EmptyCVItemProps {
  navigation: any;
}

const EmptyCVItem: FC<EmptyCVItemProps> = ({navigation}) => {
  return (
    <Pressable
      alignItems="center"
      style={style.itemContainer}
      onPress={() => {
        navigation.navigate(APP_ROUTER.SCREEN.createcv.path, {
          item: '',
        });
      }}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="#3CB371"
        borderStyle={'dotted'}
        borderWidth="4"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box _light={{backgroundColor: ''}}>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Center
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'xs',
              }}>
              <Icon as={Fontisto} name="person" size={150} color="#3CB371" />
            </Center>
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Name Surname
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
              Your Profession
            </Text>
          </Stack>
          <Text fontWeight="400">Two years of experience</Text>
        </Stack>

        <Stack p="4" space={3}>
          <Text
            fontSize="lg"
            _light={{
              color: '#2F4F4F',
            }}
            fontWeight="500">
            NO SIGN-UP REQUIRED
          </Text>
        </Stack>
      </Box>
    </Pressable>
  );
};

export default EmptyCVItem;
