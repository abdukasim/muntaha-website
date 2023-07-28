import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const navLinks = [
    {
      name: "Terms and Conditions",
      link: "/terms",
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const iconLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com/MuntahaFoundation/",
      icon: "/images/fb.svg",
    },
    {
      name: "instagram",
      link: "",
      icon: "/images/ig.svg",
    },
    {
      name: "telegram",
      link: "https://t.me/muntaha_foundation",
      icon: "/images/telegram.svg",
    },
    {
      name: "tiktok",
      link: "https://www.tiktok.com/company/muntaha-foundation/",
      icon: "/images/tiktok.svg",
    },
  ];
  return (
    <section className="footer-section flex flex-col justify-center bg-brand-blue pb-8">
      <div className="mx-auto md:mx-0">
        <div className="mx-12 my-10  md:flex md:items-center md:justify-between lg:mx-20">
          <ul className="mb-8 flex h-full flex-col space-y-2 text-xs  font-normal text-white  sm:text-sm md:mb-0 lg:text-lg xl:m-0 xl:w-max xl:justify-center 2xl:text-xl">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <Link href={link.link}>
                  <a className="">{link.name.toUpperCase()}</a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="order-last mb-6 w-64 text-xs text-brand-yellow lg:w-[400px] lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod in ab
            velit voluptatum saepe, minima ut optio? Quibusdam, quo dolore!
          </p>
          <div className="order-first mb-12 w-40 md:mb-0 lg:w-[290px]">
            <Link href="/" className="">
              <Image
                width={165}
                height={75}
                layout="responsive"
                src="/images/footer-logo.svg"
                alt="Muntaha Foundation"
              />
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <ul className="flex flex-row items-center justify-center space-x-2 lg:space-x-5">
              {iconLinks.map((iconLink, index) => (
                <li key={index} className="w-5 lg:w-8">
                  <a href={iconLink.link}>
                    <Image
                      width={21}
                      height={21}
                      layout="responsive"
                      src={iconLink.icon}
                      alt={iconLink.name}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-xs text-white lg:text-base">
            Muntaha Foundation. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
