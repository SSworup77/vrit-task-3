import React from "react";
import SecondaryCourseCard from "./components/SecondaryCourseCard";
import PrimaryCourseCard from "./components/PrimaryCourseCard";
import HeaderSection from "./components/HeaderSection";

const App = () => {
	return (
		<div className="max-h-screen mt-8">
			<HeaderSection />
			<PrimaryCourseCard />
		</div>
	);
};

export default App;
