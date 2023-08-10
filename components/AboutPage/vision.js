import Image from "next/image";
import React from "react";

export default function Vision() {
  return (
    <section className="relative">
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

      {/* card with height more than parent container */}
      <div className="relative mx-auto max-w-7xl px-12 py-12">
        <div className="relative z-10 -my-80  rounded-3xl bg-white px-11 pt-14 pb-28 shadow-xl">
          <div className="mb-9 flex flex-col items-center gap-4">
            <Image
              src="/images/vision.svg"
              width={56}
              height={56}
              alt="vision"
            />
            <h2 className="text-2xl font-bold text-brand-blue">Our Vision</h2>
            <p className="text-center text-xs font-light text-brand-blue">
              To be a leading reliable center - where children in need are
              served for a healthy transition to adulthood & realize their full
              potential...
            </p>
          </div>

          <div className="mb-9 flex flex-col items-center gap-4">
            <Image
              src="/images/mission.svg"
              width={56}
              height={56}
              alt="vision"
            />
            <h2 className="text-2xl font-bold text-brand-blue">Our Mission</h2>
            <p className="text-center text-xs font-light text-brand-blue">
              To be a leading reliable center - where children in need are
              served for a healthy transition to adulthood & realize their full
              potential...
            </p>
          </div>

          <div className="mb-9 flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-brand-blue">Our Values</h2>
            <p className="text-center text-xs font-light text-brand-blue">
              JUSTICE: We take action to address pressing issues in our
              community in pursuit of fairness, humanity and justice. <br />{" "}
              EQUITY: We advance a more equitable region that provides
              opportunity and access for all, recognizing that historic and
              systemic barriers exist based on race, resources and gender.{" "}
              <br /> DIVERSITY AND INCLUSION: We believe all people – regardless
              of race, ethnicity, religion, gender, gender identity, age,,
              ability or country of origin – are equal and worthy of dignity,
              honor and full inclusion in community life. <br /> EMPATHY: We
              strive to understand the perspectives of children ,individuals,
              communities and organizations in our region, and to ground our
              actions in this understanding. Our experiences – historic and
              modern-day – create inherent empathy with those in need of support
              or alliance
              <br /> Effective Communication :We have an obligation to
              communicate. Here, we take the time to talk with one another . . .
              and to listen. We believe that information is meant to move and
              that information moves people. <br /> GENEROSITY: We encourage and
              practice generosity, and our giving is informed by the interests,
              needs and dignity of the recipients. Honor and uphold the dignity
              of others | Kavod Habriot <br /> COMMUNITY: We believe our country
              needs strong, interconnected communities and honor Muntaha
              charitable endowment with an enduring commitment to supporting the
              needy children and the community as well...respects all, we treat
              others as we would like to be treated ourselves. We do not
              tolerate abusive or disrespectful treatment. Integrity We feel
              honored in working to ensure the wellbeing of children and people
              in need, communicate transparently, respectfully. Honestly, and
              sincerely. When we say we will do something, we will do it; when
              we say we can-not or will not do something, then we won’t do it.
              <br /> Excellence: We are satisfied with nothing less than the
              very best in everything we do. We will continue to raise the bar
              for everyone. The great fun here will be for all of us to discover
              just how good we can really be. WE, the Board of Trustees, the
              Management, staffs are optimistic in making a difference and
              contribute towards a hunger free Ethiopia as the Muntaha
              Foundation work is powered by our mission, vision and values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
