import React, {FC} from 'react';
import {HStack, IconButton, Text, Box, StatusBar} from 'native-base';
import {Icon} from 'native-base';

// project imports
// import style from './styles';

interface IScreenHeader {
  title: string;
  iconAs: Function;
  iconName: string;
  onPress: () => void;
  iconAs2?: Function;
  iconName2?: string;
  onPress2?: () => void;
}

const ScreenHeader: FC<IScreenHeader> = ({
  title,
  iconAs,
  iconName,
  onPress,
  iconAs2,
  iconName2,
  onPress2,
}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg="#6495ED" />
      <HStack
        bg="#6495ED"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <Text color="white" ml="2" fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </HStack>
        <HStack>
          <IconButton
            onPress={onPress}
            icon={<Icon as={iconAs} name={iconName} size={6} color="white" />}
          />
          {iconName2 && (
            <IconButton
              onPress={onPress2}
              icon={
                <Icon as={iconAs2} name={iconName2} size="sm" color="white" />
              }
            />
          )}
        </HStack>
      </HStack>
    </>
  );
};

export {ScreenHeader};
