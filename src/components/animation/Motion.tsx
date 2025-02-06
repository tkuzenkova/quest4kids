"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

type MotionProps = {
	children: React.ReactNode;
	animation: Variants;
	whileHover?: string;
};

const Motion: React.FC<MotionProps> = ({ children, animation, whileHover }) => {
	return (
		<motion.div variants={animation} whileHover={whileHover}>
			{children}
		</motion.div>
	);
};

export default Motion;
