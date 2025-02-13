import Header from "@/components/layout/Header";
import WeatherProvider from "@/components/providers/WeatherProvider";
import WeatherPage from "@/components/sections/weather/WeatherPage";
import ThemeComponent from "@/components/ui/ThemeComponent";
import { getCurrentWeather } from "@/core/services/weather/actions";

import { clsx } from "clsx";

interface Props {
	children: React.ReactNode;
}

export default async function Index({ children }: Props) {
	const { data: weather, error: weatherError } = await getCurrentWeather();

	return (
		<div className="flex h-screen">
			<aside
				className={clsx(
					"w-full md:w-[340px]",
					"dark:bg-radial-[at_20%_-75%] from-[#381244] via-[#232853] to-[#090b1c] to-90%",
				)}
			>
				<Header />
				<div className="p-4">{children}</div>
			</aside>

			<main
				className={clsx(
					"hidden flex-1 overflow-y-auto bg-amber-400 p-4 shadow-lg shadow-gray-400/50 md:block",
					"bg-radial-[at_0%_0%] from-amber-200 from-40% to-amber-400",
					"dark:bg-dark-800 dark:border-l dark:border-gray-600/50 dark:bg-none dark:shadow-gray-600/50",
				)}
			>
				<ThemeComponent />
				{weather ? (
					<WeatherProvider initialWeather={weather}>
						<WeatherPage />
					</WeatherProvider>
				) : (
					weatherError
				)}
			</main>
		</div>
	);
}
