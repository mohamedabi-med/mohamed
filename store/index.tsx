// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // You'll have to create this

const store = configureStore({
  reducer: rootReducer,
});

export default store;
