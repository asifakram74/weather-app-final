/** @format */

import React from "react";

const Weather_info = (props) => {
	return (
		<div className="name container">
			<div className="search">
				<input type="search" placeholder="Search" />
				<button type="submit" className="search_btn">
					Search Weather
				</button>
			</div>
			<p className="c-name">Lahore,Pakistan</p>
			<i className="fa fa-solid fa-cloud" aria-hidden="true"></i>
			<h3>Cloudy</h3>
			<h4>Sunday</h4>
			<p className="degree">
				20°<span>C</span>
			</p>
		</div>
	);
};

export default Weather_info;
