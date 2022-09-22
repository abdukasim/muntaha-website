import Head from "next/head";
import Image from "next/image";

import { getPost, getSlugs } from "../../utils/wordpress";
import { getDate } from "../../utils/utils";
import Navbar from "../../components/Navbar";
import CommunitySection from "../../components/HomePage/communitySection";

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>
      <Navbar />
      <div className="rounded-none h-96 md:h-100 lg:h-544px w-screen relative ">
        <Image
          src={post["_embedded"]["wp:featuredmedia"][0].source_url}
          layout="fill"
          // width="1439"
          // height="621"
          alt={post["_embedded"]["wp:featuredmedia"][0]["alt_text"]}
          quality={100}
          className="overflow-hidden"
        />
      </div>
      <div className="mx-7 lg:ml-34 mb-14">
        <h1 className="font-semibold text-3xl lg:text-4xl lg:w-938px my-16">
          {post.title.rendered}
        </h1>
        <div
          className="font-light text-base lg:text-2xl lg:mr-34 mb-14"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
        <div className="mb-5">
          <small className="uppercase font-bold text-base">
            {post["_embedded"]["wp:term"][0][0]?.name}.{" "}
          </small>
          <small className="uppercase font-light text-base">
            {getDate(post.modified)}
          </small>
        </div>
        <div className="flex flex-row">
          <Image
            src={post?.acf?.author_image?.url}
            width={48}
            height={48}
            alt="author avatar"
            className="rounded-full"
          />
          <div className="flex flex-col ml-4">
            <small className="font-semibold text-base">
              {post?.acf?.author_name}
            </small>
            <small className="font-normal text-base blog-text">
              {post?.acf?.job_title}
            </small>
          </div>
        </div>
      </div>

      <CommunitySection />
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}

// import React from "react";

// function PostSlug() {
//   return <div>PostSlug</div>;
// }

// export default PostSlug;
