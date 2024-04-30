"use client";

import React from 'react';
import { NextPage } from 'next';
import OTP from '@/components/OTP/Otp';
import { Provider } from 'react-redux';
import store from '@/store/store';

const LoginPage: NextPage = () => {
  return (
    <Provider store={store}>
      <OTP />
    </Provider>
  );
};

export default LoginPage;






// import OTP from '@/components/OTP/Otp'
// import React from 'react'
// import { Provider } from 'react-redux';
// import store from '@/store/store';
// import type { AppProps } from 'next/app';


// function page({ Component, pageProps }: AppProps) {
//   return (
//     // <OTP/>
//     <Provider store={store}>
//     <OTP {...pageProps} />
//     </Provider>
//   )
// }

// export default page