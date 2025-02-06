import Header from "@/components/layout/Header";
import { clsx } from "clsx";

export default async function Index(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<div className="flex h-screen">
			<aside className="w-full md:w-[340px]">
				<Header />
				<div className="p-4">{children}</div>
			</aside>

			<main
				className={clsx(
					"hidden flex-1 bg-amber-400 p-4 shadow-lg shadow-gray-400/50 md:block",
					"dark:bg-dark-800 dark:border-l dark:border-gray-600/50 dark:shadow-gray-600/50",
				)}
			>
				<p>Add content</p>
			</main>
		</div>
	);
}
