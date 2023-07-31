import React from "react";

export default function CommunitySection() {
  return (
    <section className="mx-8 mb-16 flex flex-col justify-center  gap-12 md:flex-row lg:mx-28 lg:mb-34 lg:gap-32">
      <div className="md:basis-2/5">
        <h3 className="mb-4 text-5xl font-bold text-brand-blue md:mb-8 lg:text-6xl">
          Join our Community
        </h3>
        <p className="text-base text-brand-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          veritatis at placeat tempora expedita provident. Hic perferendis
        </p>
      </div>

      <div className="w-full md:basis-1/2">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Full Name"
            className="h-12 rounded-full pl-16 shadow-md md:h-16"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="h-12 rounded-full pl-16 shadow-md md:h-16"
          />
          <button className="w-1/2 rounded-full bg-brand-blue py-3 text-brand-light lg:py-5">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
