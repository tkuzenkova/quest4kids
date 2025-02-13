"use client";

import { WeatherContext } from "@/components/providers/WeatherProvider";
import { useContext } from "react";
import Card from "../../ui/Card";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";

const WeatherCard = () => {
	const { weather } = useContext(WeatherContext);

	return (
		<Card className="glass-bg min-h-[400px]">
			<SearchForm />
			{weather ? <WeatherInfo weather={weather} /> : null}
		</Card>
	);
};

export default WeatherCard;
