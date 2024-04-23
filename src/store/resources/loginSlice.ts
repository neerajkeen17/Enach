// loginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  mobileNumber: string;
}

const initialState: LoginState = {
  mobileNumber: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
  },
});

export const { setMobileNumber} = loginSlice.actions;
export default loginSlice;