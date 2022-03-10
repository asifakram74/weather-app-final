/** @format */

import React from "react";
import Temp from "./Temp";

const Weather_info = (props) => {
	return (
		<div>
			<div className="name container">
				<div className="row">
					<div className="col-12">
						<h1 className="pb-2 text-capitalize">{props.title}</h1>
						<div className="search">{props.children}</div>
						{/* {error} */}
						<div className="  p-5">
							<div className="col-12 weather-info pr-5 col-sm-12 col-md-12 text-center">
								<h2>
									{props.city}

									<span> {props.country} </span>
								</h2>
								<div className="date">
									<h5>{props.date}</h5>
									<h5>{props.time} GMT+0500 (Pakistan Standard Time)</h5>
								</div>
								<div className=" ">
									<div className="centig">
										<img src={props.icon} alt={props.weather} />
										<h2>
											{props.temp}
											<span> °F</span>{" "}
										</h2>

										<p>{props.weather}</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-12 weather-info col-md-12 border-right-0">
								<div className=" ">
									<div className="detail p-3">
										<Temp value={props.pressure} station="pressure" />
										<Temp value={props.humidity} station="humidity" />
										<Temp value={props.temp_min} station="temp_min" />
										<Temp value={props.feels_like} station="feels_like" />
										<Temp value={props.Wind} station="Wind speed" />
										<Temp value={props.degree} station="Wind degree" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather_info;
