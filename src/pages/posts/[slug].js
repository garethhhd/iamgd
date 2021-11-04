import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import { SEO_TITLE } from '@constants/seo';
import BlockContent from '@sanity/block-content-to-react';

import { getAllPostsWithSlug, getPostAndMorePosts } from '@queries/post';

import Container from '@/components/Layout/container';

import Layout from '@/components/Layout';

import CoverImage from '@/components/Images/cover-image';
import Header from '@components/Typography/headerOne';

import { formatDate } from '@services/format';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const containerRef = useRef(null);
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <>{/* <PostTitle>Loading…</PostTitle> */}</>
      ) : (
        <LocomotiveScrollProvider
          options={{ smooth: true, lerp: 0.05 }}
          containerRef={containerRef}
          watch={[]}
        >
          <main data-scroll-container ref={containerRef} id='scroll-container'>
            <article className='space-y-32' data-scroll-section>
              <Head>
                <title>
                  {post.seoTitle} | {SEO_TITLE}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <Container>
                <Header>{post.title}</Header>
                <div className='mb-6 text-xl font-black text-primary md:text-right'>
                  {formatDate(post.date)}
                </div>
              </Container>

              <div className='px-4 mx-auto mb-8 max-w-7xl sm:px-6 lg:px-8 md:mb-16'>
                <CoverImage title={post.title} url={post.coverImage} />
              </div>

              <Container>
                <div className='max-w-2xl ml-auto prose lg:prose-xl'>
                  <BlockContent blocks={post.content} />
                </div>
              </Container>
            </article>
          </main>
        </LocomotiveScrollProvider>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
