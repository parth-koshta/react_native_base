import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import store, {persistor} from './src/redux/store';
import AppWrapper from './src/components/AppWrapper';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 300);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
    </Provider>
  );
};

export default App;
