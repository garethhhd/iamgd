import Container from '../Layout/container';
import HeaderTwo from '../Typography/headerTwo';

import Tailwind from '@svgs/tailwindcss.svg';
import Shopify from '@svgs/shopify.svg';
import Sanity from '@svgs/sanity.svg';
import Next from '@svgs/nextjs.svg';
import Firebase from '@svgs/firebase.svg';
import Statamic from '@svgs/statamic.svg';

export const Logos = () => {
  return (
    <Container>
      <HeaderTwo text='Technologies' />

      <p className='max-w-md mt-4 text-2xl'>
        I love playing around with new frameworks and tools, to keep me sane.
        Current favourites are:
      </p>

      <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8'>
        <div className='flex items-center justify-center col-span-1 px-8 py-8'>
          <Statamic className='text-white max-h-16' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8'>
          <Next className='max-h-12' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8'>
          <Firebase className='max-h-10' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8'>
          <Sanity className='max-h-8' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8'>
          <Shopify className='max-h-10' />
        </div>
        <div className='flex items-center justify-center col-span-1 px-8 py-8'>
          <Tailwind className='max-h-12' />
        </div>
      </div>
    </Container>
  );
};
