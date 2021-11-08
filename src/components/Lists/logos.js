import { useEffect } from 'react';
import GSAP from 'gsap';

import Container from '../Layout/container';
import HeaderTwo from '../Typography/headerTwo';

import Tailwind from '@svgs/tailwindcss.svg';
import Shopify from '@svgs/shopify.svg';
import Sanity from '@svgs/sanity.svg';
import Next from '@svgs/nextjs.svg';
import Firebase from '@svgs/firebase.svg';
import Statamic from '@svgs/statamic.svg';

export const Logos = () => {
  useEffect(() => {
    GSAP.fromTo(
      '.logo',
      { scale: 0.4, y: 40, autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1.5,
        scale: 1,
        y: 0,
        ease: 'power1.inOut',
        duration: 1,
        stagger: {
          grid: [2, 3],
          from: 'edges',
          axis: 'y',
          ease: 'power2.in',
          amount: 1.5,
        },
        scrollTrigger: {
          trigger: '.logo-wrapper',
          start: 'top bottom-=250px',
          end: '+=200',
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <Container>
      <HeaderTwo text='Technologies' />

      <p className='max-w-md mt-4 text-2xl' data-animate='para'>
        I love playing around with new frameworks and tools, to keep me sane.
        Current favourites are:
      </p>

      <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 logo-wrapper'>
        <div className='flex items-center justify-center col-span-1 px-8 py-8 logo'>
          <Statamic className='text-white max-h-16' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8 logo'>
          <Next className='max-h-12' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8 logo'>
          <Firebase className='max-h-10' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8 logo'>
          <Sanity className='max-h-8' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8 logo'>
          <Shopify className='max-h-10' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8 logo'>
          <Tailwind className='max-h-12' />
        </div>
      </div>
    </Container>
  );
};
