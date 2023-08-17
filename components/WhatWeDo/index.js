'use client'
import Gear from "../svgComponents/gear2"
import FoodAndNutrition from "../svgComponents/food_n_nutrition"
import CleanWaterProjects from "../svgComponents/clean_water_projects"
import EmergencySupport from "../svgComponents/emergency_support"
import Education from "../svgComponents/education"
import Health from "../svgComponents/health"
import EconomicEmpowerment from "../svgComponents/economic_empowerment"
import VocationalTraining from "../svgComponents/vocational_training"


export default function WhatWeDo() {
	const items = [
		{
			title: "Food & Nutrition",
			icon: <FoodAndNutrition />
		},
		{
			title: "Clean Water Projects",
			icon: <CleanWaterProjects />
		},
		{
			title: "Emergency Support",
			icon: <EmergencySupport />
		},
		{
			title: "Education",
			icon: <Education />
		},
		{
			title: "Health",
			icon: <Health />
		},
		{
			title: "Economic Empowerment",
			icon: <EconomicEmpowerment />
		},
		{
			title: "Vocational Training",
			icon: <VocationalTraining />
		},
	]

	return (
		<div className="what-we-do relative flex flex-col md:mb-20">

			<div className="absolute top-0 left-0 w-full h-full bg-brand-blue z-0 opacity-60"></div>

			<div className="
			top relative z-10
			flex flex-col items-center justify-center p-16 mb-[550px]
			md:bg-white md:flex-row md:justify-start md:items-start md:p-0 md:mb-0 md:px-20 lg:px-32 md:py-28 md:pb-36
			">
				<div className="flex items-center image w-[100px] h-[100px] md:min-w-[170px] md:h-[150px] lg:min-w-[200px] lg:h-[200px] md:mx-4 lg:mx-32">
					<Gear />
				</div>
				<div className="items flex flex-col md:items-start items-center text-white md:text-brand-blue max-w-[900px]">
					<h1 className="font-bold text-4xl my-8 md:my-0 mb-16 md:mb-10 lg:mb-12 text-center lg:text-[44px]">What We Do</h1>
					<p className="text-center text-sm text-white/80 md:text-brand-blue font-thin leading-snug lg:text-base md:text-left">
						These core tenets will guide how we seek to build authentic relationships with diverse partners and communities, including the local and national global nonprofit community; cultural, religious and business institutions; donors; peer funders and civic partners. Developed and adopted through collaborative dialogue among our board of trustees and staff, the following statements mutually reinforce and support each other. Taken together, they define how, why and where we aim to lead and partner.
					</p>
				</div>
			</div>


			<div className="bottom relative z-10 flex items-center justify-center bg-white md:bg-brand-blue md:py-32 md:pb-36">
				<div className="
				items
				bg-white md:bg-brand-blue mx-16 grid grid-rows-1 place-items-center gap-y-6 py-10 shadow-2xl rounded-2xl mt-[-500px] mb-[100px] w-full
				md:flex md:justify-around md:flex-wrap md:p-0 md:shadow-none md:rounded-none md:m-0 md:px-16
				">
					{items.map((item, index) => (
						<div key={index} className="item flex flex-col items-center justify-center m-4 md:mx-10 text-brand-blue md:text-white">
							<div className="flex items-center justify-center w-[75px] h-[75px] md:w-[100px] md:h-[100px]">
								{item.icon}
							</div>
							<p className="title text-center mt-2 md:mt-6 w-[100px] leading-[1.1]">{item.title}</p>
						</div>
					))}
				</div>
			</div>

		</div>
	)
}