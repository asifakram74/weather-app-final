/** @format */

import React, { useEffect, useState } from "react";
import Temp from "./components/Home/Temp";
import Weather_info from "./components/Home/Weather_info";

const Config = () => {
	// get value from input
	const [search, setSearch] = useState("Lahore");
	// save search value on getval
	const [getval, setGetval] = useState("Lahore");
	const [city, setCity] = useState("");
	const [error, setError] = useState("");
	const [getDate, setGetdate] = useState("");

	const searchValue = (e) => {
		setSearch(e.target.value);
		// console.log(search);
	};

	const onSearch = () => {
		setGetval(search);
		console.log(getval);
	};

	const getData = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${getval}&APPID=b946c4fd34369ee6ee93080c9ac53218`,
			{
				method: "GET",
			},
		)
			.then((req) => req.json())
			.then(
				(result) => {
					// setIsLoaded(true);
					setCity(result);
					// console.log(result.timezone);
					setGetdate(new Date(result.dt * 1000 - result.timezone * 1000));

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
		const month = months[getDate.getMonth()];
		{
			console.log(month);
		}
		{
			console.log(getDate);
		}
		return (
			<>
				{console.log(month)}
				{console.log(getDate)}
			</>
		);
	};
	useEffect(() => {
		{
			getData();
		}
	}, []);

	return (
		<div>
			<div className="name container">
				<div className="row">
					<div className="col-12">
						<h1 className="pb-1 text-capitalize">
							Find current weather condition
						</h1>
						<div className="search">
							<input type="text" placeholder="Search" onChange={searchValue} />
							<button type="submit" className="search_btn" onClick={onSearch}>
								Search Weather
							</button>
							{/* {city} */}
						</div>
						<div className="d-flex p-5">
							<div className="col-6 weather-info pr-5">
								<h2>
									{city == "" ? getval : city.name},
									<span> {city == "" ? "PK" : city.sys.country}</span>
								</h2>
								<div className="date">
									<h5>Monday 01 March</h5>
									<h5>01:55pm</h5>
								</div>
								<div className="temp">
									<i className="fa fa-solid fa-sun"></i>
									<div className="centig">
										<h2>20°</h2>
										<p>Mostly Sunny</p>
									</div>
								</div>
							</div>
							<div className="col-6">
								<div className=" ">
									<div className="detail p-3">
										<Temp value="55" station="high" />
										<Temp value="55" station="high" />
										<Temp value="55" station="high" />

										<Temp value="55" station="high" />
										<Temp value="55" station="high" />
										<Temp value="55" station="high" />
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
