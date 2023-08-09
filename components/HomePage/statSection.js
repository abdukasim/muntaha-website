import Image from "next/image";
import React from "react";
import CommunitySection from "./communitySection";
import FingerprintIcon from "../svgComponents/fingerprint";
import GearIcon from "../svgComponents/gear";

export default function StatSection() {
  const stats = [
    {
      icon: "/images/meal-shared.svg",
      alt: "meal",
      stat: "97k",
      title: "Meals Shared",
    },
    {
      icon: "/images/family.svg",
      alt: "family",
      stat: "379",
      title: "Families Aided",
    },
    {
      icon: "/images/female-child.svg",
      alt: "female child",
      stat: "16",
      title: "children education support",
    },
    {
      icon: "/images/health-support.svg",
      alt: "health",
      stat: "17",
      title: "Mother Health Support",
    },
    {
      icon: "/images/check.svg",
      alt: "check mark",
      stat: "25",
      title: "Morther Life Skill Training",
    },
    {
      icon: "/images/user.svg",
      alt: "kid",
      stat: "40",
      title: "Kids Sport Activities",
    },
    {
      icon: "/images/heart.svg",
      alt: "heart",
      stat: "400",
      title: "mothers & child clothing provided",
    },
  ];
  return (
    <section className="relative mb-20 md:mb-0">
      {/* Background image */}
      <Image
        src="/images/heroImage.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt=""
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-brand-blue opacity-90" />

      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:py-16 md:px-12 lg:px-28">
        {/* Stats Card */}
        <div className="relative z-10 -my-28 rounded-3xl bg-white py-5 text-brand-blue shadow-lg md:mb-0">
          <h4 className="text-center text-sm font-light ">
            At Muntaha, We have Provided
          </h4>
          <div className="mt-5 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-3 md:px-3 lg:px-0">
            {stats.map((item) => (
              <div className="flex items-center gap-5" key={item.title}>
                <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="">
                  <h5 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                    {item.stat}
                  </h5>
                  <p className="max-w-[120px] text-sm font-normal">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="-ml-4 mt-20 -mb-12 w-screen bg-brand-yellow py-12 px-8 md:ml-0 md:mt-12 md:mb-0 md:block md:w-full md:bg-inherit  md:px-0  md:py-0">
          <div className="mb-20 flex flex-col items-center gap-5 md:flex-row md:gap-20">
            <div className="h-14 w-14 md:h-32 md:min-w-[128px] lg:h-52 lg:min-w-[208px]">
              <FingerprintIcon alternate={true} />
            </div>
            <div className="flex flex-col justify-center md:block">
              <h3 className="mb-4 text-center text-3xl font-bold text-brand-blue md:text-left md:text-white">
                About Muntaha
              </h3>
              <p className="mb-4 text-center text-base font-light text-brand-blue md:text-left md:text-white">
                Established in January 2021, Muntaha Foundation(MF) is a legally
                registered charitable endowment (CSA Reg NO xxx) founded by w/ro
                Muntaha Jemal. MF is a not-for-profit organization that works to
                make lasting differences in the lives of people living in
                poverty by helping them raise incomes and access basic services,
                has over all aim of improving individual lives and contributes
                to solving global challenges in the areas of access to basic
                needs of orphans,, highly vulnerable children and young
                adolescents , access to education, health Care.
              </p>
              <button className="full mx-12 rounded-full bg-brand-blue px-16 py-4 text-lg text-brand-yellow md:mx-0 md:bg-brand-yellow md:text-brand-blue">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 md:flex-row md:gap-20">
            <div className="h-14 w-14 md:h-32 md:min-w-[128px] lg:h-52 lg:min-w-[208px]">
              <GearIcon />
            </div>
            <div className="flex flex-col justify-center md:block">
              <h3 className="mb-4 text-center text-3xl font-bold text-brand-blue md:text-left md:text-white">
                What We do
              </h3>
              <p className="mb-4 text-center text-base font-light text-brand-blue md:text-left md:text-white">
                These core tenets will guide how we seek to build authentic
                relationships with diverse partners and communities – including
                the local and national global nonprofit community; cultural,
                religious and business institutions; donors; peer funders and
                civic partners. Developed and adopted through collaborative
                dialogue among our board of trustees and staff, the following
                statements mutually reinforce and support each other. Taken
                together, they define how, why and where we aim to lead and
                partner.
              </p>
              <button className="full mx-12 rounded-full bg-brand-blue px-16 py-4 text-lg text-brand-yellow md:mx-0 md:bg-brand-yellow md:text-brand-blue">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
