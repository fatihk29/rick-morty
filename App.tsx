import React from 'react';
import { Provider } from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EpisodePage from './src/screens/EpisodePage';
import EpisodeDetails from './src/screens/EpisodeDetail';
import CharacterList from './src/screens/CharacterList';
import store from './src/store';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={CharacterList} />
      <Tab.Screen name="Episodes" component={EpisodePage} />
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
          <Stack.Screen name="Home" component={EpisodePage} />
          <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
