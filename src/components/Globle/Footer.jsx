/** @format */

import React from "react";

const Footer = () => {
	return (
		<footer className="footer-content ">
			<div className="layer footer">
				<div className="container-fluid p-4">
					<p className="copy-right-grids text-li text-center my-sm-4 my-4">
						© 2021 Weather App. All Rights Reserved | Design by
						<a href="http://asifakram.codes/"> Asif </a>
					</p>
					<div className="w3ls-footer text-center  my-sm-4 my-4">
						<ul className="list-unstyled w3ls-icons">
							<li>
								<a href="#">
									<span className="fa fa-facebook-f"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-twitter"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-dribbble"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-vk"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
