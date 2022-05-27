import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="flex flex-col lg:flex-row md:mt-0 lg:about-bg">
        <div className="w-full mt-20 lg:mt-40">
          <Image
            width={720}
            height={888}
            layout="responsive"
            color="black"
            src="/images/aboutImageLg.png"
            alt="Children"
          />
        </div>
        <div className="px-10 py-24 md:pt-72 md:pl-20 bg-gray-200 md:bg-inherit flex items-start flex-col w-full">
          <h2 className="font-black text-3xl text-purple-500 uppercase mb-6">
            Who we are
          </h2>
          <p className="mb-6 pb-3 font-light text-base md:text-2xl md:about-p-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            ipsum quis aliquet semper ultricies. Feugiat justo at fermentum et
            proin. At tellus elementum eget scelerisque. Sodales sit facilisi
            senectus vitae faucibus magna. Neque adipiscing amet eget tellus.
            Vitae eget morbi tellus, sit. Blandit vel tortor facilisis quam
            turpis condimentum aliquam. Donec molestie suspendisse erat et.
            Morbi habitant a massa arcu, varius facilisis egestas. Facilisis
            sollicitudin neque amet placerat et congue suspendisse. Eget sed
            arcu ac amet auctor at maecenas. Egestas ut purus, dui quis ut. Sed
            et aenean amet malesuada
          </p>
          <a
            href=""
            className="uppercase text-purple-400 font-bold text-xl md:text-3xl bg-transparent border border-solid border-purple-400 rounded-md drop-shadow-lg py-4 md:py-6 px-12 md:px-14 hover:bg-purple-400 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            learn more
          </a>
        </div>
      </div>
    </section>
  );
}
