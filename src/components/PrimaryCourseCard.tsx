import React from "react";
import vueLogo from "../assets/vite.png";
import reactLogo from "../assets/react-logo.png"
import designLogo from "../assets/design.png"
import SecondaryCourseCard from "./SecondaryCourseCard";
import { ArrowRightIcon } from "@radix-ui/react-icons";
const PrimaryCourseCard = () => {
	return (
		<div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
			<div className="bg-dark-pink text-light-pink rounded-3xl p-6 shadow-md col-span-2 w-full m-2">
				<div className="flex items-center justify-end gap-2 mr-3 group text-sm font-semibold">
					View all Courses
					<ArrowRightIcon className="stroke-2 transition-transform duration-300 group-hover:translate-x-1" />
				</div>
				<div className="grid grid-cols-4 p-4 m-5">
					<img src={reactLogo} alt="Vue" className="w-24 h-24 -rotate-20 drop-shadow-md" />
					<img src={vueLogo} alt="Vue" className="w-26 h-26 drop-shadow-md" />
					<img src={vueLogo} alt="Vue" className="w-26 h-26" />
					<img src={designLogo} alt="Vue" className="w-20 h-20 drop-shadow-md" />
				</div>
				<div className="mx-8 flex items-center justify-center">
					<h2 className="text-9xl font-impact">
						23<span className="text-6xl align-top ml-1">+</span>
					</h2>
					<div className="ml-2">
						<p className="text-3xl font-bold mb-3">All courses</p>
						<p className="font-md text-md mr-8">
							courses you're powering through right now.
						</p>
					</div>
				</div>
			</div>
			<SecondaryCourseCard
				count={5}
				main={`Upcoming\nCourses`}
				subtitle={`exciting new courses
						\nwaiting to boost your skills.`}
			/>
			<SecondaryCourseCard
				count={10}
				main={`Ongoing\nCourses`}
				subtitle={`currently happening - don't
						\n missout on the action!`}
			/>
		</div>
	);
};

export default PrimaryCourseCard;
