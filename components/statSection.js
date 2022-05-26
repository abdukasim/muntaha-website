import Image from "next/image";
import React from "react";

export default function StatSection() {
  return (
    <section className="stat-section flex items-center justify-center my-40">
      <div className="flex flex-col stat-pattern outline-16 md:w-max md:items-center md:justify-center outline-sky-blue outline-offset-4 outline m-3">
        <h3 className="my-70px px-4 text-white font-normal text-lg sm:text-xl text-center uppercase">
          at muntaha foundation we have provided
        </h3>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mb-70px md:ml-32">
            <div className="mb-9 text-center">
              <Image
                width={116.67}
                height={81.51}
                src="/images/meal-icon.svg"
                alt="Meal icon"
              />
            </div>
            <span className="text-white font-normal text-xl sm:text-2xl text-center">
              36,000 Meals
            </span>
          </div>
          <div className="flex flex-col mb-70px md:mx-40">
            <div className="mb-9 text-center">
              <Image
                width={116.67}
                height={81.51}
                src="/images/family-icon.svg"
                alt="Meal icon"
              />
            </div>
            <span className="text-white font-normal text-xl sm:text-2xl text-center">
              For 56 Families
            </span>
          </div>
          <div className="flex flex-col mb-70px md:mr-32">
            <div className="mb-9 text-center">
              <Image
                width={116.67}
                height={81.51}
                src="/images/woman-icon.svg"
                alt="Meal icon"
              />
            </div>
            <span className="text-white font-normal text-xl sm:text-2xl text-center">
              Education
              <br />
              For 35 Young Women
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
