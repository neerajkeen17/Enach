// "use client";

// import React from 'react';
// import { NextPage } from 'next';
// import Login from '../components/Login/Login';
// import { Provider } from 'react-redux';
// import store from '@/store/store';
// import type { AppProps } from 'next/app';

// const Home = ({ Component, pageProps }: AppProps) => {
//   return (
//     <Provider store={store}>
//       <Login {...pageProps} />
//     </Provider>
//   );
// };

// export default Home;




// page.tsx
'use client';

import React from 'react';
import Login from '../components/Login/Login';
import { Provider } from 'react-redux';
import store from '@/store/store';

const Home = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default Home;