import React from 'react';
import {
  Pressable,
  Icon,
  useDisclose,
  Box,
  Stagger,
  IconButton,
} from 'native-base';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RightFooter = () => {
  const {isOpen, onToggle} = useDisclose();

  return (
    <React.Fragment>
      <Box position="absolute" bottom="0" right="0" px="3" py="4">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}>
          <IconButton
            mb="4"
            variant="solid"
            bg="red.400"
            colorScheme="yellow"
            borderRadius="full"
            onPress={() => {
              onToggle();
            }}
            icon={
              <Icon
                as={MCIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="7"
                name="size-xl"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.400"
            colorScheme="red"
            borderRadius="full"
            onPress={() => {
              onToggle();
            }}
            icon={
              <Icon
                as={MCIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="size-l"
                colorScheme="red"
              />
            }
          />
          <IconButton
            mb="12"
            variant="solid"
            bg="red.400"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MCIcons}
                size="6"
                name="size-m"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
        </Stagger>
      </Box>
      <Pressable position="absolute" bottom="0" right="0" px="2" py="2">
        <IconButton
          variant="solid"
          borderRadius="full"
          // size="lg"
          onPress={onToggle}
          bg="red.500"
          icon={
            <Icon
              as={FAIcons}
              size="7"
              name="font"
              color="warmGray.50"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
        />
      </Pressable>
    </React.Fragment>
  );
};

export default RightFooter;
