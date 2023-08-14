import Image from "next/image";
import React from "react";

export default function Leadership() {
  const teamMembers = [
    {
      name: "Abebe Kebede",
      title: "General Manager",
      image: "/images/family-bicycle.png",
    },
    {
      name: "Abebe Kebede",
      title: "General Manager",
      image: "/images/family-bicycle.png",
    },
    {
      name: "Abebe Kebede",
      title: "General Manager",
      image: "/images/family-bicycle.png",
    },
  ];
  return (
    <section className="mb-20 flex flex-col  items-center bg-brand-yellow pt-[400px]  pb-11 md:mb-0">
      <h3 className="text-3xl font-bold text-brand-blue">Human Resource</h3>
      <p className="mx-8 mt-5 text-center text-xs font-light text-brand-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit
        voluptatem aspernatur dolorem sed id fugit iure corporis? Magnam, omnis.
      </p>
      <div className="no-scrollbar mt-6 flex h-[335px] w-screen gap-4 overflow-x-scroll pl-8">
        {teamMembers.map((item, index) => (
          <div
            key={index}
            className="flex w-[207px] flex-col items-center rounded-2xl bg-white pt-3 pb-5"
          >
            <div className="h-[237px] w-[180px] rounded-lg px-3">
              <Image
                width={180}
                height={237}
                layout="responsive"
                src={item.image}
                alt={item.title}
              />
            </div>
            <h4 className="text-xl font-bold text-brand-blue">{item.name}</h4>
            <p className="text-xs font-light text-brand-blue">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
