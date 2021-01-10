import '../styles/globals.css'
import Head from 'next/head';

const ReditPostsApp = ({ Component, pageProps }) => {
  //TODO: redux provider and store go here
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
      <Component {...pageProps} />
    </>
  );
};

export default ReditPostsApp;
