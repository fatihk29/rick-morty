import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, Box, Text, HStack, Pressable, Center} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// project imports
import CreateTemplate from '../screens/CreateTemplate';
import ListCV from '../screens/ListCV';
import {HeaderMidTitle, HeaderRightTitle} from '../components/ScreenHeaders';
import {APP_ROUTER} from './app-router';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name={APP_ROUTER.SCREEN.listcv.path}
        component={ListCV}
        options={() => ({
          headerTitle: () => (
            <HeaderMidTitle title={APP_ROUTER.SCREEN.listcv.tabBarLabel} />
          ),
        })}
      />
      <Tab.Screen
        name={APP_ROUTER.SCREEN.createcv.path}
        component={CreateTemplate}
        options={() => ({
          headerTitle: () => (
            <HeaderMidTitle title={APP_ROUTER.SCREEN.createcv.tabBarLabel} />
          ),
          headerRight: () => <HeaderRightTitle icon={'settings'} />,
          tabBarIcon: () => (
            <MaterialIcons name="create" size={30} color="#6495ED" />
          ),
        })}
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
          py="3"
          flex={1}
          onPress={() => {
            setSelected(0);
            navigation.navigate(APP_ROUTER.SCREEN.listcv.path);
          }}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? 'home' : 'home-outline'}
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
          py="2"
          flex={1}
          onPress={() => {
            setSelected(1);
            navigation.navigate(APP_ROUTER.SCREEN.createcv.path);
          }}>
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="create" />}
              color="white"
              size="md"
            />
            <Text color="white" fontSize="12">
              {APP_ROUTER.SCREEN.createcv.tabBarLabel}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
