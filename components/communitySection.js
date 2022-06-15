import React from "react";

export default function CommunitySection() {
  return (
    <section className="news-section flex flex-col px-10 py-24 md:pt-32 md:pb-44 md:px-20 xl:pl-44 bg-brand-gray">
      <div className="">
        <h2 className="font-black text-2xl sm:text-3xl text-purple-500 uppercase mb-5 md:mb-14">
          Join Our Community
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-row  justify-start">
          <input
            type="text"
            className="name-input-sm xl:name-input-lg mr-2  placeholder:text-brand-light placeholder:text-xs placeholder:xl:text-2xl placeholder:md:text-lg placeholder:font-normal placeholder:text-center"
            placeholder="FULL NAME"
          />
          <input
            type="text"
            className="email-input-sm xl:email-input-lg w-full xl:w-834px  placeholder:text-brand-light placeholder:text-xs placeholder:xl:text-2xl placeholder:md:text-lg placeholder:font-normal pl-4"
            placeholder="EMAIL ADDRESS"
          />
        </div>
        <button className="subscribe-btn-sm xl:subscribe-btn-lg uppercase text-white font-bold text-sm  mt-3 xl:text-2xl md:text-lg xl:mt-0 w-full">
          subscribe
        </button>
      </div>
    </section>
  );
}
