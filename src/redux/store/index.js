import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reducers from '../reducers';

// redux-persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 10000,
  version: 1,
  whitelist: ['user'], // reducers which are added in whitelist[] will be persisted in Async Storage
};

const persistedReducer = persistReducer(persistConfig, Reducers);

let middlewares = [];
// add logger middleware when app is running in debug mode
if (__DEV__) {
  middlewares = [logger];
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);
export default store;
