import React from "react";

export default function CommunitySection() {
  return (
    <section className="news-section flex flex-col px-10 py-24 md:pt-72 md:pl-44 bg-brand-gray">
      <div className="">
        <h2 className="font-black text-2xl sm:text-3xl text-purple-500 uppercase mb-5 md:mb-14">
          Join Our Community
        </h2>
      </div>
      <div className="flex flex-row  justify-start">
        <input
          type="text"
          className="name-input-sm md:name-input-lg mr-2 placeholder:text-brand-light placeholder:text-xs placeholder:font-normal placeholder:text-center"
          placeholder="FULL NAME"
        />
        <input
          type="text"
          className="email-input-sm md:email-input-lg w-full  placeholder:text-brand-light placeholder:text-xs placeholder:font-normal pl-4"
          placeholder="EMAIL ADDRESS"
        />
      </div>
      <button className="subscribe-btn uppercase text-white font-bold text-sm py-4 mt-3">
        subscribe
      </button>
    </section>
  );
}
