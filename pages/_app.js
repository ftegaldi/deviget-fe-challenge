import Head from 'next/head';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from 'redux/store'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    max-width: 100vw;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #ffffff;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const ReditPostsApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Reddit top posts app</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default ReditPostsApp;
