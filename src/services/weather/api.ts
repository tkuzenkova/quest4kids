import { axiosInstance } from "../_common/axiosInstance";
import { API_PATH } from "../_common/consts";

// Get Current Weather by City
export async function getCurrentWeather(): Promise<IPost[]> {
	const res = await axiosInstance.get(API_PATH.POSTS);
	return res.data;
}
