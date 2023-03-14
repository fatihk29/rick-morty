import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {HStack, IconButton, Text, Box, StatusBar} from 'native-base';
import {Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// project imports
import style from './styles';

interface HeaderMidTitleProps {
  title: any;
}

interface HeaderRightTitleProps {
  icon: any;
}

const HeaderMidTitle: FC<HeaderMidTitleProps> = ({title}: any) => {
  return (
    <View style={style.midHeader}>
      <Text style={style.midHeaderText}>{title}</Text>
    </View>
  );
};

const HeaderRightTitle: FC<HeaderRightTitleProps> = ({icon}: any) => {
  return (
    <TouchableOpacity style={style.leftHeader} onPress={() => {}}>
      <View style={style.subContainer}>
        <Icon as={MaterialIcons} name={icon} color="#6495ED" size={28} />
      </View>
    </TouchableOpacity>
  );
};

function ScreenHeader() {
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
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}

export {HeaderMidTitle, HeaderRightTitle, ScreenHeader};
