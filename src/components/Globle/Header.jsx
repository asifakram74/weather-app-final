/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/weather_logo.png";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="header d-lg-flex justify-content-between align-items-center">
					<div className="header-agile">
						<Link to="/" className="navbar-brand logo">
							<img src={Logo} alt="logo" />
						</Link>
					</div>
					<div className="nav_w3ls">
						<nav>
							<label htmlFor="drop" className="toggle mt-lg-0 mt-1">
								<span className="fa fa-bars" aria-hidden="true"></span>
							</label>
							<input type="checkbox" id="drop" />
							<ul className="menu">
								<li className="mr-lg-3 mr-2 active">
									<Link to="/">Home</Link>
								</li>
								<li className="mr-lg-3 mr-2">
									<Link to="/about">About </Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
