import React from "react";

export default function DonationSection() {
  return (
    <section className="donation-section donation-pattern-sm md:donation-pattern-lg bg-no-repeat bg-cover">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="px-10 pt-16 pb-10 md:py-28 lg:pl-44  md:bg-inherit flex items-start flex-col w-full md:w-max">
          <h2 className="font-black text-3xl text-white mb-2">Get Involved.</h2>
          <h2 className="font-black text-3xl text-white mb-6">Donate Now.</h2>
          <p className="mb-6 pb-3 font-light text-base text-white md:text-2xl md:about-p-sm">
            Blandit vel tortor facilisis quam turpis condimentum aliquam. Donec
            molestie suspendisse erat et. Morbi habitant a massa arcu, varius
            facilisis egestas. Facilisis sollicitudin neque amet placerat et
            congue suspendisse. Eget sed arcu ac amet auctor at maecenas.
            Egestas ut purus, dui quis ut. Sed et aenean amet malesuada
          </p>
        </div>
        <div className="lg:mt-20 lg:mx-14 w-full">
          <div className="flex flex-row items-center justify-center mb-6 mx-10 xl:ml-96 ">
            <button className="py-3 w-full bg-white uppercase rounded-tl-md rounded-bl-md">
              give once
            </button>
            <button className="py-3 w-full bg-purple-500 text-white uppercase rounded-br-md rounded-tr-md">
              monthly
            </button>
          </div>
          <div className="flex flex-col mx-10 xl:ml-96 mb-16">
            <div className="bg-gray-200 rounded-tr-md rounded-tl-md py-5 md:px-18">
              <p className="font-medium text-base sm:text-lg md:text-2xl text-center">
                Choose an amount to give per month
              </p>
            </div>
            <div className=" bg-white rounded-br-md rounded-bl-md grid grid-cols-3 gap-4 p-5 md:p-8">
              <button className="py-4 md:py-7 sm:px-7 md:px-8 bg-gray-200 rounded-md">
                <p className="text-center text-xs sm:text-base">Br.50</p>
              </button>
              <button className="py-4 md:py-7 sm:px-7 md:px-8 bg-gray-200 rounded-md">
                <p className="text-center text-xs sm:text-base">Br.100</p>
              </button>
              <button className="py-4 md:py-7 sm:px-7 md:px-8 bg-gray-200 rounded-md">
                <p className="text-center text-xs sm:text-base">Br.500</p>
              </button>
              <button className="py-4 md:py-7 sm:px-7 md:px-8 bg-gray-200 rounded-md">
                <p className="text-center text-xs sm:text-base">Br.1000</p>
              </button>
              <input
                className="py-4 md:py-7 sm:px-7 md:px-8 bg-gray-200 rounded-md col-span-2 placeholder:text-center placeholder:text-xs placeholder:sm:text-base placeholder:text-black"
                placeholder="Other Amount"
              />
              <button className="col-span-3 py-4 px-14 md:px-18 bg-purple-500 text-white uppercase rounded-md">
                donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
