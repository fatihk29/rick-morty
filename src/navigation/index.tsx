import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, Box, Text, HStack, Pressable, Center} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// project imports
import CreateTemplate from '../screens/CreateTemplate';
import FillTemplate from '../screens/FillTemplate';
import ListCV from '../screens/ListCV';
import SeePDF from '../screens/SeePDF';
import TemplateCV from '../screens/TemplateCV';
import {APP_ROUTER} from './app-router';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name={APP_ROUTER.SCREEN.listcv.path}
        component={ListCV}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={APP_ROUTER.SCREEN.fillTemplate.path}
        component={FillTemplate}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={APP_ROUTER.SCREEN.docv.path}
        component={TemplateCV}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const MyTabBar: FC<any> = ({navigation}) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <Box bg="white" safeAreaTop width="100%" alignSelf="center">
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="1"
          flex={1}
          onPress={() => {
            setSelected(0);
            navigation.navigate(APP_ROUTER.SCREEN.listcv.path);
          }}>
          <Center>
            <Icon
              mb="0"
              as={
                <MCIcons
                  name={
                    selected === 0
                      ? 'format-list-bulleted-square'
                      : 'format-list-checkbox'
                  }
                />
              }
              color="white"
              size="md"
            />
            <Text color="white" fontSize="12">
              {APP_ROUTER.SCREEN.listcv.tabBarLabel}
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="1"
          flex={1}
          onPress={() => {
            setSelected(1);
            navigation.navigate(APP_ROUTER.SCREEN.fillTemplate.path);
          }}>
          <Center>
            <Icon
              mb="0"
              as={<MaterialIcons name="create" />}
              color="white"
              size="md"
            />
            <Text color="white" fontSize="14">
              {APP_ROUTER.SCREEN.fillTemplate.tabBarLabel}
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.5}
          py="1"
          flex={1}
          onPress={() => {
            setSelected(2);
            navigation.navigate(APP_ROUTER.SCREEN.docv.path);
          }}>
          <Center>
            <Icon mb="0" as={<FAIcons name="cogs" />} color="white" size="md" />
            <Text color="white" fontSize="12">
              {APP_ROUTER.SCREEN.docv.tabBarLabel}
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={CreateTemplate}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={APP_ROUTER.SCREEN.seepdf.path}
          component={SeePDF}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
