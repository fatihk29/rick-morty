import React from 'react';
import {Provider} from 'react-redux';

// project imports
import store from './src/store';
import AppNavigator from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
