/** @format */

import React from "react";

const Temp = (props) => {
	return (
		<div className="temp p-1">
			<h5>{props.value}</h5>
			<p>{props.station}</p>
		</div>
	);
};

export default Temp;
