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
    <section className="footer-section flex flex-col justify-center bg-brand-blue py-12">
      <div className="mx-auto">
        <ul className="flex flex-col space-y-3 justify-between xl:justify-center  xl:w-max text-white  font-normal text-xs sm:mx-6 xl:m-0 mb-8 sm:text-sm h-full">
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
        <p className="text-xs text-brand-yellow mb-6 w-64">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod in ab
          velit voluptatum saepe, minima ut optio? Quibusdam, quo dolore!
        </p>
        <div className="mb-12">
          <Link href="/">
            <a>
              <Image
                width={165}
                height={75}
                // layout="responsive"
                src="/images/footer-logo.svg"
                alt="Muntaha Foundation"
              />
            </a>
          </Link>
        </div>
        <div className="mb-2">
          <ul className="flex flex-row justify-center items-center space-x-2">
            {iconLinks.map((iconLink, index) => (
              <li key={index} className="">
                <a href={iconLink.link}>
                  <Image
                    width={21}
                    height={21}
                    // layout="responsive"
                    src={iconLink.icon}
                    alt={iconLink.name}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className=" text-white text-xs">
          Muntaha Foundation. All Rights Reserved
        </p>
      </div>
    </section>
  );
}
