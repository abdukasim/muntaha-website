import Image from "next/image";
import React from "react";

export default function NewsSection() {
  const news = [
    {
      title: "Muntaha Foundation",
      description: "A hunger free Ethiopia",
      image: "/images/family-bicycle.png",
      link: "/",
    },
    {
      title: "Muntaha Foundation",
      description: "A hunger free Ethiopia",
      image: "/images/family-bicycle.png",
      link: "/",
    },
  ];
  return (
    <section className="news-section flex flex-col px-10 py-24 md:pt-72 md:pl-44">
      <div className="">
        <h2 className="font-black text-2xl sm:text-3xl text-purple-500 uppercase mb-14 md:mb-20">
          News and Stories
        </h2>
      </div>
      <div className="flex flex-row  justify-start">
        {news.map((news) => (
          <div className="w-max mr-24 flex flex-col">
            <Image
              width={340}
              height={266}
              layout="responsive"
              src={news.image}
              alt="Washing hands"
            />
            <h3 className="font-bold text-xl text-purple-500 mt-6">
              {news.title}
            </h3>
            <p className="text-base text-purple-500">{news.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
