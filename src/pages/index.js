import Head from "next/head";
import { SEO_TITLE } from "@constants/seo";

import { getAllPostsForHome } from "@queries/post";

import Layout from "@components/Layout";
import { Work } from "@/components/Lists/work";
import Container from "@/components/Layout/container";
import { Blog } from "@/components/Lists/blog";
import HeaderTwo from "@/components/Typography/headerTwo";

import Tailwind from "@svgs/tailwindcss.svg";
import Shopify from "@svgs/shopify.svg";
import Sanity from "@svgs/sanity.svg";
import Next from "@svgs/nextjs.svg";
import Firebase from "@svgs/firebase.svg";
import Statamic from "@svgs/statamic.svg";

export default function Index({ allPosts, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{SEO_TITLE}</title>
      </Head>
      <main className="space-y-32">
        <Container>
          <h1 className="max-w-md text-5xl font-black text-primary">
            A web developer from Belfast, Northern Ireland.
          </h1>

          <p className="max-w-sm mt-4 text-lg">
            An ambitious problem solver with over 8 years of experience.
          </p>
        </Container>
        <Work />
        <Blog allPosts={allPosts} />

        <Container>
          <HeaderTwo text="Technolgies" />

          <p className="max-w-md mt-4 text-2xl">
            I love playing around with new frameworks and tools, to keep me
            sane. Current favourites are:
          </p>

          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="flex items-center justify-center col-span-1 px-8 py-8">
              <Statamic className="text-white max-h-16" />
            </div>
            <div className="flex items-center justify-center col-span-1 px-8 py-8">
              <Next className="max-h-12" />
            </div>
            <div className="flex items-center justify-center col-span-1 px-8 py-8">
              <Firebase className="max-h-10" />
            </div>
            <div className="flex items-center justify-center col-span-1 px-8 py-8">
              <Sanity className="max-h-8" />
            </div>
            <div className="flex items-center justify-center col-span-1 px-8 py-8">
              <Shopify className="max-h-10" />
            </div>
            <div className="flex items-center justify-center col-span-1 px-8 py-8">
              <Tailwind className="max-h-12" />
            </div>
          </div>
        </Container>

        <Container>
          <h2 className="max-w-md pb-20 text-3xl font-black sm:text-4xl">
            <span className="block">
              My Name is Gareth Donaldson come say hi
            </span>
            <span className="block text-primary sm:mt-8">hello@iamgd.com</span>
          </h2>
        </Container>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 60,
  };
}
