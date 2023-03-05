import React from 'react';
import {
  Pressable,
  Icon,
  useDisclose,
  Box,
  Stagger,
  IconButton,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FormatColorIcon = () => {
  return (
    <Icon
      as={MCIcons}
      size="6"
      name="format-color-highlight"
      _dark={{
        color: 'warmGray.50',
      }}
      color="warmGray.50"
    />
  );
};

const LeftFooter = () => {
  const {isOpen, onToggle} = useDisclose();
  return (
    <React.Fragment>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        // justifyContent="center"
        // alignItems="flex-end"
        px="3"
        py="6">
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
            bg="#064e3b"
            colorScheme="indigo"
            borderRadius="full"
            onPress={() => {
              onToggle();
            }}
            icon={<FormatColorIcon />}
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="#404040"
            colorScheme="indigo"
            borderRadius="full"
            onPress={() => {
              onToggle();
            }}
            icon={<FormatColorIcon />}
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="#0c4a6e"
            colorScheme="yellow"
            borderRadius="full"
            onPress={() => {
              onToggle();
            }}
            icon={<FormatColorIcon />}
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="#1c1917"
            colorScheme="teal"
            borderRadius="full"
            onPress={() => {
              onToggle();
            }}
            icon={<FormatColorIcon />}
          />
          <IconButton
            mb="12"
            variant="solid"
            bg="#1e3a8a"
            colorScheme="red"
            borderRadius="full"
            onPress={() => {
              onToggle();
            }}
            icon={<FormatColorIcon />}
          />
        </Stagger>
      </Box>

      <Pressable position="absolute" bottom="0" left="0" px="2" py="2">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={Ionicons}
              size="8"
              name="ios-color-palette"
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

export default LeftFooter;
