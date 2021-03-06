import React from "react";
export default function Header() {
  return (
    <div className="flex flex-col mx-4 mt-64 md:my-auto items-center justify-center">
      <h1 className="text-white text-center font-black text-3xl sm:text-5xl md:text-8xl tracking-wider mb-3">
        HUNGER FREE ETHIOPIA
      </h1>
      <p className="font-light text-lg sm:text-xl text-white text-center mb-16 hero-p-small md:hero-p-lg leading-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis diam
        fringilla sed purus massa aliquam. Tincidunt vitae, nunc turpis pretium
        tincidunt.
      </p>
      <a
        href=""
        className="text-white font-bold text-xl md:text-3xl bg-transparent border border-solid border-white rounded-md drop-shadow-lg py-2 sm:py-4 md:py-6 px-10 sm:px-12 md:px-14 hover:bg-white hover:text-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
      >
        DONATE NOW
      </a>
    </div>
  );
}
