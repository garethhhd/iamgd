import '../styles/index.css';
import { useEffect } from 'react';
import Header from '@components/Layout/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
