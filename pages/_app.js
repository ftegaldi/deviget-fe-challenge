import '../styles/globals.css'
import Head from 'next/head';

import { Provider } from 'react-redux';

import store from 'redux/store'

const ReditPostsApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>

      <Provider store={store}>
         <Component {...pageProps} />
      </Provider>
      
    </>
  );
};

export default ReditPostsApp;
