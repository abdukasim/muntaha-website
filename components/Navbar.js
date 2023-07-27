import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./Navbar/logo";
import LogoSmall from "./Navbar/logo-small";

export default function Navbar({ transparent }) {
  const drawnNav = React.useRef(null)
  const navbar = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false);
  const [smallScreen, setSmallScreen] = React.useState(true)

  const navLinks = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Works",
      link: "/activity",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Commuity",
      link: "/get-involved",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const toggleNav = () => {
    drawnNav.current.style.top = drawnNav.current.style.top === "0%" ? "-100%" : "0%"
  }

  const handleScreenSize = () => {
    if (window.innerWidth <= 768) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }

    drawnNav.current.style.top = "-100%"
    navbar.current.style.position = transparent ? "absolute" : "relative"
    navbar.current.style.backgroundColor = transparent ? "transparent" : "white"
  }

  React.useEffect(() => {
    handleScreenSize()

    window.onresize = handleScreenSize
  }, [])

  return (
    <nav className="w-full top-0 left-0 z-10
      flex items-center justify-between p-8
      md:p-10 md:px-20
    " ref={navbar}>

      {/* SMALL SCREEN NAV */}
      <div className="fixed top-0 left-0 w-full h-full flex md:hidden flex-col items-center text-sm bg-black/75 transition-all" ref={drawnNav}>
        <div className="flex flex-col items-center py-8 w-full bg-gray-300">
          <div className="flex items-center">
            <FaBars onClick={toggleNav} className="text-brand-blue text-2xl mr-4" />
            <Link href="/">
              <button>
                {smallScreen
                  ? <LogoSmall color={transparent ? "#0B77C2" : "#0B77C2"} textColor={transparent ? "#0B77C2" : "#0B77C2"} />
                  : <Logo color={transparent ? "#0B77C2" : "#0B77C2"} textColor={transparent ? "#0B77C2" : "#0B77C2"} />}
              </button>
            </Link>
          </div>
          <div className="flex flex-col my-2 mt-8">
            {navLinks.map((link, index) => <Link href={link.link} key={index}>
              <button className="text-brand-blue m-2 my-4">{link.name}</button>
            </Link>)}
          </div>
        </div>
      </div>
      {/* SMALL SCREEN NAV END */}


      {/* LEFT SIDE HEADER */}
      <div className="left flex items-center">
        {transparent
          ? <FaBars onClick={toggleNav} className="text-white text-3xl flex md:hidden" />
          : <FaBars onClick={toggleNav} className="text-brand-blue text-3xl flex md:hidden" />}

        <div className="logo flex items-center mx-4">
          <Link href="/">
            <button>
              {smallScreen
                ? <LogoSmall color={transparent ? "#fff38d" : "#0B77C2"} textColor={transparent ? "#fff" : "#0B77C2"} />
                : <Logo color={transparent ? "#fff38d" : "#0B77C2"} textColor={transparent ? "#fff" : "#0B77C2"} />}
            </button>
          </Link>
        </div>
      </div>
      {/* LEFT SIDE HEADER END */}


      {/* RIGHT SIDE HEADER */}
      <div className="flex items-center">
        <div className="hidden md:flex items-center mx-4">
          {navLinks.map((link, index) => <Link href={link.link} key={index}>
            {transparent
              ? <button className="text-white text-base font-light mx-6">{link.name}</button>
              : <button className="text-brand-blue text-base font-light mx-6">{link.name}</button>}
          </Link>)}
        </div>

        <button className="text-brand-blue bg-brand-yellow rounded-full text-xs p-2 px-6 md:text-base md:p-2 md:px-8">Donate Now</button>
      </div>
      {/* RIGHT SIDE HEADER END */}

    </nav>
  );
}
