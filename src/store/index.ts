import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/productSlice';


const store = configureStore({
  reducer: {
    appReducer: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;