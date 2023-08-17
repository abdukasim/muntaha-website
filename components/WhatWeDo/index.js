'use client'
import Image from "next/image";

export default function WhatWeDo() {
	const items = [
		{
			title: "Food & Nutrition",
			icon: "/images/what_we_do/one.png",
		},
		{
			title: "Clean Water Projects",
			icon: "/images/what_we_do/two.png",
		},
		{
			title: "Emergency Support",
			icon: "/images/what_we_do/three.png",
		},
		{
			title: "Education",
			icon: "/images/what_we_do/four.png",
		},
		{
			title: "Health",
			icon: "/images/what_we_do/five.png",
		},
		{
			title: "Economic Empowerment",
			icon: "/images/what_we_do/six.png",
		},
		{
			title: "Vocational Training",
			icon: "/images/what_we_do/seven.png",
		},
	]

	return (
		<div className="what-we-do relative flex flex-col">

			<div className="absolute top-0 left-0 w-full h-full bg-brand-blue z-0 opacity-60"></div>

			<div className="top relative z-10 flex flex-col items-center justify-center p-16 mb-[550px]">
				<div className="image w-[100px] h-[100px]">
					<Image
						src="/images/white-gear.png"
						alt="What We Do"
						width={500}
						height={500}
						layout="responsive"
					/>
				</div>
				<div className="items flex flex-col items-center text-white">
					<h1 className="font-bold text-4xl my-8 mb-16 text-center">What We Do</h1>
					<p className="text-center text-sm text-white/80 leading-snug">
						These core tenets will guide how we seek to build authentic relationships with diverse partners and communities – including the local and national global nonprofit community; cultural, religious and business institutions; donors; peer funders and civic partners. Developed and adopted through collaborative dialogue among our board of trustees and staff, the following statements mutually reinforce and support each other. Taken together, they define how, why and where we aim to lead and partner.
					</p>
				</div>
			</div>


			<div className="bottom relative z-10 flex items-center justify-center bg-white">
				<div className="items bg-white mx-16 grid grid-rows-1 place-items-center gap-y-6 py-10 shadow-2xl rounded-2xl mt-[-500px] mb-[100px] w-full">
					{items.map((item, index) => (
						<div key={index} className="item flex flex-col items-center justify-center w-[140px] h-[140px] m-4 text-brand-blue">
							<div className="image w-[75px] h-[75px]">
								<Image
									src={item.icon}
									alt={item.title}
									width={500}
									height={500}
									layout="responsive"
								/>
							</div>
							<p className="title text-center mt-4 leading-[1.1]">{item.title}</p>
						</div>
					))}
				</div>
			</div>

		</div>
	)
}