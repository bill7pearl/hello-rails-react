import { store } from '@reduxjs/toolkit';
import greetingSlice from './greetingsReducer';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;