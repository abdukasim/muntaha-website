import Image from "next/image";
import React from "react";

export default function Leadership() {
  const teamMembers = [
    {
      name: "Abebe Kebede",
      title: "General Manager",
      image: "/images/family-bicycle.png",
    },
    {
      name: "Abebe Kebede",
      title: "General Manager",
      image: "/images/family-bicycle.png",
    },
    {
      name: "Abebe Kebede",
      title: "General Manager",
      image: "/images/family-bicycle.png",
    },
  ];
  return (
    <section className="mb-20 flex flex-col bg-brand-yellow  pt-[400px] pb-11 md:mb-80  md:pt-28">
      <div className="hidden md:block">
        <div className="mb-12 px-8 lg:px-28">
          <h2 className="mb-12 text-3xl font-medium text-brand-blue">
            Our Values
          </h2>
          <div className="flex gap-12">
            <p className="basis-1/2 text-xl text-brand-blue">
              JUSTICE: We take action to address pressing issues in our
              community in pursuit of fairness, humanity and justice. <br />
              <br /> EQUITY: We advance a more equitable region that provides
              opportunity and access for all, recognizing that historic and
              systemic barriers exist based on race, resources and gender.{" "}
              <br /> <br /> DIVERSITY AND INCLUSION: We believe all people –
              regardless of race, ethnicity, religion, gender, gender identity,
              age,, ability or country of origin – are equal and worthy of
              dignity, honor and full inclusion in community life.
              <br /> <br /> EMPATHY: We strive to understand the perspectives of
              children ,individuals, communities and organizations in our
              region, and to ground our actions in this understanding. Our
              experiences – historic and modern-day – create inherent empathy
              with those in need of support or alliance
              <br />
              <br /> Effective Communication: We have an obligation to
              communicate. Here, we take the time to talk with one another . . .
              and to listen. We believe that information is meant to move and
              that information moves people. <br /> <br />
              GENEROSITY: We encourage and practice generosity, and our giving
              is informed by the interests, needs and dignity of the recipients.
              Honor and uphold the dignity of others | Kavod Habriot
            </p>
            <p className="basis-1/2 text-xl text-brand-blue">
              COMMUNITY: We believe our country needs strong, interconnected
              communities and honor Muntaha charitable endowment with an
              enduring commitment to supporting the needy children and the
              community as well...respects all, we treat others as we would like
              to be treated ourselves. We do not tolerate abusive or
              disrespectful treatment. <br />
              <br /> Integrity We feel honored in working to ensure the
              wellbeing of children and people in need, communicate
              transparently, respectfully. Honestly, and sincerely. When we say
              we will do something, we will do it; when we say we can-not or
              will not do something, then we won’t do it.
              <br /> <br /> Excellence: We are satisfied with nothing less than
              the very best in everything we do. We will continue to raise the
              bar for everyone. The great fun here will be for all of us to
              discover just how good we can really be.
              <br />
              <br />{" "}
              <span className="font-semibold">
                WE, the Board of Trustees, the Management, staffs are optimistic
                in making a difference and contribute towards a hunger free
                Ethiopia as the Muntaha Foundation work is powered by our
                mission, vision and values.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:-mb-80">
        <h3 className="ml-8 text-center text-3xl font-medium text-brand-blue md:text-left lg:ml-28">
          Team
        </h3>
        <div className="no-scrollbar mt-6 flex h-[340px] w-screen gap-4 overflow-x-scroll pr-8 pl-8 drop-shadow-lg lg:pl-28">
          {teamMembers.map((item, index) => (
            <div
              key={index}
              className="flex h-[335px] min-w-[207px] flex-col items-center rounded-2xl bg-white pt-3 pb-5"
            >
              <div className="mb-5 h-[237px] w-[180px] rounded-2xl">
                <Image
                  width={180}
                  height={237}
                  className="rounded-2xl"
                  layout="responsive"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h4 className="text-xl font-bold text-brand-blue">{item.name}</h4>
              <p className="text-xs font-light text-brand-blue">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
