import clsx from "clsx";
import Link, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

interface LinkProps extends NextLinkProps {
	children: React.ReactNode;
	className?: string;
	href: string;
}

const LinkComponent: React.FC<LinkProps> = ({
	children,
	className,
	href,
	...props
}) => {
	return (
		<Link
			href={href}
			className={clsx(
				"text-primary underline dark:text-amber-50",
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	);
};

export default LinkComponent;
