// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // You'll create this next

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
