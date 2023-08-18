export default function ContactUs() {
	return (
		<section className="contact-us grid grid-cols-1 md:grid-cols-2 md:gap-x-12 py-4 md:py-8 px-16 md:px-36 text-brand-blue">

			<div className="left flex flex-col mb-12">
				<h2 className="font-bold text-4xl md:text-7xl md:mb-8">Contact Us</h2>
				<p className="text-sm my-8 md:text-base md:max-w-[500px]">
					Need to get in touch with us? Fill out the form with your inquiry or call us on the number provided below.
				</p>

				<p className="uppercase text-xs md:text-sm mb-2 font-thin">Phone - +251 11 812 5224</p>
				<p className="uppercase text-xs md:text-sm mb-2 font-thin">Email - MUNTAHAFOUNDATION@GMAIL.COM</p>
				<p className="uppercase text-xs md:text-sm mb-2 font-thin">ADDRESS - TERO. TRAFFIC SEFER</p>
			</div>


			<div className="right grid grid-cols-1 gap-y-4 mb-8 md:max-w-[700px]">

				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-4">
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="Last Name" />
				</div>
				<input type="email" placeholder="Email Address" />

				<textarea placeholder="Write Your Message"></textarea>
				<div className="flex">
				<button className="p-4 px-8 text-center text-white bg-brand-blue rounded-full mt-8 md:mt-4 w-full md:max-w-[300px]">Subscribe</button>
				</div>
			</div>

		</section>
	)
}