"use client";

import Heading from "@/components/layout/Heading";
import Spinner from "@/components/ui/Spinner";
import { getSearchResults } from "@/core/utils/indexedDB";
import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import Row from "./Row";

interface IWeatherHistory {
	query: string;
	result: IWeather;
	date: Date;
}

const SearchedWeather = () => {
	const [history, setHistory] = useState<IWeatherHistory[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadHistory = async () => {
			setIsLoading(true);
			const results = await getSearchResults();
			const sortedResults = results.sort(
				(a, b) =>
					new Date(b.date).getTime() - new Date(a.date).getTime(),
			);
			const fiveElements = sortedResults.slice(0, 5);
			setHistory(fiveElements);
			setIsLoading(false);
		};

		loadHistory();

		const broadcastChannel = new BroadcastChannel("weather-updates");
		broadcastChannel.onmessage = () => {
			loadHistory();
		};

		return () => {
			broadcastChannel.close();
		};
	}, []);

	return (
		<Card className="glass-bg min-h-[400px]">
			<Heading type={4}>History</Heading>
			{isLoading ? (
				<div className="flex h-32 items-center justify-center">
					<Spinner />
				</div>
			) : history.length > 0 ? (
				<ul className="list-none space-y-2">
					{history.map((item, index) => (
						<li key={index}>
							<Row result={item.result} />
						</li>
					))}
				</ul>
			) : (
				<p>No search history found</p>
			)}
		</Card>
	);
};

export default SearchedWeather;
