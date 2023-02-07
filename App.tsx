import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CreateTemplate from './src/screens/CreateTemplate';
import ListCV from './src/screens/ListCV';
import store from './src/store';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListCV" component={ListCV} />
      <Tab.Screen name="Create CV" component={CreateTemplate} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={CreateTemplate} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
