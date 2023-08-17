import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./Navbar/logo";
import LogoSmall from "./Navbar/logo-small";
import { useRouter } from "next/router"

export default function Navbar({ transparent }) {
  const drawnNav = React.useRef(null)
  const navbar = React.useRef(null)
  const overlay = React.useRef(null)
  const [smallScreen, setSmallScreen] = React.useState(true)
  const router = useRouter()

  const navLinks = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Works",
      link: "/works",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Commuity",
      link: "/community",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const toggleNav = () => {
    drawnNav.current.style.top = drawnNav.current.style.top === "0%" ? "-100%" : "0%"
    overlay.current.style.display = overlay.current.style.display === "none" ? "flex" : "none"
  }

  const handleScreenSize = () => {
    if (window.innerWidth <= 1024) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }

    drawnNav.current.style.top = "-100%"
    overlay.current.style.display = "none"
    navbar.current.style.width = "100%" //window.innerWidth + "px"
    navbar.current.style.position = transparent ? "absolute" : "relative"
    navbar.current.style.backgroundColor = transparent ? "transparent" : "white"
  }

  React.useEffect(() => {
    handleScreenSize()

    window.onresize = handleScreenSize
  }, [])

  return (
    <nav className="w-full top-0 left-0 z-10 m-0
      flex items-center justify-between p-8
      md:p-6 md:px-12
      lg:p-10 lg:px-16
    " ref={navbar}>

      {/* SMALL SCREEN NAV */}
      <div className="absolute hidden bg-black/60 top-0 left-0 z-20 w-screen h-screen transition-all" ref={overlay} onClick={toggleNav}></div>
      <div className="fixed top-[-100%] left-0 w-full flex md:hidden flex-col items-center text-sm z-30 transition-all" ref={drawnNav}>
        <div className="flex flex-col items-center py-8 w-full bg-gray-300">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center ml-8">
              <FaBars onClick={toggleNav} className="text-brand-blue text-3xl mr-4" />
              <Link href="/">
                <button>
                  {smallScreen
                    ? <LogoSmall color={transparent ? "#0B77C2" : "#0B77C2"} textColor={transparent ? "#0B77C2" : "#0B77C2"} />
                    : <Logo color={transparent ? "#0B77C2" : "#0B77C2"} textColor={transparent ? "#0B77C2" : "#0B77C2"} />}
                </button>
              </Link>
            </div>
            <button className="text-white bg-brand-blue rounded-full text-xs p-2 px-6 mr-8">Donate Now</button>
          </div>
          <div className="flex flex-col my-2 mt-8">
            {navLinks.map((link, index) => <Link href={link.link} key={index}>
              <button className="text-brand-blue m-2 my-4" style={{
                fontWeight: router.pathname === link.link ? "bold" : "normal"
              }}>{link.name}</button>
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
              ? <button className="
              text-white font-light
                md:text-sm lg:text-base
                mx-3 lg:mx-6
              " style={{
                  color: router.pathname === link.link ? '#fff38d' : 'white',
                  fontWeight: router.pathname === link.link ? "bold" : "normal"
                }}>{link.name}</button>
              : <button className="
              text-brand-blue font-light
                md:text-sm lg:text-base
                mx-3 lg:mx-6
              " style={{
                  fontWeight: router.pathname === link.link ? "bold" : "normal"
                }}>{link.name}</button>}
          </Link>)}
        </div>

        <button className="text-brand-blue bg-brand-yellow rounded-full text-xs p-2 px-6 md:text-sm lg:text-base md:p-2 md:px-4 lg:px-6">Donate Now</button>
      </div>
      {/* RIGHT SIDE HEADER END */}

    </nav>
  );
}
