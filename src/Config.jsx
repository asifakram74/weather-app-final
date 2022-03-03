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
		<>
			<Weather_info
				title="Find current weather condition"
				city={city.name}
				country={city == "" ? "PK" : city.sys.country}
				date={getDate}
				time={getTime}
				icon={
					city == ""
						? { Icon }
						: `http://openweathermap.org/img/w/${city.weather[0].icon}.png`
				}
				weather={city == "" ? getval : city.weather[0].main}
				temp={city == "" ? getval : city.main.temp}
				pressure={city == "" ? getval : city.main.pressure}
				temp_min={city == "" ? getval : city.main.temp_min}
				humidity={city == "" ? getval : city.main.humidity}
				feels_like={city == "" ? getval : city.main.feels_like}
				Wind={city == "" ? getval : city.wind.speed}
				degree={city == "" ? getval : city.wind.deg}>
				<input type="text" placeholder="Search" onChange={searchValue} />
				<button type="submit" className="search_btn" onClick={onSearch}>
					Search Weather
				</button>
			</Weather_info>
		</>
	);
};

export default Config;
