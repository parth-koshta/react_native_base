import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import AppWrapper from './src/components/AppWrapper';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
    </Provider>
  );
};

export default App;
