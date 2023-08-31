// import Head from "next/head";

// import { getPosts } from "../utils/wordpress";

// import { FirstPost, OtherPosts } from "../components/Post";
// import Navbar from "../components/Navbar";
// import CommunitySection from "../components/HomePage/communitySection";

// export default function Blog({ posts }) {
//   const firstPost = posts[0];
//   const otherPosts = posts.slice(1);

//   return (
//     <>
//       <Head>
//         <title>Muntaha Blog</title>
//         <meta name="description" content="blog" />
//         <link rel="icon" href="/favicon.ico" />
//         {/* You can add more metadata here, like open graph tags for social media, etc */}
//       </Head>

//       <Navbar />
//       {/* {jsxPosts} */}
//       {firstPost && (
//         <FirstPost
//           post={firstPost}
//           featuredMedia={firstPost["_embedded"]["wp:featuredmedia"][0]}
//         />
//       )}
//       {otherPosts && <OtherPosts posts={otherPosts} />}
//       <CommunitySection />
//     </>
//   );
// }

// export async function getStaticProps({ params }) {
//   const posts = await getPosts();
//   //   const media = await getMedia();

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 10, // In seconds
//   };
// }

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { trunc } from "../utils/utils";

export default function Blog() {
  const news = [
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit distinctio rerum, quod consequatur unde ab eligendi explicabo quia vitae.",
      image: "/images/family-bicycle.png",
      link: "/",
    },
  ];

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className="mx-auto mb-12 w-[85%] text-3xl font-medium text-brand-blue">
        News and Stories
      </h1>
      <div className="mx-auto mb-12 grid w-[85%]  grid-cols-1 gap-5 sm:grid-cols-3">
        {news.map((item, index) => (
          <div key={index} className="w-full">
            <div className="w-full">
              <Image
                width={243}
                height={128}
                layout="responsive"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex h-32 min-w-full flex-col items-start justify-center pl-5 shadow-xl lg:h-44 lg:pl-8">
              <h4 className="text-sm font-bold text-brand-blue lg:text-xl">
                {item.title}
              </h4>
              <p className="mb-2 text-xs font-normal text-brand-blue lg:text-sm">
                {trunc(item.description, 50)}
              </p>
              <button className="w-max rounded-full bg-brand-yellow px-5 py-2 text-[7px] text-brand-blue lg:text-base">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
