const Hero = ({ children, index }) => {
	return (
		<div id={"hero-" + index} className="hero flex h-[93vh] text-white items-end pb-40 p-8
			md:p-6 md:px-16 md:pb-44
      lg:p-10 lg:px-20 lg:pb-40
		">
			{children}
		</div>
	)
}

export default Hero