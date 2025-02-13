import type { NextConfig } from "next";

const WEATHER_URL = process.env;

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	images: {
		domains: ["lh3.googleusercontent.com", "cdn.worldweatheronline.com"],
	},
	async rewrites() {
		return [
			{
				source: "/weather",
				destination: `http://localhost:4000/weather`,
			},
		];
	},
};

export default nextConfig;
