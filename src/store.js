import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can choose different storage options here
import userReducer from './Slice/userSlice';
import transactionReducer from './Slice/transactionSlice';
import structureReducer from './Slice/strucureSlice';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root', // Root key in storage
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  strcture: structureReducer,
  trans: transactionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

});

export const persistor = persistStore(store);
