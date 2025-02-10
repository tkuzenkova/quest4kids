import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { getTheme } from "@/core/utils/getTheme";
import Image from "next/image";

type NavigationProps = {
	children?: React.ReactNode;
};
export default async function Header({ children }: NavigationProps) {
	const { isDarkMode } = await getTheme();

	return (
		<header className="bg-primary border-primary-dark dark:bg-dark-800 z-30 flex w-full items-center justify-between border-b px-4 py-2 dark:border-gray-700">
			<Image src="/logo.svg" alt="Quest4Kids" width={170} height={50} />
			{children}
			<div className="flex items-center gap-4">
				<ThemeSwitcher isDarkMode={isDarkMode} />
			</div>
		</header>
	);
}
