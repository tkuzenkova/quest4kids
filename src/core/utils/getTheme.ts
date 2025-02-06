import { cookies } from "next/headers";
import { COOKIES } from "../consts";

export async function getTheme() {
	const cookieStore = await cookies();
	const cookieDarkMode = cookieStore.get(COOKIES.DARK_MODE);

	const isDarkMode: boolean = cookieDarkMode?.value === "true";

	return { isDarkMode };
}
