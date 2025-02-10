"use client";

import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export default function ThemeComponent() {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<p>
			Example of using the theme context:{" "}
			{isDarkMode ? "Dark Theme" : "Light Theme"}
		</p>
	);
}
