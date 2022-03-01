/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Not_found from "./pages/Not_found";
import About from "./pages/About";

const App = () => {
	return (
		<Routes>
			<Route path="*" element={<Not_found />} />
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
};

export default App;
