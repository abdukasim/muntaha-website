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
    <section className="footer-section flex flex-col justify-center bg-brand-blue py-8">
      <div className="mx-auto md:mx-0">
        <div className="md:flex  md:items-center md:justify-between mx-20 lg:my-20">
          <ul className="flex flex-col space-y-3 lg:space-y-8 justify-between xl:justify-center  xl:w-max text-white  font-normal text-xs lg:text-xl xl:m-0 mb-8 sm:text-sm h-full">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <Link href={link.link}>
                  <a className="hover:text-purple-500">
                    {link.name.toUpperCase()}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="order-last text-xs lg:text-base text-brand-yellow mb-6 w-64 lg:w-[400px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod in ab
            velit voluptatum saepe, minima ut optio? Quibusdam, quo dolore!
          </p>
          <div className="order-first mb-12 md:mb-0 w-40 lg:w-[332px]">
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
            <ul className="flex flex-row justify-center items-center space-x-2 lg:space-x-5">
              {iconLinks.map((iconLink, index) => (
                <li key={index} className="w-5 lg:w-10">
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
          <p className="text-center text-white text-xs lg:text-base">
            Muntaha Foundation. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
