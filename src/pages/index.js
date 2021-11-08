import Head from 'next/head';
import { useRef, useEffect } from 'react';

import { SEO_TITLE } from '@constants/seo';
import { getAllPostsForHome } from '@queries/post';

import { Work } from '@/components/Lists/Work';
import Container from '@/components/Layout/container';
import { Blog } from '@/components/Lists/blog';
import { Logos } from '@/components/Lists/logos';

import SplitText from '@moxy/react-split-text';

import GSAP from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
GSAP.registerPlugin(ScrollTrigger);

export default function Index({ allPosts, preview }) {
  useEffect(() => {
    const refs = [...document.querySelectorAll(`[data-title*="animate"]`)];

    refs.map((item) => {
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
  }, []);

  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
      </Head>

      <Container>
        <h1
          className='max-w-2xl mt-48 overflow-hidden font-black text-7xl text-primary'
          data-title='animate'
        >
          <SplitText className='inline-block overflow-hidden whitespace-pre-wrap'>
            A web developer from Belfast, Northern Ireland.
          </SplitText>
        </h1>

        <p className='max-w-sm mt-4 text-lg' data-title='animate'>
          <SplitText className='inline-block overflow-hidden whitespace-pre-wrap'>
            An ambitious problem solver with over 8 years of experience.
          </SplitText>
        </p>
      </Container>
      <div className='mt-48 space-y-32'>
        <Work />
        <Blog allPosts={allPosts} />

        <Logos />

        <Container>
          <h2 className='max-w-md mb-20 text-3xl font-black sm:text-4xl'>
            <span className='block'>
              My Name is Gareth Donaldson come say hi
            </span>
            <span className='block text-primary sm:mt-8'>hello@iamgd.com</span>
          </h2>
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 60,
  };
}
