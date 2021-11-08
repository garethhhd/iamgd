import '../styles/index.css';
import { useEffect } from 'react';
import Header from '@components/Layout/header';
import Mouse from '@components/Layout/mouse';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Mouse />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
