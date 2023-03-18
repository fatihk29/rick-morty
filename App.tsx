import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {I18nextProvider} from 'react-i18next';

// project imports
import store from './src/store';
import AppNavigator from './src/navigation';
import i18n from './src/i18n';

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NativeBaseProvider>
          <AppNavigator />
        </NativeBaseProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
