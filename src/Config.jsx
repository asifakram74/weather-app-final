/** @format */

import React, { useEffect, useState } from "react";
import Temp from "./components/Home/Temp";
import Weather_info from "./components/Home/Weather_info";
// import Icon from './assets/images/icons'
const Config = () => {
	// get value from input
	const [search, setSearch] = useState("Lahore");
	// save search value on getval
	const [getval, setGetval] = useState("Lahore");
	const [city, setCity] = useState("");
	const [error, setError] = useState("");
	const [getDate, setGetdate] = useState("");
	const [icon, setIcon] = useState("");
	const searchValue = (e) => {
		setSearch(e.target.value);
		// console.log(search);
	};

	const onSearch = () => {
		setGetval(search);
		// getData(search);
		console.log(getval);
	};

	const getData = (value) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${getval}&units=imperial&APPID=3d2da8da5e69f614cc32bece4b629445			`,
			{
				method: "GET",
			},
		)
			.then((req) => req.json())
			.then(
				(result) => {
					// setIsLoaded(true);
					setCity(result);
					console.log(result);
					setGetdate(new Date(result.dt * 1000 - result.timezone * 1000));
					const iconName = result.weather[0].icon; // this will hold the icon
					console.log(iconName);
					// const iconApi = await fetch(
					// 	"http://openweathermap.org/img/w/" + iconName + ".png",
					// );
					// setIcon(iconApi);
					// console.log(new Date(result.dt * 1000 - result.timezone * 1000)); // minus
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					// setIsLoaded(true);
					setError(error);
				},
			);
	};
	const DisDate = (e) => {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const monthP = () => getDate.getMonth();
		const year = () => getDate.getFullYear();
		const day = () => getDate.getDay();
		const hours = () => getDate.getHours();
		const minutes = () => getDate.getMinutes();

		{
			console.log(monthP);
		}
		{
			console.log(getDate);
		}
		// return (
		// 	<>
		// 		{console.log(monthP)}
		// 		{console.log(getDate)}
		// 	</>
		// );
	};
	useEffect(() => {
		{
			getData();
			DisDate();
		}
	}, []);

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
						</div>
						<div className="  p-5">
							<div className="col-12 weather-info pr-5 col-sm-12 col-md-12 text-center">
								<h2>
									{city == "" ? getval : city.name},
									<span> {city == "" ? "PK" : city.sys.country}</span>
								</h2>
								<div className="date">
									<h5>Monday 01 March</h5>
									<h5>01:55pm</h5>
								</div>
								<div className=" ">
									<i className="fa fa-solid fa-sun"></i>
									<div className="centig">
										{/* <img
											src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
											alt=""
										/> */}
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

						<p>{error}</p>
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
