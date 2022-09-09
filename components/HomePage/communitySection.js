import React from "react";

export default function CommunitySection() {
  return (
    <section className="news-section  px-10 py-24 md:pt-32 md:pb-44 md:px-20 xl:pl-44 bg-brand-gray">
      <div className="">
        <h2 className="font-black text-2xl sm:text-3xl text-purple-500 uppercase mb-5 md:mb-14">
          Join Our Community
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col sm:flex-row  justify-start sm:w-full">
          <input
            type="text"
            className="community-input-bg sm:name-input-sm xl:name-input-lg sm:basis-1/4 mb-2 sm:mr-2  placeholder:text-brand-light placeholder:text-xs placeholder:xl:text-2xl placeholder:md:text-lg placeholder:font-normal pl-4"
            placeholder="FULL NAME"
          />
          <input
            type="text"
            className="community-input-bg sm:email-input-sm xl:email-input-lg sm:basis-1/2 grow  placeholder:text-brand-light placeholder:text-xs placeholder:xl:text-2xl placeholder:md:text-lg placeholder:font-normal pl-4"
            placeholder="EMAIL ADDRESS"
          />
        </div>
        <button className="subscribe-btn-sm xl:subscribe-btn-lg basis-1/4  uppercase  text-white font-bold text-sm  mt-3 py-3 xl:text-2xl md:text-lg xl:mt-0  xl:px-90px">
          subscribe
        </button>
      </div>
    </section>
  );
}
