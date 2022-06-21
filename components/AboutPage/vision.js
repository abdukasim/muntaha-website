import Image from "next/image";
import React from "react";

export default function Vision() {
  return (
    <section className="vision-section py-28 lg:pt-88px lg:pb-120px pl-12 lg:pl-56 pr-8 lg:pr-88px bg-gray-200">
      <div className="flex flex-col lg:flex-row-reverse lg:items-center mb-24 justify-center lg:justify-between">
        <div className="self-center mb-16">
          <Image
            width={214.94}
            height={176}
            // layout="responsive"
            src="/images/visionIcon.svg"
            alt="Vision Icon"
          />
        </div>
        <div className="">
          <h2 className="font-black text-3xl lg:text-4xl uppercase text-center lg:text-justify ">
            our vision
          </h2>
          <p className="font-light text-base lg:text-2xl text-justify mt-6 lg:w-544px">
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
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:items-center mb-24 justify-center lg:justify-between">
        <div className="self-center mb-16">
          <Image
            width={214.94}
            height={176}
            // layout="responsive"
            src="/images/missionIcon.png"
            alt="Mission Icon"
          />
        </div>
        <div className="">
          <h2 className="font-black text-3xl lg:text-4xl uppercase text-center lg:text-justify ">
            our mission
          </h2>
          <p className="font-light text-base lg:text-2xl text-justify mt-6 lg:w-544px">
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
        </div>
      </div>
    </section>
  );
}
