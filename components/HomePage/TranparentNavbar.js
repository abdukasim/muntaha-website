import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

export default function TransparentNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
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
  return (
    <nav className="xl:mx-28 xl:pt-7">
      {isOpen && (
        <div className="md:hidden fixed py-8 flex flex-col items-center justify-between bg-white z-50 h-screen w-screen">
          <Link href="/">
            <a>
              <Image
                width={45}
                height={71}
                color="black"
                src="/images/Asset2.png"
                alt="Muntaha Foundation"
              />
            </a>
          </Link>
          <ul className="flex flex-col text-black justify-between items-center font-normal text-2xl">
            {navLinks.map((link, index) => (
              <li key={index} className="mb-7">
                <Link href={link.link}>
                  <a
                    className="hover:text-purple-500"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.name.toUpperCase()}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Image
            width={128}
            height={71}
            src="/images/Asset1.png"
            alt="Muntaha Foundation"
          />
        </div>
      )}
      <div className="flex  mx-4 items-center justify-between h-20">
        <div className="">
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-white text-3xl lg:hidden" />
          </button>
          <Link href="/">
            <a className="hidden lg:block">
              <Image
                width={45}
                height={71}
                color="black"
                src="/images/white1.svg"
                alt="Muntaha Foundation"
              />
              <Image
                width={128}
                height={71}
                src="/images/white.svg"
                alt="Muntaha Foundation"
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden lg:flex text-white items-center font-medium text-base h-full">
            {navLinks.map((link, index) => (
              <li key={index} className="mr-7">
                <Link href={link.link}>
                  <a className="hover:text-purple-500">
                    {link.name.toUpperCase()}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <button className="block text-purple-500 bg-white hover:bg-purple-500 hover:text-white rounded-md px-2  sm:px-6 py-1 sm:py-2 lg:px-10 lg:py-4 lg:ml-3">
            DONATE NOW
          </button>
        </div>
      </div>
    </nav>
  );
}
