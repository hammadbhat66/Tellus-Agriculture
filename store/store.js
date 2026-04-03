import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CombinedReducers from '../src/redux/combineReducers';

// SETTING UP STORE->
const persistConfig = {
  key: 'root',
  version:1,
  storage: AsyncStorage,
  blacklist: [''], // reducers that you do not want to persist
};

const createEnhancers = (getDefaultEnhancers) => {
  if (__DEV__) {
    const reactotron = require('../ReactotronConfig').default;
    return getDefaultEnhancers().concat(reactotron.createEnhancer());
  } else {
    return getDefaultEnhancers();
  }
}


export const store = configureStore({
  reducer: persistReducer(persistConfig, CombinedReducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  enhancers: createEnhancers,
},

);
export const persistor = persistStore(store);
