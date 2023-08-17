/* eslint-disable react/jsx-key */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Hero from "../Hero/Hero";
import { FaCaretLeft, FaCaretRight, FaCircle, } from "react-icons/fa"

const ChildOne = () => {
  return (
    <div className="flex flex-col justify-start px-3 lg:px-10">
      <h1 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold leading-none">{"Let's Make"}</h1>
      <h1 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold leading-none">Ethiopia Hunger</h1>
      <h1 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold leading-none">Free</h1>
      <p className="hidden md:block text-left my-3 md:my-6 md:w-[435px] text-xs md:text-sm lg:text-base text-white/80">
        We are dedicated to our mission of making Ethiopia Hunger Free by providing food and support to those in need.
        Our goal is to provide them with the support and resources they need to live healthier and happier lives.
      </p>
      <p className="block md:hidden text-left my-3 md:my-6 w-[225px] text-xs md:text-base text-white/80">
        We are dedicated to our mission of making Ethiopia Hunger Free by providing food and support to those in need.
      </p>
      <button className="self-start text-brand-blue bg-brand-yellow rounded-full text-xs p-2 px-6 md:text-sm lg:text-xl md:p-2 md:px-4 lg:p-3.5 lg:px-10">Donate Now</button>
    </div>
  )
}

const ChildTwo = () => {
  return (
    <div className="flex flex-col justify-start px-3 lg:px-10">
      <h1 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold leading-none">We Are</h1>
      <h1 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold leading-none">Here To Make</h1>
      <h1 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold leading-none">Ethiopia Better</h1>
      <p className="hidden md:block text-left my-3 md:my-6 md:w-[435px] text-xs md:text-sm lg:text-base text-white/80">
        We are dedicated to our mission of making Ethiopia Hunger Free by providing food and support to those in need.
        Our goal is to provide them with the support and resources they need to live healthier and happier lives.
      </p>
      <p className="block md:hidden text-left my-3 md:my-6 w-[225px] text-xs md:text-base text-white/80">
        We are dedicated to our mission of making Ethiopia Hunger Free by providing food and support to those in need.
      </p>
      <button disabled className="opacity-0 self-start text-brand-blue bg-brand-yellow rounded-full text-xs p-2 px-6 md:text-sm lg:text-xl md:p-2 md:px-4 lg:p-4 lg:px-10">Donate Now</button>
    </div>
  )
}

export default function Header() {
  const items = [
    <ChildOne />,
    <ChildTwo />,
    <ChildTwo />,
  ]

  const [indicatorSpace, setIndicatorSpace] = React.useState(5)

  const run = () => {
    if (window.innerWidth <= 425) {
      setIndicatorSpace(5)
    } else if (window.innerWidth <= 768) {
      setIndicatorSpace(3.5)
    } else {
      setIndicatorSpace(2.25)
    }
  }

  const getIndicatorStart = index => {
    const i = (index) - ((items.length - 1) / 2)

    return 50 + (i * indicatorSpace)
  }

  React.useEffect(() => {
    run()

    window.onresize = run
  }, [])

  return (
    <Carousel
      className="bg-blue-200/40 m-0"
      showStatus={false} autoPlay={false} infiniteLoop={true} swipeable={false} showThumbs={false}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center md:p-1 lg:p-3 z-20`}
            onClick={clickHandler}
          >
            <div className="flex items-center justify-center p-1 mr-4 bg-white/50 opacity-30 hover:opacity-100 rounded-full cursor-pointer transition-all">
              <FaCaretRight className="text-white text-xl md:text-3xl lg:text-5xl self-center relative left-[2px]" onClick={clickHandler} />
            </div>
          </div>
        )
      }}

      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center md:p-1 lg:p-3 z-20`}
            onClick={clickHandler}
          >
            <div className="flex items-center justify-center p-1 ml-4 bg-white/50 opacity-30 hover:opacity-100 rounded-full cursor-pointer transition-all">
              <FaCaretLeft className="text-white text-xl md:text-3xl lg:text-5xl self-center relative right-[2px]" onClick={clickHandler} />
            </div>
          </div>
        )
      }}

      renderIndicator={(clickHandler, isSelected, index) => {
        return (
          <div className={"absolute bottom-20 transition-all"} style={{
            left: `${getIndicatorStart(index)}%`,
            transform: `translateX(-${getIndicatorStart(index)}%)`
          }} onClick={clickHandler}>
            <FaCircle className={`text-[10px] md:text-sm lg:text-base text-white cursor-pointer hover:opacity-70 ${isSelected ? "opactiy-100" : "opacity-40"}`} />
          </div>
        )
      }}
    >
      {items.map((item, index) => (
        <Hero key={index} index={index + 1}>
          {item}
        </Hero>
      ))}
    </Carousel>
  );
}
