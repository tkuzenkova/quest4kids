// this interface contains the types for the tomorrow.io weather api
interface IWeatherTomorrowApi {
	data: {
		time: string;
		values: {
			temperature: number;
			weatherCode: number;
			uvIndex: number;
		};
	};
	location: {
		name: string;
	};
}

interface IWeather {
	time: string;
	temperature: number;
	weatherCode: number;
	uvIndex: number;
	city: string;
}
