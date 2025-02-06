"use client";

import { Button as HeadlessuiButton } from "@headlessui/react";
import Link from "next/link";
import { ReactNode } from "react";

// TODO: Add variants for different button sizes and colors
type ButtonProps = {
	children: ReactNode;
	onClick?: () => void;
	ariaLabel?: string;
	className?: string;
	type?: "button" | "submit" | "reset";
	href?: string;
};

const Button = ({
	children,
	onClick,
	ariaLabel,
	className = "",
	type = "button",
	href,
}: ButtonProps) => {
	return href ? (
		<Link
			aria-label={ariaLabel}
			className={`inline-flex cursor-pointer items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 hover:bg-gray-600 focus:outline-none focus:outline-1 focus:outline-white data-[open]:bg-gray-700 ${className}`}
			href={href}
		>
			{children}
		</Link>
	) : (
		<HeadlessuiButton
			aria-label={ariaLabel}
			className={`inline-flex cursor-pointer items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${className}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</HeadlessuiButton>
	);
};

export default Button;
