import Link from "next/link";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { getDate } from "../utils/utils";

// export default function Post({ post, featuredMedia, postIndex }) {
export function FirstPost({ post, featuredMedia }) {
  return (
    <section className="mb-24">
      <div className="md:hidden">
        <h2 className="font-semibold text-3xl ml-8 mr-7 mb-7">
          {post.title.rendered}
        </h2>
        {featuredMedia && (
          <div className="mb-3">
            <Link href={`/posts/${post.slug}`}>
              <a>
                <Image
                  src={featuredMedia.source_url}
                  layout="responsive"
                  width="462"
                  height="303"
                  alt={featuredMedia["alt_text"]}
                />
              </a>
            </Link>
          </div>
        )}
        <div className="ml-9 mb-6">
          <small className="uppercase font-bold text-base">
            {post["_embedded"]["wp:term"][0][0]?.name}.{" "}
          </small>
          <small className="uppercase font-light text-base">
            {getDate(post.modified)}
          </small>
        </div>
        <div
          className="ml-9 mr-70px mb-4 font-normal text-base blog-text"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        ></div>
        <div className="flex flex-row ml-9">
          <Image
            src={post?.acf?.author_image.url}
            width={48}
            height={48}
            alt={post["_embedded"]["author"][0].slug}
            className="rounded-full"
          />
          <div className="flex flex-col ml-4">
            <small className="font-semibold text-base">
              {post.acf.author_name}
            </small>
            <small className="font-normal text-base blog-text">
              {post?.acf?.job_title}
            </small>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-row md:mt-16 md:ml-12">
        <div className="flex-initial w-2/3 rounded h-full">
          {featuredMedia && (
            <Link href={`/posts/${post.slug}`}>
              <a>
                <Image
                  src={featuredMedia.source_url}
                  layout="responsive"
                  width="888"
                  height="427"
                  alt={featuredMedia["alt_text"]}
                />
              </a>
            </Link>
          )}
        </div>
        <div className="flex-initial w-1/3">
          <div className="ml-9 mb-6">
            <small className="uppercase font-bold text-base">
              {post["_embedded"]["wp:term"][0][0]?.name}.{" "}
            </small>
            <small className="uppercase font-light text-base">
              {getDate(post.modified)}
            </small>
          </div>
          <h2 className="font-semibold text-3xl ml-8 mr-7 mb-7">
            {post.title.rendered}
          </h2>
          <div
            className="ml-9 mr-70px mb-4 font-normal text-base blog-text"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          ></div>
          <div className="flex flex-row ml-9">
            <Image
              src={post?.acf?.author_image.url}
              width={48}
              height={48}
              alt={post["_embedded"]["author"][0].slug}
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <small className="font-semibold text-base">
                {post.acf.author_name}
              </small>
              <small className="font-normal text-base blog-text">
                {post?.acf.job_title}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function OtherPosts({ posts }) {
  // let secondaryPost = [];
  return (
    <section className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 mx-12">
        {posts.map((post, index) => (
          <div key={index}>
            <div className="">
              {
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <Image
                      src={post["_embedded"]["wp:featuredmedia"][0].source_url}
                      layout="responsive"
                      width="462"
                      height="303"
                      alt={post["_embedded"]["wp:featuredmedia"][0]["alt_text"]}
                    />
                  </a>
                </Link>
              }
            </div>
            <div className="mb-6">
              <small className="uppercase font-bold text-base">
                {post["_embedded"]["wp:term"][0][0]?.name}.{" "}
              </small>
              <small className="uppercase font-light text-base">
                {getDate(post.modified)}
              </small>
            </div>
            <h2 className="font-semibold text-3xl mr-7 mb-2">
              {post.title.rendered}
            </h2>
            <div
              className="mr-70px mb-4 font-normal text-base blog-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
