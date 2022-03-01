/** @format */

import React from "react";
import Footer from "./Footer";
import Header from "./Header.jsx";

const Layout = (props) => {
	const mainClass = props.mainClass != null ? props.mainClass : "";
	return (
		<>
			<div className={`layout ${mainClass}`}>
				<Header />
				<div className="mian-layout"> {props.children}</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
