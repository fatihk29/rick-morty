import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// project imports
import CreateTemplate from '../screens/CreateTemplate';
import ListCV from '../screens/ListCV';
import {HeaderMidTitle, HeaderRightTitle} from '../components/ScreenHeaders';
import {APP_ROUTER} from './app-router';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={APP_ROUTER.SCREEN.listcv.path}
        component={ListCV}
        options={() => ({
          tabBarLabel: APP_ROUTER.SCREEN.listcv.tabBarLabel,
          headerLeft: () => <View />,
          headerTitle: () => <HeaderMidTitle title={'ListCV'} />,
          tabBarButton: props => (
            <TouchableOpacity {...props}>
              <MCI
                name="format-list-bulleted-square"
                size={30}
                color="#6495ED"
              />
              <Text>List</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name={APP_ROUTER.SCREEN.createcv.path}
        component={CreateTemplate}
        options={() => ({
          tabBarLabel: APP_ROUTER.SCREEN.createcv.tabBarLabel,
          headerLeft: () => <View />,
          headerTitle: () => <HeaderMidTitle title={'Create CV'} />,
          headerRight: () => <HeaderRightTitle icon={'settings'} />,
          tabBarIcon: () => (
            <MaterialIcons name="create" size={30} color="#6495ED" />
          ),
          tabBarButton: props => (
            <TouchableOpacity {...props}>
              <MaterialIcons name="create" size={30} color="#6495ED" />
              <Text>Create CV</Text>
            </TouchableOpacity>
          ),
        })}
      />
      {/* <Tab.Screen
        name="Create CV1"
        component={CreateTemplate}
        options={() => ({
          tabBarLabel: 'Create CV',
          headerLeft: () => <View />,
          headerTitle: () => <HeaderMidTitle title={'Create CV'} />,
          headerRight: () => <HeaderRightTitle icon={'settings'} />,
          tabBarButton: props => (
            <TouchableOpacity {...props}>
              <MaterialIcons name="person" size={30} color="#6495ED" />
              <Text>Profile</Text>
            </TouchableOpacity>
          ),
        })}
      /> */}
    </Tab.Navigator>
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
