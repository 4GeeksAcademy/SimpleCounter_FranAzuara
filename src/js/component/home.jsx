import React from "react";
import SecondsCounter from "./SecondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter, counter2, counter3, counter4}) => {
	return (
		<div className="container text-center mt-4">
			<SecondsCounter counter= {counter} counter2={counter2} counter3={counter3} counter4={counter4}></SecondsCounter>
		</div>
	);
};

export default Home;
