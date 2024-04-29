// store.ts
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './resources/loginSlice';
import makerModifyReducer from './resources/makerSlice';


const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    makerModify: makerModifyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;