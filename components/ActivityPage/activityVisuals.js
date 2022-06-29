import Image from "next/image";
import React from "react";

export default function ActivityVisuals() {
  const icons = [
    {
      title1: "Food &",
      title2: "Nutrition",
      source: "/images/food.svg",
    },
    {
      title1: "Clean Water",
      title2: "Projects",
      source: "/images/water.svg",
    },
    {
      title1: "Emergency",
      title2: "Support",
      source: "/images/emergency.svg",
    },
  ];
  return (
    <section className="activity-visuals flex flex-col lg:flex-row justify-between items-center py-44 px-113px lg:py-24 lg:pl-36 lg:pr-140px bg-gray-200">
      {icons.map((icon, index) => (
        <div className="flex flex-col mb-24 last:mb-0 lg:mb-0" key={index}>
          <Image
            width={285.31}
            height={254.94}
            layout="fixed"
            src={icon.source}
          />
          <p className="font-semibold text-2xl lg:text-4xl text-center text-purple-text mt-9 lg:mt-14 lg:w-full">
            {icon.title1}
            <br />
            {icon.title2}
          </p>
        </div>
      ))}
    </section>
  );
}
