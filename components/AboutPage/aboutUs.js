import React from "react";
import FingerprintIcon from "../svgComponents/fingerprint";

export default function AboutUs() {
  return (
    <section className="flex h-[684px] flex-col items-center gap-9 bg-white px-14 pt-12 md:h-max md:flex-row md:items-start md:gap-0 md:px-12 md:pt-[151px] md:pb-[260px] xl:px-36 2xl:px-[233px]">
      <div className="w-14  md:mr-12 md:min-w-[150px] xl:mr-[150px] xl:min-w-[180px] 2xl:min-w-[220px]">
        <FingerprintIcon />
      </div>
      <div className="">
        <h1 className="mb-4 text-center text-3xl font-bold text-brand-blue md:text-left md:text-4xl lg:text-5xl xl:text-6xl 2xl:mb-11 2xl:text-6xl">
          About Muntaha
        </h1>
        <p className="text-center text-[10px] text-brand-blue md:text-justify md:text-sm lg:text-base xl:text-xl">
          Established in January 2021, Muntaha Foundation(MF) is a legally
          registered charitable endowment (CSA Reg NO xxx) founded by w/ro
          Muntaha Jemal . MF is a not-for-profit organization that works to make
          lasting differences in the lives of people living in poverty by
          helping them raise incomes and access basic services, has over all aim
          of improving individual lives and contributes to solving global
          challenges in the areas of access to basic needs of orphans,, highly
          vulnerable children and young adolescents , access to education,
          health Care.
        </p>
      </div>
    </section>
  );
}
