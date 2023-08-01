const Hero = ({ children, index }) => {
	return (
		<div id={"hero-" + index} className="hero flex h-[90vh] text-white items-end pb-20 p-8
			md:p-6 md:px-12 md:pb-20
      lg:p-10 lg:px-16 lg:pb-32
		">
			{children}
		</div>
	)
}

export default Hero