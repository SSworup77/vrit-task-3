import React, { type FC } from "react";

interface SecondaryCourseCardProps {
	count: number;
	main: string;
	subtitle: string;
}
const SecondaryCourseCard: FC<SecondaryCourseCardProps> = ({
	count,
	main,
	subtitle,
}) => {
	return (
		<div className="m-2 bg-light-pink rounded-3xl h-100 w-full max-w-xs py-8 px-1">
			<div className="text-dark-pink transform origin-left flex flex-col items-center justify-between">
				<div className="m-2 mb-6 -rotate-90 text-wrap p-8">
					<p className="text-2xl font-extrabold mb-2">{main}</p>
					<p className="font-semibold text-sm">{subtitle}</p>
				</div>
				<div className="relative left-5 bottom-1">
					<h1 className="font-impact text-9xl text-dark-pink leading-none">
						{count.toString().padStart(2, "0")}
						<span className="text-6xl align-top ml-1">+</span>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default SecondaryCourseCard;
