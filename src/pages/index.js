import Head from 'next/head';
import { useEffect } from 'react';

import { SEO_TITLE } from '@constants/seo';
import { WORK } from '@constants/work';
import { getAllPostsForHome } from '@queries/post';

import Container from '@components/Layout/container';
import { List } from '@components/Lists';
import { Logos } from '@components/Lists/Logos';

import GSAP from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitText from '@moxy/react-split-text';

GSAP.registerPlugin(ScrollTrigger);

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
      </Head>

      <Container>
        <h1
          className='max-w-2xl mt-48 overflow-hidden font-black text-7xl text-primary'
          data-animate='hero'
        >
          <SplitText className='inline-block overflow-hidden whitespace-pre-wrap'>
            A web developer from Belfast, Northern Ireland.
          </SplitText>
        </h1>

        <p className='max-w-sm mt-4 text-lg' data-animate='hero'>
          <SplitText className='inline-block overflow-hidden whitespace-pre-wrap'>
            An ambitious problem solver with over 8 years of experience.
          </SplitText>
        </p>
      </Container>
      <div className='mt-48 space-y-32'>
        <List items={WORK} title='Selected Work' />
        <List items={allPosts} title='Latest Articles' />
        <Logos />
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
