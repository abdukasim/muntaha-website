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
    <section className="ml-8 mb-9 lg:ml-28">
      <h3 className="mb-9 text-2xl font-normal text-brand-blue lg:mb-16 lg:text-5xl">
        News and Stories
      </h3>
      <div className="no-scrollbar flex h-[280px] gap-7 overflow-x-scroll lg:h-[450px]">
        {news.map((item, index) => (
          <div key={index} className="w-60 lg:w-[400px]">
            <div className="w-60 lg:w-[400px]">
              <Image
                width={243}
                height={128}
                layout="responsive"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex h-32 min-w-full flex-col items-start justify-center pl-5 shadow-xl lg:h-44 lg:pl-8">
              <h4 className="text-sm font-bold text-brand-blue lg:text-3xl">
                {item.title}
              </h4>
              <p className="mb-2 text-xs font-normal text-brand-blue lg:text-sm">
                {item.description}
              </p>
              <button className="w-max rounded-full bg-brand-yellow px-5 py-2 text-[7px] text-brand-blue lg:text-base">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
