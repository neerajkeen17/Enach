// loginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  mobileNumber: string;
  requestId: string;
}

const initialState: LoginState = {
  mobileNumber: '',
  requestId: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
    setRequestId: (state, action: PayloadAction<string>) => {
      state.requestId = action.payload;
    },
  },
});

export const { setMobileNumber, setRequestId } = loginSlice.actions;
export default loginSlice;