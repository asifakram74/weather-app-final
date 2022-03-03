/** @format */

import React, { useEffect, useState } from "react";
import Temp from "./components/Home/Temp";
import Weather_info from "./components/Home/Weather_info";
import Icon from "./assets/images/icons/01d.png";
const Config = () => {
	// get value from input
	const [search, setSearch] = useState("");
	// save search value
	const [getval, setGetval] = useState("Lahore");
	// save value from api
	const [city, setCity] = useState("");
	//  Api error
	const [apierror, setApiError] = useState("");
	// get Date  from api
	const [getDate, setGetdate] = useState("");
	// get Time  from api
	const [getTime, setGetTime] = useState("");
	// get value from input
	const searchValue = (e) => {
		setSearch(e.target.value);
	};
	// save search value
	const onSearch = () => {
		setGetval(search);
	};

	const getData = () => {
		return fetch(
			`${process.env.REACT_APP_API_URL}/weather?q=${getval}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`,
			{
				method: "GET",
			},
		)
			.then((req) => req.json())
			.then(
				(result) => {
					setCity(result);

					var options = {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					};
					const fetechdate = new Date(
						result.dt * 1000 - result.timezone * 1000,
					);
					console.log(fetechdate);
					setGetdate(fetechdate.toLocaleDateString("en-US", options));
					setGetTime(
						fetechdate.toLocaleString("en-US", {
							hour: "numeric",
							minute: "numeric",
							hour12: true,
						}),
					);
					console.log(
						fetechdate.toLocaleString("en-US", {
							hour: "numeric",
							minute: "numeric",
							hour12: true,
						}),
					);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					// setIsLoaded(true);
					setApiError(error);
				},
			);
	};

	useEffect(() => {
		getData();
		// DisDate();
	}, [getval]);
	// console.log(getDate);
	return (
		<div>
			<div className="name container">
				<div className="row">
					<div className="col-12">
						<h1 className="pb-2 text-capitalize">
							Find current weather condition
						</h1>
						<div className="search">
							<input type="text" placeholder="Search" onChange={searchValue} />
							<button type="submit" className="search_btn" onClick={onSearch}>
								Search Weather
							</button>
							{/* {city} */}
							{/* {getDate} */}
						</div>
						{/* {error} */}
						<div className="  p-5">
							<div className="col-12 weather-info pr-5 col-sm-12 col-md-12 text-center">
								<h2>
									{apierror}
									{city.name},
									<span> {city == "" ? "PK" : city.sys.country}</span>
								</h2>
								<div className="date">
									<h5>{getDate}</h5>
									<h5>{getTime}</h5>
								</div>
								<div className=" ">
									<i className="fa fa-solid fa-sun"></i>
									<div className="centig">
										<img
											src={
												city == ""
													? { Icon }
													: `http://openweathermap.org/img/w/${city.weather[0].icon}.png`
											}
											alt=""
										/>
										{/* <img src={icon} alt="" /> */}
										<h2>
											{city == "" ? getval : city.main.temp}
											<span> °F</span>{" "}
										</h2>

										<p>{city == "" ? getval : city.weather[0].main}</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-12 weather-info col-md-12 border-right-0">
								<div className=" ">
									<div className="detail p-3">
										<Temp
											value={city == "" ? getval : city.main.pressure}
											station="pressure"
										/>
										<Temp
											value={city == "" ? getval : city.main.humidity}
											station="humidity"
										/>
										<Temp
											value={city == "" ? getval : city.main.temp_min}
											station="temp_min"
										/>

										<Temp
											value={city == "" ? getval : city.main.feels_like}
											station="feels_like"
										/>

										<Temp
											value={city == "" ? getval : city.wind.speed}
											station="Wind speed"
										/>
										<Temp
											value={city == "" ? getval : city.wind.deg}
											station="Wind degree"
										/>
									</div>
								</div>
							</div>
						</div>

						<i className="fa fa-solid fa-cloud" aria-hidden="true"></i>

						{/* <p>{error}</p> */}
					</div>
				</div>

				{/* <p>{date}</p> */}
				{/* <p className="c-name">
					{city == "" ? getval : city.name},
					<span> {city == "" ? "PK" : city.sys.country}</span>
				</p> */}
			</div>
		</div>
	);
};

export default Config;
