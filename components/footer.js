import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const navLinks = [
    {
      name: "Who we are",
      link: "/about",
    },
    {
      name: "What we do",
      link: "/activity",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Get involved",
      link: "/get-involved",
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
      name: "twitter",
      link: "https://twitter.com/MuntahaFoundation",
      icon: "/images/twitter.svg",
    },
    {
      name: "telegram",
      link: "https://t.me/muntaha_foundation",
      icon: "/images/telegram.svg",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/muntaha-foundation/",
      icon: "/images/linkedin.svg",
    },
  ];
  return (
    <section className="footer-section flex flex-col justify-center bg-brand-dark">
      <div className="flex flex-col xl:flex-row xl:justify-between items-center xl:mx-40">
        <div className="mt-12 mb-12 ">
          <Link href="/">
            <a>
              <Image
                width={298}
                height={122}
                // layout="responsive"
                src="/images/footer-logo.svg"
                alt="Muntaha Foundation"
              />
            </a>
          </Link>
        </div>
        <ul className="flex flex-row justify-between xl:justify-center  xl:w-max text-white items-center font-normal text-xs mx-1 sm:mx-6 xl:m-0 mb-12 sm:text-sm h-full">
          {navLinks.map((link, index) => (
            <li key={index} className=" lg:mx-4 mx-1">
              <Link href={link.link}>
                <a className="hover:text-purple-500">
                  {link.name.toUpperCase()}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="mx-12 md:mx-40 mb-12"
        style={{ border: "1px solid rgba(247, 244, 250, 0.28)" }}
      ></div>
      <div className="mb-8">
        <ul className="flex flex-row justify-center  items-center ">
          {iconLinks.map((iconLink, index) => (
            <li key={index} className="mx-8">
              <a href={iconLink.link}>
                <Image
                  width={26}
                  height={26}
                  // layout="responsive"
                  src={iconLink.icon}
                  alt={iconLink.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-xs font-light text-white uppercase mb-12">
        all rights reserved. muntaha foundation 2022.
      </p>
    </section>
  );
}
