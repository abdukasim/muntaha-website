import Head from "next/head";

import { getPosts } from "../utils/wordpress";

import { FirstPost, OtherPosts } from "../components/Post";
import Navbar from "../components/Navbar";
import CommunitySection from "../components/HomePage/communitySection";

export default function Blog({ posts }) {
  const firstPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <>
      <Head>
        <title>Muntaha Blog</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <Navbar />
      {/* {jsxPosts} */}
      {firstPost && (
        <FirstPost
          post={firstPost}
          featuredMedia={firstPost["_embedded"]["wp:featuredmedia"][0]}
        />
      )}
      {otherPosts && <OtherPosts posts={otherPosts} />}
      <CommunitySection />
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  //   const media = await getMedia();

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
