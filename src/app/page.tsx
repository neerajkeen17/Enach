"use client";

import Login from "../components/Login/Login";
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import type { AppProps } from 'next/app';

export default function Home({ Component, pageProps }: AppProps) {
  return(
  // <Login/>
  <Provider store={store}>
  <Login {...pageProps} />
  </Provider>
  );
}