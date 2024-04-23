// store.ts
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './resources/loginSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;