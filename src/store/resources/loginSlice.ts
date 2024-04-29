// // loginSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface LoginState {
//   mobileNumber: string;

// }

// const initialState: LoginState = {
//   mobileNumber: '',

// };

// const loginSlice = createSlice({
//   name: 'login',
//   initialState,
//   reducers: {
//     setMobileNumber: (state, action: PayloadAction<string>) => {
//       state.mobileNumber = action.payload;
//     },

//   },
// });

// export const { setMobileNumber} = loginSlice.actions;
// export default loginSlice;



// loginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  mobileNumber: string;
  userrole: string;
  userId: string;
}

const initialState: LoginState = {
  mobileNumber: '',
  userrole: '',
  userId: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
    setUserRole: (state, action: PayloadAction<string>) => {
      state.userrole = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },

  },
});

export const { setMobileNumber, setUserRole, setUserName} = loginSlice.actions;
export default loginSlice;