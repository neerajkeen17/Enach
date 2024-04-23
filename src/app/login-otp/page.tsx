"use client";

import OTP from '@/components/OTP/Otp'
import React from 'react'

import { Provider } from 'react-redux';
import store from '@/store/store';
import type { AppProps } from 'next/app';


function page({ Component, pageProps }: AppProps) {
  return (
    // <OTP/>
    <Provider store={store}>
    <OTP {...pageProps} />
    </Provider>
  )
}

export default page