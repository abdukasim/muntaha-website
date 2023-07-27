import React from "react";

export default function CommunitySection() {
  return (
    <section className="mx-8 mb-34 flex flex-col items-center  justify-center gap-12 md:mx-28 lg:flex-row lg:gap-32">
      <div className="md:basis-2/5">
        <h3 className="mb-4 text-4xl font-bold text-brand-blue md:mb-12 lg:text-6xl xl:text-7xl">
          Join our Community
        </h3>
        <p className="text-lg text-brand-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          veritatis at placeat tempora expedita provident. Hic perferendis
          mollitia harum aut eveniet explicabo vel, libero sequi quasi quo.
          Quisquam, autem neque!
        </p>
      </div>

      <div className="w-full md:basis-1/2">
        {/* create two input fields for full name and email address  */}
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Full Name"
            className="h-8 rounded-full pl-16 shadow-md md:h-24"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="h-8 rounded-full pl-16 shadow-md md:h-24"
          />
          <button className="w-1/2 rounded-full bg-brand-blue py-5 text-brand-light">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
