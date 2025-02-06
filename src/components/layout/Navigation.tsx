import NavigationLink from "./NavigationLink";

interface NavigationProps {
	links: { href: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
	return (
		<nav className="flex items-center justify-start">
			{links.map((link, index) => (
				<NavigationLink key={index} href={link.href}>
					{link.label}
				</NavigationLink>
			))}
		</nav>
	);
};

export default Navigation;
