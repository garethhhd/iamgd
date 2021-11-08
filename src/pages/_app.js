import '../styles/index.css';
import GSAP from 'gsap';

import { useEffect } from 'react';
import Header from '@components/Layout/header';
import Footer from '@components/Layout/Footer';
import Mouse from '@components/Layout/mouse';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const heroRef = [...document.querySelectorAll(`[data-animate*="hero"]`)];
    heroRef.map((item) => {
      GSAP.fromTo(
        item.querySelectorAll('span'),
        { autoAlpha: 0, y: '100%', rotation: 4 },
        {
          duration: 1,
          autoAlpha: 1,
          stagger: 0.05,
          y: 0,
          rotation: 0,
        }
      );
    });

    const titleRef = [...document.querySelectorAll(`[data-animate*="title"]`)];
    titleRef.map((item) => {
      GSAP.fromTo(
        item.querySelectorAll('span'),
        { y: '100%', autoAlpha: 0, rotation: -5 },
        {
          duration: 1,
          y: 0,
          autoAlpha: 1,
          rotation: 0,
          scrollTrigger: {
            trigger: item,
            start: 'bottom bottom-=50px',
            end: '+=50',
            scrub: 1,
          },
        }
      );
    });

    const paraRef = [...document.querySelectorAll(`[data-animate*="para"]`)];
    paraRef.map((item) => {
      GSAP.fromTo(
        item,
        { y: '20%', autoAlpha: 0 },
        {
          duration: 1,
          y: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=250px',
            end: '+=200',
            scrub: 1,
          },
        }
      );
    });
  }, []);
  return (
    <>
      <Header />
      <Mouse />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
