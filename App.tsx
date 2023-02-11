import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

// project imports
import store from './src/store';
import AppNavigator from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
