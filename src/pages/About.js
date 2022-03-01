/** @format */

import React from "react";

const About = () => {
	return (
		<section className="content-info py-5" id="about">
			<div className="container py-md-5">
				<h3 className="heading text-center mb-3 mb-sm-5">About us</h3>

				<div className="info-w3pvt-mid text-center px-lg-5">
					<div className="title-desc text-center px-lg-5">
						<img
							src="assets/images/about1.png"
							alt="news image"
							className="img-fluid"
						/>
						<p className="px-lg-5">
							Praesent ullamcorper dui turpis.At vero eos et accusam et justo
							duo dolores et ea rebum.Integer sit amet mattis quam, sit amet
							ultricies velit. Praesent ullamcorper dui turpis. Praesent
							ullamcorper dui turpis.At vero eos et accusam et justo duo dolores
							et ea rebum.Integer sit amet mattis quam, sit amet ultricies
							velit. Praesent ullamcorper dui turpis.
						</p>
						<a
							className="btn mt-lg-4 mt-3 read scroll"
							href="#services"
							role="button">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
