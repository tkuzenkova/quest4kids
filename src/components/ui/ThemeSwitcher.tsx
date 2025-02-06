"use client";

import { COOKIES } from "@/core/consts/cookies";
import { removeCookie, setCookie } from "@/core/utils/cookies";
import { Button } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ThemeSwitcher = ({ isDarkMode = false }: { isDarkMode: boolean }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(isDarkMode);

	useEffect(() => {
		if (isDarkTheme) {
			document.documentElement.classList.add("dark");
			setCookie(COOKIES.DARK_MODE, isDarkTheme.toString());
		} else {
			document.documentElement.classList.remove("dark");
			removeCookie(COOKIES.DARK_MODE);
		}
	}, [isDarkTheme]);

	return (
		<Button
			aria-label="Toggle dark mode"
			className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
			onClick={() => setIsDarkTheme(!isDarkTheme)}
		>
			{isDarkTheme ? (
				<SunIcon className="size-6" />
			) : (
				<MoonIcon className="size-6" />
			)}
		</Button>
	);
};

export default ThemeSwitcher;
